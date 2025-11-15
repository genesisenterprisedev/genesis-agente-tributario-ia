import React from 'react';
import { Message } from '../types';
import { BotIcon } from './icons/BotIcon';
import { UserIcon } from './icons/UserIcon';
import CodeBlock from './CodeBlock';
import { ThumbsUpIcon } from './icons/ThumbsUpIcon';
import { ThumbsDownIcon } from './icons/ThumbsDownIcon';

interface ChatMessageProps {
  message: Message;
  onFeedback: (feedback: 'good' | 'bad') => void;
}

// Regex to find markdown code blocks
const codeBlockRegex = /```(\w+)?\n([\s\S]+?)```/g;

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onFeedback }) => {
  const { sender, text, sources, feedback } = message;
  const isBot = sender === 'bot';

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

  return (
    <div className={`flex items-start gap-4 my-6 ${!isBot ? 'flex-row-reverse' : ''}`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isBot ? 'bg-gray-200 dark:bg-gray-700' : 'bg-blue-600 text-white'}`}>
        {isBot ? <BotIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" /> : <UserIcon className="w-6 h-6" />}
      </div>
      <div className={`p-4 rounded-lg max-w-2xl shadow ${isBot ? 'bg-white dark:bg-gray-800' : 'bg-blue-500 text-white'}`}>
        {renderContent()}
        {sources && sources.length > 0 && (
          <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-3">
            <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Fontes:</h4>
            <ul className="space-y-1">
              {sources.map((source, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-gray-500 dark:text-gray-400 text-xs mr-2">{index + 1}.</span>
                  <a
                    href={source.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm truncate"
                    title={source.uri}
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
         {isBot && (
          <div className={`mt-3 flex items-center gap-2 ${sources && sources.length > 0 ? 'pt-3 border-t border-gray-200 dark:border-gray-700' : ''}`}>
            <p className="text-xs text-gray-500 dark:text-gray-400 mr-auto">Avalie esta resposta:</p>
            <button
              onClick={() => onFeedback('good')}
              className={`p-1.5 rounded-full transition-colors ${
                feedback === 'good'
                  ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400'
                  : 'text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
              aria-label="Resposta boa"
            >
              <ThumbsUpIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => onFeedback('bad')}
              className={`p-1.5 rounded-full transition-colors ${
                feedback === 'bad'
                  ? 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400'
                  : 'text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
              aria-label="Resposta ruim"
            >
              <ThumbsDownIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;