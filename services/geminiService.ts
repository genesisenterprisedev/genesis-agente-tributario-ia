import { WebSource } from "../types";

function getOpenRouterModel(modelName: string): string {
  return process.env.NEXT_PUBLIC_OPENROUTER_MODEL || modelName;
}

async function callOpenRouter(
  prompt: string,
  modelName: string
): Promise<string> {
  const model = getOpenRouterModel(modelName);

  console.log(`[OpenRouter] Proxying to internal API: /api/chat`);
  console.log(`[OpenRouter] Model: ${model}`);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        prompt,
      }),
    });

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ error: response.statusText }));
      const providerMessage = errorData.error || response.statusText;

      // Para 402 (créditos insuficientes), usamos uma mensagem neutra no cliente
      // e deixamos o detalhe completo apenas nos logs/alertas do backend.
      if (response.status === 402) {
        const publicMessage =
          "LLM billing error: provider credits exhausted. Please check OpenRouter credits.";
        // Não logamos aqui para evitar poluição extra no console; o backend já envia e-mail.
        throw new Error(publicMessage);
      }

      const errorMessage = `OpenRouter request failed: ${response.status} - ${providerMessage}`;

      // Evita log de console para 402 (créditos insuficientes), mantendo apenas para outros erros
      if (response.status !== 402) {
        console.error(`[OpenRouter] ${errorMessage}`);
      }

      throw new Error(errorMessage);
    }

    const data = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };

    const text = data.choices?.[0]?.message?.content ?? "";

    if (!text) {
      console.warn("[OpenRouter] Response received but no content found");
    }

    return text;
  } catch (error: any) {
    // Enhanced error logging for fetch failures
    if (error.message?.includes("fetch failed")) {
      console.error(
        "[OpenRouter] Network error - fetch failed. Possible causes:"
      );
      console.error("  - Next.js dev server not running");
      console.error("  - Network connectivity issues");
      console.error("  - CORS or firewall blocking the request");
      console.error("  - Invalid API endpoint configuration");
    }
    console.error("[OpenRouter] Full error:", error);
    throw new Error(
      `OpenRouter request failed: ${error.message || "fetch failed"}`
    );
  }
}

// *** Duplicated OpenRouter request block removed – keep only the original implementation above ***

// ============================================
// CONFIGURAÇÃO DE MODELOS LLM POR TIPO DE AGENTE
// ============================================
// Cada tipo de agente pode usar um modelo LLM diferente, configurado via variáveis de ambiente.
// Isso permite otimizar custos e performance usando modelos especializados para cada tarefa.
//
// Hierarquia de fallback:
// 1. Modelo específico do agente (ex: NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL)
// 2. Modelo padrão (NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL)
// 3. Hardcoded fallback (openai/gpt-4o-mini)
//
// Exemplo de configuração no .env.local:
// NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
// NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=openai/gpt-4o
// NEXT_PUBLIC_OPENROUTER_CODE_MODEL=anthropic/claude-3-5-sonnet
// NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=openai/gpt-4o-mini
//
// Veja docs/llm-configuration.md para mais detalhes

const DEFAULT_MODEL =
  process.env.NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL || "openai/gpt-4o-mini";

// Modelos específicos por tipo de agente
export const DOCUMENT_MODEL =
  process.env.NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL || DEFAULT_MODEL; // Agente de Documentos: Análise de documentos fiscais
export const CODE_MODEL =
  process.env.NEXT_PUBLIC_OPENROUTER_CODE_MODEL || DEFAULT_MODEL; // Agente de Código: Geração de código Python/Delphi
export const SUGGESTION_MODEL =
  process.env.NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL || DEFAULT_MODEL; // Agente de Sugestões: Otimização de prompts

// Modelo principal para operações gerais (usado como fallback)
export const PRIMARY_MODEL = DOCUMENT_MODEL; // Mantém compatibilidade com código existente
export const SECONDARY_MODEL = DEFAULT_MODEL; // Modelo padrão como fallback final

