import { generateEmbeddings } from "./services/geminiService";
import { Document, DocumentChunk } from "./types";
import { getPdfJs } from "./services/pdfjsLoader";
import * as mammoth from "mammoth";
import * as XLSX from "xlsx";

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
  // Get PDF.js with proper worker configuration
  const pdfjsLib = await getPdfJs();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      if (!event.target?.result) {
        return reject(new Error("Falha ao ler o arquivo PDF."));
      }
      try {
        const typedArray = new Uint8Array(event.target.result as ArrayBuffer);
        const loadingTask = pdfjsLib.getDocument({ data: typedArray });
        const pdf = await loadingTask.promise;
        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items
            .map((item: any) => item.str)
            .join(" ");
          fullText += pageText + "\n\n"; // Adiciona espaço entre as páginas para melhor separação
        }
        resolve(fullText.trim());
      } catch (error) {
        console.error("Erro ao analisar o PDF:", error);
        reject(
          new Error("O arquivo PDF está corrompido ou não pôde ser lido.")
        );
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
 * Lê um arquivo DOCX (Word moderno) e extrai o texto bruto usando mammoth.
 */
async function readDocxContent(file: File): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return (result.value || "").trim();
  } catch (error) {
    console.error("Erro ao processar DOCX:", error);
    throw new Error(
      "Falha ao ler o arquivo .docx. Verifique se o arquivo não está corrompido."
    );
  }
}

/**
 * Lê um arquivo XLSX (Excel) e converte todas as abas em texto tabular.
 */
async function readXlsxContent(file: File): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    const parts: string[] = [];

    workbook.SheetNames.forEach((sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      if (!sheet) return;
      // Converte a planilha em CSV usando tabulação como separador de campos
      const csv = XLSX.utils.sheet_to_csv(sheet, { FS: "\t" });
      if (csv.trim()) {
        parts.push(`### Aba: ${sheetName}\n${csv}`);
      }
    });

    return parts.join("\n\n").trim();
  } catch (error) {
    console.error("Erro ao processar XLSX:", error);
    throw new Error(
      "Falha ao ler o arquivo .xlsx. Verifique se o arquivo não está corrompido."
    );
  }
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
export async function processText(
  text: string,
  fileName: string,
  isDeletable: boolean
): Promise<Document> {
  const textChunks = splitTextIntoChunks(text);

  if (textChunks.length === 0) {
    return {
      id: `${fileName} -${Date.now()} `,
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
    id: `${fileName} -${Date.now()} `,
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
  let text = "";
  const fileType = file.type;
  const fileName = file.name.toLowerCase();

  if (fileType === "application/pdf" || fileName.endsWith(".pdf")) {
    text = await readPdfContent(file);
  } else if (
    fileType === "text/plain" ||
    fileType === "text/markdown" ||
    fileType === "text/csv" ||
    fileName.endsWith(".txt") ||
    fileName.endsWith(".md") ||
    fileName.endsWith(".csv")
  ) {
    text = await readFileContent(file);
  } else if (
    fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    fileName.endsWith(".docx")
  ) {
    text = await readDocxContent(file);
  } else if (
    fileType ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
    fileName.endsWith(".xlsx")
  ) {
    text = await readXlsxContent(file);
  } else if (fileName.endsWith(".doc")) {
    // Formato .doc (Word 97-2003) não é suportado nativamente no browser.
    // Evitamos tentar processar binário proprietário sem conversão adequada.
    throw new Error(
      "Arquivos .doc (Word antigo) não são suportados. Converta para .docx ou .pdf antes de enviar."
    );
  } else {
    throw new Error(
      "Tipo de arquivo não suportado. Por favor, envie .txt, .md ou .pdf."
    );
  }

  // Documentos enviados pelo usuário são sempre deletáveis
  return processText(text, file.name, true);
}
