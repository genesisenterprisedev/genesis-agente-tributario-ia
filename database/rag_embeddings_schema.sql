-- ============================================
-- GENESIS AGENTE TRIBUTÁRIO IA
-- Sistema RAG com Embeddings Vetoriais
-- ============================================

-- Habilitar extensão pgvector para embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- ============================================
-- FUNÇÃO AUXILIAR: Atualizar updated_at
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- TABELA: pdf_documents
-- Armazena metadados dos documentos PDF
-- ============================================
CREATE TABLE IF NOT EXISTS public.pdf_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  mime_type TEXT NOT NULL DEFAULT 'application/pdf',
  page_count INTEGER NULL,
  content_text TEXT NULL,
  metadata JSONB NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  CONSTRAINT pdf_documents_pkey PRIMARY KEY (id),
  CONSTRAINT pdf_documents_user_id_fkey FOREIGN KEY (user_id) 
    REFERENCES auth.users (id) ON DELETE CASCADE
);

-- Índices para pdf_documents
CREATE INDEX IF NOT EXISTS idx_pdf_documents_user_id 
  ON public.pdf_documents USING btree (user_id);

CREATE INDEX IF NOT EXISTS idx_pdf_documents_created_at 
  ON public.pdf_documents USING btree (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_pdf_documents_storage_path 
  ON public.pdf_documents USING btree (storage_path);

-- Trigger para atualizar updated_at
CREATE TRIGGER update_pdf_documents_updated_at 
  BEFORE UPDATE ON pdf_documents 
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- TABELA: pdf_chunks
-- Armazena chunks de texto com embeddings
-- ============================================
CREATE TABLE IF NOT EXISTS public.pdf_chunks (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  pdf_document_id UUID NOT NULL,
  chunk_index INTEGER NOT NULL,
  chunk_text TEXT NOT NULL,
  page_number INTEGER NULL,
  embedding vector(1536) NULL, -- OpenAI ada-002 usa 1536 dimensões
  metadata JSONB NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  CONSTRAINT pdf_chunks_pkey PRIMARY KEY (id),
  CONSTRAINT pdf_chunks_pdf_document_id_fkey FOREIGN KEY (pdf_document_id) 
    REFERENCES pdf_documents (id) ON DELETE CASCADE
);

-- Índices para pdf_chunks
CREATE INDEX IF NOT EXISTS idx_pdf_chunks_chunk_index 
  ON public.pdf_chunks USING btree (chunk_index);

CREATE INDEX IF NOT EXISTS idx_pdf_chunks_document_id 
  ON public.pdf_chunks USING btree (pdf_document_id);

-- Índice HNSW para busca vetorial rápida
CREATE INDEX IF NOT EXISTS idx_pdf_chunks_embedding_hnsw 
  ON public.pdf_chunks 
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);

-- ============================================
-- TABELA: document_embeddings
-- Embeddings para documentos gerais (não-PDF)
-- ============================================
CREATE TABLE IF NOT EXISTS public.document_embeddings (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL,
  chunk_index INTEGER NOT NULL,
  chunk_text TEXT NOT NULL,
  embedding vector(1536) NULL,
  metadata JSONB NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  CONSTRAINT document_embeddings_pkey PRIMARY KEY (id),
  CONSTRAINT document_embeddings_document_id_fkey FOREIGN KEY (document_id) 
    REFERENCES documents (id) ON DELETE CASCADE
);

-- Índices para document_embeddings
CREATE INDEX IF NOT EXISTS idx_document_embeddings_document_id 
  ON public.document_embeddings USING btree (document_id);

CREATE INDEX IF NOT EXISTS idx_document_embeddings_chunk_index 
  ON public.document_embeddings USING btree (chunk_index);

-- Índice HNSW para busca vetorial
CREATE INDEX IF NOT EXISTS idx_document_embeddings_hnsw 
  ON public.document_embeddings 
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);

