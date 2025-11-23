import React from 'react';
import { Message } from '../types';
import { BotIcon } from './icons/BotIcon';
import { UserIcon } from './icons/UserIcon';
import CodeBlock from './CodeBlock';
import { ThumbsUpIcon } from './icons/ThumbsUpIcon';
import { ThumbsDownIcon } from './icons/ThumbsDownIcon';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { TrashIcon } from './icons/TrashIcon';
import { CheckIcon } from './icons/CheckIcon';
import { PaperclipIcon } from './icons/PaperclipIcon';

interface ChatMessageProps {
  message: Message;
  onFeedback: (feedback: 'good' | 'bad') => void;
  onDelete: () => void;
  attachedFiles?: File[];
}

// Regex to find markdown code blocks
const codeBlockRegex = /```(\w+)?\n([\s\S]+?)```/g;

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onFeedback, onDelete, attachedFiles = [] }) => {
  const { sender, text, sources, feedback, attachments } = message;
  const isBot = sender === 'bot';
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const renderContent = () => {
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Add text before the code block
      if (match.index > lastIndex) {
        parts.push(
          <div key={`text-${lastIndex}`} className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
            {text.slice(lastIndex, match.index)}
          </div>
        );
      }

      const language = match[1] || 'text';
      const code = match[2];

      parts.push(<CodeBlock key={`code-${match.index}`} language={language} code={code} />);

      lastIndex = match.index + match[0].length;
    }

    // Add any remaining text after the last code block
    if (lastIndex < text.length) {
      parts.push(
        <div key={`text-${lastIndex}`} className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
          {text.slice(lastIndex)}
        </div>
      );
    }

    return parts.length > 0 ? parts : <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">{text}</div>;
  };

  const renderAttachedFiles = () => {
    const hasFileObjects = attachedFiles && attachedFiles.length > 0;
    const hasPersistedAttachments = attachments && attachments.length > 0;

    if (!hasFileObjects && !hasPersistedAttachments) return null;

    // Prioriza File[] local (sessão atual); se não houver, usa attachments persistidos
    if (hasFileObjects) {
      return (
        <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <PaperclipIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Arquivo(s) anexo(s): {attachedFiles.length}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {attachedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg text-sm"
              >
                <PaperclipIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-800 dark:text-blue-300 truncate max-w-40" title={file.name}>
                  {file.name}
                </span>
                <span className="text-xs text-blue-600 dark:text-blue-400">
                  ({(file.size / 1024).toFixed(1)} KB)
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Fallback: exibe anexos persistidos no campo JSONB messages.attachments
    return (
      <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <PaperclipIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Arquivo(s) anexo(s): {attachments?.length ?? 0}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {attachments?.map((att, index) => (
            <div
              key={att.id || index}
              className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg text-sm"
            >
              <PaperclipIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-800 dark:text-blue-300 truncate max-w-40" title={att.name}>
                {att.name}
              </span>
              {typeof att.sizeBytes === 'number' && (
                <span className="text-xs text-blue-600 dark:text-blue-400">
                  ({(att.sizeBytes / 1024).toFixed(1)} KB)
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`flex items-start gap-4 my-6 ${!isBot ? 'flex-row-reverse' : ''}`}>
      <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isBot ? 'bg-gray-200 dark:bg-white/10' : 'bg-black dark:bg-white text-white dark:text-black'}`}>
        {isBot ? <BotIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" /> : <UserIcon className="w-6 h-6" />}
      </div>
      <div className={`p-4 rounded-lg max-w-2xl shadow ${isBot ? 'bg-white dark:bg-black border border-gray-200 dark:border-white/20' : 'bg-black dark:bg-white text-white dark:text-black'}`}>
        {renderContent()}
        {renderAttachedFiles()}
        {sources && sources.length > 0 && (
          <div className="mt-4 border-t border-gray-200 dark:border-white/20 pt-3">
            <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Fontes:</h4>
            <ul className="space-y-1">
              {sources.map((source, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-gray-500 dark:text-gray-400 text-xs mr-2">{index + 1}.</span>
                  <a
                    href={source.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:underline text-sm truncate"
                    title={source.uri}
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={`mt-2 flex items-center gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
          {isBot && (
            <>
              <p className="text-xs text-gray-500 dark:text-gray-400 mr-auto">Avalie esta resposta:</p>
              <button
                onClick={() => onFeedback('good')}
                className={`p-1.5 rounded-full transition-colors ${feedback === 'good'
                  ? 'bg-gray-200 text-black dark:bg-white/20 dark:text-white'
                  : 'text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-white/10'
                  }`}
                aria-label="Resposta boa"
              >
                <ThumbsUpIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => onFeedback('bad')}
                className={`p-1.5 rounded-full transition-colors ${feedback === 'bad'
                  ? 'bg-gray-200 text-black dark:bg-white/20 dark:text-white'
                  : 'text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-white/10'
                  }`}
                aria-label="Resposta ruim"
              >
                <ThumbsDownIcon className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-gray-300 dark:bg-white/20 mx-1"></div>
            </>
          )}

          <button
            onClick={handleCopy}
            className="p-1.5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            title="Copiar mensagem"
          >
            {isCopied ? <CheckIcon className="w-4 h-4 text-green-500" /> : <ClipboardIcon className="w-4 h-4" />}
          </button>

          <button
            onClick={onDelete}
            className="p-1.5 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            title="Excluir mensagem"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;