// Dimensão esperada pela coluna `embedding` (vector) no banco para document_embeddings
const EMBEDDING_DIMENSION = 1536;

/**
 * Seleciona o modelo ideal para um tipo de conversa específico
 * @param agentType Tipo de agente/conversa
 * @returns Modelo selecionado com fallback automático
 */
export function getModelForConversation(
  agentType: "document" | "code" | "suggestion"
): string {
  switch (agentType) {
    case "document":
      return DOCUMENT_MODEL;
    case "code":
      return CODE_MODEL;
    case "suggestion":
      return SUGGESTION_MODEL;
    default:
      console.warn(
        `[Model Selection] Tipo de agente desconhecido: ${agentType}. Usando modelo padrão.`
      );
      return DEFAULT_MODEL;
  }
}

/**
 * Seleciona o modelo com fallback inteligente
 * @param agentType Tipo de agente/conversa
 * @returns Modelo selecionado com fallback para DEFAULT_MODEL se o específico falhar
 */
export function getModelWithFallback(
  agentType: "document" | "code" | "suggestion"
): string {
  const preferredModel = getModelForConversation(agentType);

  // Se o modelo preferido já for o DEFAULT_MODEL, não há necessidade de fallback adicional
  if (preferredModel === DEFAULT_MODEL) {
    return preferredModel;
  }

  return preferredModel;
}

export const DOCUMENT_AGENT_PROMPT = `Você é o "Gênesis", um assistente de IA especialista em tributação brasileira. Sua principal fonte de conhecimento são os documentos fornecidos no contexto. Responda às perguntas de forma clara, informativa e profissional, priorizando sempre as informações contidas nesses documentos. Quando o contexto não for suficiente, use seu conhecimento geral e a busca na web para complementar a resposta. Sempre cite as fontes da web que utilizar.`;

export const CODE_AGENT_PROMPT = `Você é um programador especialista sênior, fluente em Python e Delphi, com profundo conhecimento em regras tributárias e fiscais. Sua tarefa é gerar funções e trechos de código claros, eficientes e bem documentados para resolver problemas tributários. Sempre que possível, adicione comentários explicando a lógica e o cálculo fiscal implementado. Use blocos de código markdown para formatar sua resposta.`;

export const SUGGESTION_AGENT_PROMPT = `Você é um especialista em otimização de buscas e prompts. Sua tarefa é analisar a pergunta do usuário e, em vez de respondê-la diretamente, sugerir 3 maneiras alternativas e mais eficazes de formular a mesma pergunta para obter melhores resultados de um assistente de IA fiscal. Apresente as sugestões em uma lista numerada, cada uma com uma breve explicação do porquê a nova formulação é melhor. Use markdown para formatar a lista.`;

/**
 * Generates embeddings for a batch of texts using the Next.js /api/embed route,
 * which por sua vez chama o endpoint de embeddings do OpenRouter (text-embedding-ada-002).
 *
 * Garante que:
 * - Sempre retorna um vetor por texto de entrada
 * - O vetor tem a mesma dimensionalidade configurada na coluna `embedding` (vector) do banco
 */
