const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');

if (fs.existsSync(envPath)) {
    let content = fs.readFileSync(envPath, 'utf8');

    // Mapa de atualizações
    const updates = {
        'NEXT_PUBLIC_OPENROUTER_DEFAULT_MODEL': 'google/gemini-2.0-flash-001',
        'NEXT_PUBLIC_OPENROUTER_DOCUMENT_MODEL': 'openai/gpt-4o-mini',
        'NEXT_PUBLIC_OPENROUTER_CODE_MODEL': 'z-ai/glm-4.5-air:free',
        'NEXT_PUBLIC_OPENROUTER_SUGGESTION_MODEL': 'google/gemma-3-27b-it:free',
        'NEXT_PUBLIC_OPENROUTER_MODEL': 'google/gemini-2.0-flash-001'
    };

    let newContent = content;

    // Atualiza ou adiciona cada variável
    Object.entries(updates).forEach(([key, value]) => {
        const regex = new RegExp(`^${key}=.*`, 'm');
        if (regex.test(newContent)) {
            newContent = newContent.replace(regex, `${key}=${value}`);
        } else {
            newContent += `\n${key}=${value}`;
        }
    });

    fs.writeFileSync(envPath, newContent);
    console.log('Arquivo .env.local atualizado com sucesso!');
} else {
    console.error('Arquivo .env.local não encontrado!');
}
