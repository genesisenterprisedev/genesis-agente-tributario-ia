-- ============================================
-- USER PROFILES - Configurações de Visibilidade
-- ============================================

-- Adicionar campo visible_agents se não existir
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS visible_agents BOOLEAN DEFAULT TRUE;

-- Comentário
COMMENT ON COLUMN user_profiles.visible_agents IS 'Se TRUE, mostra informações técnicas da LLM (tokens, modelo, etc.) na interface';

-- Criar índice para performance
CREATE INDEX IF NOT EXISTS idx_user_profiles_visible_agents 
  ON user_profiles (visible_agents);

-- Atualizar usuários existentes (opcional - define padrão como TRUE)
UPDATE user_profiles 
SET visible_agents = TRUE 
WHERE visible_agents IS NULL;

-- Exemplo de uso:
-- Para ocultar dados da LLM para um usuário específico:
-- UPDATE user_profiles SET visible_agents = FALSE WHERE user_id = 'user-uuid-here';

-- Verificar configuração
SELECT 
  user_id,
  visible_agents,
  created_at
FROM user_profiles
ORDER BY created_at DESC;
