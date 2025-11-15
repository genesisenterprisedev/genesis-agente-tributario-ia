module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/promises [external] (node:stream/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/promises", () => require("node:stream/promises"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/services/geminiService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CODE_AGENT_PROMPT",
    ()=>CODE_AGENT_PROMPT,
    "DOCUMENT_AGENT_PROMPT",
    ()=>DOCUMENT_AGENT_PROMPT,
    "GEMINI_FLASH",
    ()=>GEMINI_FLASH,
    "GEMINI_PRO",
    ()=>GEMINI_PRO,
    "SUGGESTION_AGENT_PROMPT",
    ()=>SUGGESTION_AGENT_PROMPT,
    "generateEmbeddings",
    ()=>generateEmbeddings,
    "generateResponse",
    ()=>generateResponse,
    "generateTitle",
    ()=>generateTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.mjs [app-ssr] (ecmascript)");
;
// Initialize GoogleGenAI with API key from Next.js environment variables
const apiKey = ("TURBOPACK compile-time value", "AIzaSyAWXNj1Qv6vGn77quJxtqws8MMPo4L9eJ8");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
    apiKey
});
const GEMINI_PRO = "gemini-2.5-pro";
const GEMINI_FLASH = "gemini-2.5-flash";
const DOCUMENT_AGENT_PROMPT = `Você é o "Gênesis", um assistente de IA especialista em tributação brasileira. Sua principal fonte de conhecimento são os documentos fornecidos no contexto. Responda às perguntas de forma clara, informativa e profissional, priorizando sempre as informações contidas nesses documentos. Quando o contexto não for suficiente, use seu conhecimento geral e a busca na web para complementar a resposta. Sempre cite as fontes da web que utilizar.`;
const CODE_AGENT_PROMPT = `Você é um programador especialista sênior, fluente em Python e Delphi, com profundo conhecimento em regras tributárias e fiscais. Sua tarefa é gerar funções e trechos de código claros, eficientes e bem documentados para resolver problemas tributários. Sempre que possível, adicione comentários explicando a lógica e o cálculo fiscal implementado. Use blocos de código markdown para formatar sua resposta.`;
const SUGGESTION_AGENT_PROMPT = `Você é um especialista em otimização de buscas e prompts. Sua tarefa é analisar a pergunta do usuário e, em vez de respondê-la diretamente, sugerir 3 maneiras alternativas e mais eficazes de formular a mesma pergunta para obter melhores resultados de um assistente de IA fiscal. Apresente as sugestões em uma lista numerada, cada uma com uma breve explicação do porquê a nova formulação é melhor. Use markdown para formatar a lista.`;
async function generateEmbeddings(texts) {
    console.warn("Using mock embeddings. Replace with a real embedding model API call.");
    // Returning random vectors of a common dimension size (e.g., 768) for demonstration.
    return texts.map(()=>Array(768).fill(0).map(()=>Math.random() * 2 - 1));
}
async function generateTitle(query) {
    try {
        const prompt = `Gere um título curto e descritivo (3-5 palavras) para uma conversa que começa com a seguinte pergunta do usuário. Responda apenas com o título. Pergunta: "${query}"`;
        // Use ai.models.generateContent as per guidelines.
        const response = await ai.models.generateContent({
            model: GEMINI_FLASH,
            contents: prompt
        });
        // Extract text directly from response.text as per guidelines.
        // Clean up the response to remove potential quotes or newlines.
        return response.text.trim().replace(/["']/g, "");
    } catch (error) {
        console.error("Error generating title:", error);
        // Return a generic title or a snippet of the query as a fallback
        return query.substring(0, 30) + "...";
    }
}
async function generateResponse(modelName, prompt, useWebSearch = false) {
    // Construct config conditionally
    const config = {};
    if (useWebSearch) {
        config.tools = [
            {
                googleSearch: {}
            }
        ];
    }
    // Use ai.models.generateContent as per guidelines.
    const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config
    });
    // Extract text directly from response.text as per guidelines.
    const text = response.text;
    // Extract web sources from grounding metadata if web search was used
    const sources = [];
    if (useWebSearch) {
        const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
        if (groundingMetadata?.groundingChunks) {
            for (const chunk of groundingMetadata.groundingChunks){
                if (chunk.web) {
                    sources.push({
                        uri: chunk.web.uri,
                        title: chunk.web.title || chunk.web.uri
                    });
                }
            }
        }
    }
    // Deduplicate sources based on URI
    const uniqueSources = Array.from(new Map(sources.map((item)=>[
            item.uri,
            item
        ])).values());
    return {
        text,
        sources: uniqueSources
    };
}
}),
"[project]/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Adiciona a declaração para a biblioteca pdf.js carregada via CDN
__turbopack_context__.s([
    "processDocument",
    ()=>processDocument,
    "processText",
    ()=>processText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/geminiService.ts [app-ssr] (ecmascript)");
;
const CHUNK_SIZE = 1000; // characters
const CHUNK_OVERLAP = 200; // characters
/**
 * Lê um arquivo de texto e retorna seu conteúdo como uma string.
 */ async function readFileContent(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = (event)=>{
            resolve(event.target?.result);
        };
        reader.onerror = (error)=>{
            reject(error);
        };
        reader.readAsText(file);
    });
}
/**
 * Lê um arquivo PDF usando pdf.js e retorna seu conteúdo de texto como uma string.
 */ async function readPdfContent(file) {
    // Verificação de segurança para garantir que a biblioteca PDF foi carregada.
    if (typeof pdfjsLib === 'undefined' || typeof pdfjsLib.getDocument !== 'function') {
        throw new Error('A biblioteca PDF (pdf.js) não foi carregada corretamente. Verifique a conexão com a internet ou recarregue a página.');
    }
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = async (event)=>{
            if (!event.target?.result) {
                return reject(new Error('Falha ao ler o arquivo PDF.'));
            }
            try {
                const typedArray = new Uint8Array(event.target.result);
                // FIX: Passa os dados do PDF como um objeto para alinhar com a API do pdf.js e aumentar a robustez.
                const pdf = await pdfjsLib.getDocument({
                    data: typedArray
                }).promise;
                let fullText = '';
                for(let i = 1; i <= pdf.numPages; i++){
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    const pageText = textContent.items.map((item)=>item.str).join(' ');
                    fullText += pageText + '\n\n'; // Adiciona espaço entre as páginas para melhor separação
                }
                resolve(fullText.trim());
            } catch (error) {
                console.error("Erro ao analisar o PDF:", error);
                reject(new Error('O arquivo PDF está corrompido ou não pôde ser lido.'));
            }
        };
        reader.onerror = (error)=>{
            reject(error);
        };
        // pdf.js precisa de um ArrayBuffer
        reader.readAsArrayBuffer(file);
    });
}
/**
 * Divide um texto longo em pedaços menores e sobrepostos.
 */ function splitTextIntoChunks(text) {
    const chunks = [];
    if (!text) return chunks;
    let i = 0;
    while(i < text.length){
        const chunk = text.substring(i, i + CHUNK_SIZE);
        chunks.push(chunk);
        i += CHUNK_SIZE - CHUNK_OVERLAP;
    }
    return chunks;
}
async function processText(text, fileName, isDeletable) {
    const textChunks = splitTextIntoChunks(text);
    if (textChunks.length === 0) {
        return {
            id: `${fileName}-${Date.now()}`,
            name: fileName,
            chunks: [],
            isDeletable,
            content: text
        };
    }
    const embeddings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateEmbeddings"])(textChunks);
    const documentChunks = textChunks.map((chunkText, i)=>({
            text: chunkText,
            embedding: embeddings[i]
        }));
    return {
        id: `${fileName}-${Date.now()}`,
        name: fileName,
        chunks: documentChunks,
        isDeletable,
        content: text
    };
}
async function processDocument(file) {
    let text = '';
    const fileType = file.type;
    const fileName = file.name.toLowerCase();
    if (fileType === 'application/pdf' || fileName.endsWith('.pdf')) {
        text = await readPdfContent(file);
    } else if (fileType === 'text/plain' || fileType === 'text/markdown' || fileName.endsWith('.txt') || fileName.endsWith('.md')) {
        text = await readFileContent(file);
    } else {
        throw new Error('Tipo de arquivo não suportado. Por favor, envie .txt, .md ou .pdf.');
    }
    // Documentos enviados pelo usuário são sempre deletáveis
    return processText(text, file.name, true);
}
}),
"[project]/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cosineSimilarity",
    ()=>cosineSimilarity
]);
const cosineSimilarity = (vecA, vecB)=>{
    if (vecA.length !== vecB.length) {
        return 0;
    }
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for(let i = 0; i < vecA.length; i++){
        dotProduct += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }
    const denominator = Math.sqrt(normA) * Math.sqrt(normB);
    if (denominator === 0) {
        return 0;
    }
    return dotProduct / denominator;
};
}),
"[project]/initialKnowledge.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialKnowledgeText",
    ()=>initialKnowledgeText
]);
const initialKnowledgeText = `
Um "agente que tem conhecimento sobre tributação fiscal do Brasil" é um profissional ou uma empresa especializada em entender, interpretar e aplicar as complexas regras do sistema tributário brasileiro.

No Brasil, a tributação é notoriamente uma das mais complexas do mundo, envolvendo três esferas de governo (Federal, Estadual e Municipal), cada uma com seus próprios impostos, regras e prazos. Um agente com este conhecimento é, portanto, uma peça-chave para qualquer empresa ou até mesmo para pessoas físicas com patrimônio mais significativo.

Vamos detalhar o que este agente **é**, o que ele **faz** e o que ele **precisa saber**.

---

### 1. Quem é este Agente? (Os Perfis)

Este agente pode ser um profissional com diferentes formações, mas com uma especialização em tributos. Os mais comuns são:

*   **Contador / Empresa de Contabilidade:** É o profissional mais próximo do dia a dia das empresas. Responsável pela escrituração contábil, apuração dos impostos e entrega das obrigações acessórias.
*   **Advogado Tributarista:** Focado na interpretação da lei, na defesa do cliente em processos administrativos e judiciais (contencioso tributário) e na emissão de pareceres legais para operações complexas.
*   **Consultor Tributário:** Pode ser um contador, advogado ou economista com especialização. Geralmente atua de forma estratégica, focado em **planejamento tributário** para otimizar e reduzir a carga de impostos de forma legal.
*   **Auditor Fiscal (do lado do Fisco):** É o agente do governo que fiscaliza o cumprimento das obrigações tributárias. Conhecer seu trabalho é fundamental para se preparar para uma fiscalização.
*   **Gestor Financeiro / Empresário:** Embora não seja um especialista, um bom gestor precisa ter um conhecimento sólido dos basics de tributação para tomar decisões de negócio conscientes.

---

### 2. O que ele Faz? (As Principais Atividades)

As funções deste agente vão muito além de apenas "calcular e pagar impostos". Elas se dividem em áreas estratégicas e operacionais:

#### a) Planejamento Tributário
*   **O que é:** A atividade mais estratégica e valiosa. Consiste em estudar a legislação para encontrar a forma legal mais eficiente de uma empresa operar, pagando menos impostos sem sonegar.
*   **Exemplos:** Escolher o melhor regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real), estruturar operações de fusão e aquisição, decidir sobre a localização de uma nova fábrica (levando em conta os benefícios fiscais estaduais).

#### b) Compliance Tributário (Conformidade)
*   **O que é:** É a área operacional que garante que a empresa esteja em dia com todas as suas obrigações.
*   **Atividades:**
    *   Apurar e calcular os impostos (PIS, COFINS, IRPJ, ICMS, ISS, etc.).
    *   Preencher e entregar as declarações e obrigações acessórias (SPEDs, DCTF, GFIP, GIA, etc.).
    *   Emitir guias de pagamento (DARF, GARE, etc.) e garantir o pagamento dentro do prazo.
    *   Manter a documentação fiscal em ordem.

#### c) Contencioso Tributário
*   **O que é:** A área de defesa da empresa. Quando há uma autuação ou cobrança indevida por parte do Fisco, este agente atua para reverter a situação.
*   **Atividades:**
    *   Apresentar defesas administrativas.
    *   Negotiar parcelamentos de dívidas.
    *   Entrar com ações judiciais para discutir a cobrança de tributos.

#### d) Consultoria e Assessoria
*   **O que é:** Dar suporte ao dia a dia e a decisões específicas.
*   **Exemplos:** "Posso deduzir esta despesa?", "Qual o impacto tributário de vender este produto para outro estado?", "Como tratar este imposto na contabilidade?".

---

### 3. O que ele Precisa Saber? (O Conhecimento Essencial)

O conhecimento deste agente é vasto e precisa ser constantemente atualizado. Os pilares são:

*   **Sistema Tributário Nacional:** Entender a divisão de competências entre União, Estados e Municípios.
*   **Regimes Tributários:** Dominar as regras do **Simples Nacional**, **Lucro Presumido** e **Lucro Real**, sabendo qual a vantagem de cada um para um tipo específico de empresa.
*   **Principais Tributos:**
    *   **Federais:** IRPJ (Imposto de Renda da Pessoa Jurídrica), CSLL (Contribuição Social sobre o Lucro Líquido), PIS, COFINS, IPI (Imposto sobre Produtos Industrializados).
    *   **Estaduais:** ICMS (Imposto sobre Circulação de Mercadorias e Serviços).
    *   **Municipais:** ISS (Imposto Sobre Serviços).
*   **Obrigações Acessórias:** Conhecer a fundo o SPED (Sistema Público de Escrituração Digital) e suas vertentes (EFD-Contribuições, EFD-ICMS/IPI, ECF, etc.).
*   **Legislação e Jurisprudência:** A lei tributária muda constantemente. Além das leis, é preciso acompanhar as decisões dos tribunais (jurisprudência), que definem como a lei é interpretada na prática.
*   **Áreas Correlatas:** Ter noções de Contabilidade, Direito Empresarial e Finanças, pois a tributação impacta todas essas áreas.

---

### Conclusão: Por que este Agente é Fundamental?

No Brasil, ter um agente com conhecimento profundo em tributação não é um luxo, mas uma **necessidade estratégica**. Ele é fundamental para:

1.  **Evitar Multas e Juros:** O erro no cumprimento de uma obrigação pode gerar penalidades altíssimas.
2.  **Otimizar Custos:** Um bom planejamento pode reduzir a carga tributária, aumentando a competitividade e o lucro da empresa.
3.  **Garantir a Sustentabilidade:** A gestão tributária inadequada é uma das principais causas de falência de empresas no Brasil.
4.  **Proporcionar Segurança Jurídica:** Dar tranquilidade ao empresário para que ele possa focar no seu negócio, sabendo que a parte fiscal está sob controle.

Em resumo, este agente é o **navegador** que ajuda as empresas e indivíduos a atravessar o "mar revolto" da tributação brasileira de forma segura, eficiente e estratégica. É um investimento, não um custo.
`;
}),
"[project]/taxReformKnowledge.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "taxReformKnowledgeText",
    ()=>taxReformKnowledgeText
]);
const taxReformKnowledgeText = `
A nova reforma tributária brasileira, aprovada entre 2023 e 2025, configura-se como a maior mudança fiscal das últimas décadas e tem impacto significativo em praticamente todos os setores econômicos. Ela substitui os antigos tributos sobre consumo por novos impostos, simplificando a estrutura e promovendo maior transparência, porém trazendo desafios específicos para serviços, agronegócio, indústria e varejo[1][2][3].

### Principais Mudanças

- Os impostos federais PIS, Cofins e IPI, o estadual ICMS e o municipal ISS serão substituídos por dois novos tributos:
  - CBS (Contribuição sobre Bens e Serviços), federal.
  - IBS (Imposto sobre Bens e Serviços), com gestão compartilhada entre estados e municípios.
- Implementação do Imposto Seletivo (IS), incidente sobre bens e serviços nocivos à saúde ou ao meio ambiente (bebidas alcoólicas, cigarros, combustíveis fósseis).
- Fim da cumulatividade e ampliação do crédito financeiro para os tributos.
- Nova sistemática de cobrança no destino para operações entre estados, eliminando benefícios regionais e simplificando obrigações acessórias[1][3][4][5].

### Impacto nos Setores Econômicos

- **Serviços**: Tende a ser o mais impactado negativamente, pois atualmente usufrui de regimes simplificados e alíquotas menores. A nova alíquota geral, próxima de 25%, pode elevar significativamente o custo para empresas com pouca possibilidade de apropriação de créditos tributários (como advocacia, educação, saúde, tecnologia)[2][6][7].
- **Agronegócio**: Apesar de isenções para itens da cesta básica, outros insumos essenciais passarão a ser tributados, demandando readequação fiscal e controle de créditos.
- **Varejo**: Terá que investir em sistemas e compliance para lidar com os novos tributos e garantir o correto aproveitamento dos créditos fiscais. A transição oferece oportunidade competitiva para quem se adaptar rápido[2][4].
- **Transporte**: Mudanças na incidência territorial (de origem para destino) e eliminação de benefícios podem elevar custos do setor, exigindo reajuste de preços e modelos operacionais[2][8].

### Cronograma de Implantação

- **2023-2025**: Aprovação constitucional e regulamentação infraconstitucional.
- **2026**: Início da fase experimental, CBS e IBS com alíquotas simbólicas para testes nos sistemas das empresas.
- **2027**: Início do Imposto Seletivo (IS)[9][5][4].
- **Até 2033**: Transição gradual até extinção completa dos antigos tributos e consolidação do novo modelo, exigindo adaptação simultânea aos sistemas antigos e novos nos próximos anos[9][4].

### Novidades para Empresas

- Obrigatoriedade de atualizar sistemas fiscais, adaptar classificações de produto e processos internos.
- Maior fiscalização e risco de autuações para quem não respeitar as novas regras.
- Introdução do cashback, com devolução tributária para famílias de baixa renda, especialmente via IBS e CBS[10][5].

### Situação Atual e Próximos Passos

Em setembro de 2025, o Senado aprovou a segunda etapa da regulamentação, detalhando a operação e a distribuição dos impostos e criando o Comitê Gestor do IBS. O texto agora segue para aprovação final na Câmara e posterior sanção presidencial. As empresas precisam acompanhar a regulamentação complementar e já preparar migração de sistemas e processos[9][11][12].

***
A reforma tributária brasileira, portanto, mudará profundamente a lógica da tributação sobre consumo no país. A simplificação e ampliação de controles e créditos fiscais exigirão atualização tecnológica e estratégica por parte de todos os agentes econômicos — com impactos distintos conforme o perfil de cada atividade[1][3][2][9][5].

Citações:
[1] Reforma tributária 2025: o que pequenos negócios ... https://sebrae.com.br/sites/PortalSebrae/ufs/pe/artigos/reforma-tributaria-2025-o-que-pequenos-negocios-precisam-saber,6d772d5ec7b37910VgnVCM1000001b00320aRCRD
[2] Reforma Tributária: o impacto nos setores https://drfiscal.com.br/planejamento-e-gestao/reforma-tributaria-o-impacto-nos-setores/
[3] Reforma Tributária: quais as últimas atualizações em 2025 https://www.contabeis.com.br/noticias/71673/reforma-tributaria-quais-as-ultimas-atualizacoes-em-2025/
[4] Reforma Tributária 2025 - KPMG Brasil https://kpmg.com/br/pt/home/insights/2025/05/reforma-tributaria-2025-5-passos-essenciais-empresa-preparar.html
[5] Reforma tributária: veja o que muda com aprovação no ... https://fin.org.br/reforma-tributaria-veja-o-que-muda-com-aprovacao-no-senado/
[6] Quais setores serão mais afetados com a reforma tributária? https://portaldacontabilidade.clmcontroller.com.br/quais-setores-serao-mais-afetados-com-a-reforma-tributaria/
[7] Reforma tributária pode elevar custos e alterar ... https://fenacon.org.br/reforma-tributaria/reforma-tributaria-pode-elevar-custos-e-alterar-competitividade-do-setor-de-servicos/
[8] Reforma Tributária em prática: impactos e próximos passos https://lefosse.com/noticias/reforma-tributaria-em-pratica-impactos-e-proximos-passos/
[9] Cronograma reforma tributária: quando entra em vigor? https://blog.tecnospeed.com.br/cronograma-reforma-tributaria-quando-entra-em-vigor/
[10] Modificada, regulamentação da reforma tributária volta à ... https://www12.senado.leg.br/noticias/materias/2025/09/30/modificada-regulamentacao-da-reforma-tributaria-volta-a-camara
[11] Reforma Tributária Regulamentação — Ministério da Fazenda https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria
[12] Reforma Tributária: últimas atualizações de 2025 https://qive.com.br/blog/atualizacoes-reforma-tributaria/
[13] Reforma Tributária - Portal Gov.br https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria/apresentacoes/apresentacao-reforma-tributaria-para-o-brasil-crescer-ela-precisa-acontecer-02-8-2023
[14] Reforma Tributária: o que é e quais as mudanças para 2025 https://nsdocs.com.br/blog/reforma-tributaria
[15] Reforma Tributária - TOTVS - Espaço Legislação https://espacolegislacao.totvs.com/reforma-tributaria/
[16] Reforma Tributária 2025: Desafios e Impactos Econômicos ... https://www.ibmec.br/blog/conteudo-gratuito/reforma-tributaria-nos-moldes-dos-desafios-economicos-e-sociais-globais
[17] Reforma Tributária 2025: Impactos e Mudanças nas ... https://www.mantoanadvogados.com.br/blog/reforma-tributaria-2025-quais-mudancas-afetam-sua-empresa-/374
[18] Veja principais mudanças na reforma tributária aprovada ... https://www.cnnbrasil.com.br/economia/financas/veja-principais-mudancas-na-reforma-tributaria-aprovada-pelo-senado/
[19] Reforma Tributária – Perguntas e Respostas - Portal Gov.br https://www.gov.br/fazenda/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria/arquivos/perguntas-e-respostas-reforma-tributaria_.pdf
[20] Reforma Tributária 2025: principais pontos e o que falta ... https://www.taxgroup.com.br/intelligence/reforma-tributaria-2025-principais-pontos-e-o-que-falta-para-entrar-em-vigor/
`;
}),
"[project]/services/supabaseClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
// Supabase configuration for Next.js environment variables
const supabaseUrl = ("TURBOPACK compile-time value", "https://pmhztbcyyhcbvxlusxgp.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtaHp0YmN5eWhjYnZ4bHVzeGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NzgxOTksImV4cCI6MjA3NzU1NDE5OX0.KN0DhyAd129DWztqRglG-mZD5hK0rBWPxIm2RpBM4HA");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatStore",
    ()=>useChatStore,
    "useDocumentStore",
    ()=>useDocumentStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/geminiService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$initialKnowledge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/initialKnowledge.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$taxReformKnowledge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/taxReformKnowledge.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/supabaseClient.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const PRO_TOKEN_LIMIT = 32768; // Token limit for Gemini 2.5 Pro
