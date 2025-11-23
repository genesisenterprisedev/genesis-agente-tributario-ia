/**
 * PDF.js Loader Service
 *
 * Este serviço gerencia a inicialização do PDF.js com configurações otimizadas
 * para suprimir warnings comuns de fontes TrueType que não afetam a funcionalidade.
 *
 * Problemas resolvidos:
 * - TT: undefined function: 21
 * - TT: invalid function id: 136
 *
 * Estes warnings são comuns com fontes TrueType e não impactam a extração de texto.
 */

// Custom PDF.js initialization wrapper
// This file ensures the worker is configured before any PDF.js code runs

let pdfjsLib: any = null;
let initPromise: Promise<any> | null = null;

// Store original console methods for restoration
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

export async function getPdfJs() {
  // Return cached instance if already initialized
  if (pdfjsLib) {
    return pdfjsLib;
  }

  // Return existing initialization promise if in progress
  if (initPromise) {
    return initPromise;
  }

  // Start initialization with warning suppression
  initPromise = (async () => {
    /**
     * Supressão temporária de warnings do PDF.js
     *
     * O PDF.js emite warnings sobre funções indefinidas em fontes TrueType,
     * mas estes são benignos e não afetam a funcionalidade de extração de texto.
     *
     * Estratégia: Interceptamos o console durante a inicialização e filtramos
     * apenas as mensagens específicas do PDF.js, restaurando o comportamento
     * normal após 1 segundo.
     */

    // Intercepta warnings para filtrar mensagens de fontes TT
    console.warn = function (...args: any[]) {
      const message = args[0];
      if (
        typeof message === "string" &&
        (message.includes("TT: undefined function") ||
          message.includes("TT: invalid function id"))
      ) {
        return; // Ignora silenciosamente warnings de fontes PDF.js
      }
      return originalConsoleWarn.apply(console, args);
    };

    // Intercepta errors para filtrar mensagens de fontes TT
    console.error = function (...args: any[]) {
      const message = args[0];
      if (
        typeof message === "string" &&
        (message.includes("TT: undefined function") ||
          message.includes("TT: invalid function id"))
      ) {
        return; // Ignora silenciosamente errors de fontes PDF.js
      }
      return originalConsoleError.apply(console, args);
    };

    // Importa e configura o PDF.js
    const lib = await import("pdfjs-dist");

    // Configura o worker imediatamente após o import
    lib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

    pdfjsLib = lib;

    /**
     * Restauração do console
     *
     * Após a inicialização, restauramos os métodos originais do console
     * para garantir que outros erros e warnings sejam exibidos normalmente.
     * O timeout de 1 segundo garante que todos os warnings de inicialização
     * sejam capturados.
     */
    setTimeout(() => {
      console.warn = originalConsoleWarn;
      console.error = originalConsoleError;
    }, 1000);

    return lib;
  })();

  return initPromise;
}
