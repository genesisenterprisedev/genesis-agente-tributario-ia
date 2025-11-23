import React, { useState, useEffect, useRef } from 'react';
import { useChatStore, useDocumentStore } from './store';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import HistorySidebar from './components/HistorySidebar';
import DocumentSidebar from './components/DocumentSidebar';
import ThemeToggle from './components/ThemeToggle';
import TokenUsageDisplay from './components/TokenUsageDisplay';
import { LightbulbIcon } from './components/icons/LightbulbIcon';
import AgentInfoModal from './components/AgentInfoModal';
import ChangePasswordModal from './components/ChangePasswordModal';
import FeedbackModal from './components/FeedbackModal';
import Dashboard from './components/Dashboard';
import ContactFormModal from './components/ContactFormModal';
import { MenuIcon } from './components/icons/MenuIcon';
import { DocumentIcon } from './components/icons/DocumentIcon';
import { BotIcon } from './components/icons/BotIcon';
import { InfoIcon } from './components/icons/InfoIcon';
import { documentAgentSuggestions, codeAgentSuggestions, suggestionAgentSuggestions } from './suggestions';
import { Conversation, Message, AgentType, MessageAttachment } from './types';
import { KeyIcon } from './components/icons/KeyIcon';
import { CloseIcon } from './components/icons/CloseIcon';
import { EyeIcon } from './components/icons/EyeIcon';
import { EyeSlashIcon } from './components/icons/EyeSlashIcon';
import { UserIcon } from './components/icons/UserIcon';
import ChangelogModal from './components/ChangelogModal';

