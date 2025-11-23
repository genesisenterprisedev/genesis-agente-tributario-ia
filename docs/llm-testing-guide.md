# Guia Rápido: Testando Configuração de LLMs por Agente

Este guia mostra como testar se cada tipo de agente está usando o modelo LLM correto.

## 1. Configure seu .env.local

Adicione as seguintes variáveis ao seu arquivo `.env.local`:

```bash
# Modelo padrão
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini

# Modelos específicos por agente
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=openai/gpt-4o
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=anthropic/claude-3-5-sonnet
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=openai/gpt-4o-mini
```

## 2. Reinicie o Servidor

```bash
# Pare o servidor (Ctrl+C)
# Inicie novamente
npm run dev
```

## 3. Teste Cada Agente

### Teste do Agente de Documentos

1. Abra a aplicação em http://localhost:3000
2. Selecione o agente **"Consultor Fiscal"** (ícone de documento)
3. Envie uma mensagem: "Explique o que é ICMS"
4. Abra o Console do navegador (F12)
5. Procure por logs como:
   ```
   [OpenRouter] Model: openai/gpt-4o
   ```

### Teste do Agente de Código

1. Selecione o agente **"Gerador de Código"** (ícone de código)
2. Envie uma mensagem: "Crie uma função Python para calcular ICMS"
3. Verifique o console:
   ```
   [OpenRouter] Model: anthropic/claude-3-5-sonnet
   ```

### Teste do Agente de Sugestões

1. Selecione o agente **"Otimizador de Prompt"** (ícone de lâmpada)
2. Envie uma mensagem: "Como calcular impostos?"
3. Verifique o console:
   ```
   [OpenRouter] Model: openai/gpt-4o-mini
   ```

## 4. Verificação Visual no Console

Você deve ver logs semelhantes a estes no console do navegador:

```
[OpenRouter] Proxying to internal API: /api/chat
[OpenRouter] Model: openai/gpt-4o
[API Route] Making request to OpenRouter: https://openrouter.ai/api/v1/chat/completions
[API Route] Using model: openai/gpt-4o
[API Route] Successfully received response from OpenRouter
```

## 5. Teste de Fallback

Para testar se o fallback funciona corretamente:

1. Remova uma variável específica do `.env.local` (ex: `NEXT_PUBLIC_OPENROUTER_CODE_MODEL`)
2. Reinicie o servidor
3. Teste o agente de código
4. Ele deve usar o modelo padrão (`NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL`)

## 6. Monitoramento de Uso

### No OpenRouter Dashboard

1. Acesse https://openrouter.ai/dashboard
2. Vá para a seção "Usage"
3. Você verá quais modelos estão sendo usados e seus custos

### Exemplo de Uso Esperado

Se você configurou modelos diferentes:

- **Document Agent**: Chamadas para `openai/gpt-4o`
- **Code Agent**: Chamadas para `anthropic/claude-3-5-sonnet`
- **Suggestion Agent**: Chamadas para `openai/gpt-4o-mini`

## 7. Solução de Problemas

### Problema: Todos os agentes usam o mesmo modelo

**Solução**:
1. Verifique se as variáveis estão corretas no `.env.local`
2. Confirme que você reiniciou o servidor após alterar o `.env.local`
3. Verifique se não há erros de digitação nos nomes das variáveis

### Problema: Console não mostra logs

**Solução**:
1. Abra o Console do navegador (F12)
2. Vá para a aba "Console"
3. Certifique-se de que os logs não estão filtrados

### Problema: Erro "Model not found"

**Solução**:
1. Verifique se o nome do modelo está correto
2. Consulte a lista de modelos disponíveis: https://openrouter.ai/models
3. Confirme que sua chave API tem acesso ao modelo

## 8. Exemplo de Configuração Completa

Aqui está um exemplo completo de `.env.local` para referência:

```bash
# Gemini AI Configuration (Legacy - opcional)

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# OpenRouter Configuration
OPENROUTER_API_KEY=sk-or-v1-your-key-here
NEXT_PUBLIC_LLM_PROVIDER=openrouter

# LLM Models Configuration
NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL=openai/gpt-4o
NEXT_PUBLIC_OPENROUTER_CODE_MODEL=anthropic/claude-3-5-sonnet
NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL=openai/gpt-4o-mini
NEXT_PUBLIC_OPENROUTER_MODEL=openai/gpt-4o-mini

# Resend Email API (opcional)
NEXT_PUBLIC_RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_RESEND_API_URL=https://api.resend.com/emails
```

## 9. Dicas de Otimização

### Reduzir Custos
- Use modelos `-mini` ou `-haiku` para tarefas simples
- Reserve modelos maiores apenas para o agente de documentos
- Configure o agente de sugestões com o modelo mais barato

### Maximizar Qualidade
- Use modelos premium (`gpt-4o`, `claude-3-opus`) para o agente de documentos
- Use modelos especializados em código (`claude-3-5-sonnet`) para o agente de código
- Mantenha modelos rápidos para o agente de sugestões

### Balancear Custo e Qualidade
- Modelo padrão: `gpt-4o-mini` (econômico)
- Agente de documentos: `gpt-4o` (qualidade)
- Agente de código: `claude-3-5-sonnet` (especializado)
- Agente de sugestões: `gpt-4o-mini` (econômico)

## 10. Próximos Passos

Após confirmar que a configuração está funcionando:

1. ✅ Monitore o uso e os custos no OpenRouter Dashboard
2. ✅ Ajuste os modelos conforme necessário
3. ✅ Documente sua configuração específica para sua equipe
4. ✅ Configure alertas de custo no OpenRouter (se disponível)

---

**Precisa de ajuda?** Consulte a [documentação completa](llm-configuration.md) ou abra uma issue no repositório.
