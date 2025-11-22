import { create } from "zustand";
import { processDocument, processText } from "./api";
import {
  generateEmbeddings,
  generateResponse,
  generateTitle,
  GEMINI_PRO,
  GEMINI_FLASH,
  CODE_AGENT_PROMPT,
  DOCUMENT_AGENT_PROMPT,
  SUGGESTION_AGENT_PROMPT,
} from "./services/geminiService";
import { Document, Message, AgentType, Conversation } from "./types";
import { cosineSimilarity } from "./utils";
import { initialKnowledgeText } from "./initialKnowledge";
import { taxReformKnowledgeText } from "./taxReformKnowledge";
import { supabase } from "./services/supabaseClient";
import { Session, User, AuthError } from "@supabase/supabase-js";

const PRO_TOKEN_LIMIT = 32768; // Token limit for Gemini 2.5 Pro
const MAX_CONTEXT_CHUNKS = 5;
const PRO_TOKEN_THRESHOLD = 0.7; // Switch to flash at 70% usage
const CONVERSATION_CONTEXT_MESSAGES = 4; // Number of recent messages to use as context

const agentAliases: { [key: string]: AgentType } = {
  web: "document",
  codigo: "code",
  sugestao: "suggestion",
};

// Escapa as aspas simples para uso dentro de uma string SQL.
const initialKnowledgeTextEscaped = initialKnowledgeText.replace(/'/g, "''");
const taxReformKnowledgeTextEscaped = taxReformKnowledgeText.replace(
  /'/g,
  "''"
);

/**
 * Script SQL para configurar as tabelas necessárias no Supabase com suporte multi-usuário (RLS).
 * É seguro executar este script várias vezes.
 */
const SETUP_SQL_SCRIPT = `-- Habilita a extensão uuid-ossp se ainda não estiver habilitada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA extensions;

-- Tabela de perfis de usuário
CREATE TABLE IF NOT EXISTS public.user_profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  user_type TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Os usuários podem gerenciar seu próprio perfil." ON public.user_profiles;
CREATE POLICY "Os usuários podem gerenciar seu próprio perfil."
ON public.user_profiles FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);


-- Tabela de documentos
CREATE TABLE IF NOT EXISTS public.documents (
  id UUID PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE, -- user_id é nulo para documentos públicos
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  is_deletable BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
-- Adiciona um índice único para nomes de documentos públicos para o ON CONFLICT funcionar de forma confiável.
CREATE UNIQUE INDEX IF NOT EXISTS documents_public_name_key ON public.documents (name) WHERE (user_id IS NULL);
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
-- Política SELECT: permite ver documentos próprios ou públicos (user_id IS NULL)
DROP POLICY IF EXISTS "Usuários podem visualizar documentos públicos e os seus próprios." ON public.documents;
CREATE POLICY "Usuários podem visualizar documentos públicos e os seus próprios."
ON public.documents FOR SELECT
USING (user_id IS NULL OR user_id = auth.uid());
-- Política INSERT: só pode criar documentos para si mesmo
DROP POLICY IF EXISTS "Usuários podem criar seus próprios documentos." ON public.documents;
CREATE POLICY "Usuários podem criar seus próprios documentos."
ON public.documents FOR INSERT
WITH CHECK (user_id = auth.uid());
-- Política UPDATE: só pode modificar seus próprios documentos
DROP POLICY IF EXISTS "Usuários podem modificar seus próprios documentos." ON public.documents;
CREATE POLICY "Usuários podem modificar seus próprios documentos."
ON public.documents FOR UPDATE
USING (user_id = auth.uid() AND is_deletable = TRUE)
WITH CHECK (user_id = auth.uid());
-- Política DELETE: só pode excluir seus próprios documentos
DROP POLICY IF EXISTS "Usuários podem excluir seus próprios documentos." ON public.documents;
CREATE POLICY "Usuários podem excluir seus próprios documentos."
ON public.documents FOR DELETE
USING (user_id = auth.uid() AND is_deletable = TRUE);


-- Tabela de conversas
CREATE TABLE IF NOT EXISTS public.conversations (
  id UUID PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  agent_type TEXT NOT NULL CHECK (agent_type IN ('document', 'code', 'suggestion')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.conversations ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE public.conversations DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança para conversas
DROP POLICY IF EXISTS "Usuários podem visualizar suas próprias conversas ou órfãs." ON public.conversations;
CREATE POLICY "Usuários podem visualizar suas próprias conversas ou órfãs."
ON public.conversations FOR SELECT
USING (user_id = auth.uid() OR user_id IS NULL);

DROP POLICY IF EXISTS "Usuários podem criar conversas para si mesmos." ON public.conversations;
CREATE POLICY "Usuários podem criar conversas para si mesmos."
ON public.conversations FOR INSERT
WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS "Usuários podem atualizar suas próprias conversas ou reivindicar órfãs." ON public.conversations;
CREATE POLICY "Usuários podem atualizar suas próprias conversas ou reivindicar órfãs."
ON public.conversations FOR UPDATE
USING (user_id = auth.uid() OR user_id IS NULL)
WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS "Usuários podem excluir suas próprias conversas ou órfãs." ON public.conversations;
CREATE POLICY "Usuários podem excluir suas próprias conversas ou órfãs."
ON public.conversations FOR DELETE
USING (user_id = auth.uid() OR user_id IS NULL);


-- Tabela de mensagens
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  sender TEXT NOT NULL CHECK (sender IN ('user', 'bot')),
  text TEXT NOT NULL,
  sources JSONB,
  feedback TEXT CHECK (feedback IN ('good', 'bad')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

/*
 * **REVISÃO PROFUNDA E CORREÇÃO DEFINITIVA DA POLÍTICA DE MENSAGENS**
 * A causa raiz do problema de exclusão é que a política de mensagens verificava a posse
 * da *mensagem* individual. Isso falhava durante uma exclusão em cascata se alguma
 * mensagem legada tivesse um 'user_id' inconsistente.
 * A nova política resolve isso vinculando a permissão para modificar uma mensagem
 * à posse da *conversa* pai. Se um usuário pode excluir a conversa, ele
 * implicitamente pode excluir todas as mensagens contidas nela. Isso garante
 * que a exclusão em cascata funcione corretamente em todos os casos.
 */
DROP POLICY IF EXISTS "Usuários podem gerenciar suas mensagens próprias ou órfãs." ON public.messages;
DROP POLICY IF EXISTS "Usuários gerenciam mensagens baseadas na posse da conversa." ON public.messages;
CREATE POLICY "Usuários gerenciam mensagens baseadas na posse da conversa."
ON public.messages FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.conversations
    WHERE id = messages.conversation_id AND (user_id = auth.uid() OR user_id IS NULL)
  )
)
WITH CHECK (
  -- A verificação (WITH CHECK) para novas inserções/atualizações garante que o usuário
  -- que está agindo seja o dono da mensagem E da conversa, mantendo a integridade.
  user_id = auth.uid() AND
  EXISTS (
    SELECT 1 FROM public.conversations
    WHERE id = messages.conversation_id AND user_id = auth.uid()
  )
);


-- Índices para otimizar buscas
CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON public.messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_messages_user_id ON public.messages(user_id);
CREATE INDEX IF NOT EXISTS idx_conversations_updated_at ON public.conversations(updated_at DESC);


-- SEED DE DADOS: Insere os documentos da base de conhecimento inicial.
-- É seguro rodar isso várias vezes por causa do "ON CONFLICT".
-- A execução deste script no painel do Supabase ignora a RLS, permitindo a inserção de documentos públicos (user_id = NULL).
INSERT INTO public.documents (name, content, is_deletable, user_id) VALUES
('Conhecimento - Agente.txt', '${initialKnowledgeTextEscaped}', false, NULL),
('Conhecimento - Reforma.txt', '${taxReformKnowledgeTextEscaped}', false, NULL)
ON CONFLICT (name) WHERE (user_id IS NULL) DO NOTHING;


-- Comentários para clareza
COMMENT ON COLUMN public.documents.user_id IS 'Chave estrangeira para o usuário que enviou o documento. NULO para documentos da base de conhecimento global.';
COMMENT ON COLUMN public.conversations.user_id IS 'Chave estrangeira para o usuário dono da conversa.';
COMMENT ON COLUMN public.messages.user_id IS 'Chave estrangeira para o usuário que criou a mensagem.';
COMMENT ON POLICY "Usuários gerenciam mensagens baseadas na posse da conversa." ON public.messages IS 'Permite operações em mensagens se o usuário possuir a conversa pai.';
`;

/**
 * Gera uma mensagem de erro de configuração do banco de dados com o script SQL.
 * @param issue A descrição do problema detectado (ex: "tabela 'profiles' ausente").
 * @returns Uma string formatada com instruções e o script SQL.
 */
const generateSetupErrorMessage = (
  issue: string
) => `ERRO DE CONFIGURAÇÃO DO BANCO DE DADOS

Foi detectado um problema com a estrutura do seu banco de dados: **${issue}**.

Isso geralmente significa que as tabelas ou políticas de segurança (Row Level Security) necessárias para separar os dados por usuário estão ausentes ou incorretas.

SOLUÇÃO:
1. Vá para o seu projeto em supabase.com.
2. No menu à esquerda, clique no ícone de "SQL Editor".
3. Clique em "+ New query".
4. Cole o script SQL abaixo e clique em "RUN". Este script é seguro para ser executado várias vezes e irá criar ou corrigir as tabelas, políticas de segurança e dados iniciais.

--- SCRIPT SQL PARA COPIAR ---
${SETUP_SQL_SCRIPT}
---------------------------------`;

/**
 * Helper to safely extract a detailed error message from a caught value.
 * This function prioritizes the .message property from Error objects and formats Supabase errors.
 * @param error The value caught in a catch block.
 * @returns A formatted string representing the error message.
 */
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "object" && error !== null) {
    const errObj = error as {
      message?: string;
      details?: string;
      hint?: string;
      code?: string;
    };
    let fullMessage = errObj.message || "Ocorreu um erro desconhecido.";
    if (errObj.details) fullMessage += `\nDetalhes: ${errObj.details}`;
    if (errObj.hint) fullMessage += `\nHINT: ${errObj.hint}`;
    if (errObj.code) fullMessage += ` (Código: ${errObj.code})`;
    return fullMessage;
  }
  try {
    const stringified = JSON.stringify(error);
    return stringified === "{}" ? String(error) : stringified;
  } catch {
    return String(error);
  }
}

