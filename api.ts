// Adiciona a declaração para a biblioteca pdf.js carregada via CDN
declare const pdfjsLib: any;

import { generateEmbeddings } from './services/geminiService';
import { Document, DocumentChunk } from './types';

const CHUNK_SIZE = 1000; // characters
const CHUNK_OVERLAP = 200; // characters

/**
 * Lê um arquivo de texto e retorna seu conteúdo como uma string.
 */
async function readFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target?.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file);
  });
}

/**
 * Lê um arquivo PDF usando pdf.js e retorna seu conteúdo de texto como uma string.
 */
async function readPdfContent(file: File): Promise<string> {
  // Verificação de segurança para garantir que a biblioteca PDF foi carregada.
  if (typeof pdfjsLib === 'undefined' || typeof pdfjsLib.getDocument !== 'function') {
    throw new Error('A biblioteca PDF (pdf.js) não foi carregada corretamente. Verifique a conexão com a internet ou recarregue a página.');
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      if (!event.target?.result) {
        return reject(new Error('Falha ao ler o arquivo PDF.'));
      }
      try {
        const typedArray = new Uint8Array(event.target.result as ArrayBuffer);
        // FIX: Passa os dados do PDF como um objeto para alinhar com a API do pdf.js e aumentar a robustez.
        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item: { str: string }) => item.str).join(' ');
          fullText += pageText + '\n\n'; // Adiciona espaço entre as páginas para melhor separação
        }
        resolve(fullText.trim());
      } catch (error) {
        console.error("Erro ao analisar o PDF:", error);
        reject(new Error('O arquivo PDF está corrompido ou não pôde ser lido.'));
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    // pdf.js precisa de um ArrayBuffer
    reader.readAsArrayBuffer(file);
  });
}

/**
 * Divide um texto longo em pedaços menores e sobrepostos.
 */
function splitTextIntoChunks(text: string): string[] {
  const chunks: string[] = [];
  if (!text) return chunks;

  let i = 0;
  while (i < text.length) {
    const chunk = text.substring(i, i + CHUNK_SIZE);
    chunks.push(chunk);
    i += CHUNK_SIZE - CHUNK_OVERLAP;
  }
  return chunks;
}

/**
 * Processa uma string de texto bruto: fragmenta e gera embeddings.
 */
export async function processText(text: string, fileName: string, isDeletable: boolean): Promise<Document> {
  const textChunks = splitTextIntoChunks(text);

  if (textChunks.length === 0) {
    return {
      id: `${fileName}-${Date.now()}`,
      name: fileName,
      chunks: [],
      isDeletable,
      content: text,
    };
  }

  const embeddings = await generateEmbeddings(textChunks);

  const documentChunks: DocumentChunk[] = textChunks.map((chunkText, i) => ({
    text: chunkText,
    embedding: embeddings[i],
  }));

  return {
    id: `${fileName}-${Date.now()}`,
    name: fileName,
    chunks: documentChunks,
    isDeletable,
    content: text,
  };
}


/**
 * Processa um arquivo enviado: lê, fragmenta e gera embeddings.
 * Diferencia entre arquivos PDF e de texto.
 */
export async function processDocument(file: File): Promise<Document> {
  let text = '';
  const fileType = file.type;
  const fileName = file.name.toLowerCase();

  if (fileType === 'application/pdf' || fileName.endsWith('.pdf')) {
    text = await readPdfContent(file);
  } else if (
    fileType === 'text/plain' ||
    fileType === 'text/markdown' ||
    fileName.endsWith('.txt') ||
    fileName.endsWith('.md')
  ) {
    text = await readFileContent(file);
  } else {
    throw new Error('Tipo de arquivo não suportado. Por favor, envie .txt, .md ou .pdf.');
  }

  // Documentos enviados pelo usuário são sempre deletáveis
  return processText(text, file.name, true);
}