// ForgotPasswordModal Component
const ForgotPasswordModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const { sendPasswordResetEmail, authLoading, authError, authMessage } = useChatStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendPasswordResetEmail(email);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-black border border-white/20 rounded-2xl shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <header className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
              <KeyIcon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">Redefinir Senha</h2>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:bg-white/10 rounded-full">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        <div className="p-6">
          {!authMessage ? (
            <form onSubmit={handleSubmit}>
              <p className="text-sm text-gray-400 mb-4">
                Digite o endereço de e-mail associado à sua conta e enviaremos um link para redefinir sua senha.
              </p>
              <div>
                <label htmlFor="reset-email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="reset-email" name="email" type="email" autoComplete="email" required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 mt-1 text-white bg-black border border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                />
              </div>
              {authError && (
                <div className="p-3 mt-4 text-sm text-white bg-white/10 border border-white/20 rounded-lg">
                  <p className="font-bold">Ocorreu um erro:</p>
                  <pre className="mt-1 font-sans text-xs whitespace-pre-wrap">{authError.message}</pre>
                </div>
              )}
              <div className="mt-6">
                <button type="submit" disabled={authLoading}
                  className="w-full px-4 py-2.5 font-semibold text-black bg-white rounded-lg hover:bg-gray-200 disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:focus:ring-offset-black transition-all duration-300">
                  {authLoading ? 'Enviando...' : 'Enviar Link de Redefinição'}
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="p-4 text-sm text-center text-white bg-white/10 border border-white/20 rounded-lg">
                <p className="font-bold">Verifique seu E-mail!</p>
                <p className="mt-2">{authMessage}</p>
              </div>
              <button onClick={onClose} className="w-full mt-6 px-4 py-2.5 font-semibold text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20">
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// LoginPage Component
const LoginPage: React.FC<{ onNavigateToSignup: () => void; onNavigateToForgotPassword: () => void; }> = ({ onNavigateToSignup, onNavigateToForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, authLoading, authError } = useChatStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-black border border-white/20 rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Coluna de Branding */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-white text-black p-8 text-center">
          <BotIcon className="w-24 h-24 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Gênesis Agente IA</h1>
          <p className="text-gray-600">Sua expertise fiscal, potencializada por IA.</p>
        </div>
        {/* Coluna do Formulário */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-white mb-2">
            Bem-vindo de volta!
          </h1>
          <p className="mb-8 text-sm text-gray-400">
            Faça login para acessar o assistente.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email" name="email" type="email" autoComplete="email" required
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 mt-1 text-white bg-black border border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Senha
                </label>
                <div className="text-sm">
                  <button type="button" onClick={onNavigateToForgotPassword} className="font-medium text-white hover:underline">
                    Esqueci minha senha
                  </button>
                </div>
              </div>
              <div className="relative mt-1">
                <input
                  id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 pr-10 text-white bg-black border border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            {authError && (
              <div className="p-3 my-2 text-sm text-white bg-white/10 border border-white/20 rounded-lg">
                <p className="font-bold">Ocorreu um erro:</p>
                <pre className="mt-1 font-sans text-xs whitespace-pre-wrap">{authError.message}</pre>
              </div>
            )}
            <div>
              <button type="submit" disabled={authLoading}
                className="w-full px-4 py-2.5 font-semibold text-black bg-white rounded-lg hover:bg-gray-200 disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:focus:ring-offset-black transition-all duration-300">
                {authLoading ? 'Entrando...' : 'Entrar'}
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-400 mt-8">
            Não tem uma conta?{' '}
            <button onClick={onNavigateToSignup}
              className="font-medium text-white hover:underline">
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// SignupPage Component
const SignupPage: React.FC<{ onNavigateToLogin: () => void; }> = ({ onNavigateToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('Contador');
  const { signUp, authLoading, authError, authMessage } = useChatStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(email, password, { full_name: fullName, user_type: userType });
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-black border border-white/20 rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Coluna de Branding */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-white text-black p-8 text-center">
          <BotIcon className="w-24 h-24 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Gênesis Agente IA</h1>
          <p className="text-gray-600">Comece a transformar sua análise tributária.</p>
        </div>
        {/* Coluna do Formulário */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-white mb-2">
            Crie sua Conta
          </h1>
          <p className="mb-6 text-sm text-gray-400">
            Junte-se a nós e simplifique suas tarefas fiscais.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <fieldset disabled={authLoading || !!authMessage}>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Nome Completo</label>
                <input id="fullName" name="fullName" type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 mt-1 text-white bg-black border border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 mt-1 text-white bg-black border border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">Senha</label>
                <div className="relative mt-1">
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 pr-10 text-white bg-black border border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-gray-300">Tipo de Usuário</label>
                <select id="userType" name="userType" value={userType} onChange={(e) => setUserType(e.target.value)}
                  className="w-full px-4 py-2.5 mt-1 text-white bg-black border border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white">
                  <option>Contador</option>
                  <option>Advogado</option>
                  <option>Empresário</option>
                  <option>Desenvolvedor</option>
                  <option>Estudante</option>
                  <option>Outro</option>
                </select>
              </div>

              {authMessage && !authError && (
                <div className="p-3 my-2 text-sm text-white bg-white/10 border border-white/20 rounded-lg">
                  <p className="font-bold">Sucesso!</p>
                  <p className="mt-1">{authMessage}</p>
                </div>
              )}

              {authError && (
                <div className="p-3 my-2 text-sm text-white bg-white/10 border border-white/20 rounded-lg">
                  <p className="font-bold">Ocorreu um erro ao cadastrar:</p>
                  <pre className="mt-1 font-sans text-xs whitespace-pre-wrap">{authError.message}</pre>
                </div>
              )}

              <div>
                <button type="submit" disabled={authLoading || !!authMessage}
                  className="w-full px-4 py-2.5 font-semibold text-black bg-white rounded-lg hover:bg-gray-200 disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:focus:ring-offset-black transition-all duration-300">
                  {authLoading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
              </div>
            </fieldset>
          </form>
          <p className="text-sm text-center text-gray-400 mt-6">
            Já tem uma conta?{' '}
            <button onClick={onNavigateToLogin} className="font-medium text-white hover:underline">
              Faça login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};


// Main Chat Application Component
const ChatApplication: React.FC = () => {
  const {
    documentConversations,
    codeConversations,
    suggestionConversations,
    activeDocumentConversationId,
    activeCodeConversationId,
    activeSuggestionConversationId,
    sendMessage,
    isLoading,
    activeAgent,
    setActiveAgent,
    setMessageFeedback,
    loadInitialData,
    signOut,
    user,
    deleteMessage
  } = useChatStore();
  const { documents, addDocument } = useDocumentStore();
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [messageFiles, setMessageFiles] = useState<Map<string, File[]>>(new Map());
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
  const [isAgentInfoOpen, setIsAgentInfoOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  let activeConversationId: string | null = null;
  let conversations: Record<string, Conversation> = {};
  let agentName = '';
  let suggestions: string[] = [];

  switch (activeAgent) {
    case 'code':
      activeConversationId = activeCodeConversationId;
      conversations = codeConversations;
      agentName = 'Gerador de Código';
      suggestions = codeAgentSuggestions;
      break;
    case 'suggestion':
      activeConversationId = activeSuggestionConversationId;
      conversations = suggestionConversations;
      agentName = 'Otimizador de Prompt';
      suggestions = suggestionAgentSuggestions;
      break;
    case 'document':
    default:
      activeConversationId = activeDocumentConversationId;
      conversations = documentConversations;
      agentName = 'Consultor Fiscal';
      suggestions = documentAgentSuggestions;
      break;
  }

  const activeConversation: Conversation | undefined = activeConversationId ? conversations[activeConversationId] : undefined;
  const messages: Message[] = activeConversation?.messages || [];

  useEffect(() => {
    const initializeApp = async () => {
      await loadInitialData();
      setIsInitializing(false);
    };
    initializeApp();
  }, [loadInitialData]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSendMessage = (message: string) => {
    const trimmed = message.trim();
    if (!trimmed) return;

    // Metadados dos anexos para persistir em messages.attachments
    let attachmentsMeta: MessageAttachment[] | undefined;
    if (attachedFiles.length > 0) {
      attachmentsMeta = attachedFiles.map((file) => {
        const doc = documents.find((d) => d.name === file.name);
        return {
          id: doc?.id || file.name,
          name: file.name,
          sizeBytes: file.size,
        };
      });
    }

    // Gera um ID de mensagem no cliente e o reutiliza na store, para
    // que possamos associar os arquivos anexados à mesma mensagem
    // exibida no histórico.
    const clientMessageId = crypto.randomUUID();

    if (attachedFiles.length > 0) {
      setMessageFiles((prev) =>
        new Map(prev).set(clientMessageId, [...attachedFiles])
      );
    }

    // Passa o ID e os metadados de anexos para a store; sendMessage irá
    // reutilizar esse ID ao persistir a mensagem no estado e no Supabase,
    // gravando também o JSON em messages.attachments.
    sendMessage(trimmed, documents, clientMessageId, attachmentsMeta);

    // Limpa anexos após o envio
    setAttachedFiles([]);
  };

  const handleFileSelect = (file: File) => {
    setAttachedFiles(prev => [...prev, file]);
    addDocument(file);
    setIsDocumentsOpen(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleFeedback = (messageId: string, feedback: 'good' | 'bad') => {
    if (activeConversationId) {
      setMessageFeedback(activeAgent, activeConversationId, messageId, feedback);
    }
  };

  const AgentTabButton: React.FC<{ agent: AgentType, label: string }> = ({ agent, label }) => {
    const getIcon = () => {
      switch (agent) {
        case 'document':
          return <DocumentIcon className="w-5 h-5" />;
        case 'code':
          return <BotIcon className="w-5 h-5" />;
        case 'suggestion':
          return <LightbulbIcon className="w-5 h-5" />;
      }
    };

    return (
      <button
        onClick={() => setActiveAgent(agent)}
        className={`p-2 rounded-full transition-colors duration-200 ${activeAgent === agent
          ? 'bg-white dark:bg-white/20 text-black dark:text-white shadow-sm'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
          }`}
        title={label}
      >
        {getIcon()}
      </button>
    );
  };




  if (isInitializing) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div className="flex flex-col items-center">
          <BotIcon className="w-16 h-16 text-black dark:text-white animate-pulse" />
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Carregando assistente...
          </p>
        </div>
      </div>
    );
  }

  const renderWelcomeScreen = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-gray-200 dark:bg-white/10">
        <BotIcon className="w-12 h-12 text-gray-600 dark:text-gray-300" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {agentName}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Comece uma conversa, envie um documento ou escolha uma das sugestões abaixo.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
        {suggestions.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSuggestionClick(s)}
            className="p-4 bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shadow"
          >
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{s}</p>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`flex h-screen font-sans bg-white dark:bg-black text-black dark:text-white transition-colors`}>
      <HistorySidebar
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenChangePassword={() => setIsChangePasswordOpen(true)}
      />

      <main className="flex-1 flex flex-col h-screen relative">
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/20 bg-white/50 dark:bg-black/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsHistoryOpen(true)} className="lg:hidden p-2 text-gray-500 dark:text-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-white/10">
              <MenuIcon className="w-5 h-5" />
            </button>
            <div className="hidden lg:flex items-center p-1 bg-gray-200/50 dark:bg-white/10 rounded-lg gap-1">
              <AgentTabButton agent="document" label="Consultor" />
              <AgentTabButton agent="code" label="Código" />
              <AgentTabButton agent="suggestion" label="Sugestão" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsDashboardOpen(true)} className="hidden md:block p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10" title="Dashboard">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </button>
            <button onClick={() => setIsContactFormOpen(true)} className="hidden md:block p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10" title="Novo Contato">
              <UserIcon className="w-5 h-5" />
            </button>
            <button onClick={() => setIsAgentInfoOpen(true)} className="hidden md:block p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10" title="Informações do Agente">
              <InfoIcon className="w-5 h-5" />
            </button>
            <button onClick={() => setIsFeedbackOpen(true)} className="hidden md:block p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10" title="Enviar Feedback">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </button>
            <button onClick={() => setIsChangelogOpen(true)} className="hidden md:block p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10" title="Changelog">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            <TokenUsageDisplay />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <button
              onClick={() => setIsChangePasswordOpen(true)}
              className="hidden md:flex p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title={`${user?.user_metadata?.full_name || user?.email} - Alterar Senha`}
            >
              <div className="w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                {user?.user_metadata?.full_name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase()}
              </div>
            </button>

            <button onClick={signOut} className="hidden md:block p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10" title="Sair">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3h12" />
              </svg>
            </button>
            {activeAgent === 'document' && (
              <button onClick={() => setIsDocumentsOpen(true)} className="lg:hidden p-2 text-gray-500 dark:text-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-white/10">
                <DocumentIcon className="w-5 h-5" />
              </button>
            )}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 pb-24">
          {messages.length === 0 ? renderWelcomeScreen() : (
            <div>
              <h1 className="text-center text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                {activeConversation?.title}
              </h1>
              {messages.map((msg) => {
                // Get files associated with this message
                const filesForMessage = messageFiles.get(msg.id) || [];
                return (
                  <ChatMessage
                    key={msg.id}
                    message={msg}
                    onFeedback={(feedback) => handleFeedback(msg.id, feedback)}
                    onDelete={() => {
                      if (window.confirm('Tem certeza que deseja excluir esta mensagem?') && activeConversation) {
                        deleteMessage(activeAgent, activeConversation.id, msg.id);
                        // Remove files associated with this message
                        setMessageFiles(prev => {
                          const newMap = new Map(prev);
                          newMap.delete(msg.id);
                          return newMap;
                        });
                      }
                    }}
                    attachedFiles={filesForMessage}
                  />
                );
              })}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-white dark:from-black to-transparent">
          <ChatInput
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            onFileSelect={handleFileSelect}
            activeAgent={activeAgent}
            attachedFiles={attachedFiles}
          />
        </div>
      </main>

      {activeAgent === 'document' && <DocumentSidebar isOpen={isDocumentsOpen} onClose={() => setIsDocumentsOpen(false)} />}

      <AgentInfoModal
        isOpen={isAgentInfoOpen}
        onClose={() => setIsAgentInfoOpen(false)}
        agentType={activeAgent}
      />

      <ChangePasswordModal
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
      />

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />

      <Dashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />

      <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />

      <ChangelogModal
        isOpen={isChangelogOpen}
        onClose={() => setIsChangelogOpen(false)}
      />
    </div>
  );
};

// App Router
const App: React.FC = () => {
  const { session, authLoading, initAuth, clearAuthFeedback } = useChatStore();
  const [page, setPage] = useState<'login' | 'signup'>('login');
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = initAuth();
    return () => unsubscribe();
  }, [initAuth]);

  const handleCloseForgotPassword = () => {
    setIsForgotPasswordOpen(false);
    clearAuthFeedback();
  };

  if (authLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div className="flex flex-col items-center">
          <BotIcon className="w-16 h-16 text-black dark:text-white animate-pulse" />
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <>
        {page === 'login' ? (
          <LoginPage
            onNavigateToSignup={() => { clearAuthFeedback(); setPage('signup'); }}
            onNavigateToForgotPassword={() => { clearAuthFeedback(); setIsForgotPasswordOpen(true); }}
          />
        ) : (
          <SignupPage
            onNavigateToLogin={() => { clearAuthFeedback(); setPage('login'); }}
          />
        )}
        <ForgotPasswordModal
          isOpen={isForgotPasswordOpen}
          onClose={handleCloseForgotPassword}
        />
      </>
    );
  }

  return <ChatApplication />;
};


export default App;