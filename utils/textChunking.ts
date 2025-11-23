/**
 * Divide um texto em chunks menores com overlap
 * @param text Texto completo para dividir
 * @param maxChunkSize Tamanho máximo de cada chunk em caracteres
 * @param overlap Quantidade de caracteres de sobreposição entre chunks
 * @returns Array de chunks com texto e índice
 */
export function chunkText(
    text: string,
    maxChunkSize: number = 500,
    overlap: number = 50
): { text: string; index: number }[] {
    if (!text || text.trim().length === 0) {
        return [];
    }

    const chunks: { text: string; index: number }[] = [];
    let index = 0;
    let position = 0;

    // Limpar texto
    const cleanText = text.trim();

    while (position < cleanText.length) {
        // Calcular fim do chunk
        let end = Math.min(position + maxChunkSize, cleanText.length);

        // Se não for o último chunk, tentar quebrar em uma sentença ou parágrafo
        if (end < cleanText.length) {
            // Procurar por quebra de parágrafo
            const paragraphBreak = cleanText.lastIndexOf('\n\n', end);
            if (paragraphBreak > position) {
                end = paragraphBreak;
            } else {
                // Procurar por fim de sentença
                const sentenceEnd = cleanText.lastIndexOf('. ', end);
                if (sentenceEnd > position) {
                    end = sentenceEnd + 1;
                }
            }
        }

        // Extrair chunk
        const chunkText = cleanText.slice(position, end).trim();

        // Adicionar chunk se não estiver vazio
        if (chunkText.length > 0) {
            chunks.push({
                text: chunkText,
                index
            });
            index++;
        }

        // Mover posição com overlap
        position = end - overlap;

        // Evitar loop infinito
        if (position <= 0 || position >= cleanText.length) {
            break;
        }
    }

    return chunks;
}

/**
 * Divide texto em chunks por parágrafos
 * @param text Texto completo
 * @param maxChunkSize Tamanho máximo em caracteres
 * @returns Array de chunks
 */
export function chunkByParagraphs(
    text: string,
    maxChunkSize: number = 1000
): { text: string; index: number }[] {
    const paragraphs = text.split(/\n\n+/);
    const chunks: { text: string; index: number }[] = [];
    let currentChunk = '';
    let index = 0;

    for (const paragraph of paragraphs) {
        const trimmedParagraph = paragraph.trim();

        if (!trimmedParagraph) continue;

        // Se adicionar este parágrafo ultrapassar o limite
        if (currentChunk.length + trimmedParagraph.length > maxChunkSize) {
            // Salvar chunk atual se não estiver vazio
            if (currentChunk.length > 0) {
                chunks.push({ text: currentChunk.trim(), index });
                index++;
                currentChunk = '';
            }

            // Se o parágrafo sozinho for maior que o limite, dividir
            if (trimmedParagraph.length > maxChunkSize) {
                const subChunks = chunkText(trimmedParagraph, maxChunkSize, 50);
                subChunks.forEach(chunk => {
                    chunks.push({ text: chunk.text, index });
                    index++;
                });
            } else {
                currentChunk = trimmedParagraph;
            }
        } else {
            // Adicionar parágrafo ao chunk atual
            currentChunk += (currentChunk ? '\n\n' : '') + trimmedParagraph;
        }
    }

    // Adicionar último chunk
    if (currentChunk.trim().length > 0) {
        chunks.push({ text: currentChunk.trim(), index });
    }

    return chunks;
}

/**
 * Estima o número de tokens em um texto
 * Aproximação: ~4 caracteres por token
 * @param text Texto para estimar
 * @returns Número estimado de tokens
 */
export function estimateTokens(text: string): number {
    return Math.ceil(text.length / 4);
}

/**
 * Divide texto respeitando limite de tokens
 * @param text Texto completo
 * @param maxTokens Máximo de tokens por chunk
 * @returns Array de chunks
 */
export function chunkByTokens(
    text: string,
    maxTokens: number = 500
): { text: string; index: number; estimatedTokens: number }[] {
    const maxChars = maxTokens * 4; // Aproximação
    const chunks = chunkText(text, maxChars, 50);

    return chunks.map(chunk => ({
        ...chunk,
        estimatedTokens: estimateTokens(chunk.text),
    }));
}
