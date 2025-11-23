# 🔒 Controle de Visibilidade de Dados da LLM

## ✅ Funcionalidade Implementada!

Agora é possível controlar se os dados técnicos da LLM (tokens, modelo usado, etc.) são exibidos na interface do usuário através do campo `visible_agents` na tabela `user_profiles`.

---

## 🎯 Como Funciona

### Campo: `visible_agents`
- **Tipo:** `BOOLEAN`
- **Padrão:** `TRUE`
- **Localização:** Tabela `user_profiles`

### Comportamento:

| Valor | Comportamento |
|-------|---------------|
| `TRUE` | **Mostra** informações da LLM (modelo ativo, uso de tokens, barra de progresso) |
| `FALSE` | **Oculta** todas as informações técnicas da LLM |

---

## 📊 O que é Ocultado

Quando `visible_agents = FALSE`, o componente `TokenUsageDisplay` **não é renderizado**, ocultando:

- ✅ Nome do modelo ativo (ex: "GPT-4o Mini")
- ✅ Contador de tokens (ex: "1,234/50,000")
- ✅ Barra de progresso de uso
- ✅ Qualquer informação técnica sobre a LLM

---

## 🚀 Como Usar

### 1. **Executar SQL no Supabase**

```sql
-- Execute este script para adicionar o campo
-- database/user_profiles_visible_agents.sql
```

Ou manualmente:

```sql
-- Adicionar campo
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS visible_agents BOOLEAN DEFAULT TRUE;

-- Criar índice
CREATE INDEX IF NOT EXISTS idx_user_profiles_visible_agents 
  ON user_profiles (visible_agents);
```

### 2. **Ocultar Dados da LLM para um Usuário**

```sql
-- Ocultar para usuário específico
UPDATE user_profiles 
SET visible_agents = FALSE 
WHERE user_id = 'uuid-do-usuario-aqui';
```

### 3. **Mostrar Dados da LLM (Padrão)**

```sql
-- Mostrar para usuário específico
UPDATE user_profiles 
SET visible_agents = TRUE 
WHERE user_id = 'uuid-do-usuario-aqui';
```

### 4. **Verificar Configuração**

```sql
-- Ver configuração de todos os usuários
SELECT 
  user_id,
  full_name,
  visible_agents,
  created_at
FROM user_profiles
ORDER BY created_at DESC;
```

---

## 💡 Casos de Uso

### Quando Usar `visible_agents = FALSE`:

1. **Usuários Finais Não-Técnicos**
   - Clientes que não precisam ver detalhes técnicos
   - Usuários que podem se confundir com informações de tokens

2. **Demonstrações**
   - Apresentações para clientes
   - Demos comerciais
   - Interfaces mais limpas

3. **Ambientes de Produção**
   - Usuários que só precisam usar o sistema
   - Interfaces simplificadas

### Quando Usar `visible_agents = TRUE`:

1. **Desenvolvedores**
   - Monitoramento de uso
   - Debug e troubleshooting
   - Análise de performance

2. **Administradores**
   - Controle de custos
   - Gestão de recursos
   - Otimização de uso

3. **Power Users**
   - Usuários técnicos
   - Analistas que precisam dos dados

---

## 🔧 Implementação Técnica

### Store (store.ts):
```typescript
interface ChatState {
  // ...
  visibleAgents: boolean; // Se TRUE, mostra dados da LLM
  // ...
}

// Carregado do banco ao fazer login
const { data: profile } = await supabase
  .from("user_profiles")
  .select("user_id, full_name, visible_agents")
  .eq("user_id", user.id)
  .single();

set({ visibleAgents: profile.visible_agents ?? true });
```

### Componente (TokenUsageDisplay.tsx):
```typescript
const TokenUsageDisplay: React.FC = () => {
  const { visibleAgents } = useChatStore();

  // Se visibleAgents for false, não mostrar nada
  if (!visibleAgents) {
    return null;
  }

  // ... resto do componente
};
```

---

## 📸 Comparação Visual

### Com `visible_agents = TRUE`:
```
┌─────────────────────────────────────────┐
│  Header                                 │
│  [Menu] [Tabs]  [Modelo: GPT-4o Mini]  │
│                 [Uso: 1,234/50,000]     │
│                 [████░░░░░░] 2.5%       │
└─────────────────────────────────────────┘
```

### Com `visible_agents = FALSE`:
```
┌─────────────────────────────────────────┐
│  Header                                 │
│  [Menu] [Tabs]                          │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🔄 Fluxo Completo

```
1. Usuário faz login
   ↓
2. Sistema carrega user_profiles
   ↓
3. Lê campo visible_agents
   ↓
4. Atualiza estado no store
   ↓
5. TokenUsageDisplay verifica visibleAgents
   ↓
6a. Se TRUE → Mostra informações da LLM
6b. Se FALSE → Retorna null (não renderiza)
   ↓
7. Interface atualizada automaticamente
```

---

## 🧪 Testar

### Teste 1: Verificar Valor Atual
```sql
SELECT visible_agents 
FROM user_profiles 
WHERE user_id = auth.uid();
```

### Teste 2: Ocultar Dados
```sql
UPDATE user_profiles 
SET visible_agents = FALSE 
WHERE user_id = auth.uid();
```
Depois, recarregue a página e veja que os dados da LLM desapareceram.

### Teste 3: Mostrar Dados
```sql
UPDATE user_profiles 
SET visible_agents = TRUE 
WHERE user_id = auth.uid();
```
Recarregue e veja que os dados voltaram.

---

## 📊 Estatísticas

```sql
-- Ver quantos usuários têm dados visíveis vs ocultos
SELECT 
  visible_agents,
  COUNT(*) as total_users,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage
FROM user_profiles
GROUP BY visible_agents;
```

---

## 🎯 Boas Práticas

### ✅ **DO:**
- Use `FALSE` para usuários finais não-técnicos
- Use `TRUE` para desenvolvedores e admins
- Documente a configuração de cada usuário
- Teste antes de aplicar em produção

### ❌ **DON'T:**
- Não oculte para todos os usuários (dificulta debug)
- Não mude sem avisar o usuário
- Não use como medida de segurança (é apenas UI)

---

## 🔐 Segurança

**IMPORTANTE:** Este campo apenas **oculta a UI**, não impede o acesso aos dados!

- ✅ Os dados ainda são processados normalmente
- ✅ O backend continua funcionando igual
- ✅ É apenas uma preferência de visualização
- ❌ **NÃO** é uma medida de segurança

Para segurança real, use:
- Row Level Security (RLS)
- Políticas de acesso
- Autenticação e autorização

---

## 📚 Arquivos Modificados

1. ✅ `database/user_profiles_visible_agents.sql` - Schema SQL
2. ✅ `store.ts` - Interface e carregamento
3. ✅ `components/TokenUsageDisplay.tsx` - Verificação e ocultação

---

## 🎊 Resultado Final

**Antes:**
- Todos os usuários viam dados da LLM
- Sem controle de visibilidade
- Interface igual para todos

**Depois:**
- ✅ Controle granular por usuário
- ✅ Interface personalizável
- ✅ Melhor UX para não-técnicos
- ✅ Dados técnicos quando necessário

---

**🎉 Funcionalidade de controle de visibilidade implementada!**

**Criado por:** Genesis AI Team  
**Data:** 2025-11-23  
**Versão:** 1.0.0
