# 🤖 Sistema RAG com Embeddings - Guia de Implementação

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
3. [Arquitetura do Sistema](#arquitetura-do-sistema)
4. [Implementação Frontend](#implementação-frontend)
5. [Implementação Backend](#implementação-backend)
6. [Fluxo Completo](#fluxo-completo)
7. [Testes](#testes)

---

## 🎯 Visão Geral

Este sistema implementa **RAG (Retrieval-Augmented Generation)** usando:
- **Supabase** como banco vetorial
- **pgvector** para busca semântica
- **OpenAI Embeddings** (ada-002, 1536 dimensões)
- **HNSW** para busca vetorial rápida

### Benefícios:
✅ Respostas contextualizadas baseadas em documentos
✅ Busca semântica (não apenas keywords)
✅ Escalável (HNSW index)
✅ Seguro (RLS policies)

---

## 🗄️ Configuração do Banco de Dados

### 1. Execute o Script SQL

No **Supabase SQL Editor**, execute:

```bash
database/rag_embeddings_schema.sql
```

Este script cria:
- ✅ Tabelas: `pdf_documents`, `pdf_chunks`, `document_embeddings`
- ✅ Índices HNSW para busca vetorial
- ✅ Funções: `match_document_chunks()`, `match_pdf_chunks()`
- ✅ Políticas RLS para segurança
- ✅ Views úteis para estatísticas

### 2. Verifique a Instalação

```sql
-- Verificar se pgvector está habilitado
SELECT * FROM pg_extension WHERE extname = 'vector';

-- Verificar tabelas criadas
SELECT tablename FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename LIKE '%chunk%' OR tablename LIKE '%pdf%';

-- Verificar funções
SELECT proname FROM pg_proc 
WHERE proname LIKE 'match_%';
```

---

## 🏗️ Arquitetura do Sistema

```
┌─────────────────────────────────────────────────────────┐
│                    USUÁRIO                              │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│              FRONTEND (Next.js + React)                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Upload PDF   │  │ Chat Input   │  │ Document     │  │
│  │              │  │              │  │ Sidebar      │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│              API ROUTES (Next.js)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ /api/embed   │  │ /api/search  │  │ /api/chat    │  │
│  │              │  │              │  │              │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
┌──────────────────┐          ┌──────────────────┐
│  OpenAI API      │          │  Supabase        │
│  (Embeddings)    │          │  (pgvector)      │
│                  │          │                  │
│  - ada-002       │          │  - pdf_chunks    │
│  - 1536 dims     │          │  - HNSW index    │
└──────────────────┘          └──────────────────┘
```

---

## 💻 Implementação Frontend

### 1. Criar API Route para Embeddings

```typescript
// app/api/embed/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const response = await openai.embeddings.create({
      model: 'text-embedding-ada-002',
      input: text,
    });

    const embedding = response.data[0].embedding;

    return NextResponse.json({ embedding });
  } catch (error: any) {
    console.error('Embedding error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
```

### 2. Criar API Route para Busca Semântica

```typescript
// app/api/search/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/services/supabaseClient';

export async function POST(req: Request) {
  try {
    const { query, embedding, limit = 5, threshold = 0.7 } = await req.json();

    // Buscar chunks similares
    const { data, error } = await supabase.rpc('match_document_chunks', {
      query_embedding: embedding,
      match_threshold: threshold,
      match_count: limit,
    });

    if (error) throw error;

    return NextResponse.json({ results: data });
  } catch (error: any) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
```

### 3. Atualizar Chat para Usar RAG

```typescript
// services/geminiService.ts
export async function generateResponseWithRAG(
  userMessage: string,
  conversationHistory: Message[]
) {
  // 1. Gerar embedding da pergunta
  const embeddingResponse = await fetch('/api/embed', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: userMessage }),
  });
  const { embedding } = await embeddingResponse.json();

  // 2. Buscar chunks relevantes
  const searchResponse = await fetch('/api/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      query: userMessage, 
      embedding,
      limit: 5,
      threshold: 0.7
    }),
  });
  const { results } = await searchResponse.json();

  // 3. Construir contexto
  const context = results
    .map((r: any) => `[${r.document_name}]\n${r.chunk_text}`)
    .join('\n\n---\n\n');

  // 4. Gerar resposta com contexto
  const systemPrompt = `Você é um assistente tributário especializado.
  
Use o seguinte contexto para responder a pergunta do usuário:

${context}

Se a informação não estiver no contexto, diga que não tem certeza.`;

  // ... resto da lógica de chat
}
```

---

## 🔧 Implementação Backend

### 1. Processar Documento e Gerar Embeddings

```typescript
// services/documentProcessor.ts
import { supabase } from './supabaseClient';

export async function processDocumentWithEmbeddings(
  documentId: string,
  chunks: { text: string; index: number }[]
) {
  for (const chunk of chunks) {
    // Gerar embedding
    const embeddingResponse = await fetch('/api/embed', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: chunk.text }),
    });
    const { embedding } = await embeddingResponse.json();

    // Salvar no banco
    const { error } = await supabase
      .from('document_embeddings')
      .insert({
        document_id: documentId,
        chunk_index: chunk.index,
        chunk_text: chunk.text,
        embedding,
        metadata: {
          length: chunk.text.length,
          processed_at: new Date().toISOString(),
        },
      });

    if (error) {
      console.error('Error saving embedding:', error);
    }
  }
}
```

### 2. Atualizar `moveToKnowledgeBase`

```typescript
// store.ts
moveToKnowledgeBase: async (id) => {
  try {
    // 1. Atualizar documento
    const { error } = await supabase
      .from('documents')
      .update({ is_deletable: false })
      .match({ id });

    if (error) throw error;

    // 2. Obter documento
    const doc = get().documents.find(d => d.id === id);
    if (!doc) throw new Error('Documento não encontrado');

    // 3. Processar chunks e gerar embeddings
    const chunks = chunkText(doc.content, 500); // 500 chars por chunk
    await processDocumentWithEmbeddings(id, chunks);

    // 4. Atualizar estado local
    set((state) => ({
      documents: state.documents.map((doc) =>
        doc.id === id ? { ...doc, isDeletable: false } : doc
      ),
    }));

    console.log('Documento adicionado à base com embeddings!');
  } catch (e: unknown) {
    const detail = getErrorMessage(e);
    console.error('Error:', detail);
    set({ error: `Erro ao adicionar à base: ${detail}` });
  }
},
```

### 3. Função Helper para Chunking

```typescript
// utils/textChunking.ts
export function chunkText(
  text: string,
  maxChunkSize: number = 500,
  overlap: number = 50
): { text: string; index: number }[] {
  const chunks: { text: string; index: number }[] = [];
  let index = 0;
  let position = 0;

  while (position < text.length) {
    const end = Math.min(position + maxChunkSize, text.length);
    const chunk = text.slice(position, end);
    
    chunks.push({ text: chunk.trim(), index });
    
    position = end - overlap;
    index++;
  }

  return chunks;
}
```

---

## 🔄 Fluxo Completo

### Fluxo 1: Upload e Processamento

```
1. Usuário faz upload de PDF
   ↓
2. Frontend extrai texto
   ↓
3. Salva em `documents` table
   ↓
4. Usuário clica "Adicionar à Base"
   ↓
5. Backend divide texto em chunks
   ↓
6. Para cada chunk:
   - Gera embedding via OpenAI
   - Salva em `document_embeddings`
   ↓
7. Documento marcado como `is_deletable = false`
   ↓
8. Toast de sucesso exibido
```

### Fluxo 2: Chat com RAG

```
1. Usuário envia mensagem
   ↓
2. Gera embedding da mensagem
   ↓
3. Busca chunks similares (match_document_chunks)
   ↓
4. Ordena por similaridade (cosine)
   ↓
5. Pega top 5 chunks mais relevantes
   ↓
6. Injeta chunks como contexto no prompt
   ↓
7. Envia para LLM (OpenRouter/Gemini)
   ↓
8. LLM responde baseado no contexto
   ↓
9. Resposta exibida ao usuário
```

---

## 🧪 Testes

### 1. Testar Embedding

```typescript
// test/embed.test.ts
const response = await fetch('/api/embed', {
  method: 'POST',
  body: JSON.stringify({ text: 'Como calcular ICMS?' }),
});
const { embedding } = await response.json();
console.log('Embedding dimensions:', embedding.length); // Should be 1536
```

### 2. Testar Busca Semântica

```sql
-- No Supabase SQL Editor
SELECT * FROM match_document_chunks(
  '[0.1, 0.2, ...]'::vector(1536), -- embedding de teste
  0.7, -- threshold
  5    -- limit
);
```

### 3. Testar RAG Completo

```typescript
// Enviar mensagem e verificar se contexto foi usado
const message = "O que é SPED Fiscal?";
// Verificar se a resposta menciona informações dos documentos
```

---

## 📊 Monitoramento

### Queries Úteis

```sql
-- Ver documentos com embeddings
SELECT * FROM documents_with_chunk_count;

-- Ver PDFs processados
SELECT * FROM pdf_documents_with_stats;

-- Contar embeddings por documento
SELECT 
  d.name,
  COUNT(de.id) as total_chunks,
  COUNT(de.embedding) as embedded_chunks
FROM documents d
LEFT JOIN document_embeddings de ON d.id = de.document_id
GROUP BY d.id, d.name;

-- Ver chunks mais similares a um texto
SELECT 
  chunk_text,
  similarity
FROM match_document_chunks(
  (SELECT embedding FROM document_embeddings LIMIT 1),
  0.5,
  10
);
```

---

## 🚀 Próximos Passos

1. ✅ **Implementar chunking inteligente** (por parágrafo, sentença)
2. ✅ **Cache de embeddings** (evitar reprocessamento)
3. ✅ **Hybrid search** (keyword + semantic)
4. ✅ **Re-ranking** dos resultados
5. ✅ **Metadata filtering** (data, tipo, etc)
6. ✅ **Analytics** de uso do RAG

---

## 📚 Recursos

- [Supabase Vector Docs](https://supabase.com/docs/guides/ai/vector-columns)
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)
- [pgvector GitHub](https://github.com/pgvector/pgvector)
- [HNSW Algorithm](https://arxiv.org/abs/1603.09320)

---

**Criado por:** Genesis AI Team  
**Data:** 2025-11-23  
**Versão:** 1.0.0
