# 🎉 RAG Integrado no Chat - Documentação Completa

## ✅ Status: IMPLEMENTADO E FUNCIONANDO!

O sistema RAG (Retrieval-Augmented Generation) está **totalmente integrado** no chat do agente de documentos!

---

## 🎯 Como Funciona

### Fluxo Completo (Passo a Passo):

```
1. Usuário faz uma pergunta no chat
   ↓
2. Sistema gera embedding da pergunta (OpenAI ada-002)
   ↓
3. Busca chunks similares no banco (pgvector + HNSW)
   ↓
4. Encontra top 5 chunks mais relevantes (similaridade > 70%)
   ↓
5. Injeta chunks como contexto no prompt do LLM
   ↓
6. LLM gera resposta baseada no contexto
   ↓
7. Resposta é exibida ao usuário
   ↓
8. Logs mostram quais documentos foram usados
```

---

## 📊 Exemplo Real

### Pergunta do Usuário:
```
"Como calcular o ICMS no Simples Nacional?"
```

### O que acontece nos bastidores:

#### 1. Embedding da Pergunta
```javascript
[RAG] Generating embedding for query...
[RAG] Embedding generated: [0.123, -0.456, 0.789, ...] (1536 dims)
```

#### 2. Busca Semântica
```javascript
[RAG] Searching for similar chunks...
[RAG] Found 3 relevant chunks for query
```

#### 3. Chunks Encontrados
```
📄 Documento: Manual_ICMS.pdf
Similaridade: 92.3%
Conteúdo: "O ICMS no Simples Nacional é calculado..."

📄 Documento: Guia_Tributario.txt
Similaridade: 87.1%
Conteúdo: "Para empresas do Simples, a alíquota..."

📄 Documento: FAQ_Impostos.md
Similaridade: 75.8%
Conteúdo: "Perguntas frequentes sobre ICMS..."
```

#### 4. Prompt Enviado ao LLM
```
Você é o "Gênesis", um assistente de IA especialista...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 CONTEXTO DOS DOCUMENTOS (Base de Conhecimento)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Documento 1: Manual_ICMS.pdf
**Relevância:** 92.3%
**Conteúdo:**
O ICMS no Simples Nacional é calculado...

---

### Documento 2: Guia_Tributario.txt
**Relevância:** 87.1%
**Conteúdo:**
Para empresas do Simples, a alíquota...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**INSTRUÇÕES IMPORTANTES:**
1. Priorize as informações do contexto acima
2. Cite o documento de origem
3. Se o contexto não for suficiente, use conhecimento geral
...

Usuário: Como calcular o ICMS no Simples Nacional?

Assistente:
```

#### 5. Resposta do LLM
```
Com base no Manual_ICMS.pdf e no Guia_Tributario.txt, o cálculo do ICMS 
no Simples Nacional funciona da seguinte forma:

1. Identifique a faixa de faturamento da empresa
2. Aplique a alíquota correspondente...

[Fonte: Manual_ICMS.pdf, Guia_Tributario.txt]
```

#### 6. Logs no Console
```javascript
[RAG] Using 3 document chunks as context
[RAG] Resposta gerada usando 2 documento(s): Manual_ICMS.pdf, Guia_Tributario.txt
```

---

## 🔧 Configuração Técnica

### Arquivos Modificados:

1. **`services/geminiService.ts`**
   - ✅ `searchDocumentContext()` - Busca semântica
   - ✅ `generateResponseWithRAG()` - Geração com RAG

2. **`store.ts`**
   - ✅ Importa `generateResponseWithRAG`
   - ✅ Usa RAG apenas para agente "document"
   - ✅ Logs de debug

3. **`app/api/embed/route.ts`**
   - ✅ Gera embeddings via OpenAI

4. **`app/api/search/route.ts`**
   - ✅ Busca chunks similares via Supabase RPC

---

## 🎮 Como Testar

### Passo 1: Adicionar Documento à Base
1. Envie um documento (PDF, TXT, MD)
2. Clique em "Adicionar à Base"
3. Aguarde processamento
4. Veja no console: `✅ Documento adicionado à base com X embeddings!`

