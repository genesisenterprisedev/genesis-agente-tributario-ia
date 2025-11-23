# Configuração de LLMs por Tipo de Agente

## Visão Geral

O **Genesis Agente Tributário IA** suporta a configuração de diferentes modelos de linguagem (LLMs) para cada tipo de agente/conversa. Isso permite otimizar o desempenho e os custos, usando modelos especializados para cada função específica.

## Tipos de Agentes

A aplicação possui três tipos de agentes, cada um com uma função específica:

### 1. **Agente de Documentos** (`document`)
- **Função**: Especialista em tributação brasileira
- **Uso**: Consultas sobre documentos fiscais, legislação tributária e conhecimento específico
- **Características**: Requer boa compreensão de contexto longo e capacidade de análise de documentos
- **Modelo Recomendado**: GPT-4o, Claude 3 Opus, ou modelos similares com grande contexto

### 2. **Agente de Código** (`code`)
- **Função**: Programador especialista em Python e Delphi
- **Uso**: Geração de código para cálculos tributários e implementações fiscais
- **Características**: Otimizado para geração de código limpo e bem documentado
- **Modelo Recomendado**: Claude 3.5 Sonnet, GPT-4, ou modelos especializados em código

### 3. **Agente de Sugestões** (`suggestion`)
- **Função**: Otimizador de prompts e buscas
- **Uso**: Sugerir formas melhores de formular perguntas
- **Características**: Tarefa simples que não requer modelos complexos
- **Modelo Recomendado**: GPT-4o-mini, Claude 3 Haiku, ou modelos rápidos e econômicos

## Configuração no `.env.local`

### Hierarquia de Fallback

O sistema usa uma hierarquia de fallback para selecionar o modelo apropriado:

![LLM Configuration Flow](../llm_configuration_flow.png)

1. **Modelo específico do agente** (ex: `NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL`)
2. **Modelo padrão** (`NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL`)
3. **Hardcoded fallback** (`openai/gpt-4o-mini`)

### Variáveis de Ambiente

Adicione as seguintes variáveis ao seu arquivo `.env.local`:

```bash
# Modelo padrão (fallback) - usado quando outros modelos específicos falham
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=google/gemini-2.0-flash-001

# Agente de Documentos - análise de documentos fiscais
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=openai/gpt-4o-mini

# Agente de Código - geração de código Python/Delphi
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=z-ai/glm-4.5-air:free

# Agente de Sugestões - otimização de prompts
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=google/gemma-3-27b-it:free

# Modelo genérico (títulos e outras tarefas)
NEXT_PUBLIC_OPENROUTER_MODEL=openai/gpt-4o-mini
```

### Hierarquia de Fallback

Se um modelo específico não for configurado, o sistema usa a seguinte hierarquia:

1. **Modelo específico do agente** (ex: `NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL`)
2. **Modelo padrão** (`NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL`)
3. **Hardcoded fallback** (`openai/gpt-4o-mini`)

## Modelos Disponíveis no OpenRouter

### Modelos OpenAI
- `openai/gpt-4o` - Mais capaz, melhor para análise complexa
- `openai/gpt-4o-mini` - Rápido e econômico, bom para tarefas simples
- `openai/gpt-4-turbo` - Boa performance geral

### Modelos Anthropic
- `anthropic/claude-3-5-sonnet` - Excelente para código e análise
- `anthropic/claude-3-opus` - Mais capaz, melhor raciocínio
- `anthropic/claude-3-haiku` - Rápido e econômico

### Modelos Google
- `google/gemini-2.0-flash-001` - Rápido e eficiente (seu modelo padrão)
- `google/gemini-pro-1.5` - Contexto muito longo
- `google/gemini-flash-1.5` - Rápido e eficiente
- `google/gemma-3-27b-it:free` - Modelo gratuito de alta qualidade (seu modelo de sugestões)

### Modelos Open Source
- `z-ai/glm-4.5-air:free` - Modelo gratuito com bom desempenho (seu modelo de código)
- `meta-llama/llama-3.1-70b-instruct` - Bom desempenho geral
- `mistralai/mixtral-8x7b-instruct` - Econômico e eficiente

## Exemplos de Configuração

### Configuração Econômica (Custos Baixos)
```bash
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=openai/gpt-4o-mini
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=openai/gpt-4o-mini
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=openai/gpt-4o-mini
```

### Configuração Atual (Sua Configuração)
```bash
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=google/gemini-2.0-flash-001
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=openai/gpt-4o-mini
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=z-ai/glm-4.5-air:free
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=google/gemma-3-27b-it:free
```