export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  if (!Array.isArray(texts) || texts.length === 0) {
    return [];
  }

  try {
    const response = await fetch("/api/embed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ texts }),
    });

    if (!response.ok) {
      if (response.status !== 402) {
        console.error("/api/embed error status:", response.status);
      }
      return texts.map(() => Array(EMBEDDING_DIMENSION).fill(0));
    }

    const data = (await response.json()) as {
      embeddings?: number[][];
      embedding?: number[];
    };

    let embeddings = data.embeddings;

    // Compatibilidade com rota antiga que retornava apenas `embedding` para um único texto
    if (!embeddings && data.embedding) {
      embeddings = [data.embedding];
    }

    if (!embeddings || !Array.isArray(embeddings)) {
      console.error("/api/embed returned no embeddings");
      return texts.map(() => Array(EMBEDDING_DIMENSION).fill(0));
    }

    const normalized: number[][] = [];

    for (let i = 0; i < texts.length; i++) {
      const emb = embeddings[i];
      if (Array.isArray(emb) && emb.length === EMBEDDING_DIMENSION) {
        normalized.push(emb);
      } else if (Array.isArray(emb)) {
        // Em caso de divergência de dimensão, ajusta com corte/preenchimento de zeros
        if (emb.length > EMBEDDING_DIMENSION) {
          normalized.push(emb.slice(0, EMBEDDING_DIMENSION));
        } else {
          normalized.push([
            ...emb,
            ...Array(EMBEDDING_DIMENSION - emb.length).fill(0),
          ]);
        }
      } else {
        normalized.push(Array(EMBEDDING_DIMENSION).fill(0));
      }
    }

    return normalized;
  } catch (error) {
    console.error("Error calling /api/embed in batch:", error);
    return texts.map(() => Array(EMBEDDING_DIMENSION).fill(0));
  }
}

/**
 * Generates a short, descriptive title for a conversation based on the user's first query.
 */
export async function generateTitle(query: string): Promise<string> {
  try {
    const prompt = `Gere um título curto e descritivo (3-5 palavras) para uma conversa que começa com a seguinte pergunta do usuário. Responda apenas com o título. Pergunta: "${query}"`;
    // Usa o modelo configurado via OpenRouter para gerar o título.
    const responseText = await callOpenRouter(prompt, SECONDARY_MODEL);
    // Extrai o texto de forma segura, tratando response.text como opcional.
    // Limpa possíveis aspas extras na resposta.
    const content = responseText.trim().replace(/["']/g, "");

    if (!content) {
      console.warn("Gemini title generation returned empty response.");
      // Fallback se o modelo não retornar texto útil
      return query.substring(0, 30) + "...";
    }

    return content;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : String(error ?? "");
    // Não polui o console para erros de crédito (402 / Insufficient credits)
    if (
      !message.includes("402") &&
      !message.toLowerCase().includes("insufficient credits")
    ) {
      console.error("Error generating title:", error);
    }
    // Return a generic title or a snippet of the query as a fallback
    return query.substring(0, 30) + "...";
  }
}

/**
 * Busca contexto relevante nos documentos usando embeddings
 * @param query Pergunta do usuário
 * @param limit Número máximo de chunks para retornar
 * @param threshold Threshold de similaridade (0-1)
 * @returns Array de chunks relevantes com metadata
 */
export async function searchDocumentContext(
  query: string,
  limit: number = 5,
  threshold: number = 0.7
): Promise<
  Array<{
    documentName: string;
    chunkText: string;
    similarity: number;
    isKnowledgeBase: boolean;
  }>
> {
  try {
    // 1. Gerar embedding da query
    const embeddingResponse = await fetch("/api/embed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: query }),
    });

    if (!embeddingResponse.ok) {
      if (embeddingResponse.status !== 402) {
        console.error("Failed to generate query embedding");
      }
      return [];
    }

    const { embedding } = await embeddingResponse.json();

    // 2. Buscar chunks similares
    const searchResponse = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embedding,
        limit,
        threshold,
      }),
    });

    if (!searchResponse.ok) {
      console.error("Failed to search documents");
      return [];
    }

    const { results } = await searchResponse.json();

    console.log(`[RAG] Found ${results.length} relevant chunks for query`);

    return results;
  } catch (error) {
    console.error("Error searching document context:", error);
    return [];
  }
}

/**
 * Generates a response from the Gemini model, with optional web search.
 * Returns the response text and any web sources found.
 */
export async function generateResponse(
  modelName: string,
  prompt: string,
  useWebSearch: boolean = false
): Promise<{ text: string; sources: WebSource[] }> {
  // Construct config conditionally
  if (useWebSearch) {
  }

  // Use getAI().models.generateContent as per guidelines.
  const text = await callOpenRouter(prompt, modelName);

  // Extract text directly from response.text as per guidelines.

  // Extract web sources from grounding metadata if web search was used
  const sources: WebSource[] = [];

  // Deduplicate sources based on URI
  const uniqueSources = Array.from(
    new Map(sources.map((item) => [item.uri, item])).values()
  );

  return { text, sources: uniqueSources };
}

