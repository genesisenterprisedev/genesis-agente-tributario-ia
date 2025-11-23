-- ============================================
-- CHANGELOG SYSTEM
-- Sistema de registro de alterações e novidades
-- ============================================

-- Função para atualizar updated_at
CREATE OR REPLACE FUNCTION update_changelog_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Tabela principal de changelog
CREATE TABLE IF NOT EXISTS public.changelog (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  version CHARACTER VARYING(50) NOT NULL,
  title CHARACTER VARYING(255) NOT NULL,
  description TEXT NULL,
  category CHARACTER VARYING(50) NOT NULL,
  release_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  author CHARACTER VARYING(255) NULL,
  tags TEXT[] NULL,
  is_published BOOLEAN NULL DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NULL DEFAULT NOW(),
  CONSTRAINT changelog_pkey PRIMARY KEY (id),
  CONSTRAINT changelog_category_check CHECK (
    (category)::TEXT = ANY (
      ARRAY[
        'feature'::CHARACTER VARYING,
        'bugfix'::CHARACTER VARYING,
        'improvement'::CHARACTER VARYING,
        'breaking'::CHARACTER VARYING,
        'security'::CHARACTER VARYING,
        'docs'::CHARACTER VARYING
      ]::TEXT[]
    )
  )
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_changelog_version 
  ON public.changelog USING btree (version);

CREATE INDEX IF NOT EXISTS idx_changelog_category 
  ON public.changelog USING btree (category);

CREATE INDEX IF NOT EXISTS idx_changelog_release_date 
  ON public.changelog USING btree (release_date DESC);

CREATE INDEX IF NOT EXISTS idx_changelog_is_published 
  ON public.changelog USING btree (is_published);

-- Trigger para atualizar updated_at
CREATE TRIGGER changelog_updated_at_trigger 
  BEFORE UPDATE ON changelog 
  FOR EACH ROW
  EXECUTE FUNCTION update_changelog_updated_at();

-- ============================================
-- DADOS INICIAIS (EXEMPLO)
-- ============================================

INSERT INTO public.changelog (version, title, description, category, author, tags, release_date) VALUES
-- Versão 1.0.0 - RAG System
('1.0.0', 'Sistema RAG Implementado', 
'Implementação completa do sistema RAG (Retrieval-Augmented Generation) com embeddings vetoriais usando OpenAI ada-002 e pgvector. Agora o chat usa contexto dos documentos para gerar respostas mais precisas e contextualizadas.', 
'feature', 'Genesis AI Team', 
ARRAY['rag', 'embeddings', 'ai', 'chat'], 
'2025-11-23 02:00:00-04'),

('1.0.0', 'Busca Semântica com Embeddings', 
'Adicionada busca semântica usando embeddings de 1536 dimensões. O sistema encontra automaticamente os chunks mais relevantes dos documentos para cada pergunta do usuário.', 
'feature', 'Genesis AI Team', 
ARRAY['search', 'embeddings', 'semantic'], 
'2025-11-23 02:00:00-04'),

('1.0.0', 'Base de Conhecimento', 
'Documentos podem agora ser adicionados à Base de Conhecimento. Eles são processados em chunks, têm embeddings gerados e ficam disponíveis para consulta via RAG.', 
'feature', 'Genesis AI Team', 
ARRAY['knowledge-base', 'documents'], 
'2025-11-23 02:00:00-04'),

('1.0.0', 'Integração com OpenAI Embeddings', 
'Integração completa com a API de embeddings da OpenAI (text-embedding-ada-002) para geração de vetores de 1536 dimensões.', 
'feature', 'Genesis AI Team', 
ARRAY['openai', 'api', 'embeddings'], 
'2025-11-23 02:00:00-04'),

('1.0.0', 'Chunking Inteligente de Documentos', 
'Sistema de divisão inteligente de documentos em chunks de ~800 caracteres, respeitando parágrafos e sentenças para melhor contexto.', 
'improvement', 'Genesis AI Team', 
ARRAY['documents', 'processing'], 
'2025-11-23 02:00:00-04'),

-- Email Feature
('0.9.0', 'Envio de Conversas por Email', 
'Implementado sistema completo de envio de histórico de conversas por email usando Resend API. Inclui templates profissionais e seleção de destinatários.', 
'feature', 'Genesis AI Team', 
ARRAY['email', 'resend', 'export'], 
'2025-11-23 01:00:00-04'),

('0.9.0', 'Modal de Seleção de Contatos', 
'Novo modal para selecionar destinatário de email com busca, lista de contatos salvos e opção de email personalizado.', 
'feature', 'Genesis AI Team', 
ARRAY['ui', 'contacts', 'email'], 
'2025-11-23 01:00:00-04'),

('0.9.0', 'Template de Email Profissional', 
'Templates de email usando @react-email/components com design responsivo e formatação adequada de mensagens.', 
'improvement', 'Genesis AI Team', 
ARRAY['email', 'design'], 
'2025-11-23 01:00:00-04'),

-- Contact System
('0.8.0', 'Sistema de Contatos', 
'Implementado sistema completo de gerenciamento de contatos com formulário, validação e integração com Supabase.', 
'feature', 'Genesis AI Team', 
ARRAY['contacts', 'crm'], 
'2025-11-22 23:00:00-04'),

('0.8.0', 'Formulário de Contato', 
'Novo formulário de contato com campos para nome, sobrenome, email, telefone e mensagem. Inclui validação e feedback visual.', 
'feature', 'Genesis AI Team', 
ARRAY['forms', 'ui'], 
'2025-11-22 23:00:00-04'),

-- Document Management
('0.7.0', 'Upload de Documentos', 
'Sistema de upload e processamento de documentos PDF, TXT e MD com extração de texto e armazenamento.', 
'feature', 'Genesis AI Team', 
ARRAY['documents', 'upload'], 
'2025-11-22 21:00:00-04'),

('0.7.0', 'Sidebar de Documentos', 
'Interface lateral para gerenciar documentos enviados e da base de conhecimento com visualização, renomeação e exclusão.', 
'feature', 'Genesis AI Team', 
ARRAY['ui', 'documents'], 
'2025-11-22 21:00:00-04'),

-- Bug Fixes
('0.9.1', 'Correção de Erro no Render de Email', 
'Corrigido erro onde render() retornava Promise ao invés de string. Agora usa await corretamente.', 
'bugfix', 'Genesis AI Team', 
ARRAY['email', 'bug'], 
'2025-11-23 01:30:00-04'),

('0.8.1', 'Correção de Validação de Contatos', 
'Melhorada validação de campos do formulário de contatos e tratamento de erros do Supabase.', 
'bugfix', 'Genesis AI Team', 
ARRAY['contacts', 'validation'], 
'2025-11-22 23:30:00-04'),

-- Security
('0.9.2', 'Políticas RLS para Embeddings', 
'Adicionadas políticas de Row Level Security para tabelas de embeddings, garantindo que usuários só acessem seus próprios dados.', 
'security', 'Genesis AI Team', 
ARRAY['security', 'rls', 'database'], 
'2025-11-23 02:15:00-04'),

-- Documentation
('1.0.0', 'Documentação Completa do RAG', 
'Criada documentação completa do sistema RAG incluindo guias de setup, implementação e troubleshooting.', 
'docs', 'Genesis AI Team', 
ARRAY['documentation', 'rag'], 
'2025-11-23 02:30:00-04')

ON CONFLICT DO NOTHING;

-- ============================================
-- VIEWS ÚTEIS
-- ============================================

-- View: Changelog agrupado por versão
CREATE OR REPLACE VIEW changelog_by_version AS
SELECT 
  version,
  COUNT(*) as total_entries,
  MIN(release_date) as version_date,
  ARRAY_AGG(DISTINCT category) as categories,
  ARRAY_AGG(title ORDER BY release_date DESC) as titles
FROM changelog
WHERE is_published = true
GROUP BY version
ORDER BY version_date DESC;

-- View: Estatísticas de changelog
CREATE OR REPLACE VIEW changelog_stats AS
SELECT 
  category,
  COUNT(*) as total,
  COUNT(CASE WHEN is_published THEN 1 END) as published,
  MAX(release_date) as last_update
FROM changelog
GROUP BY category;

-- ============================================
-- COMENTÁRIOS
-- ============================================

COMMENT ON TABLE changelog IS 'Registro de todas as alterações, novidades e correções do sistema';
COMMENT ON COLUMN changelog.category IS 'Tipo de mudança: feature, bugfix, improvement, breaking, security, docs';
COMMENT ON COLUMN changelog.tags IS 'Tags para categorização e busca';
COMMENT ON COLUMN changelog.is_published IS 'Se a entrada está visível para os usuários';

-- ============================================
-- VERIFICAÇÃO
-- ============================================

-- Ver todas as entradas
SELECT version, title, category, release_date 
FROM changelog 
ORDER BY release_date DESC;

-- Ver estatísticas
SELECT * FROM changelog_stats;

-- Ver por versão
SELECT * FROM changelog_by_version;
