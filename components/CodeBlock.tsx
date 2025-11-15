import React, { useState } from 'react';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';
import { SaveIcon } from './icons/SaveIcon';

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  // Mapeia identificadores comuns de linguagem para extensões de arquivo
  const languageToFileExtension: { [key: string]: string } = {
    python: 'py',
    py: 'py',
    javascript: 'js',
    js: 'js',
    typescript: 'ts',
    ts: 'ts',
    html: 'html',
    css: 'css',
    json: 'json',
    delphi: 'pas', // A extensão de Delphi/Pascal é frequentemente .pas
    pascal: 'pas',
  };

  const fileExtension = languageToFileExtension[language.toLowerCase()];

  const handleSave = () => {
    // Usa um tipo MIME genérico de texto/plano para o blob
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    // Usa a extensão determinada para o nome do arquivo, com fallback para .txt se desconhecida
    a.download = `codigo_gerado_${Date.now()}.${fileExtension || 'txt'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // O botão de salvar agora aparecerá para qualquer linguagem com uma extensão mapeada.
  const canSave = !!fileExtension;

  return (
    <div className="my-4 rounded-lg bg-gray-900 dark:bg-black overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900/50">
        <span className="text-xs font-semibold text-gray-400 uppercase">{language}</span>
        <div className="flex items-center gap-4">
          {canSave && (
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
            >
              <SaveIcon className="w-4 h-4" />
              Salvar .{fileExtension}
            </button>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <CheckIcon className="w-4 h-4 text-green-400" />
                Copiado!
              </>
            ) : (
              <>
                <ClipboardIcon className="w-4 h-4" />
                Copiar
              </>
            )}
          </button>
        </div>
      </div>
      <pre className="p-4 text-sm text-white overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