interface DocumentState {
  documents: Document[];
  isLoading: boolean;
  error: string | null;
  addDocument: (file: File) => Promise<void>;
  deleteDocument: (id: string) => Promise<void>;
  renameDocument: (id: string, newName: string) => Promise<void>;
  loadInitialDocuments: () => Promise<void>;
}

export const useDocumentStore = create<DocumentState>((set, get) => ({
  documents: [],
  isLoading: false,
  error: null,
  loadInitialDocuments: async () => {
    if (get().isLoading) return;
    set({ isLoading: true, error: null });

    try {
      // A RLS irá filtrar para mostrar os documentos do usuário e os documentos públicos.
      // Os documentos públicos iniciais agora são criados pelo SETUP_SQL_SCRIPT.
      const { data: dbDocs, error: fetchError } = await supabase
        .from("documents")
        .select("*");

      if (fetchError) throw fetchError;

      const processedDocs: Document[] = [];
      for (const dbDoc of dbDocs) {
        const processed = await processText(
          dbDoc.content,
          dbDoc.name,
          dbDoc.is_deletable
        );
        processed.id = dbDoc.id; // Manter o ID original do banco de dados
        processed.content = dbDoc.content; // Adicionar o conteúdo completo
        processedDocs.push(processed);
      }

      set({ documents: processedDocs });
    } catch (e: unknown) {
      const detail = getErrorMessage(e);
      let errorMessage = `Erro detalhado ao carregar documentos:\n${detail}`;
      const isSetupError =
        typeof detail === "string" &&
        (detail.includes("relation") ||
          detail.includes("does not exist") ||
          detail.includes("violates row-level security policy"));

      if (isSetupError) {
        errorMessage = generateSetupErrorMessage(
          "A política de segurança (RLS) para `documents` pode estar ausente ou incorreta."
        );
      }

      set({ error: errorMessage });
      console.error("Erro detalhado ao carregar documentos:", e);
    } finally {
      set({ isLoading: false });
    }
  },
  addDocument: async (file) => {
    set({ isLoading: true, error: null });
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser(); // Get current user
      if (!user)
        throw new Error("Usuário não autenticado para adicionar documento.");

      const newDocument = await processDocument(file);
      if (newDocument.chunks.length === 0) {
        throw new Error("O documento está vazio ou não pôde ser processado.");
      }

      const documentContent =
        newDocument.content || newDocument.chunks.map((c) => c.text).join("");

      const { data, error } = await supabase
        .from("documents")
        .insert({
          name: newDocument.name,
          content: documentContent,
          is_deletable: true,
          user_id: user.id, // Associa o documento ao usuário atual
        })
        .select()
        .single();

      if (error) throw error;

      // Atualiza o documento em memória com o ID confirmado do banco de dados
      newDocument.id = data.id;

      set((state) => ({ documents: [...state.documents, newDocument] }));
    } catch (e: unknown) {
      const detail = getErrorMessage(e);
      set({ error: `Erro ao adicionar documento: ${detail}` });
      console.error("Error adding document:", e);
    } finally {
      set({ isLoading: false });
    }
  },
  deleteDocument: async (id) => {
    // A política RLS garante que o usuário só pode deletar seus próprios documentos.
    const { error } = await supabase.from("documents").delete().match({ id });
    if (error) {
      const detail = getErrorMessage(error);
      console.error("Error deleting document:", detail);
      set({ error: detail });
      return;
    }
    set((state) => ({
      documents: state.documents.filter((doc) => doc.id !== id),
    }));
  },
  renameDocument: async (id, newName) => {
    // A política RLS garante que o usuário só pode renomear seus próprios documentos.
    const { error } = await supabase
      .from("documents")
      .update({ name: newName })
      .match({ id });
    if (error) {
      const detail = getErrorMessage(error);
      console.error("Error renaming document:", detail);
      set({ error: detail });
      return;
    }
    set((state) => ({
      documents: state.documents.map((doc) =>
        doc.id === id ? { ...doc, name: newName } : doc
      ),
    }));
  },
}));

