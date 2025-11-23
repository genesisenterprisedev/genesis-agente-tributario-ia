# Configuração do Resend para Envio de Emails

## O que foi implementado

✅ **Funcionalidade de envio de conversa por email**
- Botão "Enviar por Email" no menu de cada conversa
- Loading state com spinner animado
- Toast notifications com feedback visual
- Tratamento de erros detalhado

## Como configurar o Resend

### 1. Criar conta no Resend

1. Acesse: https://resend.com
2. Clique em "Sign Up" e crie sua conta
3. Confirme seu email

### 2. Obter API Key

1. No dashboard do Resend, vá em **API Keys**
2. Clique em **Create API Key**
3. Dê um nome (ex: "Genesis AI - Production")
4. Copie a chave gerada (começa com `re_`)

### 3. Configurar no .env.local

Adicione ou atualize estas variáveis no arquivo `.env.local`:

```env
# Resend Email Service
NEXT_PUBLIC_RESEND_API_KEY=re_sua_chave_aqui
NEXT_PUBLIC_RESEND_API_URL=https://api.resend.com
```

### 4. (Opcional) Configurar domínio personalizado

**Padrão (sem configuração):**
- Emails serão enviados de: `onboarding@resend.dev`
- ⚠️ Pode cair em spam

**Recomendado (com domínio):**

1. No Resend, vá em **Domains**
2. Clique em **Add Domain**
3. Digite seu domínio (ex: `seudominio.com.br`)
4. Adicione os registros DNS fornecidos:
   - SPF
   - DKIM
   - DMARC
5. Aguarde verificação (pode levar até 48h)

6. Atualize o código em `app/api/send-email/route.ts`:

```typescript
from: 'Genesis AI <noreply@seudominio.com.br>',
```

## Como usar

### Para o usuário final:

1. Abra o **Histórico** (sidebar esquerda)
2. Encontre a conversa desejada
3. Clique nos **três pontos** (⋮)
4. Selecione **"Enviar por Email"**
5. Aguarde o toast de confirmação
6. Verifique sua caixa de entrada!

### Estados visuais:

- **Enviando:** Spinner animado + texto "Enviando..."
- **Sucesso:** Toast verde com ícone de check ✓
- **Erro:** Toast vermelho com mensagem detalhada

## Troubleshooting

### Erro: "Serviço de email não configurado"
**Solução:** Configure `NEXT_PUBLIC_RESEND_API_KEY` no `.env.local`

### Erro: "Failed to send email"
**Possíveis causas:**
1. API Key inválida ou expirada
2. Limite de emails atingido (plano gratuito: 100/dia)
3. Email destinatário inválido

**Solução:**
1. Verifique a API Key no Resend dashboard
2. Confira os logs no console do navegador
3. Verifique os logs no Resend dashboard → **Logs**

### Emails caindo em spam
**Solução:**
1. Configure um domínio personalizado
2. Adicione registros SPF, DKIM e DMARC
3. Evite palavras como "grátis", "promoção" no assunto

## Limites do plano gratuito

- 100 emails/dia
- 3.000 emails/mês
- Apenas domínio `resend.dev`

**Para produção:** Considere upgrade para plano pago

## Estrutura do email enviado

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Histórico da Conversa: [Título]
Usuário: [Nome do usuário]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Você
[Mensagem do usuário]
[Data e hora]

Assistente
[Resposta do assistente]
[Data e hora]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Enviado via Genesis Agente Tributário IA
```

## Melhorias futuras sugeridas

- [ ] Permitir escolher email destinatário
- [ ] Exportar em PDF além de email
- [ ] Agendar envio de relatórios periódicos
- [ ] Anexar documentos relacionados à conversa
- [ ] Templates personalizados de email