const MAX_CONTEXT_CHUNKS = 5;
const PRO_TOKEN_THRESHOLD = 0.7; // Switch to flash at 70% usage
const CONVERSATION_CONTEXT_MESSAGES = 4; // Number of recent messages to use as context
const agentAliases = {
    web: "document",
    codigo: "code",
    sugestao: "suggestion"
};
// Escapa as aspas simples para uso dentro de uma string SQL.
const initialKnowledgeTextEscaped = __TURBOPACK__imported__module__$5b$project$5d2f$initialKnowledge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialKnowledgeText"].replace(/'/g, "''");
const taxReformKnowledgeTextEscaped = __TURBOPACK__imported__module__$5b$project$5d2f$taxReformKnowledge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["taxReformKnowledgeText"].replace(/'/g, "''");
/**
 * Script SQL para configurar as tabelas necessárias no Supabase com suporte multi-usuário (RLS).
 * É seguro executar este script várias vezes.
 */ const SETUP_SQL_SCRIPT = `-- Habilita a extensão uuid-ossp se ainda não estiver habilitada
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
 */ const generateSetupErrorMessage = (issue)=>`ERRO DE CONFIGURAÇÃO DO BANCO DE DADOS

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
 */ function getErrorMessage(error) {
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === "object" && error !== null) {
        const errObj = error;
        let fullMessage = errObj.message || "Ocorreu um erro desconhecido.";
        if (errObj.details) fullMessage += `\nDetalhes: ${errObj.details}`;
        if (errObj.hint) fullMessage += `\nHINT: ${errObj.hint}`;
        if (errObj.code) fullMessage += ` (Código: ${errObj.code})`;
        return fullMessage;
    }
    try {
        const stringified = JSON.stringify(error);
        return stringified === "{}" ? String(error) : stringified;
    } catch  {
        return String(error);
    }
}
const useDocumentStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        documents: [],
        isLoading: false,
        error: null,
        loadInitialDocuments: async ()=>{
            if (get().isLoading) return;
            set({
                isLoading: true,
                error: null
            });
            try {
                // A RLS irá filtrar para mostrar os documentos do usuário e os documentos públicos.
                // Os documentos públicos iniciais agora são criados pelo SETUP_SQL_SCRIPT.
                const { data: dbDocs, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("documents").select("*");
                if (fetchError) throw fetchError;
                const processedDocs = [];
                for (const dbDoc of dbDocs){
                    const processed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processText"])(dbDoc.content, dbDoc.name, dbDoc.is_deletable);
                    processed.id = dbDoc.id; // Manter o ID original do banco de dados
                    processed.content = dbDoc.content; // Adicionar o conteúdo completo
                    processedDocs.push(processed);
                }
                set({
                    documents: processedDocs
                });
            } catch (e) {
                const detail = getErrorMessage(e);
                let errorMessage = `Erro detalhado ao carregar documentos:\n${detail}`;
                const isSetupError = typeof detail === "string" && (detail.includes("relation") || detail.includes("does not exist") || detail.includes("violates row-level security policy"));
                if (isSetupError) {
                    errorMessage = generateSetupErrorMessage("A política de segurança (RLS) para `documents` pode estar ausente ou incorreta.");
                }
                set({
                    error: errorMessage
                });
                console.error("Erro detalhado ao carregar documentos:", e);
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        addDocument: async (file)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser(); // Get current user
                if (!user) throw new Error("Usuário não autenticado para adicionar documento.");
                const newDocument = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processDocument"])(file);
                if (newDocument.chunks.length === 0) {
                    throw new Error("O documento está vazio ou não pôde ser processado.");
                }
                const documentContent = newDocument.content || newDocument.chunks.map((c)=>c.text).join("");
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("documents").insert({
                    name: newDocument.name,
                    content: documentContent,
                    is_deletable: true,
                    user_id: user.id
                }).select().single();
                if (error) throw error;
                // Atualiza o documento em memória com o ID confirmado do banco de dados
                newDocument.id = data.id;
                set((state)=>({
                        documents: [
                            ...state.documents,
                            newDocument
                        ]
                    }));
            } catch (e) {
                const detail = getErrorMessage(e);
                set({
                    error: `Erro ao adicionar documento: ${detail}`
                });
                console.error("Error adding document:", e);
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        deleteDocument: async (id)=>{
            // A política RLS garante que o usuário só pode deletar seus próprios documentos.
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("documents").delete().match({
                id
            });
            if (error) {
                const detail = getErrorMessage(error);
                console.error("Error deleting document:", detail);
                set({
                    error: detail
                });
                return;
            }
            set((state)=>({
                    documents: state.documents.filter((doc)=>doc.id !== id)
                }));
        },
        renameDocument: async (id, newName)=>{
            // A política RLS garante que o usuário só pode renomear seus próprios documentos.
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("documents").update({
                name: newName
            }).match({
                id
            });
            if (error) {
                const detail = getErrorMessage(error);
                console.error("Error renaming document:", detail);
                set({
                    error: detail
                });
                return;
            }
            set((state)=>({
                    documents: state.documents.map((doc)=>doc.id === id ? {
                            ...doc,
                            name: newName
                        } : doc)
                }));
        }
    }));
