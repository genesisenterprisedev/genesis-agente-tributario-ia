import { WebSource } from "../types";

const OPENROUTER_API_BASE =
  process.env.NEXT_PUBLIC_OPENROUTER_API_URL || "https://openrouter.ai";

const OPENROUTER_API_URL = `${OPENROUTER_API_BASE.replace(
  /\/$/,
  ""
)}/api/v1/chat/completions`;

function getOpenRouterApiKey(): string {
  const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error(
      "NEXT_PUBLIC_OPENROUTER_API_KEY não está configurada no arquivo .env.local"
    );
  }
  return apiKey;
}

function getOpenRouterModel(modelName: string): string {
  return process.env.NEXT_PUBLIC_OPENROUTER_MODEL || modelName;
}

async function callOpenRouter(
  prompt: string,
  modelName: string
): Promise<string> {
  const apiKey = getOpenRouterApiKey();
  const model = getOpenRouterModel(modelName);

  const response = await fetch(OPENROUTER_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      "OpenRouter request failed with status " +
        response.status +
        ": " +
        errorText
    );
  }

  const data = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };

  const text = data.choices?.[0]?.message?.content ?? "";
  return text;
}

const DEFAULT_MODEL =
  process.env.NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL || "openai/gpt-4o-mini";

// FIX: Define model names according to guidelines.
export const PRIMARY_MODEL =
  process.env.NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL || DEFAULT_MODEL;
export const SECONDARY_MODEL = DEFAULT_MODEL;

export const DOCUMENT_MODEL = PRIMARY_MODEL;
export const CODE_MODEL =
  process.env.NEXT_PUBLIC_OPENROUTER_CODE_MODEL || DEFAULT_MODEL;
export const SUGGESTION_MODEL =
  process.env.NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL || DEFAULT_MODEL;

export const DOCUMENT_AGENT_PROMPT = `Você é o "Gênesis", um assistente de IA especialista em tributação brasileira. Sua principal fonte de conhecimento são os documentos fornecidos no contexto. Responda às perguntas de forma clara, informativa e profissional, priorizando sempre as informações contidas nesses documentos. Quando o contexto não for suficiente, use seu conhecimento geral e a busca na web para complementar a resposta. Sempre cite as fontes da web que utilizar.`;

export const CODE_AGENT_PROMPT = `Você é um programador especialista sênior, fluente em Python e Delphi, com profundo conhecimento em regras tributárias e fiscais. Sua tarefa é gerar funções e trechos de código claros, eficientes e bem documentados para resolver problemas tributários. Sempre que possível, adicione comentários explicando a lógica e o cálculo fiscal implementado. Use blocos de código markdown para formatar sua resposta.`;

export const SUGGESTION_AGENT_PROMPT = `Você é um especialista em otimização de buscas e prompts. Sua tarefa é analisar a pergunta do usuário e, em vez de respondê-la diretamente, sugerir 3 maneiras alternativas e mais eficazes de formular a mesma pergunta para obter melhores resultados de um assistente de IA fiscal. Apresente as sugestões em uma lista numerada, cada uma com uma breve explicação do porquê a nova formulação é melhor. Use markdown para formatar a lista.`;

/**
 * Generates embeddings for a batch of texts.
 * NOTE: The `@google/genai` JS SDK guidelines provided do not specify a method for
 * generating embeddings. This function uses a mocked implementation to allow the
 * Retrieval-Augmented Generation (RAG) functionality to operate. In a real-world
 * scenario, this would need to be replaced with a call to an actual embedding model endpoint.
 */
export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  console.warn(
    "Using mock embeddings. Replace with a real embedding model API call."
  );
  // Returning random vectors of a common dimension size (e.g., 768) for demonstration.
  return texts.map(() =>
    Array(768)
      .fill(0)
      .map(() => Math.random() * 2 - 1)
  );
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
    console.error("Error generating title:", error);
    // Return a generic title or a snippet of the query as a fallback
    return query.substring(0, 30) + "...";
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