### Configuração Balanceada (Recomendada)
```bash
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=openai/gpt-4o
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=anthropic/claude-3-5-sonnet
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=openai/gpt-4o-mini
```

### Configuração Premium (Máxima Qualidade)
```bash
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=anthropic/claude-3-opus
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=anthropic/claude-3-5-sonnet
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=openai/gpt-4o
```

### Configuração Open Source
```bash
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=meta-llama/llama-3.1-70b-instruct
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=meta-llama/llama-3.1-70b-instruct
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=meta-llama/llama-3.1-70b-instruct
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=mistralai/mixtral-8x7b-instruct
```

## Como Funciona Internamente

### Arquivo: `services/geminiService.ts`

O serviço define constantes para cada tipo de modelo e funções de seleção inteligente:

```typescript
// Modelo padrão (fallback final)
const DEFAULT_MODEL = process.env.NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL || "openai/gpt-4o-mini";

// Modelos específicos por agente
export const DOCUMENT_MODEL = process.env.NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL || DEFAULT_MODEL;
export const CODE_MODEL = process.env.NEXT_PUBLIC_OPENROUTER_CODE_MODEL || DEFAULT_MODEL;
export const SUGGESTION_MODEL = process.env.NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL || DEFAULT_MODEL;

// Função de seleção de modelo por tipo de agente
export function getModelForConversation(agentType: 'document' | 'code' | 'suggestion'): string {
  switch (agentType) {
    case 'document':
      return DOCUMENT_MODEL;
    case 'code':
      return CODE_MODEL;
    case 'suggestion':
      return SUGGESTION_MODEL;
    default:
      console.warn(`[Model Selection] Tipo de agente desconhecido: ${agentType}. Usando modelo padrão.`);
      return DEFAULT_MODEL;
  }
}

// Função com fallback inteligente
export function getModelWithFallback(agentType: 'document' | 'code' | 'suggestion'): string {
  const preferredModel = getModelForConversation(agentType);
  
  // Se o modelo preferido já for o DEFAULT_MODEL, não há necessidade de fallback adicional
  if (preferredModel === DEFAULT_MODEL) {
    return preferredModel;
  }
  
  return preferredModel;
}
```

### Arquivo: `store.ts`

A lógica de seleção de modelo foi simplificada usando a função `getModelWithFallback`:

```typescript
// Seleciona o modelo ideal para o tipo de agente com fallback inteligente
preferredModel = getModelWithFallback(activeAgent);

// A configuração dos prompts permanece específica para cada agente
if (activeAgent === "document") {
    useWebSearch = true;
    // ... configuração do prompt específico para documentos
} else if (activeAgent === "code") {
    // ... configuração do prompt específico para código
} else if (activeAgent === "suggestion") {
    // ... configuração do prompt específico para sugestões
}
```

## Testando a Configuração

1. **Configure suas variáveis de ambiente** no `.env.local`
2. **Reinicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
3. **Teste cada tipo de agente**:
   - Envie uma mensagem no agente de Documentos
   - Envie uma mensagem no agente de Código
   - Envie uma mensagem no agente de Sugestões
4. **Verifique os logs do console** para confirmar qual modelo está sendo usado

## Monitoramento de Custos

Cada modelo tem custos diferentes. Monitore seu uso no [OpenRouter Dashboard](https://openrouter.ai/dashboard).

### Dicas para Reduzir Custos:
- Use modelos menores (mini/haiku) para tarefas simples
- Reserve modelos maiores apenas para tarefas complexas
- Configure o `SUGGESTION_MODEL` com o modelo mais barato
- Use o sistema de limites de tokens já implementado

## Solução de Problemas

### Modelo não está sendo usado
- Verifique se a variável de ambiente está corretamente definida
- Confirme que o servidor foi reiniciado após alterar o `.env.local`
- Verifique os logs do console para ver qual modelo está sendo chamado

### Erro de modelo não encontrado
- Confirme que o nome do modelo está correto no OpenRouter
- Verifique a [lista de modelos disponíveis](https://openrouter.ai/models)
- Certifique-se de que sua chave API tem acesso ao modelo

### Custos muito altos
- Revise sua configuração e use modelos mais econômicos
- Implemente limites de uso adicionais
- Monitore o uso no dashboard do OpenRouter

## Referências

- [OpenRouter Models](https://openrouter.ai/models)
- [OpenRouter Pricing](https://openrouter.ai/docs#pricing)
- [Código fonte: geminiService.ts](../services/geminiService.ts)
- [Código fonte: store.ts](../store.ts)