// Helper to create a new conversation object
const createNewConversation = (title = "Nova Conversa")=>({
        id: crypto.randomUUID(),
        title,
        messages: [],
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
const useChatStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        documentConversations: {},
        codeConversations: {},
        suggestionConversations: {},
        activeDocumentConversationId: null,
        activeCodeConversationId: null,
        activeSuggestionConversationId: null,
        isLoading: false,
        activeAgent: "document",
        activeModel: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_FLASH"],
        proTokenCount: 0,
        proTokenLimit: PRO_TOKEN_LIMIT,
        // Auth initial state
        session: null,
        user: null,
        authLoading: true,
        authError: null,
        authMessage: null,
        // Auth methods
        initAuth: ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then(({ data: { session } })=>{
                set({
                    session,
                    user: session?.user ?? null,
                    authLoading: false
                });
            });
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange((_event, session)=>{
                set({
                    session,
                    user: session?.user ?? null,
                    authLoading: false
                });
            });
            return ()=>{
                subscription.unsubscribe();
            };
        },
        signUp: async (email, password, metadata)=>{
            set({
                authLoading: true,
                authError: null,
                authMessage: null
            });
            useDocumentStore.setState({
                error: null
            });
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
                email,
                password,
                options: {
                    data: metadata
                }
            });
            if (error) {
                const detail = getErrorMessage(error);
                const isSetupError = detail.toLowerCase().includes("database error saving new user") || detail.includes('violates row-level security policy for table "user_profiles"');
                if (isSetupError) {
                    const setupError = {
                        name: "DatabaseSetupError",
                        message: generateSetupErrorMessage("A criação de perfil de usuário falhou, indicando uma configuração de banco de dados incorreta ou políticas de RLS ausentes.")
                    };
                    set({
                        authLoading: false,
                        authError: setupError
                    });
                } else if (error.message.includes("User already registered")) {
                    const helpfulError = {
                        name: "UserAlreadyRegisteredError",
                        message: "Este e-mail já está cadastrado.\n\n" + "1. Se você ainda não ativou sua conta, por favor, verifique sua caixa de entrada e a pasta de spam para encontrar o e-mail de confirmação.\n\n" + '2. Se você já confirmou mas esqueceu a senha, utilize a opção "Esqueci minha senha" na tela de login.'
                    };
                    set({
                        authLoading: false,
                        authError: helpfulError
                    });
                } else {
                    set({
                        authLoading: false,
                        authError: error
                    });
                }
                return;
            }
            // Add helpful console log for debugging confirmation issues
            if (data.user && data.user.identities && data.user.identities.length === 0) {
                console.log("Cadastro enviado com sucesso. O usuário está aguardando confirmação por e-mail e ainda não aparecerá na tabela auth.users. Verifique o e-mail ou desative a confirmação de e-mail nas configurações de autenticação do Supabase.");
            }
            set({
                authLoading: false,
                authError: null,
                authMessage: "Cadastro realizado! Verifique seu e-mail para confirmar a conta e poder fazer o login."
            });
        },
        signIn: async (email, password)=>{
            set({
                authLoading: true,
                authError: null,
                authMessage: null
            });
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email,
                password
            });
            set({
                authLoading: false,
                authError: error || null
            });
        },
        signOut: async ()=>{
            set({
                authLoading: true,
                authError: null
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            set({
                session: null,
                user: null,
                authLoading: false,
                authError: null
            });
        },
        sendPasswordResetEmail: async (email)=>{
            set({
                authLoading: true,
                authError: null,
                authMessage: null
            });
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.resetPasswordForEmail(email, {
            });
            if (error) {
                set({
                    authLoading: false,
                    authError: error
                });
            } else {
                set({
                    authLoading: false,
                    authMessage: "Se o e-mail estiver correto, você receberá um link para redefinir sua senha em breve."
                });
            }
        },
        clearAuthFeedback: ()=>{
            set({
                authError: null,
                authMessage: null
            });
        },
        loadInitialData: async ()=>{
            set({
                isLoading: true
            });
            useDocumentStore.setState({
                error: null
            });
            await useDocumentStore.getState().loadInitialDocuments();
            if (useDocumentStore.getState().error) {
                set({
                    isLoading: false
                });
                return;
            }
            const user = get().user;
            if (user) {
                try {
                    // RLS on user_profiles ensures we only get the current user's profile.
                    const { data: profile, error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("user_profiles").select("user_id, full_name").eq("user_id", user.id).single();
                    const userMetadata = user.user_metadata;
                    if (profileError && profileError.code === "PGRST116" && userMetadata?.full_name) {
                        console.log("Perfil de usuário não encontrado. Criando agora...");
                        const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("user_profiles").insert({
                            user_id: user.id,
                            full_name: userMetadata.full_name,
                            user_type: userMetadata.user_type
                        });
                        if (insertError) throw insertError;
                    } else if (profileError && profileError.code !== "PGRST116") {
                        throw profileError;
                    }
                } catch (e) {
                    const detail = getErrorMessage(e);
                    const isSetupError = detail.includes('relation "public.user_profiles" does not exist') || detail.includes("column") && detail.includes("does not exist") || detail.includes("violates row-level security policy");
                    if (isSetupError) {
                        let reason = "tabela ausente";
                        if (detail.includes("column")) reason = "estrutura de coluna incorreta";
                        if (detail.includes("security policy")) reason = "políticas de segurança ausentes ou incorretas";
                        useDocumentStore.setState({
                            error: generateSetupErrorMessage(`user_profiles (${reason})`)
                        });
                        set({
                            isLoading: false
                        });
                        return; // Interrompe o carregamento se o BD não estiver configurado
                    }
                    console.error("Erro durante a verificação/criação do perfil:", detail);
                }
            }
            try {
                // RLS transparently filters these queries to the logged-in user.
                const { data: convos, error: convoError } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("conversations").select("*");
                if (convoError) throw convoError;
                const { data: messages, error: msgError } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages").select("*").order("created_at", {
                    ascending: true
                });
                if (msgError) throw msgError;
                const docConvos = {};
                const codeConvos = {};
                const suggestionConvos = {};
                for (const convo of convos){
                    const convoMessages = messages.filter((m)=>m.conversation_id === convo.id).map((m)=>({
                            id: m.id,
                            sender: m.sender,
                            text: m.text,
                            feedback: m.feedback,
                            sources: m.sources,
                            createdAt: new Date(m.created_at).getTime()
                        }));
                    const conversationObject = {
                        id: convo.id,
                        title: convo.title,
                        createdAt: new Date(convo.created_at).getTime(),
                        updatedAt: convo.updated_at ? new Date(convo.updated_at).getTime() : new Date(convo.created_at).getTime(),
                        messages: convoMessages
                    };
                    if (convo.agent_type === "document") {
                        docConvos[convo.id] = conversationObject;
                    } else if (convo.agent_type === "code") {
                        codeConvos[convo.id] = conversationObject;
                    } else if (convo.agent_type === "suggestion") {
                        suggestionConvos[convo.id] = conversationObject;
                    }
                }
                const sortConversations = (a, b)=>(b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt);
                const sortedDocIds = Object.values(docConvos).sort(sortConversations).map((c)=>c.id);
                const sortedCodeIds = Object.values(codeConvos).sort(sortConversations).map((c)=>c.id);
                const sortedSuggestionIds = Object.values(suggestionConvos).sort(sortConversations).map((c)=>c.id);
                set({
                    documentConversations: docConvos,
                    codeConversations: codeConvos,
                    suggestionConversations: suggestionConvos,
                    activeDocumentConversationId: sortedDocIds[0] || null,
                    activeCodeConversationId: sortedCodeIds[0] || null,
                    activeSuggestionConversationId: sortedSuggestionIds[0] || null
                });
                if (get().activeAgent === "document" && !get().activeDocumentConversationId) {
                    await get().startNewConversation("document");
                }
            } catch (e) {
                const detail = getErrorMessage(e);
                let errorMessage = `Erro ao carregar o histórico de conversas: ${detail}`;
                const isSetupError = typeof detail === "string" && (detail.includes("relation") || detail.includes("does not exist") || detail.includes("violates row-level security policy"));
                if (isSetupError) {
                    errorMessage = generateSetupErrorMessage("A política de segurança (RLS) para `conversations` ou `messages` pode estar ausente ou incorreta.");
                }
                useDocumentStore.setState({
                    error: errorMessage
                });
                console.error("Erro detalhado ao carregar conversas:", e);
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        setActiveAgent: (agent)=>{
            set({
                activeAgent: agent
            });
            const state = get();
            let shouldStartNew = false;
            switch(agent){
                case "document":
                    shouldStartNew = !state.activeDocumentConversationId || !state.documentConversations[state.activeDocumentConversationId];
                    break;
                case "code":
                    shouldStartNew = !state.activeCodeConversationId || !state.codeConversations[state.activeCodeConversationId];
                    break;
                case "suggestion":
                    shouldStartNew = !state.activeSuggestionConversationId || !state.suggestionConversations[state.activeSuggestionConversationId];
                    break;
            }
            if (shouldStartNew) {
                get().startNewConversation(agent);
            }
        },
        startNewConversation: async (agent)=>{
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user) {
                const errorMsg = "Usuário não autenticado. Não é possível criar uma nova conversa.";
                console.error(errorMsg);
                useDocumentStore.setState({
                    error: errorMsg
                });
                return;
            }
            const newConvo = createNewConversation();
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("conversations").insert({
                id: newConvo.id,
                user_id: user.id,
                title: newConvo.title,
                agent_type: agent,
                created_at: new Date(newConvo.createdAt).toISOString(),
                updated_at: new Date(newConvo.updatedAt).toISOString()
            });
            if (error) {
                const detail = getErrorMessage(error);
                console.error("Failed to create conversation:", detail);
                const isSetupError = typeof detail === "string" && (detail.includes("violates row-level security policy") || detail.includes("column") && detail.includes("does not exist") || detail.includes("PGRST204")); // Código de erro do Supabase para coluna não encontrada no cache do esquema
                if (isSetupError) {
                    const errorMessage = generateSetupErrorMessage("Falha ao criar conversa. A estrutura da tabela `conversations` parece estar desatualizada ou incorreta.");
                    useDocumentStore.setState({
                        error: errorMessage
                    });
                } else {
                    useDocumentStore.setState({
                        error: `Falha ao criar a conversa: ${detail}`
                    });
                }
                return;
            }
            switch(agent){
                case "document":
                    set((state)=>({
                            documentConversations: {
                                ...state.documentConversations,
                                [newConvo.id]: newConvo
                            },
                            activeDocumentConversationId: newConvo.id
                        }));
                    break;
                case "code":
                    set((state)=>({
                            codeConversations: {
                                ...state.codeConversations,
                                [newConvo.id]: newConvo
                            },
                            activeCodeConversationId: newConvo.id
                        }));
                    break;
                case "suggestion":
                    set((state)=>({
                            suggestionConversations: {
                                ...state.suggestionConversations,
                                [newConvo.id]: newConvo
                            },
                            activeSuggestionConversationId: newConvo.id
                        }));
                    break;
            }
        },
        deleteConversation: async (agent, conversationId)=>{
            let conversationKey = null;
            let activeIdKey = null;
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
            const originalConversations = get()[conversationKey];
            const originalActiveId = get()[activeIdKey];
            const updatedConversations = {
                ...originalConversations
            };
            delete updatedConversations[conversationId];
            let newActiveId = originalActiveId;
            if (newActiveId === conversationId) {
                const remainingIds = Object.values(updatedConversations).sort((a, b)=>(b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt)).map((c)=>c.id);
                newActiveId = remainingIds[0] || null;
            }
            set({
                [conversationKey]: updatedConversations,
                [activeIdKey]: newActiveId
            });
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("conversations").delete().match({
                id: conversationId
            });
            if (error) {
                const detail = getErrorMessage(error);
                console.error("Failed to delete conversation:", detail);
                useDocumentStore.setState({
                    error: `Falha ao excluir a conversa: ${detail}`
                });
                set({
                    [conversationKey]: originalConversations,
                    [activeIdKey]: originalActiveId
                });
            }
            if (Object.keys(get()[conversationKey]).length === 0) {
                get().startNewConversation(agent);
            }
        },
        setActiveConversation: (agent, conversationId)=>{
            switch(agent){
                case "document":
                    set({
                        activeDocumentConversationId: conversationId
                    });
                    break;
                case "code":
                    set({
                        activeCodeConversationId: conversationId
                    });
                    break;
                case "suggestion":
                    set({
                        activeSuggestionConversationId: conversationId
                    });
                    break;
            }
        },
        setMessageFeedback: async (agent, conversationId, messageId, feedback)=>{
            let conversationKey = null;
            if (agent === "document") conversationKey = "documentConversations";
            else if (agent === "code") conversationKey = "codeConversations";
            else if (agent === "suggestion") conversationKey = "suggestionConversations";
            if (!conversationKey) return;
            const conversations = get()[conversationKey];
            const conversation = conversations[conversationId];
            if (!conversation) return;
            const message = conversation.messages.find((m)=>m.id === messageId);
            if (!message) return;
            const newFeedback = message.feedback === feedback ? null : feedback;
            const updatedMessages = conversation.messages.map((msg)=>msg.id === messageId ? {
                    ...msg,
                    feedback: newFeedback
                } : msg);
            set((state)=>({
                    [conversationKey]: {
                        ...state[conversationKey],
                        [conversationId]: {
                            ...conversation,
                            messages: updatedMessages
                        }
                    }
                }));
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages").update({
                feedback: newFeedback
            }).match({
                id: messageId
            });
            if (error) {
                const detail = getErrorMessage(error);
                console.error("Failed to set feedback:", detail);
                useDocumentStore.setState({
                    error: `Falha ao salvar o feedback: ${detail}`
                });
                set((state)=>({
                        [conversationKey]: {
                            ...state[conversationKey],
                            [conversationId]: {
                                ...conversation,
                                messages: conversation.messages
                            }
                        }
                    }));
            }
        },
        sendMessage: async (userInput, documents)=>{
            const originalUserInput = userInput.trim();
            if (!originalUserInput) return;
            const currentError = useDocumentStore.getState().error;
            if (currentError && !currentError.includes("ERRO DE CONFIGURAÇÃO DO BANCO DE DADOS")) {
                useDocumentStore.setState({
                    error: null
                });
            }
            const user = get().user;
            if (!user) {
                const errorMsg = "Usuário não autenticado. A mensagem não pode ser enviada. Por favor, faça o login novamente.";
                console.error(errorMsg);
                useDocumentStore.setState({
                    error: errorMsg
                });
                set({
                    isLoading: false
                });
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
                set({
                    activeAgent: agentForThisMessage
                });
            }
            const activeAgent = get().activeAgent;
            let activeConversationId;
            let conversationKey;
            switch(activeAgent){
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
                activeConversationId = get()[`active${activeAgent.charAt(0).toUpperCase() + activeAgent.slice(1)}ConversationId`];
                if (!activeConversationId) {
                    console.error("Failed to create or find an active conversation.");
                    useDocumentStore.setState({
                        error: "Falha ao criar ou encontrar uma conversa ativa."
                    });
                    return;
                }
            }
            const isNewConversation = (get()[conversationKey][activeConversationId]?.messages.length ?? 0) === 0;
            const userMessage = {
                id: crypto.randomUUID(),
                sender: "user",
                text: finalUserInput,
                createdAt: Date.now()
            };
            set((state)=>{
                const conversations = state[conversationKey];
                const currentConvo = conversations?.[activeConversationId];
                if (currentConvo) {
                    return {
                        [conversationKey]: {
                            ...conversations,
                            [activeConversationId]: {
                                ...currentConvo,
                                messages: [
                                    ...currentConvo.messages,
                                    userMessage
                                ]
                            }
                        }
                    };
                }
                return state;
            });
            set({
                isLoading: true
            });
            const { error: userMsgError } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages").insert({
                id: userMessage.id,
                conversation_id: activeConversationId,
                sender: "user",
                text: finalUserInput,
                sources: null,
                created_at: new Date(userMessage.createdAt).toISOString(),
                user_id: user.id
            });
            if (userMsgError) {
                const detail = getErrorMessage(userMsgError);
                console.error("Failed to save user message:", detail);
                useDocumentStore.setState({
                    error: `Falha ao salvar sua mensagem: ${detail}`
                });
            }
            if (isNewConversation) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateTitle"])(finalUserInput).then(async (title)=>{
                    const finalTitle = title || finalUserInput.substring(0, 30);
                    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("conversations").update({
                        title: finalTitle,
                        user_id: user.id
                    }).match({
                        id: activeConversationId
                    });
                    if (error) {
                        const detail = getErrorMessage(error);
                        console.error("Failed to update title:", detail);
                        useDocumentStore.setState({
                            error: `Falha ao atualizar o título: ${detail}`
                        });
                    }
                    set((state)=>{
                        const conversations = state[conversationKey];
                        const currentConvo = conversations?.[activeConversationId];
                        if (currentConvo) {
                            return {
                                [conversationKey]: {
                                    ...conversations,
                                    [activeConversationId]: {
                                        ...currentConvo,
                                        title: finalTitle
                                    }
                                }
                            };
                        }
                        return state;
                    });
                });
            }
            let context = "";
            let prompt = finalUserInput;
            let preferredModel = __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_FLASH"];
            let useWebSearch = false;
            try {
                if (activeAgent === "document" && documents.length > 0) {
                    const queryEmbedding = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateEmbeddings"])([
                        finalUserInput
                    ]))[0];
                    const allChunks = documents.flatMap((doc)=>doc.chunks);
                    if (allChunks.length > 0 && queryEmbedding) {
                        const chunksWithSimilarity = allChunks.map((chunk)=>({
                                ...chunk,
                                similarity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cosineSimilarity"])(queryEmbedding, chunk.embedding)
                            })).sort((a, b)=>b.similarity - a.similarity);
                        const lambda = 0.7;
                        const relevantChunks = [];
                        let candidates = chunksWithSimilarity;
                        if (candidates.length > 0) {
                            relevantChunks.push(candidates[0]);
                            candidates = candidates.slice(1);
                            while(relevantChunks.length < MAX_CONTEXT_CHUNKS && candidates.length > 0){
                                let bestCandidateIndex = -1;
                                let maxMmrScore = -Infinity;
                                for(let i = 0; i < candidates.length; i++){
                                    const candidate = candidates[i];
                                    const similarityToQuery = candidate.similarity;
                                    const maxSimilarityToSelected = Math.max(...relevantChunks.map((selected)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cosineSimilarity"])(candidate.embedding, selected.embedding)));
                                    const mmrScore = lambda * similarityToQuery - (1 - lambda) * maxSimilarityToSelected;
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
                            context = relevantChunks.map((chunk)=>chunk.text).join("\n\n---\n\n");
                        }
                    }
                }
                if (activeAgent === "document") {
                    useWebSearch = true;
                    if (context) {
                        preferredModel = __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_PRO"];
                        prompt = `${__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOCUMENT_AGENT_PROMPT"]}\n\nCom base no seguinte contexto recuperado de seus documentos de conhecimento, responda à pergunta do usuário. Priorize estritamente as informações do contexto. Se o contexto não for suficiente, indique isso e use a busca na web para complementar.\n\nContexto:\n${context}\n\n---\n\nPergunta do usuário: ${finalUserInput}`;
                    } else {
                        preferredModel = __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_FLASH"];
                        prompt = `${__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOCUMENT_AGENT_PROMPT"]}\n\nResponda à pergunta do usuário usando seu conhecimento fundamental e a busca na web, pois nenhum contexto relevante foi encontrado nos documentos enviados. Sempre cite as fontes da web que utilizar.\n\nPergunta: ${finalUserInput}`;
                    }
                } else if (activeAgent === "code") {
                    preferredModel = __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_PRO"];
                    let conversationContext = "";
                    const currentConvo = get()[conversationKey][activeConversationId];
                    if (currentConvo && currentConvo.messages.length > 1) {
                        const conversationHistory = currentConvo.messages.slice(0, -1);
                        const recentMessages = conversationHistory.slice(-CONVERSATION_CONTEXT_MESSAGES);
                        if (recentMessages.length > 0) {
                            const historyText = recentMessages.map((msg)=>`${msg.sender === "user" ? "Usuário" : "Assistente"}: ${msg.text}`).join("\n");
                            conversationContext = `Considere o histórico recente desta conversa como contexto:\n\n--- HISTÓRICO DA CONVERSA ---\n${historyText}\n--- FIM DO HISTÓRICO ---\n\n`;
                        }
                    }
                    prompt = `${__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CODE_AGENT_PROMPT"]}\n\n${conversationContext}Tarefa do usuário: ${finalUserInput}`;
                } else if (activeAgent === "suggestion") {
                    preferredModel = __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_FLASH"];
                    prompt = `${__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUGGESTION_AGENT_PROMPT"]}\n\nPergunta do usuário para melhorar: "${finalUserInput}"`;
                    useWebSearch = false;
                }
                const proTokenCount = get().proTokenCount + prompt.length / 4;
                set({
                    proTokenCount
                });
                let modelToUse = preferredModel;
                if (preferredModel === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_PRO"] && proTokenCount > PRO_TOKEN_LIMIT * PRO_TOKEN_THRESHOLD) {
                    modelToUse = __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_FLASH"];
                    console.warn(`Token limit for ${__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_PRO"]} is approaching. Switching to ${__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_FLASH"]} for this request.`);
                }
                set({
                    activeModel: modelToUse
                });
                const { text, sources } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateResponse"])(modelToUse, prompt, useWebSearch);
                const now = Date.now();
                const botMessage = {
                    id: crypto.randomUUID(),
                    sender: "bot",
                    text,
                    sources,
                    createdAt: now
                };
                const { error: botMsgError } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages").insert({
                    id: botMessage.id,
                    conversation_id: activeConversationId,
                    sender: "bot",
                    text: botMessage.text,
                    sources: botMessage.sources,
                    created_at: new Date(botMessage.createdAt).toISOString(),
                    user_id: user.id
                });
                if (botMsgError) {
                    const detail = getErrorMessage(botMsgError);
                    console.error("Failed to save bot message:", detail);
                    useDocumentStore.setState({
                        error: `Falha ao salvar a resposta do assistente: ${detail}`
                    });
                }
                const { error: convoUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("conversations").update({
                    updated_at: new Date(now).toISOString()
                }).match({
                    id: activeConversationId
                });
                if (convoUpdateError) {
                    console.error("Failed to update conversation timestamp:", getErrorMessage(convoUpdateError));
                }
                set((state)=>{
                    const conversations = state[conversationKey];
                    const currentConvo = conversations?.[activeConversationId];
                    if (currentConvo) {
                        return {
                            [conversationKey]: {
                                ...conversations,
                                [activeConversationId]: {
                                    ...currentConvo,
                                    messages: [
                                        ...currentConvo.messages,
                                        botMessage
                                    ],
                                    updatedAt: now
                                }
                            }
                        };
                    }
                    return state;
                });
            } catch (e) {
                const detail = getErrorMessage(e);
                console.error("Error generating response:", detail);
                const errorTime = Date.now();
                const errorMessage = {
                    id: crypto.randomUUID(),
                    sender: "bot",
                    text: `Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.\n\nDetalhes do erro:\n\`\`\`\n${detail}\n\`\`\``,
                    createdAt: errorTime
                };
                const { error: convoUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("conversations").update({
                    updated_at: new Date(errorTime).toISOString()
                }).match({
                    id: activeConversationId
                });
                if (convoUpdateError) {
                    console.error("Failed to update conversation timestamp on error:", getErrorMessage(convoUpdateError));
                }
                set((state)=>{
                    const conversations = state[conversationKey];
                    const currentConvo = conversations?.[activeConversationId];
                    if (currentConvo) {
                        return {
                            [conversationKey]: {
                                ...conversations,
                                [activeConversationId]: {
                                    ...currentConvo,
                                    messages: [
                                        ...currentConvo.messages,
                                        errorMessage
                                    ],
                                    updatedAt: errorTime
                                }
                            }
                        };
                    }
                    return state;
                });
            } finally{
                set({
                    isLoading: false
                });
            }
        }
    }));
}),
"[project]/components/icons/BotIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BotIcon",
    ()=>BotIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const BotIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-label": "Ícone do Robô",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a2 2 0 0 1 2 2v2h-4V4a2 2 0 0 1 2-2zM4.636 8.364A9 9 0 0 1 12 4a9 9 0 0 1 7.364 4.364L20 10v6a2 2 0 0 1-2 2h-1.586l-1.707-1.707A4.002 4.002 0 0 0 12 15a4.002 4.002 0 0 0-2.707 1.293L7.586 18H6a2 2 0 0 1-2-2v-6l.636-1.636zM9 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
            }, void 0, false, {
                fileName: "[project]/components/icons/BotIcon.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 20h14a1 1 0 0 1 1 1v1H4v-1a1 1 0 0 1 1-1z"
            }, void 0, false, {
                fileName: "[project]/components/icons/BotIcon.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons/BotIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/UserIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserIcon",
    ()=>UserIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const UserIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/components/icons/UserIcon.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/UserIcon.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/ClipboardIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClipboardIcon",
    ()=>ClipboardIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ClipboardIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a2.25 2.25 0 0 1-2.25 2.25H9.75A2.25 2.25 0 0 1 7.5 4.5v0a2.25 2.25 0 0 1 2.25-2.25h3.879a2.25 2.25 0 0 1 1.95.879Z"
            }, void 0, false, {
                fileName: "[project]/components/icons/ClipboardIcon.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 11.25h6M9 13.5h6M9 15.75h6M4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V5.25c0-1.076-.874-1.95-1.95-1.95H7.2a1.95 1.95 0 0 0-1.95 1.95Z"
            }, void 0, false, {
                fileName: "[project]/components/icons/ClipboardIcon.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons/ClipboardIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/CheckIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckIcon",
    ()=>CheckIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const CheckIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m4.5 12.75 6 6 9-13.5"
        }, void 0, false, {
            fileName: "[project]/components/icons/CheckIcon.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/CheckIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/SaveIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveIcon",
    ()=>SaveIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const SaveIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        }, void 0, false, {
            fileName: "[project]/components/icons/SaveIcon.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/SaveIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/CodeBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$ClipboardIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/ClipboardIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CheckIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/CheckIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SaveIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/SaveIcon.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const CodeBlock = ({ language, code })=>{
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(code).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000); // Reset after 2 seconds
        });
    };
    // Mapeia identificadores comuns de linguagem para extensões de arquivo
    const languageToFileExtension = {
        python: 'py',
        py: 'py',
        javascript: 'js',
        js: 'js',
        typescript: 'ts',
        ts: 'ts',
        html: 'html',
        css: 'css',
        json: 'json',
        delphi: 'pas',
        pascal: 'pas'
    };
    const fileExtension = languageToFileExtension[language.toLowerCase()];
    const handleSave = ()=>{
        // Usa um tipo MIME genérico de texto/plano para o blob
        const blob = new Blob([
            code
        ], {
            type: 'text/plain;charset=utf-8'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        // Usa a extensão determinada para o nome do arquivo, com fallback para .txt se desconhecida
        a.download = `codigo_gerado_${Date.now()}.${fileExtension || 'txt'}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    // O botão de salvar agora aparecerá para qualquer linguagem com uma extensão mapeada.
    const canSave = !!fileExtension;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-4 rounded-lg bg-gray-900 dark:bg-black overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-gray-400 uppercase",
                        children: language
                    }, void 0, false, {
                        fileName: "[project]/components/CodeBlock.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            canSave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SaveIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SaveIcon"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CodeBlock.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Salvar .",
                                    fileExtension
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CodeBlock.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCopy,
                                className: "flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CheckIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckIcon"], {
                                            className: "w-4 h-4 text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CodeBlock.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Copiado!"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$ClipboardIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClipboardIcon"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CodeBlock.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Copiar"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/CodeBlock.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CodeBlock.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/CodeBlock.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "p-4 text-sm text-white overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: code
                }, void 0, false, {
                    fileName: "[project]/components/CodeBlock.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/CodeBlock.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/CodeBlock.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CodeBlock;
}),
"[project]/components/icons/ThumbsUpIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThumbsUpIcon",
    ()=>ThumbsUpIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ThumbsUpIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.516.372-.658.232-.142.518-.142.75 0l1.823.912a.75.75 0 01.428.656V8.25c0 .285.11.55.293.742l3.08 2.923c.34.323.527.773.527 1.246v1.757a2.25 2.25 0 01-2.25 2.25H9.75a.75.75 0 01-.75-.75V8.25a.75.75 0 00-.75-.75h-.5a.75.75 0 00-.75.75v5.02c0 .357-.184.686-.488.869l-2.096 1.258A.75.75 0 013.5 15.25V8.25a.75.75 0 01.75-.75h2a.75.75 0 01.75.75v2.25c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V3z"
        }, void 0, false, {
            fileName: "[project]/components/icons/ThumbsUpIcon.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/ThumbsUpIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/ThumbsDownIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThumbsDownIcon",
    ()=>ThumbsDownIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ThumbsDownIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 11.75a1.25 1.25 0 102.5 0V4.25a1.25 1.25 0 10-2.5 0v7.5zM11 17v1.3c0 .268-.14.516-.372.658-.232.142-.518.142-.75 0l-1.823-.912a.75.75 0 01-.428-.656V11.75a.75.75 0 00-.293-.742l-3.08-2.923A2.25 2.25 0 014.25 7V5.243a2.25 2.25 0 012.25-2.25H9.25a.75.75 0 01.75.75v7.5a.75.75 0 00.75.75h.5a.75.75 0 00.75-.75V6.48c0-.357.184-.686.488-.869l2.096-1.258a.75.75 0 011.012.82V11.75a.75.75 0 01-.75.75h-2a.75.75 0 01-.75-.75V8.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75V17z"
        }, void 0, false, {
            fileName: "[project]/components/icons/ThumbsDownIcon.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/ThumbsDownIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/ChatMessage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$BotIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/BotIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$UserIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/UserIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CodeBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$ThumbsUpIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/ThumbsUpIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$ThumbsDownIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/ThumbsDownIcon.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Regex to find markdown code blocks
const codeBlockRegex = /```(\w+)?\n([\s\S]+?)```/g;
const ChatMessage = ({ message, onFeedback })=>{
    const { sender, text, sources, feedback } = message;
    const isBot = sender === 'bot';
    const renderContent = ()=>{
        const parts = [];
        let lastIndex = 0;
        let match;
        while((match = codeBlockRegex.exec(text)) !== null){
            // Add text before the code block
            if (match.index > lastIndex) {
                parts.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap",
                    children: text.slice(lastIndex, match.index)
                }, `text-${lastIndex}`, false, {
                    fileName: "[project]/components/ChatMessage.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)));
            }
            const language = match[1] || 'text';
            const code = match[2];
            parts.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CodeBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                language: language,
                code: code
            }, `code-${match.index}`, false, {
                fileName: "[project]/components/ChatMessage.tsx",
                lineNumber: 39,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)));
            lastIndex = match.index + match[0].length;
        }
        // Add any remaining text after the last code block
        if (lastIndex < text.length) {
            parts.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap",
                children: text.slice(lastIndex)
            }, `text-${lastIndex}`, false, {
                fileName: "[project]/components/ChatMessage.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)));
        }
        return parts.length > 0 ? parts : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap",
            children: text
        }, void 0, false, {
            fileName: "[project]/components/ChatMessage.tsx",
            lineNumber: 53,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-start gap-4 my-6 ${!isBot ? 'flex-row-reverse' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isBot ? 'bg-gray-200 dark:bg-gray-700' : 'bg-blue-600 text-white'}`,
                children: isBot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$BotIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BotIcon"], {
                    className: "w-6 h-6 text-gray-600 dark:text-gray-300"
                }, void 0, false, {
                    fileName: "[project]/components/ChatMessage.tsx",
                    lineNumber: 59,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$UserIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIcon"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/components/ChatMessage.tsx",
                    lineNumber: 59,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ChatMessage.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-4 rounded-lg max-w-2xl shadow ${isBot ? 'bg-white dark:bg-gray-800' : 'bg-blue-500 text-white'}`,
                children: [
                    renderContent(),
                    sources && sources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 border-t border-gray-200 dark:border-gray-700 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2",
                                children: "Fontes:"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatMessage.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1",
                                children: sources.map((source, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500 dark:text-gray-400 text-xs mr-2",
                                                children: [
                                                    index + 1,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatMessage.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: source.uri,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-blue-600 dark:text-blue-400 hover:underline text-sm truncate",
                                                title: source.uri,
                                                children: source.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatMessage.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/ChatMessage.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/ChatMessage.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatMessage.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isBot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-3 flex items-center gap-2 ${sources && sources.length > 0 ? 'pt-3 border-t border-gray-200 dark:border-gray-700' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400 mr-auto",
                                children: "Avalie esta resposta:"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatMessage.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onFeedback('good'),
                                className: `p-1.5 rounded-full transition-colors ${feedback === 'good' ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' : 'text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'}`,
                                "aria-label": "Resposta boa",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$ThumbsUpIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThumbsUpIcon"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatMessage.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ChatMessage.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onFeedback('bad'),
                                className: `p-1.5 rounded-full transition-colors ${feedback === 'bad' ? 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400' : 'text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'}`,
                                "aria-label": "Resposta ruim",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$ThumbsDownIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThumbsDownIcon"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatMessage.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ChatMessage.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatMessage.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatMessage.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatMessage.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ChatMessage;
}),
"[project]/components/icons/SendIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SendIcon",
    ()=>SendIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const SendIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
        }, void 0, false, {
            fileName: "[project]/components/icons/SendIcon.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/SendIcon.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/PaperclipIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaperclipIcon",
    ()=>PaperclipIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const PaperclipIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.122 2.122l7.81-7.81"
        }, void 0, false, {
            fileName: "[project]/components/icons/PaperclipIcon.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/PaperclipIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/suggestions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "codeAgentSuggestions",
    ()=>codeAgentSuggestions,
    "documentAgentSuggestions",
    ()=>documentAgentSuggestions,
    "suggestionAgentSuggestions",
    ()=>suggestionAgentSuggestions
]);
const documentAgentSuggestions = [
    "O que muda com a nova Reforma Tributária para o setor de serviços?",
    "Como funciona o regime de Lucro Presumido?",
    "Quais são os principais impostos federais no Brasil?",
    "Explique o que é o SPED Fiscal."
];
const codeAgentSuggestions = [
    "Gere uma função em Python para calcular o ICMS em uma venda interestadual.",
    "Escreva um trecho de código em Delphi para validar um CNPJ.",
    "Crie uma função Python que retorne a alíquota do ISS para um serviço em São Paulo.",
    "Mostre um exemplo de como gerar um XML de NF-e em Python."
];
const suggestionAgentSuggestions = [
    "Melhore a pergunta: 'impostos sobre software'",
    "Como posso perguntar sobre créditos de PIS/COFINS de forma mais eficaz?",
    "Otimize minha dúvida sobre a tributação de serviços exportados.",
    "Sugira alternativas para a pergunta: 'reforma tributária'"
];
}),
"[project]/components/icons/CodeBracketIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBracketIcon",
    ()=>CodeBracketIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const CodeBracketIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 15"
        }, void 0, false, {
            fileName: "[project]/components/icons/CodeBracketIcon.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/CodeBracketIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/WebIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebIcon",
    ()=>WebIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const WebIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            }, void 0, false, {
                fileName: "[project]/components/icons/WebIcon.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3.75 12h16.5m-16.5 3.75a9.023 9.023 0 0 1 0-7.5M12 3.75c1.62 3.32 1.62 7.18 0 10.5"
            }, void 0, false, {
                fileName: "[project]/components/icons/WebIcon.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons/WebIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/LightbulbIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightbulbIcon",
    ()=>LightbulbIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const LightbulbIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-4.5 6.01 6.01 0 0 0-1.5-4.5m0 9a6.01 6.01 0 0 1-1.5-4.5 6.01 6.01 0 0 1 1.5-4.5M12 6.75v-1.5m0 12.75a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z"
        }, void 0, false, {
            fileName: "[project]/components/icons/LightbulbIcon.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/LightbulbIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/ChatInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store.ts [app-ssr] (ecmascript)"); // Import store
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SendIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/SendIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$PaperclipIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/PaperclipIcon.tsx [app-ssr] (ecmascript)");
// FIX: Import suggestionAgentSuggestions to provide suggestions based on the active agent.
var __TURBOPACK__imported__module__$5b$project$5d2f$suggestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/suggestions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CodeBracketIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/CodeBracketIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$WebIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/WebIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$LightbulbIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/LightbulbIcon.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const ChatInput = ({ onSendMessage, onUploadClick, isLoading, activeAgent })=>{
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setActiveAgent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatStore"])((state)=>state.setActiveAgent);
    const commands = [
        {
            name: 'Pesquisa na web',
            description: 'Mudar para o agente de documentos.',
            agent: 'document',
            alias: 'web',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$WebIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebIcon"], {
                className: "w-5 h-5 mr-3 text-green-500 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/components/ChatInput.tsx",
                lineNumber: 33,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: 'Gerar Código',
            description: 'Mudar para o agente de programação.',
            agent: 'code',
            alias: 'codigo',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CodeBracketIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CodeBracketIcon"], {
                className: "w-5 h-5 mr-3 text-blue-500 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/components/ChatInput.tsx",
                lineNumber: 40,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: 'Sugestão',
            description: 'Melhorar a sua pergunta.',
            agent: 'suggestion',
            alias: 'sugestao',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$LightbulbIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightbulbIcon"], {
                className: "w-5 h-5 mr-3 text-yellow-500 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/components/ChatInput.tsx",
                lineNumber: 47,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    const filteredCommands = commands.filter((cmd)=>cmd.name.toLowerCase().includes(input.substring(1).toLowerCase()) || cmd.alias.toLowerCase().includes(input.substring(1).toLowerCase()));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // FIX: Determine which set of suggestions to use based on the active agent and use it to filter suggestions. This resolves the 'allSuggestions is not defined' error.
        let allSuggestions = [];
        switch(activeAgent){
            case 'document':
                allSuggestions = __TURBOPACK__imported__module__$5b$project$5d2f$suggestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["documentAgentSuggestions"];
                break;
            case 'code':
                allSuggestions = __TURBOPACK__imported__module__$5b$project$5d2f$suggestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codeAgentSuggestions"];
                break;
            case 'suggestion':
                allSuggestions = __TURBOPACK__imported__module__$5b$project$5d2f$suggestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["suggestionAgentSuggestions"];
                break;
        }
        // Command Palette Logic
        if (input.startsWith('@') && !input.includes(' ')) {
            setIsCommandPaletteOpen(true);
            setSuggestions([]);
            setActiveSuggestionIndex(0); // Default to the first command
            return;
        }
        setIsCommandPaletteOpen(false);
        // Regular Suggestions Logic
        if (input.trim().length > 0 && !input.startsWith('@')) {
            const filtered = allSuggestions.filter((s)=>s.toLowerCase().includes(input.toLowerCase()));
            setSuggestions(filtered.slice(0, 5)); // Show up to 5 suggestions
        } else {
            setSuggestions([]);
        }
        setActiveSuggestionIndex(-1); // Reset selection when input changes
    }, [
        input,
        activeAgent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [
        input
    ]);
    const handleSendMessage = (message)=>{
        if (message.trim() && !isLoading) {
            onSendMessage(message.trim());
            setInput('');
            setSuggestions([]);
        }
    };
    const handleCommandSelect = (agent, alias)=>{
        setActiveAgent(agent);
        setInput(`@${alias} `);
        setIsCommandPaletteOpen(false);
        textareaRef.current?.focus();
    };
    const handleSuggestionClick = (suggestion)=>{
        handleSendMessage(suggestion);
    };
    const handleKeyDown = (e)=>{
        if (isCommandPaletteOpen && filteredCommands.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveSuggestionIndex((prev)=>(prev + 1) % filteredCommands.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveSuggestionIndex((prev)=>(prev - 1 + filteredCommands.length) % filteredCommands.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredCommands[activeSuggestionIndex]) {
                    const { agent, alias } = filteredCommands[activeSuggestionIndex];
                    handleCommandSelect(agent, alias);
                }
            } else if (e.key === 'Escape') {
                setIsCommandPaletteOpen(false);
                setInput('');
            }
            return;
        }
        if (suggestions.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveSuggestionIndex((prev)=>(prev + 1) % suggestions.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveSuggestionIndex((prev)=>(prev - 1 + suggestions.length) % suggestions.length);
            } else if (e.key === 'Enter' && activeSuggestionIndex > -1) {
                e.preventDefault();
                handleSendMessage(suggestions[activeSuggestionIndex]);
            } else if (e.key === 'Escape') {
                setSuggestions([]);
            }
        }
        if (e.key === 'Enter' && !e.shiftKey && activeSuggestionIndex === -1) {
            e.preventDefault();
            handleSendMessage(input);
        }
    };
    const renderCommandPalette = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-full mb-2 w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "px-2 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400",
                    children: "AGENTES"
                }, void 0, false, {
                    fileName: "[project]/components/ChatInput.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1",
                    children: filteredCommands.map((command, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>handleCommandSelect(command.agent, command.alias),
                            className: `p-2 rounded-md cursor-pointer flex items-center ${index === activeSuggestionIndex ? 'bg-blue-100 dark:bg-blue-900/50' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`,
                            children: [
                                command.icon,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-800 dark:text-gray-200",
                                            children: command.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInput.tsx",
                                            lineNumber: 177,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: command.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInput.tsx",
                                            lineNumber: 178,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInput.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, command.name, true, {
                            fileName: "[project]/components/ChatInput.tsx",
                            lineNumber: 168,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ChatInput.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatInput.tsx",
            lineNumber: 164,
            columnNumber: 6
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-3xl mx-auto relative",
        children: [
            isCommandPaletteOpen && filteredCommands.length > 0 && renderCommandPalette(),
            suggestions.length > 0 && !isCommandPaletteOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full mb-2 w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1",
                    children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>handleSuggestionClick(suggestion),
                            className: `p-2 rounded-md cursor-pointer text-sm text-gray-800 dark:text-gray-200 ${index === activeSuggestionIndex ? 'bg-blue-100 dark:bg-blue-900/50' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`,
                            children: suggestion
                        }, suggestion, false, {
                            fileName: "[project]/components/ChatInput.tsx",
                            lineNumber: 193,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ChatInput.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ChatInput.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-end p-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onUploadClick,
                        className: "p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors mr-2 flex-shrink-0",
                        "aria-label": "Anexar documento",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$PaperclipIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaperclipIcon"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInput.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatInput.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: textareaRef,
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: handleKeyDown,
                        placeholder: "Digite sua mensagem ou '@' para mudar de agente...",
                        rows: 1,
                        className: "flex-1 w-full bg-transparent resize-none focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 max-h-52",
                        disabled: isLoading
                    }, void 0, false, {
                        fileName: "[project]/components/ChatInput.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSendMessage(input),
                        disabled: isLoading || !input.trim(),
                        className: "ml-2 p-3 bg-blue-600 text-white rounded-full disabled:bg-gray-400 disabled:dark:bg-gray-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex-shrink-0",
                        "aria-label": "Enviar mensagem",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInput.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SendIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SendIcon"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInput.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatInput.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatInput.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatInput.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ChatInput;
}),
"[project]/components/icons/CloseIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseIcon",
    ()=>CloseIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const CloseIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18 18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/components/icons/CloseIcon.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/CloseIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/NewChatIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewChatIcon",
    ()=>NewChatIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const NewChatIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4.5v15m7.5-7.5h-15"
        }, void 0, false, {
            fileName: "[project]/components/icons/NewChatIcon.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/NewChatIcon.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/TrashIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrashIcon",
    ()=>TrashIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const TrashIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        }, void 0, false, {
            fileName: "[project]/components/icons/TrashIcon.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/TrashIcon.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/DotsVerticalIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DotsVerticalIcon",
    ()=>DotsVerticalIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const DotsVerticalIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
        }, void 0, false, {
            fileName: "[project]/components/icons/DotsVerticalIcon.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/DotsVerticalIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/HistorySidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CloseIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/CloseIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$NewChatIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/NewChatIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$TrashIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/TrashIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$DotsVerticalIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/DotsVerticalIcon.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Helper function for relative time
const timeAgo = (timestamp)=>{
    const now = new Date();
    const secondsPast = (now.getTime() - timestamp) / 1000;
    if (secondsPast < 60) return `agora mesmo`;
    if (secondsPast < 3600) return `${Math.round(secondsPast / 60)}m atrás`;
    if (secondsPast <= 86400) return `${Math.round(secondsPast / 3600)}h atrás`;
    const day = new Date(timestamp);
    return day.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short'
    });
};
const HistorySidebar = ({ isOpen, onClose })=>{
    const { documentConversations, codeConversations, suggestionConversations, activeDocumentConversationId, activeCodeConversationId, activeSuggestionConversationId, startNewConversation, deleteConversation, setActiveConversation, activeAgent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatStore"])();
    const [menuOpenFor, setMenuOpenFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let conversations;
    let activeConversationId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpenFor(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    switch(activeAgent){
        case 'code':
            conversations = codeConversations;
            activeConversationId = activeCodeConversationId;
            break;
        case 'suggestion':
            conversations = suggestionConversations;
            activeConversationId = activeSuggestionConversationId;
            break;
        case 'document':
        default:
            conversations = documentConversations;
            activeConversationId = activeDocumentConversationId;
            break;
    }
    const handleSelectConversation = (id)=>{
        setActiveConversation(activeAgent, id);
        onClose(); // Close sidebar on mobile after selection
    };
    const handleNewChat = ()=>{
        startNewConversation(activeAgent);
        onClose();
    };
    const handleDelete = (e, id)=>{
        e.stopPropagation();
        setMenuOpenFor(null);
        if (window.confirm("Tem certeza que deseja excluir esta conversa?")) {
            deleteConversation(activeAgent, id);
        }
    };
    const handleMenuToggle = (e, id)=>{
        e.stopPropagation();
        setMenuOpenFor((prev)=>prev === id ? null : id);
    };
    const sortedConversations = Object.values(conversations).sort((a, b)=>(b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `fixed inset-y-0 left-0 z-40 w-80 bg-gray-50 dark:bg-gray-900 flex flex-col h-full border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:flex-shrink-0`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-gray-900 dark:text-white",
                        children: "Histórico"
                    }, void 0, false, {
                        fileName: "[project]/components/HistorySidebar.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "lg:hidden p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full",
                        "aria-label": "Fechar histórico",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CloseIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseIcon"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/HistorySidebar.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/HistorySidebar.tsx",
                        lineNumber: 106,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/HistorySidebar.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-200 dark:border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleNewChat,
                    className: "w-full flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$NewChatIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NewChatIcon"], {
                            className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/components/HistorySidebar.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Novo Chat"
                        }, void 0, false, {
                            fileName: "[project]/components/HistorySidebar.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HistorySidebar.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/HistorySidebar.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow p-2 overflow-y-auto",
                children: sortedConversations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-gray-500 dark:text-gray-400 mt-8 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            'Nenhum histórico para o agente "',
                            activeAgent === 'document' ? 'Consultor' : activeAgent === 'code' ? 'Código' : 'Sugestão',
                            '".'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HistorySidebar.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/HistorySidebar.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1",
                    children: sortedConversations.map((convo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleSelectConversation(convo.id),
                                className: `w-full text-left p-3 rounded-md group flex items-center justify-between transition-colors duration-200 cursor-pointer ${convo.id === activeConversationId ? 'bg-blue-100 dark:bg-blue-900/50' : 'hover:bg-gray-200 dark:hover:bg-gray-800'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow overflow-hidden pr-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "truncate text-sm font-medium text-gray-800 dark:text-gray-200",
                                                title: convo.title,
                                                children: convo.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/HistorySidebar.tsx",
                                                lineNumber: 146,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                                children: timeAgo(convo.updatedAt || convo.createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/components/HistorySidebar.tsx",
                                                lineNumber: 149,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HistorySidebar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-shrink-0",
                                        ref: menuOpenFor === convo.id ? menuRef : null,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>handleMenuToggle(e, convo.id),
                                                className: "p-1 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                                                "aria-label": "Opções da conversa",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$DotsVerticalIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotsVerticalIcon"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HistorySidebar.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/HistorySidebar.tsx",
                                                lineNumber: 155,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            menuOpenFor === convo.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "py-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>handleDelete(e, convo.id),
                                                            className: "w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$TrashIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrashIcon"], {
                                                                    className: "w-4 h-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/HistorySidebar.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Excluir"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/HistorySidebar.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HistorySidebar.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HistorySidebar.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/HistorySidebar.tsx",
                                                lineNumber: 163,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HistorySidebar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HistorySidebar.tsx",
                                lineNumber: 137,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, convo.id, false, {
                            fileName: "[project]/components/HistorySidebar.tsx",
                            lineNumber: 136,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/HistorySidebar.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/HistorySidebar.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/HistorySidebar.tsx",
        lineNumber: 103,
        columnNumber: 6
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HistorySidebar;
}),
"[project]/components/icons/DocumentIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentIcon",
    ()=>DocumentIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const DocumentIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        }, void 0, false, {
            fileName: "[project]/components/icons/DocumentIcon.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/DocumentIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/LockIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LockIcon",
    ()=>LockIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const LockIcon = ({ className, title })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/components/icons/LockIcon.tsx",
                lineNumber: 11,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: "M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/components/icons/LockIcon.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons/LockIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/PencilIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PencilIcon",
    ()=>PencilIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const PencilIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        }, void 0, false, {
            fileName: "[project]/components/icons/PencilIcon.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/PencilIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/EyeIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EyeIcon",
    ()=>EyeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const EyeIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            }, void 0, false, {
                fileName: "[project]/components/icons/EyeIcon.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            }, void 0, false, {
                fileName: "[project]/components/icons/EyeIcon.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons/EyeIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/DocumentSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$DocumentIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/DocumentIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$PaperclipIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/PaperclipIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CloseIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/CloseIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$LockIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/LockIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$DotsVerticalIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/DotsVerticalIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$PencilIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/PencilIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$EyeIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/EyeIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$TrashIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/TrashIcon.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const ChevronDownIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m19.5 8.25-7.5 7.5-7.5-7.5"
        }, void 0, false, {
            fileName: "[project]/components/DocumentSidebar.tsx",
            lineNumber: 23,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/DocumentSidebar.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DocumentContentViewer = ({ content })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 pt-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-64 overflow-y-auto border-t border-gray-200 dark:border-gray-700 pt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "whitespace-pre-wrap font-sans",
                children: content || "Este documento não contém texto para ser exibido."
            }, void 0, false, {
                fileName: "[project]/components/DocumentSidebar.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/DocumentSidebar.tsx",
            lineNumber: 34,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/DocumentSidebar.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DocumentItem = ({ doc, isExpanded, onDelete, onRename, onToggleExpand })=>{
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRenaming, setIsRenaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(doc.name);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isRenaming && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [
        isRenaming
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleRename = ()=>{
        if (name.trim() && name.trim() !== doc.name) {
            onRename(doc.id, name.trim());
        } else {
            setName(doc.name); // Revert to original if empty or unchanged
        }
        setIsRenaming(false);
        setIsMenuOpen(false);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            handleRename();
        } else if (e.key === 'Escape') {
            setName(doc.name);
            setIsRenaming(false);
            setIsMenuOpen(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-2 rounded-md bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-2 cursor-pointer",
                onClick: ()=>onToggleExpand(doc.id),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center overflow-hidden flex-grow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$DocumentIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentIcon"], {
                                className: "w-5 h-5 mr-2 flex-shrink-0 text-gray-500 dark:text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/components/DocumentSidebar.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isRenaming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                type: "text",
                                value: name,
                                onClick: (e)=>e.stopPropagation(),
                                onChange: (e)=>setName(e.target.value),
                                onBlur: handleRename,
                                onKeyDown: handleKeyDown,
                                className: "text-sm bg-transparent border-b border-blue-500 focus:outline-none text-gray-800 dark:text-gray-200 w-full"
                            }, void 0, false, {
                                fileName: "[project]/components/DocumentSidebar.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate text-sm text-gray-800 dark:text-gray-200",
                                title: doc.name,
                                children: doc.name
                            }, void 0, false, {
                                fileName: "[project]/components/DocumentSidebar.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DocumentSidebar.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDownIcon, {
                                className: `w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform duration-300 mr-1 ${isExpanded ? 'rotate-180' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/components/DocumentSidebar.tsx",
                                lineNumber: 119,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-shrink-0",
                                ref: menuRef,
                                children: [
                                    doc.isDeletable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                        className: "p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$DotsVerticalIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotsVerticalIcon"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DocumentSidebar.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/DocumentSidebar.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$LockIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockIcon"], {
                                        className: "w-4 h-4 ml-2 flex-shrink-0 text-gray-400 dark:text-gray-500",
                                        title: "Este documento faz parte da base de conhecimento e não pode ser excluído."
                                    }, void 0, false, {
                                        fileName: "[project]/components/DocumentSidebar.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            onToggleExpand(doc.id);
                                                            setIsMenuOpen(false);
                                                        },
                                                        className: "w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$EyeIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EyeIcon"], {
                                                                className: "w-4 h-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/DocumentSidebar.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            isExpanded ? 'Ocultar' : 'Visualizar'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/DocumentSidebar.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setIsRenaming(true);
                                                            setIsMenuOpen(false);
                                                        },
                                                        className: "w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$PencilIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PencilIcon"], {
                                                                className: "w-4 h-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/DocumentSidebar.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Renomear"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/DocumentSidebar.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            onDelete(doc.id);
                                                            setIsMenuOpen(false);
                                                        },
                                                        className: "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$TrashIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrashIcon"], {
                                                                className: "w-4 h-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/DocumentSidebar.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Excluir"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/DocumentSidebar.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DocumentSidebar.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/DocumentSidebar.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DocumentSidebar.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DocumentSidebar.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/DocumentSidebar.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid transition-[grid-template-rows] duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DocumentContentViewer, {
                        content: doc.content || ''
                    }, void 0, false, {
                        fileName: "[project]/components/DocumentSidebar.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/DocumentSidebar.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/DocumentSidebar.tsx",
                lineNumber: 152,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/DocumentSidebar.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const DocumentSidebar = ({ isOpen, onClose })=>{
    const { documents, addDocument, deleteDocument, renameDocument, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentStore"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [expandedDocId, setExpandedDocId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleToggleExpand = (docId)=>{
        setExpandedDocId((prevId)=>prevId === docId ? null : docId);
    };
    const handleFileChange = (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            addDocument(file);
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const handleUploadClick = ()=>{
        fileInputRef.current?.click();
    };
    const baseDocuments = documents.filter((doc)=>!doc.isDeletable);
    const userDocuments = documents.filter((doc)=>doc.isDeletable);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: `fixed inset-y-0 right-0 z-40 w-80 bg-gray-50 dark:bg-gray-900/95 flex flex-col h-full border-l border-gray-200 dark:border-gray-700/50 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:translate-x-0 lg:flex-shrink-0`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-900 dark:text-white",
                                    children: "Documentos"
                                }, void 0, false, {
                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                    children: "Contexto do agente."
                                }, void 0, false, {
                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DocumentSidebar.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "lg:hidden p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full",
                            "aria-label": "Fechar documentos",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CloseIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseIcon"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/DocumentSidebar.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/DocumentSidebar.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DocumentSidebar.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow p-4 overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 px-1",
                            children: "Base de Conhecimento"
                        }, void 0, false, {
                            fileName: "[project]/components/DocumentSidebar.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        baseDocuments.length > 0 ? baseDocuments.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DocumentItem, {
                                doc: doc,
                                onDelete: ()=>{},
                                onRename: ()=>{},
                                onToggleExpand: handleToggleExpand,
                                isExpanded: expandedDocId === doc.id
                            }, doc.id, false, {
                                fileName: "[project]/components/DocumentSidebar.tsx",
                                lineNumber: 210,
                                columnNumber: 42
                            }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 dark:text-gray-500 px-1",
                            children: "Nenhum conhecimento base carregado."
                        }, void 0, false, {
                            fileName: "[project]/components/DocumentSidebar.tsx",
                            lineNumber: 212,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-gray-500 dark:text-gray-400 mt-6 mb-2 px-1",
                            children: "Documentos Enviados"
                        }, void 0, false, {
                            fileName: "[project]/components/DocumentSidebar.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        userDocuments.length > 0 ? userDocuments.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DocumentItem, {
                                doc: doc,
                                onDelete: deleteDocument,
                                onRename: renameDocument,
                                onToggleExpand: handleToggleExpand,
                                isExpanded: expandedDocId === doc.id
                            }, doc.id, false, {
                                fileName: "[project]/components/DocumentSidebar.tsx",
                                lineNumber: 217,
                                columnNumber: 42
                            }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-gray-500 dark:text-gray-400 mt-4 py-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$DocumentIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentIcon"], {
                                    className: "w-8 h-8 mx-auto mb-1 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                    lineNumber: 220,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Nenhum documento enviado."
                                }, void 0, false, {
                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                    lineNumber: 221,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DocumentSidebar.tsx",
                            lineNumber: 219,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 text-gray-600 dark:text-gray-300",
                                    children: "Processando..."
                                }, void 0, false, {
                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DocumentSidebar.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm mt-2 p-2 bg-red-100 dark:bg-red-900/20 rounded-md whitespace-pre-wrap",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/DocumentSidebar.tsx",
                            lineNumber: 232,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DocumentSidebar.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-gray-200 dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            ref: fileInputRef,
                            onChange: handleFileChange,
                            className: "hidden",
                            accept: ".txt,.md,.pdf"
                        }, void 0, false, {
                            fileName: "[project]/components/DocumentSidebar.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleUploadClick,
                            disabled: isLoading,
                            className: "w-full flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg disabled:bg-gray-400 disabled:dark:bg-gray-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$PaperclipIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaperclipIcon"], {
                                    className: "w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Enviar Documento"
                                }, void 0, false, {
                                    fileName: "[project]/components/DocumentSidebar.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DocumentSidebar.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DocumentSidebar.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/DocumentSidebar.tsx",
            lineNumber: 192,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = DocumentSidebar;
}),
"[project]/components/icons/SunIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SunIcon",
    ()=>SunIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const SunIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        }, void 0, false, {
            fileName: "[project]/components/icons/SunIcon.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/SunIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/MoonIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoonIcon",
    ()=>MoonIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const MoonIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        }, void 0, false, {
            fileName: "[project]/components/icons/MoonIcon.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/MoonIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SunIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/SunIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$MoonIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/MoonIcon.tsx [app-ssr] (ecmascript)");
;
;
;
const ThemeToggle = ({ theme, toggleTheme })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800",
        "aria-label": "Alternar tema",
        children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$MoonIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoonIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/ThemeToggle.tsx",
            lineNumber: 18,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SunIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SunIcon"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/ThemeToggle.tsx",
            lineNumber: 20,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ThemeToggle.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ThemeToggle;
}),
"[project]/components/TokenUsageDisplay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/geminiService.ts [app-ssr] (ecmascript)");
;
;
;
const TokenUsageDisplay = ()=>{
    const { activeModel, proTokenCount, proTokenLimit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatStore"])();
    const proUsagePercentage = proTokenCount / proTokenLimit * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-end",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-700 dark:text-gray-300 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold hidden sm:inline",
                        children: "Modelo Ativo: "
                    }, void 0, false, {
                        fileName: "[project]/components/TokenUsageDisplay.tsx",
                        lineNumber: 13,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `font-bold px-2 py-0.5 rounded-full text-xs ${activeModel === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_PRO"] ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`,
                        children: activeModel.includes('pro') ? 'Pro' : 'Flash'
                    }, void 0, false, {
                        fileName: "[project]/components/TokenUsageDisplay.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/TokenUsageDisplay.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            activeModel === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$geminiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEMINI_PRO"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-28 sm:w-48",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-500 dark:text-gray-400 mb-1 text-right whitespace-nowrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Uso (Pro): "
                            }, void 0, false, {
                                fileName: "[project]/components/TokenUsageDisplay.tsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            proTokenCount.toLocaleString(),
                            "/",
                            proTokenLimit.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TokenUsageDisplay.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-600 h-2 rounded-full",
                            style: {
                                width: `${Math.min(proUsagePercentage, 100)}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/TokenUsageDisplay.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/TokenUsageDisplay.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/TokenUsageDisplay.tsx",
                lineNumber: 19,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/TokenUsageDisplay.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TokenUsageDisplay;
}),
"[project]/components/AgentInfoModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CloseIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/CloseIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$BotIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/BotIcon.tsx [app-ssr] (ecmascript)");
;
;
;
const agentContent = {
    document: {
        title: 'Sobre o Consultor de Documentos',
        description: 'Este agente é um especialista em análise de documentos e conhecimento tributário. Sua principal função é responder a perguntas com base no contexto fornecido nos documentos enviados e em sua base de conhecimento interna. Quando necessário, ele utiliza a busca na web para complementar suas respostas.',
        capabilities: [
            'Analisar arquivos de texto (TXT, MD) e PDF.',
            'Utilizar a técnica RAG (Retrieval-Augmented Generation) para encontrar as informações mais relevantes nos documentos.',
            'Buscar informações atualizadas na web para complementar o conhecimento.',
            'Citar as fontes da web utilizadas nas respostas.'
        ],
        limitations: [
            'Não fornece aconselhamento financeiro ou tributário licenciado.',
            'As respostas são baseadas nas informações disponíveis e podem não cobrir todas as especificidades de um caso real.',
            'A precisão depende da qualidade e clareza dos documentos fornecidos.',
            'O conhecimento sobre eventos muito recentes pode ser limitado.'
        ]
    },
    code: {
        title: 'Sobre o Gerador de Código Fiscal',
        description: 'Este agente é um programador sênior especialista em criar trechos de código para resolver problemas tributários e fiscais, com foco em Python e Delphi. Ele pode utilizar o contexto da conversa na aba "Consultor" para gerar um código mais preciso.',
        capabilities: [
            'Gerar funções e scripts em Python e Delphi.',
            'Adicionar comentários explicativos no código.',
            'Utilizar o histórico da conversa do "Consultor" como contexto.',
            'Formatar o código em blocos para fácil leitura e cópia.'
        ],
        limitations: [
            'Não pode executar ou testar o código gerado.',
            'O código é fornecido como um exemplo e deve ser revisado por um desenvolvedor qualificado antes do uso em produção.',
            'Não compreende a arquitetura completa de um projeto ou sistema existente.',
            'Pode não utilizar as bibliotecas ou frameworks mais recentes, a menos que seja especificado.'
        ]
    },
    suggestion: {
        title: 'Sobre o Otimizador de Sugestões',
        description: 'Este agente atua como um especialista em prompts. Em vez de responder diretamente à sua pergunta, ele analisa sua intenção e sugere 3 maneiras alternativas e mais eficazes de formular a mesma pergunta para obter melhores resultados de um assistente de IA fiscal. Ideal para refinar suas buscas e obter respostas mais precisas.',
        capabilities: [
            'Analisar a intenção por trás de uma pergunta.',
            'Sugerir 3 novas formulações de prompt.',
            'Explicar brevemente por que cada sugestão é melhor.',
            'Ajudar a treinar o usuário a fazer perguntas mais eficazes.'
        ],
        limitations: [
            'Não responde à pergunta original diretamente.',
            'As sugestões são baseadas em heurísticas e podem não ser sempre perfeitas.',
            'Funciona melhor com perguntas abertas e complexas.'
        ]
    }
};
const AgentInfoModal = ({ isOpen, onClose, agentType })=>{
    if (!isOpen) return null;
    const content = agentContent[agentType];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in",
        onClick: onClose,
        "aria-modal": "true",
        role: "dialog",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-transform duration-300 animate-slide-up",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$BotIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BotIcon"], {
                                            className: "w-6 h-6 text-gray-600 dark:text-gray-300"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AgentInfoModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/AgentInfoModal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-gray-900 dark:text-white",
                                        id: "modal-title",
                                        children: content.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/AgentInfoModal.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AgentInfoModal.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full",
                                "aria-label": "Fechar modal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CloseIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseIcon"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/AgentInfoModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/AgentInfoModal.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AgentInfoModal.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "p-6 overflow-y-auto text-gray-700 dark:text-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed mb-6",
                                children: content.description
                            }, void 0, false, {
                                fileName: "[project]/components/AgentInfoModal.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-md font-semibold text-gray-800 dark:text-gray-100 mb-2",
                                                children: "Capacidades"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgentInfoModal.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 list-disc list-inside text-sm",
                                                children: content.capabilities.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-500 mr-2 mt-1",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AgentInfoModal.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AgentInfoModal.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/components/AgentInfoModal.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgentInfoModal.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AgentInfoModal.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-md font-semibold text-gray-800 dark:text-gray-100 mb-2",
                                                children: "Limitações"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgentInfoModal.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 list-disc list-inside text-sm",
                                                children: content.limitations.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 mr-2 mt-1",
                                                                children: "✗"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AgentInfoModal.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AgentInfoModal.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/components/AgentInfoModal.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 20
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/components/AgentInfoModal.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AgentInfoModal.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AgentInfoModal.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 rounded-r-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-yellow-800 dark:text-yellow-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Aviso:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AgentInfoModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " As informações e o código gerados por esta IA são para fins informativos e não substituem o aconselhamento de um profissional qualificado. Verifique sempre as informações com fontes oficiais."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AgentInfoModal.tsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/AgentInfoModal.tsx",
                                lineNumber: 131,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AgentInfoModal.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/AgentInfoModal.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
           animation: slide-up 0.3s ease-out forwards;
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/AgentInfoModal.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/AgentInfoModal.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AgentInfoModal;
}),
"[project]/components/icons/MenuIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuIcon",
    ()=>MenuIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const MenuIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        }, void 0, false, {
            fileName: "[project]/components/icons/MenuIcon.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/MenuIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/InfoIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoIcon",
    ()=>InfoIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const InfoIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        }, void 0, false, {
            fileName: "[project]/components/icons/InfoIcon.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/InfoIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/KeyIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeyIcon",
    ()=>KeyIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const KeyIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
        }, void 0, false, {
            fileName: "[project]/components/icons/KeyIcon.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/KeyIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/icons/EyeSlashIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EyeSlashIcon",
    ()=>EyeSlashIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const EyeSlashIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.243 4.243L6.228 6.228"
        }, void 0, false, {
            fileName: "[project]/components/icons/EyeSlashIcon.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/icons/EyeSlashIcon.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/App.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatMessage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HistorySidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HistorySidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DocumentSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DocumentSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TokenUsageDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TokenUsageDisplay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgentInfoModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AgentInfoModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$MenuIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/MenuIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$DocumentIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/DocumentIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$BotIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/BotIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$InfoIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/InfoIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$suggestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/suggestions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$KeyIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/KeyIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CloseIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/CloseIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$EyeIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/EyeIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$EyeSlashIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/EyeSlashIcon.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// ForgotPasswordModal Component
const ForgotPasswordModal = ({ isOpen, onClose })=>{
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const { sendPasswordResetEmail, authLoading, authError, authMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatStore"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        sendPasswordResetEmail(email);
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between p-4 border-b border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$KeyIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyIcon"], {
                                        className: "w-6 h-6 text-yellow-400"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 39,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 38,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold text-white",
                                    children: "Redefinir Senha"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 text-gray-400 hover:bg-gray-700 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$CloseIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseIcon"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: !authMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 mb-4",
                                children: "Digite o endereço de e-mail associado à sua conta e enviaremos um link para redefinir sua senha."
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "reset-email",
                                        className: "block text-sm font-medium text-gray-300",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "reset-email",
                                        name: "email",
                                        type: "email",
                                        autoComplete: "email",
                                        required: true,
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        className: "w-full px-4 py-2.5 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 57,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            authError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 mt-4 text-sm text-red-300 bg-red-900/20 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold",
                                        children: "Ocorreu um erro:"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 65,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "mt-1 font-sans text-xs whitespace-pre-wrap",
                                        children: authError.message
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 66,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 64,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: authLoading,
                                    className: "w-full px-4 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-all duration-300",
                                    children: authLoading ? 'Enviando...' : 'Enviar Link de Redefinição'
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 text-sm text-center text-green-300 bg-green-900/20 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold",
                                        children: "Verifique seu E-mail!"
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 79,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2",
                                        children: authMessage
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 80,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 78,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-full mt-6 px-4 py-2.5 font-semibold text-white bg-gray-600 rounded-lg hover:bg-gray-500",
                                children: "Fechar"
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 82,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 77,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/App.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
// LoginPage Component
const LoginPage = ({ onNavigateToSignup, onNavigateToForgotPassword })=>{
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { signIn, authLoading, authError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatStore"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        signIn(email, password);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-900 text-white p-4 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl flex overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex flex-col items-center justify-center w-1/2 bg-blue-600 p-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$BotIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BotIcon"], {
                            className: "w-24 h-24 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: "Gênesis Agente IA"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-blue-200",
                            children: "Sua expertise fiscal, potencializada por IA."
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-1/2 p-8 sm:p-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-white mb-2",
                            children: "Bem-vindo de volta!"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 117,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-8 text-sm text-gray-400",
                            children: "Faça login para acessar o assistente."
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-6",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "email",
                                            className: "block text-sm font-medium text-gray-300",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "email",
                                            name: "email",
                                            type: "email",
                                            autoComplete: "email",
                                            required: true,
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            className: "w-full px-4 py-2.5 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "password",
                                                    className: "block text-sm font-medium text-gray-300",
                                                    children: "Senha"
                                                }, void 0, false, {
                                                    fileName: "[project]/App.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: onNavigateToForgotPassword,
                                                        className: "font-medium text-blue-400 hover:underline",
                                                        children: "Esqueci minha senha"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/App.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "password",
                                                    name: "password",
                                                    type: showPassword ? 'text' : 'password',
                                                    autoComplete: "current-password",
                                                    required: true,
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    className: "w-full px-4 py-2.5 pr-10 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/App.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white",
                                                    "aria-label": showPassword ? "Ocultar senha" : "Mostrar senha",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$EyeSlashIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EyeSlashIcon"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$EyeIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EyeIcon"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/App.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                authError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 my-2 text-sm text-red-300 bg-red-900/20 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold",
                                            children: "Ocorreu um erro:"
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 167,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "mt-1 font-sans text-xs whitespace-pre-wrap",
                                            children: authError.message
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 168,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: authLoading,
                                        className: "w-full px-4 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-all duration-300",
                                        children: authLoading ? 'Entrando...' : 'Entrar'
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-center text-gray-400 mt-8",
                            children: [
                                "Não tem uma conta?",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onNavigateToSignup,
                                    className: "font-medium text-blue-400 hover:underline",
                                    children: "Cadastre-se"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/App.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// SignupPage Component
const SignupPage = ({ onNavigateToLogin })=>{
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userType, setUserType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Contador');
    const { signUp, authLoading, authError, authMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatStore"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        signUp(email, password, {
            full_name: fullName,
            user_type: userType
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-900 text-white p-4 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl flex overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex flex-col items-center justify-center w-1/2 bg-blue-600 p-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$BotIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BotIcon"], {
                            className: "w-24 h-24 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: "Gênesis Agente IA"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-blue-200",
                            children: "Comece a transformar sua análise tributária."
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-1/2 p-8 sm:p-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-white mb-2",
                            children: "Crie sua Conta"
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 text-sm text-gray-400",
                            children: "Junte-se a nós e simplifique suas tarefas fiscais."
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-4",
                            onSubmit: handleSubmit,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                disabled: authLoading || !!authMessage,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "fullName",
                                                className: "block text-sm font-medium text-gray-300",
                                                children: "Nome Completo"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "fullName",
                                                name: "fullName",
                                                type: "text",
                                                required: true,
                                                value: fullName,
                                                onChange: (e)=>setFullName(e.target.value),
                                                className: "w-full px-4 py-2.5 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "block text-sm font-medium text-gray-300",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "email",
                                                name: "email",
                                                type: "email",
                                                autoComplete: "email",
                                                required: true,
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                className: "w-full px-4 py-2.5 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "password",
                                                className: "block text-sm font-medium text-gray-300",
                                                children: "Senha"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "password",
                                                        name: "password",
                                                        type: showPassword ? 'text' : 'password',
                                                        required: true,
                                                        value: password,
                                                        onChange: (e)=>setPassword(e.target.value),
                                                        className: "w-full px-4 py-2.5 pr-10 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowPassword(!showPassword),
                                                        className: "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white",
                                                        "aria-label": showPassword ? "Ocultar senha" : "Mostrar senha",
                                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$EyeSlashIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EyeSlashIcon"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/App.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$EyeIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EyeIcon"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/App.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "userType",
                                                className: "block text-sm font-medium text-gray-300",
                                                children: "Tipo de Usuário"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "userType",
                                                name: "userType",
                                                value: userType,
                                                onChange: (e)=>setUserType(e.target.value),
                                                className: "w-full px-4 py-2.5 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Contador"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Advogado"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Empresário"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Desenvolvedor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Estudante"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Outro"
                                                    }, void 0, false, {
                                                        fileName: "[project]/App.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 253,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    authMessage && !authError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 my-2 text-sm text-green-300 bg-green-900/20 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold",
                                                children: "Sucesso!"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 268,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1",
                                                children: authMessage
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 269,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 267,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    authError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 my-2 text-sm text-red-300 bg-red-900/20 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold",
                                                children: "Ocorreu um erro ao cadastrar:"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 275,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                className: "mt-1 font-sans text-xs whitespace-pre-wrap",
                                                children: authError.message
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 276,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 274,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: authLoading || !!authMessage,
                                            className: "w-full px-4 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-all duration-300",
                                            children: authLoading ? 'Cadastrando...' : 'Cadastrar'
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 281,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-center text-gray-400 mt-6",
                            children: [
                                "Já tem uma conta?",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onNavigateToLogin,
                                    className: "font-medium text-blue-400 hover:underline",
                                    children: "Faça login"
                                }, void 0, false, {
                                    fileName: "[project]/App.tsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/App.tsx",
            lineNumber: 207,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Main Chat Application Component
const ChatApplication = ()=>{
    const { documentConversations, codeConversations, suggestionConversations, activeDocumentConversationId, activeCodeConversationId, activeSuggestionConversationId, sendMessage, isLoading, activeAgent, setActiveAgent, setMessageFeedback, loadInitialData, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatStore"])();
    const { documents } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentStore"])();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [isHistoryOpen, setIsHistoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDocumentsOpen, setIsDocumentsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAgentInfoOpen, setIsAgentInfoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInitializing, setIsInitializing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let activeConversationId = null;
    let conversations = {};
    let agentName = '';
    let suggestions = [];
    switch(activeAgent){
        case 'code':
            activeConversationId = activeCodeConversationId;
            conversations = codeConversations;
            agentName = 'Gerador de Código';
            suggestions = __TURBOPACK__imported__module__$5b$project$5d2f$suggestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codeAgentSuggestions"];
            break;
        case 'suggestion':
            activeConversationId = activeSuggestionConversationId;
            conversations = suggestionConversations;
            agentName = 'Otimizador de Prompt';
            suggestions = __TURBOPACK__imported__module__$5b$project$5d2f$suggestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["suggestionAgentSuggestions"];
            break;
        case 'document':
        default:
            activeConversationId = activeDocumentConversationId;
            conversations = documentConversations;
            agentName = 'Consultor Fiscal';
            suggestions = __TURBOPACK__imported__module__$5b$project$5d2f$suggestions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["documentAgentSuggestions"];
            break;
    }
    const activeConversation = activeConversationId ? conversations[activeConversationId] : undefined;
    const messages = activeConversation?.messages || [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeApp = async ()=>{
            await loadInitialData();
            setIsInitializing(false);
        };
        initializeApp();
    }, [
        loadInitialData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [
        messages
    ]);
    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const handleSendMessage = (message)=>{
        sendMessage(message, documents);
    };
    const handleSuggestionClick = (suggestion)=>{
        handleSendMessage(suggestion);
    };
    const handleFeedback = (messageId, feedback)=>{
        if (activeConversationId) {
            setMessageFeedback(activeAgent, activeConversationId, messageId, feedback);
        }
    };
    const AgentTabButton = ({ agent, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>setActiveAgent(agent),
            className: `px-3 py-1.5 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${activeAgent === agent ? 'bg-blue-600 text-white shadow' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`,
            children: label
        }, void 0, false, {
            fileName: "[project]/App.tsx",
            lineNumber: 397,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    if (isInitializing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$BotIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BotIcon"], {
                        className: "w-16 h-16 text-blue-500 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 414,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg text-gray-700 dark:text-gray-300",
                        children: "Carregando assistente..."
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 415,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 413,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/App.tsx",
            lineNumber: 412,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const renderWelcomeScreen = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full text-center p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$BotIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BotIcon"], {
                        className: "w-12 h-12 text-gray-600 dark:text-gray-300"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 425,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-900 dark:text-white mb-2",
                    children: agentName
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 428,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 dark:text-gray-400 mb-8 max-w-md",
                    children: "Comece uma conversa, envie um documento ou escolha uma das sugestões abaixo."
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 431,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl",
                    children: suggestions.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleSuggestionClick(s),
                            className: "p-4 bg-white dark:bg-gray-800 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-gray-800 dark:text-gray-200",
                                children: s
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, i, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 434,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/App.tsx",
            lineNumber: 424,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HistorySidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isHistoryOpen,
                onClose: ()=>setIsHistoryOpen(false)
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col h-screen relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsHistoryOpen(true),
                                        className: "lg:hidden p-1 text-gray-500 dark:text-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$MenuIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 456,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center p-1 bg-gray-200/50 dark:bg-gray-900/50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AgentTabButton, {
                                                agent: "document",
                                                label: "Consultor"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 459,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AgentTabButton, {
                                                agent: "code",
                                                label: "Código"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 460,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AgentTabButton, {
                                                agent: "suggestion",
                                                label: "Sugestão"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 461,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 458,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 454,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsAgentInfoOpen(true),
                                        className: "p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$InfoIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfoIcon"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 466,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 465,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TokenUsageDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        theme: theme,
                                        toggleTheme: toggleTheme
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: signOut,
                                        className: "p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700",
                                        title: "Sair",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 1.5,
                                            stroke: "currentColor",
                                            className: "w-6 h-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3h12"
                                            }, void 0, false, {
                                                fileName: "[project]/App.tsx",
                                                lineNumber: 472,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 471,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 470,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeAgent === 'document' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsDocumentsOpen(true),
                                        className: "lg:hidden p-1 text-gray-500 dark:text-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$DocumentIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 464,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 pb-24",
                        children: [
                            messages.length === 0 ? renderWelcomeScreen() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-center text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6",
                                        children: activeConversation?.title
                                    }, void 0, false, {
                                        fileName: "[project]/App.tsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            message: msg,
                                            onFeedback: (feedback)=>handleFeedback(msg.id, feedback)
                                        }, msg.id, false, {
                                            fileName: "[project]/App.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/App.tsx",
                                lineNumber: 498,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 483,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onSendMessage: handleSendMessage,
                            isLoading: isLoading,
                            onUploadClick: ()=>setIsDocumentsOpen(true),
                            activeAgent: activeAgent
                        }, void 0, false, {
                            fileName: "[project]/App.tsx",
                            lineNumber: 502,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activeAgent === 'document' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DocumentSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isDocumentsOpen,
                onClose: ()=>setIsDocumentsOpen(false)
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 511,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AgentInfoModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isAgentInfoOpen,
                onClose: ()=>setIsAgentInfoOpen(false),
                agentType: activeAgent
            }, void 0, false, {
                fileName: "[project]/App.tsx",
                lineNumber: 513,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/App.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// App Router
const App = ()=>{
    const { session, authLoading, initAuth, clearAuthFeedback } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatStore"])();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('login');
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = initAuth();
        return ()=>unsubscribe();
    }, [
        initAuth
    ]);
    const handleCloseForgotPassword = ()=>{
        setIsForgotPasswordOpen(false);
        clearAuthFeedback();
    };
    if (authLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$BotIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BotIcon"], {
                        className: "w-16 h-16 text-blue-500 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 542,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg text-gray-700 dark:text-gray-300",
                        children: "Carregando..."
                    }, void 0, false, {
                        fileName: "[project]/App.tsx",
                        lineNumber: 543,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/App.tsx",
                lineNumber: 541,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/App.tsx",
            lineNumber: 540,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                page === 'login' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginPage, {
                    onNavigateToSignup: ()=>{
                        clearAuthFeedback();
                        setPage('signup');
                    },
                    onNavigateToForgotPassword: ()=>{
                        clearAuthFeedback();
                        setIsForgotPasswordOpen(true);
                    }
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 553,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SignupPage, {
                    onNavigateToLogin: ()=>{
                        clearAuthFeedback();
                        setPage('login');
                    }
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 558,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ForgotPasswordModal, {
                    isOpen: isForgotPasswordOpen,
                    onClose: handleCloseForgotPassword
                }, void 0, false, {
                    fileName: "[project]/App.tsx",
                    lineNumber: 562,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatApplication, {}, void 0, false, {
        fileName: "[project]/App.tsx",
        lineNumber: 570,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = App;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__41ad573d._.js.map