-- ============================================
-- FUNÇÃO: Buscar chunks similares (RAG)
-- ============================================
CREATE OR REPLACE FUNCTION match_document_chunks(
  query_embedding vector(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5
)
RETURNS TABLE (
  id UUID,
  document_id UUID,
  chunk_text TEXT,
  similarity FLOAT,
  metadata JSONB
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    de.id,
    de.document_id,
    de.chunk_text,
    1 - (de.embedding <=> query_embedding) AS similarity,
    de.metadata
  FROM document_embeddings de
  WHERE de.embedding IS NOT NULL
    AND 1 - (de.embedding <=> query_embedding) > match_threshold
  ORDER BY de.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- ============================================
-- FUNÇÃO: Buscar chunks de PDF similares
-- ============================================
CREATE OR REPLACE FUNCTION match_pdf_chunks(
  query_embedding vector(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5,
  user_id_filter UUID DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  pdf_document_id UUID,
  document_name TEXT,
  chunk_text TEXT,
  page_number INTEGER,
  similarity FLOAT,
  metadata JSONB
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    pc.id,
    pc.pdf_document_id,
    pd.name AS document_name,
    pc.chunk_text,
    pc.page_number,
    1 - (pc.embedding <=> query_embedding) AS similarity,
    pc.metadata
  FROM pdf_chunks pc
  INNER JOIN pdf_documents pd ON pc.pdf_document_id = pd.id
  WHERE pc.embedding IS NOT NULL
    AND 1 - (pc.embedding <=> query_embedding) > match_threshold
    AND (user_id_filter IS NULL OR pd.user_id = user_id_filter)
  ORDER BY pc.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- ============================================
-- POLÍTICAS RLS (Row Level Security)
-- ============================================

-- Habilitar RLS nas tabelas
ALTER TABLE pdf_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE pdf_chunks ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_embeddings ENABLE ROW LEVEL SECURITY;

-- Políticas para pdf_documents
CREATE POLICY "Users can view their own PDF documents"
  ON pdf_documents FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own PDF documents"
  ON pdf_documents FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own PDF documents"
  ON pdf_documents FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own PDF documents"
  ON pdf_documents FOR DELETE
  USING (auth.uid() = user_id);

-- Políticas para pdf_chunks
CREATE POLICY "Users can view chunks of their PDF documents"
  ON pdf_chunks FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM pdf_documents pd
      WHERE pd.id = pdf_chunks.pdf_document_id
      AND pd.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert chunks for their PDF documents"
  ON pdf_chunks FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM pdf_documents pd
      WHERE pd.id = pdf_chunks.pdf_document_id
      AND pd.user_id = auth.uid()
    )
  );

-- Políticas para document_embeddings
CREATE POLICY "Users can view embeddings of their documents"
  ON document_embeddings FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM documents d
      WHERE d.id = document_embeddings.document_id
      AND d.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert embeddings for their documents"
  ON document_embeddings FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM documents d
      WHERE d.id = document_embeddings.document_id
      AND d.user_id = auth.uid()
    )
  );

-- ============================================
-- VIEWS ÚTEIS
-- ============================================

-- View: Documentos com contagem de chunks
CREATE OR REPLACE VIEW documents_with_chunk_count AS
SELECT
  d.id,
  d.name,
  d.user_id,
  d.is_deletable,
  d.created_at,
  COUNT(de.id) AS chunk_count,
  COUNT(de.embedding) AS embedded_chunk_count
FROM documents d
LEFT JOIN document_embeddings de ON d.id = de.document_id
GROUP BY d.id, d.name, d.user_id, d.is_deletable, d.created_at;

-- View: PDFs com contagem de chunks
CREATE OR REPLACE VIEW pdf_documents_with_stats AS
SELECT
  pd.id,
  pd.name,
  pd.user_id,
  pd.page_count,
  pd.file_size,
  pd.created_at,
  COUNT(pc.id) AS chunk_count,
  COUNT(pc.embedding) AS embedded_chunk_count,
  ROUND(AVG(LENGTH(pc.chunk_text))) AS avg_chunk_length
FROM pdf_documents pd
LEFT JOIN pdf_chunks pc ON pd.id = pc.pdf_document_id
GROUP BY pd.id, pd.name, pd.user_id, pd.page_count, pd.file_size, pd.created_at;

-- ============================================
-- COMENTÁRIOS
-- ============================================

COMMENT ON TABLE pdf_documents IS 'Armazena metadados de documentos PDF enviados pelos usuários';
COMMENT ON TABLE pdf_chunks IS 'Armazena chunks de texto extraídos de PDFs com seus embeddings vetoriais';
COMMENT ON TABLE document_embeddings IS 'Armazena embeddings de documentos gerais (TXT, MD, etc)';
COMMENT ON FUNCTION match_document_chunks IS 'Busca chunks de documentos similares usando similaridade de cosseno';
COMMENT ON FUNCTION match_pdf_chunks IS 'Busca chunks de PDFs similares com filtro opcional por usuário';

-- ============================================
-- GRANTS (Permissões)
-- ============================================

-- Permitir que usuários autenticados acessem as funções
GRANT EXECUTE ON FUNCTION match_document_chunks TO authenticated;
GRANT EXECUTE ON FUNCTION match_pdf_chunks TO authenticated;

-- ============================================
-- FIM DO SCRIPT
-- ============================================

-- Para verificar se tudo foi criado corretamente:
SELECT 
  'Tables' AS type,
  tablename AS name
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('pdf_documents', 'pdf_chunks', 'document_embeddings')
UNION ALL
SELECT 
  'Functions' AS type,
  proname AS name
FROM pg_proc
WHERE proname IN ('match_document_chunks', 'match_pdf_chunks', 'update_updated_at_column')
ORDER BY type, name;
