# 🚀 Configuração Rápida - Sistema RAG

## ✅ Checklist de Configuração

### 1. Configurar OpenAI API Key

Adicione ao `.env.local`:

```env
OPENAI_API_KEY=sk-proj-...
```

**Onde conseguir:**
1. Acesse https://platform.openai.com/api-keys
2. Crie uma nova API key
3. Copie e cole no `.env.local`

---

### 2. Executar SQL no Supabase

1. Abra o **Supabase Dashboard**
2. Vá em **SQL Editor**
3. Cole o conteúdo de `database/rag_embeddings_schema.sql`
4. Clique em **Run**

**Verificar se funcionou:**
```sql
-- Deve retornar 3 tabelas
SELECT tablename FROM pg_tables 
WHERE tablename IN ('pdf_documents', 'pdf_chunks', 'document_embeddings');

-- Deve retornar 2 funções
SELECT proname FROM pg_proc 
WHERE proname IN ('match_document_chunks', 'match_pdf_chunks');
```

---

### 3. Testar o Sistema

#### Passo 1: Enviar Documento
1. Clique em **"Enviar Documento"**
2. Selecione um arquivo `.txt`, `.md` ou `.pdf`
3. Aguarde o upload

#### Passo 2: Adicionar à Base
1. Clique nos **3 pontos (⋮)** do documento
2. Selecione **"Adicionar à Base"**
3. Aguarde o processamento (pode demorar alguns segundos)

#### Passo 3: Verificar no Console
Abra o **DevTools** (F12) e veja:
```
Processando X chunks para embeddings...
✅ Documento adicionado à base com X embeddings!
```

#### Passo 4: Verificar no Banco
No Supabase SQL Editor:
```sql
-- Ver embeddings criados
SELECT 
  d.name as documento,
  COUNT(de.id) as total_chunks,
  COUNT(de.embedding) as chunks_com_embedding
FROM documents d
LEFT JOIN document_embeddings de ON d.id = de.document_id
WHERE d.is_deletable = false
GROUP BY d.id, d.name;
```

---

## 🔧 Troubleshooting

### Erro: "OpenAI API key not configured"
**Solução:** Adicione `OPENAI_API_KEY` no `.env.local` e reinicie o servidor

### Erro: "relation document_embeddings does not exist"
**Solução:** Execute o SQL schema no Supabase

### Erro: "Failed to generate embedding"
**Solução:** 
1. Verifique se a API key está correta
2. Verifique se tem créditos na conta OpenAI
3. Veja os logs no console para mais detalhes

### Processamento muito lento
**Normal!** Cada chunk precisa:
1. Chamar API OpenAI (~200-500ms)
2. Salvar no banco (~50-100ms)
3. Delay de 100ms entre chunks

**Exemplo:** 10 chunks = ~5-10 segundos

---

## 📊 Monitoramento

### Ver documentos processados:
```sql
SELECT * FROM documents_with_chunk_count;
```

### Ver chunks de um documento:
```sql
SELECT 
  chunk_index,
  LEFT(chunk_text, 100) as preview,
  metadata
FROM document_embeddings
WHERE document_id = 'SEU_DOCUMENT_ID'
ORDER BY chunk_index;
```

### Testar busca semântica:
```sql
-- Primeiro, pegue um embedding de exemplo
SELECT embedding FROM document_embeddings LIMIT 1;

-- Depois, busque similares
SELECT * FROM match_document_chunks(
  'COLE_O_EMBEDDING_AQUI'::vector(1536),
  0.7,
  5
);
```

---

## ✨ Próximos Passos

Após configurar, você pode:

1. ✅ **Implementar busca RAG no chat**
   - Gerar embedding da pergunta
   - Buscar chunks similares
   - Injetar contexto no prompt

2. ✅ **Adicionar indicador de progresso**
   - Mostrar "X/Y chunks processados"
   - Barra de progresso

3. ✅ **Cache de embeddings**
   - Evitar reprocessar mesmo documento

4. ✅ **Busca híbrida**
   - Combinar busca semântica + keywords

---

## 🎯 Status Atual

- ✅ Schema SQL criado
- ✅ API de embeddings funcionando
- ✅ Chunking inteligente implementado
- ✅ Salvamento no banco funcionando
- ✅ UI com feedback visual
- ⏳ **Falta:** Integrar RAG no chat

---

**Dúvidas?** Verifique o console do navegador (F12) para logs detalhados!