// Helper to create a new conversation object
const createNewConversation = (title = "Nova Conversa"): Conversation => ({
  id: crypto.randomUUID(),
  title,
  messages: [],
  createdAt: Date.now(),
  updatedAt: Date.now(),
});

interface ChatState {
  documentConversations: Record<string, Conversation>;
  codeConversations: Record<string, Conversation>;
  suggestionConversations: Record<string, Conversation>;
  activeDocumentConversationId: string | null;
  activeCodeConversationId: string | null;
  activeSuggestionConversationId: string | null;
  isLoading: boolean;
  activeAgent: AgentType;
  activeModel: string;
  proTokenCount: number;
  proTokenLimit: number;
  // Auth state
  session: Session | null;
  user: User | null;
  authLoading: boolean;
  authError: AuthError | null;
  authMessage: string | null; // For success messages
  // Auth methods
  initAuth: () => () => void;
  signUp: (
    email: string,
    password: string,
    metadata: { [key: string]: any }
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  clearAuthFeedback: () => void;
  // Chat methods
  loadInitialData: () => Promise<void>;
  setActiveAgent: (agent: AgentType) => void;
  sendMessage: (userInput: string, documents: Document[]) => Promise<void>;
  startNewConversation: (agent: AgentType) => Promise<void>;
  deleteConversation: (
    agent: AgentType,
    conversationId: string
  ) => Promise<void>;
  setActiveConversation: (agent: AgentType, conversationId: string) => void;
  setMessageFeedback: (
    agent: AgentType,
    conversationId: string,
    messageId: string,
    feedback: "good" | "bad"
  ) => Promise<void>;
}

export const useChatStore = create<ChatState>((set, get) => ({
  documentConversations: {},
  codeConversations: {},
  suggestionConversations: {},
  activeDocumentConversationId: null,
  activeCodeConversationId: null,
  activeSuggestionConversationId: null,
  isLoading: false,
  activeAgent: "document",
  activeModel: GEMINI_FLASH,
  proTokenCount: 0,
  proTokenLimit: PRO_TOKEN_LIMIT,
  // Auth initial state
  session: null,
  user: null,
  authLoading: true,
  authError: null,
  authMessage: null,

  // Auth methods
  initAuth: () => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      set({ session, user: session?.user ?? null, authLoading: false });
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      set({ session, user: session?.user ?? null, authLoading: false });
    });

    return () => {
      subscription.unsubscribe();
    };
  },
  signUp: async (email, password, metadata) => {
    set({ authLoading: true, authError: null, authMessage: null });
    useDocumentStore.setState({ error: null });

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: metadata },
    });

    if (error) {
      const detail = getErrorMessage(error);
      const isSetupError =
        detail.toLowerCase().includes("database error saving new user") ||
        detail.includes(
          'violates row-level security policy for table "user_profiles"'
        );

      if (isSetupError) {
        const setupError = {
          name: "DatabaseSetupError",
          message: generateSetupErrorMessage(
            "A criação de perfil de usuário falhou, indicando uma configuração de banco de dados incorreta ou políticas de RLS ausentes."
          ),
        } as AuthError;
        set({ authLoading: false, authError: setupError });
      } else if (error.message.includes("User already registered")) {
        const helpfulError = {
          name: "UserAlreadyRegisteredError",
          message:
            "Este e-mail já está cadastrado.\n\n" +
            "1. Se você ainda não ativou sua conta, por favor, verifique sua caixa de entrada e a pasta de spam para encontrar o e-mail de confirmação.\n\n" +
            '2. Se você já confirmou mas esqueceu a senha, utilize a opção "Esqueci minha senha" na tela de login.',
        } as AuthError;
        set({ authLoading: false, authError: helpfulError });
      } else {
        set({ authLoading: false, authError: error });
      }
      return;
    }

    // Add helpful console log for debugging confirmation issues
    if (
      data.user &&
      data.user.identities &&
      data.user.identities.length === 0
    ) {
      console.log(
        "Cadastro enviado com sucesso. O usuário está aguardando confirmação por e-mail e ainda não aparecerá na tabela auth.users. Verifique o e-mail ou desative a confirmação de e-mail nas configurações de autenticação do Supabase."
      );
    }

    set({
      authLoading: false,
      authError: null,
      authMessage:
        "Cadastro realizado! Verifique seu e-mail para confirmar a conta e poder fazer o login.",
    });
  },
  signIn: async (email, password) => {
    set({ authLoading: true, authError: null, authMessage: null });
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    set({ authLoading: false, authError: error || null });
  },
  signOut: async () => {
    set({ authLoading: true, authError: null });
    await supabase.auth.signOut();
    set({ session: null, user: null, authLoading: false, authError: null });
  },
  sendPasswordResetEmail: async (email) => {
    set({ authLoading: true, authError: null, authMessage: null });
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      // Opcional: redireciona para uma página específica após a redefinição
      // redirectTo: `${window.location.origin}/update-password`,
    });
    if (error) {
      set({ authLoading: false, authError: error });
    } else {
      set({
        authLoading: false,
        authMessage:
          "Se o e-mail estiver correto, você receberá um link para redefinir sua senha em breve.",
      });
    }
  },
  clearAuthFeedback: () => {
    set({ authError: null, authMessage: null });
  },

  loadInitialData: async () => {
    set({ isLoading: true });
    useDocumentStore.setState({ error: null });

    await useDocumentStore.getState().loadInitialDocuments();

    if (useDocumentStore.getState().error) {
      set({ isLoading: false });
      return;
    }

    const user = get().user;
    if (user) {
      try {
        // RLS on user_profiles ensures we only get the current user's profile.
        const { data: _profile, error: profileError } = await supabase
          .from("user_profiles")
          .select("user_id, full_name")
          .eq("user_id", user.id)
          .single();

        const userMetadata = user.user_metadata;

        if (
          profileError &&
          profileError.code === "PGRST116" &&
          userMetadata?.full_name
        ) {
          console.log("Perfil de usuário não encontrado. Criando agora...");
          const { error: insertError } = await supabase
            .from("user_profiles")
            .insert({
              user_id: user.id,
              full_name: userMetadata.full_name,
              user_type: userMetadata.user_type,
            });
          if (insertError) throw insertError;
        } else if (profileError && profileError.code !== "PGRST116") {
          throw profileError;
        }
      } catch (e) {
        const detail = getErrorMessage(e);
        const isSetupError =
          detail.includes('relation "public.user_profiles" does not exist') ||
          (detail.includes("column") && detail.includes("does not exist")) ||
          detail.includes("violates row-level security policy");

        if (isSetupError) {
          let reason = "tabela ausente";
          if (detail.includes("column"))
            reason = "estrutura de coluna incorreta";
          if (detail.includes("security policy"))
            reason = "políticas de segurança ausentes ou incorretas";

          useDocumentStore.setState({
            error: generateSetupErrorMessage(`user_profiles (${reason})`),
          });
          set({ isLoading: false });
          return; // Interrompe o carregamento se o BD não estiver configurado
        }

        console.error("Erro durante a verificação/criação do perfil:", detail);
      }
    }

    try {
      // RLS transparently filters these queries to the logged-in user.
      const { data: convos, error: convoError } = await supabase
        .from("conversations")
        .select("*");
      if (convoError) throw convoError;

      const { data: messages, error: msgError } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });
      if (msgError) throw msgError;

      const docConvos: Record<string, Conversation> = {};
      const codeConvos: Record<string, Conversation> = {};
      const suggestionConvos: Record<string, Conversation> = {};

      for (const convo of convos) {
        const convoMessages = messages
          .filter((m) => m.conversation_id === convo.id)
          .map((m) => ({
            id: m.id,
            sender: m.sender as "user" | "bot",
            text: m.text,
            feedback: m.feedback as "good" | "bad" | null,
            sources: m.sources,
            createdAt: new Date(m.created_at).getTime(),
          }));

        const conversationObject: Conversation = {
          id: convo.id,
          title: convo.title,
          createdAt: new Date(convo.created_at).getTime(),
          updatedAt: convo.updated_at
            ? new Date(convo.updated_at).getTime()
            : new Date(convo.created_at).getTime(),
          messages: convoMessages,
        };

        if (convo.agent_type === "document") {
          docConvos[convo.id] = conversationObject;
        } else if (convo.agent_type === "code") {
          codeConvos[convo.id] = conversationObject;
        } else if (convo.agent_type === "suggestion") {
          suggestionConvos[convo.id] = conversationObject;
        }
      }

      const sortConversations = (a: Conversation, b: Conversation) =>
        (b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt);

      const sortedDocIds = Object.values(docConvos)
        .sort(sortConversations)
        .map((c) => c.id);
      const sortedCodeIds = Object.values(codeConvos)
        .sort(sortConversations)
        .map((c) => c.id);
      const sortedSuggestionIds = Object.values(suggestionConvos)
        .sort(sortConversations)
        .map((c) => c.id);

      set({
        documentConversations: docConvos,
        codeConversations: codeConvos,
        suggestionConversations: suggestionConvos,
        activeDocumentConversationId: sortedDocIds[0] || null,
        activeCodeConversationId: sortedCodeIds[0] || null,
        activeSuggestionConversationId: sortedSuggestionIds[0] || null,
      });

      if (
        get().activeAgent === "document" &&
        !get().activeDocumentConversationId
      ) {
        await get().startNewConversation("document");
      }
    } catch (e: unknown) {
      const detail = getErrorMessage(e);
      let errorMessage = `Erro ao carregar o histórico de conversas: ${detail}`;
      const isSetupError =
        typeof detail === "string" &&
        (detail.includes("relation") ||
          detail.includes("does not exist") ||
          detail.includes("violates row-level security policy"));

      if (isSetupError) {
        errorMessage = generateSetupErrorMessage(
          "A política de segurança (RLS) para `conversations` ou `messages` pode estar ausente ou incorreta."
        );
      }

      useDocumentStore.setState({ error: errorMessage });
      console.error("Erro detalhado ao carregar conversas:", e);
    } finally {
      set({ isLoading: false });
    }
  },

  setActiveAgent: (agent) => {
    set({ activeAgent: agent });
    const state = get();
    let shouldStartNew = false;
    switch (agent) {
      case "document":
        shouldStartNew =
          !state.activeDocumentConversationId ||
          !state.documentConversations[state.activeDocumentConversationId];
        break;
      case "code":
        shouldStartNew =
          !state.activeCodeConversationId ||
          !state.codeConversations[state.activeCodeConversationId];
        break;
      case "suggestion":
        shouldStartNew =
          !state.activeSuggestionConversationId ||
          !state.suggestionConversations[state.activeSuggestionConversationId];
        break;
    }

    if (shouldStartNew) {
      get().startNewConversation(agent);
    }
  },

  startNewConversation: async (agent) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      const errorMsg =
        "Usuário não autenticado. Não é possível criar uma nova conversa.";
      console.error(errorMsg);
      useDocumentStore.setState({ error: errorMsg });
      return;
    }

    const newConvo = createNewConversation();
    const { error } = await supabase.from("conversations").insert({
      id: newConvo.id,
      user_id: user.id, // Explicitamente define o proprietário
      title: newConvo.title,
      agent_type: agent,
      created_at: new Date(newConvo.createdAt).toISOString(),
      updated_at: new Date(newConvo.updatedAt).toISOString(),
    });

    if (error) {
      const detail = getErrorMessage(error);
      console.error("Failed to create conversation:", detail);
      const isSetupError =
        typeof detail === "string" &&
        (detail.includes("violates row-level security policy") ||
          (detail.includes("column") && detail.includes("does not exist")) ||
          detail.includes("PGRST204")); // Código de erro do Supabase para coluna não encontrada no cache do esquema

      if (isSetupError) {
        const errorMessage = generateSetupErrorMessage(
          "Falha ao criar conversa. A estrutura da tabela `conversations` parece estar desatualizada ou incorreta."
        );
        useDocumentStore.setState({ error: errorMessage });
      } else {
        useDocumentStore.setState({
          error: `Falha ao criar a conversa: ${detail}`,
        });
      }
      return;
    }

    switch (agent) {
      case "document":
        set((state) => ({
          documentConversations: {
            ...state.documentConversations,
            [newConvo.id]: newConvo,
          },
          activeDocumentConversationId: newConvo.id,
        }));
        break;
      case "code":
        set((state) => ({
          codeConversations: {
            ...state.codeConversations,
            [newConvo.id]: newConvo,
          },
          activeCodeConversationId: newConvo.id,
        }));
        break;
      case "suggestion":
        set((state) => ({
          suggestionConversations: {
            ...state.suggestionConversations,
            [newConvo.id]: newConvo,
          },
          activeSuggestionConversationId: newConvo.id,
        }));
        break;
    }
  },

  deleteConversation: async (agent, conversationId) => {
    let conversationKey: keyof ChatState | null = null;
    let activeIdKey: keyof ChatState | null = null;

    if (agent === "document") {
      conversationKey = "documentConversations";
      activeIdKey = "activeDocumentConversationId";
    } else if (agent === "code") {
      conversationKey = "codeConversations";
      activeIdKey = "activeCodeConversationId";
    } else if (agent === "suggestion") {
      conversationKey = "suggestionConversations";
      activeIdKey = "activeSuggestionConversationId";
    }

    if (!conversationKey || !activeIdKey) return;

    const originalConversations = get()[conversationKey] as Record<
      string,
      Conversation
    >;
    const originalActiveId = get()[activeIdKey] as string | null;

    const updatedConversations = { ...originalConversations };
    delete updatedConversations[conversationId];

    let newActiveId = originalActiveId;
    if (newActiveId === conversationId) {
      const remainingIds = Object.values(updatedConversations)
        .sort(
          (a, b) => (b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt)
        )
        .map((c) => c.id);
      newActiveId = remainingIds[0] || null;
    }

    set({
      [conversationKey]: updatedConversations,
      [activeIdKey]: newActiveId,
    });

    const { error } = await supabase
      .from("conversations")
      .delete()
      .match({ id: conversationId });
    if (error) {
      const detail = getErrorMessage(error);
      console.error("Failed to delete conversation:", detail);
      useDocumentStore.setState({
        error: `Falha ao excluir a conversa: ${detail}`,
      });
      set({
        [conversationKey]: originalConversations,
        [activeIdKey]: originalActiveId,
      });
    }

    if (
      Object.keys(get()[conversationKey] as Record<string, Conversation>)
        .length === 0
    ) {
      get().startNewConversation(agent);
    }
  },

  setActiveConversation: (agent, conversationId) => {
    switch (agent) {
      case "document":
        set({ activeDocumentConversationId: conversationId });
        break;
      case "code":
        set({ activeCodeConversationId: conversationId });
        break;
      case "suggestion":
        set({ activeSuggestionConversationId: conversationId });
        break;
    }
  },

  setMessageFeedback: async (agent, conversationId, messageId, feedback) => {
    let conversationKey:
      | "documentConversations"
      | "codeConversations"
      | "suggestionConversations"
      | null = null;
    if (agent === "document") conversationKey = "documentConversations";
    else if (agent === "code") conversationKey = "codeConversations";
    else if (agent === "suggestion")
      conversationKey = "suggestionConversations";
    if (!conversationKey) return;

    const conversations = get()[conversationKey];
    const conversation = conversations[conversationId];
    if (!conversation) return;

    const message = conversation.messages.find((m) => m.id === messageId);
    if (!message) return;

    const newFeedback = message.feedback === feedback ? null : feedback;

    const updatedMessages = conversation.messages.map((msg) =>
      msg.id === messageId ? { ...msg, feedback: newFeedback } : msg
    );
    set((state) => ({
      [conversationKey!]: {
        ...state[conversationKey!],
        [conversationId]: { ...conversation, messages: updatedMessages },
      },
    }));

    const { error } = await supabase
      .from("messages")
      .update({ feedback: newFeedback })
      .match({ id: messageId });
    if (error) {
      const detail = getErrorMessage(error);
      console.error("Failed to set feedback:", detail);
      useDocumentStore.setState({
        error: `Falha ao salvar o feedback: ${detail}`,
      });
      set((state) => ({
        [conversationKey!]: {
          ...state[conversationKey!],
          [conversationId]: {
            ...conversation,
            messages: conversation.messages,
          },
        },
      }));
    }
  },

  sendMessage: async (userInput, documents) => {
    const originalUserInput = userInput.trim();
    if (!originalUserInput) return;

    const currentError = useDocumentStore.getState().error;
    if (
      currentError &&
      !currentError.includes("ERRO DE CONFIGURAÇÃO DO BANCO DE DADOS")
    ) {
      useDocumentStore.setState({ error: null });
    }

    const user = get().user;
    if (!user) {
      const errorMsg =
        "Usuário não autenticado. A mensagem não pode ser enviada. Por favor, faça o login novamente.";
      console.error(errorMsg);
      useDocumentStore.setState({ error: errorMsg });
      set({ isLoading: false });
      return;
    }

    let agentForThisMessage = get().activeAgent;
    let finalUserInput = originalUserInput;

    const match = originalUserInput.match(/^@(\w+)/);
    if (match) {
      const alias = match[1].toLowerCase();
      const resolvedAgent = agentAliases[alias];
      if (resolvedAgent) {
        agentForThisMessage = resolvedAgent;
        finalUserInput = originalUserInput.replace(/^@\w+\s?/, "").trim();
      }
    }

    if (!finalUserInput) {
      if (get().activeAgent !== agentForThisMessage) {
        get().setActiveAgent(agentForThisMessage);
      }
      return;
    }

    if (get().activeAgent !== agentForThisMessage) {
      set({ activeAgent: agentForThisMessage });
    }

    const activeAgent = get().activeAgent;
    let activeConversationId: string | null;
    let conversationKey:
      | "documentConversations"
      | "codeConversations"
      | "suggestionConversations";

    switch (activeAgent) {
      case "document":
        activeConversationId = get().activeDocumentConversationId;
        conversationKey = "documentConversations";
        break;
      case "code":
        activeConversationId = get().activeCodeConversationId;
        conversationKey = "codeConversations";
        break;
      case "suggestion":
        activeConversationId = get().activeSuggestionConversationId;
        conversationKey = "suggestionConversations";
        break;
    }

    if (!activeConversationId) {
      await get().startNewConversation(activeAgent);
      activeConversationId = (get() as any)[
        `active${
          activeAgent.charAt(0).toUpperCase() + activeAgent.slice(1)
        }ConversationId`
      ];
      if (!activeConversationId) {
        console.error("Failed to create or find an active conversation.");
        useDocumentStore.setState({
          error: "Falha ao criar ou encontrar uma conversa ativa.",
        });
        return;
      }
    }

    const isNewConversation =
      ((get()[conversationKey] as Record<string, Conversation>)[
        activeConversationId!
      ]?.messages.length ?? 0) === 0;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      sender: "user",
      text: finalUserInput,
      createdAt: Date.now(),
    };

    set((state) => {
      const conversations = state[conversationKey];
      const currentConvo = conversations?.[activeConversationId!];
      if (currentConvo) {
        return {
          [conversationKey]: {
            ...conversations,
            [activeConversationId!]: {
              ...currentConvo,
              messages: [...currentConvo.messages, userMessage],
            },
          },
        };
      }
      return state;
    });
    set({ isLoading: true });

    const { error: userMsgError } = await supabase.from("messages").insert({
      id: userMessage.id,
      conversation_id: activeConversationId,
      sender: "user",
      text: finalUserInput,
      sources: null,
      created_at: new Date(userMessage.createdAt).toISOString(),
      user_id: user.id,
    });
    if (userMsgError) {
      const detail = getErrorMessage(userMsgError);
      console.error("Failed to save user message:", detail);
      useDocumentStore.setState({
        error: `Falha ao salvar sua mensagem: ${detail}`,
      });
    }

    if (isNewConversation) {
      generateTitle(finalUserInput).then(async (title) => {
        const finalTitle = title || finalUserInput.substring(0, 30);
        const { error } = await supabase
          .from("conversations")
          .update({ title: finalTitle, user_id: user.id })
          .match({ id: activeConversationId });
        if (error) {
          const detail = getErrorMessage(error);
          console.error("Failed to update title:", detail);
          useDocumentStore.setState({
            error: `Falha ao atualizar o título: ${detail}`,
          });
        }

        set((state) => {
          const conversations = state[conversationKey];
          const currentConvo = conversations?.[activeConversationId!];
          if (currentConvo) {
            return {
              [conversationKey]: {
                ...conversations,
                [activeConversationId!]: { ...currentConvo, title: finalTitle },
              },
            };
          }
          return state;
        });
      });
    }

    let context = "";
    let prompt = finalUserInput;
    let preferredModel = GEMINI_FLASH;
    let useWebSearch = false;

    try {
      if (activeAgent === "document" && documents.length > 0) {
        const queryEmbedding = (await generateEmbeddings([finalUserInput]))[0];
        const allChunks = documents.flatMap((doc) => doc.chunks);
        if (allChunks.length > 0 && queryEmbedding) {
          const chunksWithSimilarity = allChunks
            .map((chunk) => ({
              ...chunk,
              similarity: cosineSimilarity(queryEmbedding, chunk.embedding),
            }))
            .sort((a, b) => b.similarity - a.similarity);
          const lambda = 0.7;
          const relevantChunks: (typeof chunksWithSimilarity)[0][] = [];
          let candidates = chunksWithSimilarity;

          if (candidates.length > 0) {
            relevantChunks.push(candidates[0]);
            candidates = candidates.slice(1);
            while (
              relevantChunks.length < MAX_CONTEXT_CHUNKS &&
              candidates.length > 0
            ) {
              let bestCandidateIndex = -1;
              let maxMmrScore = -Infinity;
              for (let i = 0; i < candidates.length; i++) {
                const candidate = candidates[i];
                const similarityToQuery = candidate.similarity;
                const maxSimilarityToSelected = Math.max(
                  ...relevantChunks.map((selected) =>
                    cosineSimilarity(candidate.embedding, selected.embedding)
                  )
                );
                const mmrScore =
                  lambda * similarityToQuery -
                  (1 - lambda) * maxSimilarityToSelected;
                if (mmrScore > maxMmrScore) {
                  maxMmrScore = mmrScore;
                  bestCandidateIndex = i;
                }
              }
              if (bestCandidateIndex !== -1) {
                relevantChunks.push(candidates[bestCandidateIndex]);
                candidates.splice(bestCandidateIndex, 1);
              } else {
                break;
              }
            }
          }
          if (relevantChunks.length > 0 && relevantChunks[0].similarity > 0.5) {
            context = relevantChunks
              .map((chunk) => chunk.text)
              .join("\n\n---\n\n");
          }
        }
      }

      if (activeAgent === "document") {
        useWebSearch = true;
        if (context) {
          preferredModel = GEMINI_PRO;
          prompt = `${DOCUMENT_AGENT_PROMPT}\n\nCom base no seguinte contexto recuperado de seus documentos de conhecimento, responda à pergunta do usuário. Priorize estritamente as informações do contexto. Se o contexto não for suficiente, indique isso e use a busca na web para complementar.\n\nContexto:\n${context}\n\n---\n\nPergunta do usuário: ${finalUserInput}`;
        } else {
          preferredModel = GEMINI_FLASH;
          prompt = `${DOCUMENT_AGENT_PROMPT}\n\nResponda à pergunta do usuário usando seu conhecimento fundamental e a busca na web, pois nenhum contexto relevante foi encontrado nos documentos enviados. Sempre cite as fontes da web que utilizar.\n\nPergunta: ${finalUserInput}`;
        }
      } else if (activeAgent === "code") {
        preferredModel = GEMINI_PRO;
        let conversationContext = "";
        const currentConvo = (
          get()[conversationKey] as Record<string, Conversation>
        )[activeConversationId!];
        if (currentConvo && currentConvo.messages.length > 1) {
          const conversationHistory = currentConvo.messages.slice(0, -1);
          const recentMessages = conversationHistory.slice(
            -CONVERSATION_CONTEXT_MESSAGES
          );
          if (recentMessages.length > 0) {
            const historyText = recentMessages
              .map(
                (msg) =>
                  `${msg.sender === "user" ? "Usuário" : "Assistente"}: ${
                    msg.text
                  }`
              )
              .join("\n");
            conversationContext = `Considere o histórico recente desta conversa como contexto:\n\n--- HISTÓRICO DA CONVERSA ---\n${historyText}\n--- FIM DO HISTÓRICO ---\n\n`;
          }
        }
        prompt = `${CODE_AGENT_PROMPT}\n\n${conversationContext}Tarefa do usuário: ${finalUserInput}`;
      } else if (activeAgent === "suggestion") {
        preferredModel = GEMINI_FLASH;
        prompt = `${SUGGESTION_AGENT_PROMPT}\n\nPergunta do usuário para melhorar: "${finalUserInput}"`;
        useWebSearch = false;
      }

      const proTokenCount = get().proTokenCount + prompt.length / 4;
      set({ proTokenCount });

      let modelToUse = preferredModel;
      if (
        preferredModel === GEMINI_PRO &&
        proTokenCount > PRO_TOKEN_LIMIT * PRO_TOKEN_THRESHOLD
      ) {
        modelToUse = GEMINI_FLASH;
        console.warn(
          `Token limit for ${GEMINI_PRO} is approaching. Switching to ${GEMINI_FLASH} for this request.`
        );
      }
      set({ activeModel: modelToUse });

      const { text, sources } = await generateResponse(
        modelToUse,
        prompt,
        useWebSearch
      );

      const now = Date.now();
      const botMessage: Message = {
        id: crypto.randomUUID(),
        sender: "bot",
        text,
        sources,
        createdAt: now,
      };

      const { error: botMsgError } = await supabase.from("messages").insert({
        id: botMessage.id,
        conversation_id: activeConversationId,
        sender: "bot",
        text: botMessage.text,
        sources: botMessage.sources,
        created_at: new Date(botMessage.createdAt).toISOString(),
        user_id: user.id,
      });
      if (botMsgError) {
        const detail = getErrorMessage(botMsgError);
        console.error("Failed to save bot message:", detail);
        useDocumentStore.setState({
          error: `Falha ao salvar a resposta do assistente: ${detail}`,
        });
      }

      const { error: convoUpdateError } = await supabase
        .from("conversations")
        .update({ updated_at: new Date(now).toISOString() })
        .match({ id: activeConversationId });
      if (convoUpdateError) {
        console.error(
          "Failed to update conversation timestamp:",
          getErrorMessage(convoUpdateError)
        );
      }

      set((state) => {
        const conversations = state[conversationKey];
        const currentConvo = conversations?.[activeConversationId!];
        if (currentConvo) {
          return {
            [conversationKey]: {
              ...conversations,
              [activeConversationId!]: {
                ...currentConvo,
                messages: [...currentConvo.messages, botMessage],
                updatedAt: now,
              },
            },
          };
        }
        return state;
      });
    } catch (e: unknown) {
      const detail = getErrorMessage(e);
      console.error("Error generating response:", detail);
      const errorTime = Date.now();
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        sender: "bot",
        text: `Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.\n\nDetalhes do erro:\n\`\`\`\n${detail}\n\`\`\``,
        createdAt: errorTime,
      };

      const { error: convoUpdateError } = await supabase
        .from("conversations")
        .update({ updated_at: new Date(errorTime).toISOString() })
        .match({ id: activeConversationId });
      if (convoUpdateError) {
        console.error(
          "Failed to update conversation timestamp on error:",
          getErrorMessage(convoUpdateError)
        );
      }

      set((state) => {
        const conversations = state[conversationKey];
        const currentConvo = conversations?.[activeConversationId!];
        if (currentConvo) {
          return {
            [conversationKey]: {
              ...conversations,
              [activeConversationId!]: {
                ...currentConvo,
                messages: [...currentConvo.messages, errorMessage],
                updatedAt: errorTime,
              },
            },
          };
        }
        return state;
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