/**
 * Gera resposta usando RAG (Retrieval-Augmented Generation)
 * Busca contexto relevante nos documentos e injeta no prompt
 * @param modelName Modelo LLM a usar
 * @param userQuery Pergunta do usuário
 * @param systemPrompt Prompt do sistema
 * @param conversationHistory Histórico da conversa (opcional)
 * @param useWebSearch Se deve usar busca web
 * @returns Resposta com texto, fontes e contexto usado
 */
export async function generateResponseWithRAG(
  modelName: string,
  userQuery: string,
  systemPrompt: string,
  conversationHistory: string = "",
  useWebSearch: boolean = false
): Promise<{
  text: string;
  sources: WebSource[];
  contextUsed: boolean;
  documentsReferenced: string[];
}> {
  try {
    // 1. Buscar contexto relevante nos documentos
    const contextChunks = await searchDocumentContext(userQuery, 5, 0.7);

    let enhancedPrompt = systemPrompt;
    const documentsReferenced: string[] = [];

    // 2. Se encontrou contexto relevante, adicionar ao prompt
    if (contextChunks.length > 0) {
      console.log(
        `[RAG] Using ${contextChunks.length} document chunks as context`
      );

      // Construir contexto formatado
      const contextText = contextChunks
        .map((chunk, index) => {
          // Adicionar documento à lista de referências
          if (!documentsReferenced.includes(chunk.documentName)) {
            documentsReferenced.push(chunk.documentName);
          }

          return `### Documento ${index + 1}: ${chunk.documentName}
**Relevância:** ${(chunk.similarity * 100).toFixed(1)}%
**Conteúdo:**
${chunk.chunkText}
`;
        })
        .join("\n\n---\n\n");

      // Injetar contexto no prompt do sistema
      enhancedPrompt = `${systemPrompt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 CONTEXTO DOS DOCUMENTOS (Base de Conhecimento)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use as informações abaixo para responder a pergunta do usuário. Estes são trechos relevantes extraídos da base de conhecimento:

${contextText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**INSTRUÇÕES IMPORTANTES:**
1. Priorize as informações do contexto acima ao responder
2. Se a resposta estiver no contexto, cite o documento de origem
3. Se o contexto não for suficiente, use seu conhecimento geral
4. Seja preciso e cite as fontes quando possível
5. Indique claramente quando estiver usando conhecimento geral vs. documentos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    } else {
      console.log("[RAG] No relevant context found, using general knowledge");
    }

    // 3. Construir prompt completo
    const fullPrompt = `${enhancedPrompt}

${conversationHistory ? `Histórico da conversa:\n${conversationHistory}\n\n` : ""}Usuário: ${userQuery}

Assistente:`;

    // 4. Gerar resposta
    const { text, sources } = await generateResponse(
      modelName,
      fullPrompt,
      useWebSearch
    );

    return {
      text,
      sources,
      contextUsed: contextChunks.length > 0,
      documentsReferenced,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : String(error ?? "");
    // Evita logar 402 / créditos insuficientes; mantém log para outros erros reais
    if (
      !message.includes("402") &&
      !message.toLowerCase().includes("insufficient credits")
    ) {
      console.error("Error in generateResponseWithRAG:", error);
    }

    // Fallback para resposta sem RAG
    const { text, sources } = await generateResponse(
      modelName,
      `${systemPrompt}\n\n${conversationHistory ? `Histórico:\n${conversationHistory}\n\n` : ""}Usuário: ${userQuery}\n\nAssistente:`,
      useWebSearch
    );

    return {
      text,
      sources,
      contextUsed: false,
      documentsReferenced: [],
    };
  }
}