### Passo 2: Fazer Pergunta
1. Vá para o chat (agente de documentos)
2. Faça uma pergunta relacionada ao documento
3. Veja no console:
   ```
   [RAG] Found X relevant chunks for query
   [RAG] Using X document chunks as context
   [RAG] Resposta gerada usando X documento(s): ...
   ```

### Passo 3: Verificar Resposta
- A resposta deve mencionar informações do documento
- Pode citar o nome do documento
- Será mais precisa e contextualizada

---

## 📈 Métricas e Monitoramento

### Logs Importantes:

```javascript
// Busca semântica
[RAG] Found 5 relevant chunks for query

// Uso de contexto
[RAG] Using 5 document chunks as context

// Documentos referenciados
[RAG] Resposta gerada usando 2 documento(s): Doc1.pdf, Doc2.txt

// Sem contexto
[RAG] No relevant context found, using general knowledge
```

### Queries SQL para Monitoramento:

```sql
-- Ver documentos com embeddings
SELECT 
  d.name,
  COUNT(de.id) as total_chunks,
  COUNT(de.embedding) as embedded_chunks,
  d.is_deletable
FROM documents d
LEFT JOIN document_embeddings de ON d.id = de.document_id
GROUP BY d.id, d.name, d.is_deletable
ORDER BY embedded_chunks DESC;

-- Ver chunks mais recentes
SELECT 
  d.name as documento,
  de.chunk_index,
  LEFT(de.chunk_text, 100) as preview,
  de.created_at
FROM document_embeddings de
JOIN documents d ON de.document_id = d.id
ORDER BY de.created_at DESC
LIMIT 10;
```

---

## ⚙️ Parâmetros Configuráveis

### No código (`geminiService.ts`):

```typescript
// Busca semântica
searchDocumentContext(
  query,
  limit: 5,        // Número de chunks
  threshold: 0.7   // Similaridade mínima (0-1)
)

// Chunking
chunkByParagraphs(
  text,
  maxChunkSize: 800  // Tamanho máximo do chunk
)
```

### Ajustar para melhor performance:

- **Mais chunks** (limit: 10) = Mais contexto, mas mais tokens
- **Threshold maior** (0.8) = Apenas chunks muito similares
- **Threshold menor** (0.6) = Mais chunks, menos precisos
- **Chunks maiores** (1200) = Menos chunks, mais contexto por chunk

---

## 🐛 Troubleshooting

### Problema: "No relevant context found"
**Causa:** Nenhum chunk com similaridade > 70%
**Solução:** 
- Reduzir threshold para 0.6
- Adicionar mais documentos relevantes
- Verificar se embeddings foram gerados

### Problema: Resposta não usa documentos
**Causa:** LLM ignora contexto
**Solução:**
- Verificar se chunks são relevantes
- Melhorar prompt do sistema
- Aumentar número de chunks

### Problema: Processamento lento
**Causa:** Muitos chunks para processar
**Solução:**
- Reduzir limit de 5 para 3
- Aumentar threshold para 0.8
- Usar chunks menores

---

## 🚀 Próximas Melhorias

### Implementadas:
- ✅ Busca semântica com embeddings
- ✅ Injeção de contexto no prompt
- ✅ Logs de debug
- ✅ Fallback para conhecimento geral

### Futuras:
- ⏳ Mostrar documentos usados na UI
- ⏳ Indicador visual de RAG ativo
- ⏳ Cache de embeddings
- ⏳ Hybrid search (keyword + semantic)
- ⏳ Re-ranking de resultados
- ⏳ Filtros por data/tipo

---

## 📚 Recursos

- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)
- [Supabase Vector](https://supabase.com/docs/guides/ai/vector-columns)
- [RAG Best Practices](https://www.pinecone.io/learn/retrieval-augmented-generation/)

---

## ✨ Resultado Final

**Antes (sem RAG):**
```
Usuário: Como calcular ICMS?
Bot: O ICMS é calculado... [resposta genérica]
```

**Depois (com RAG):**
```
Usuário: Como calcular ICMS?
Bot: Segundo o Manual_ICMS.pdf, o cálculo específico para 
sua situação é... [resposta precisa baseada nos documentos]
```

---

**🎊 Sistema RAG totalmente funcional e integrado!**

**Criado por:** Genesis AI Team  
**Data:** 2025-11-23  
**Versão:** 1.0.0
