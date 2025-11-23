import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { useChatStore } from '../store'; // Import store
import { SendIcon } from './icons/SendIcon';
import { PaperclipIcon } from './icons/PaperclipIcon';
// FIX: Import suggestionAgentSuggestions to provide suggestions based on the active agent.
import { documentAgentSuggestions, codeAgentSuggestions, suggestionAgentSuggestions } from '../suggestions';
import { AgentType } from '../types';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { WebIcon } from './icons/WebIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onFileSelect: (file: File) => void;
  isLoading: boolean;
  activeAgent: AgentType;
  attachedFiles?: File[];
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onFileSelect, isLoading, activeAgent, attachedFiles = [] }) => {
  const [input, setInput] = useState('');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [isFileAttached, setIsFileAttached] = useState(false);
  const [showFileSuccess, setShowFileSuccess] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const setActiveAgent = useChatStore((state) => state.setActiveAgent);

  const commands = [
    {
      name: 'Pesquisa na web',
      description: 'Mudar para o agente de documentos.',
      agent: 'document' as AgentType,
      alias: 'web',
      icon: <WebIcon className="w-5 h-5 mr-3 text-black dark:text-white shrink-0" />
    },
    {
      name: 'Gerar Código',
      description: 'Mudar para o agente de programação.',
      agent: 'code' as AgentType,
      alias: 'codigo',
      icon: <CodeBracketIcon className="w-5 h-5 mr-3 text-black dark:text-white shrink-0" />
    },
    {
      name: 'Sugestão',
      description: 'Melhorar a sua pergunta.',
      agent: 'suggestion' as AgentType,
      alias: 'sugestao',
      icon: <LightbulbIcon className="w-5 h-5 mr-3 text-black dark:text-white shrink-0" />
    }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(input.substring(1).toLowerCase()) ||
    cmd.alias.toLowerCase().includes(input.substring(1).toLowerCase())
  );

  // Deriva sugestões e estado da paleta de comandos diretamente de input/activeAgent,
  // evitando setState dentro de useEffect.
  let allSuggestions: string[] = [];
  switch (activeAgent) {
    case 'document':
      allSuggestions = documentAgentSuggestions;
      break;
    case 'code':
      allSuggestions = codeAgentSuggestions;
      break;
    case 'suggestion':
      allSuggestions = suggestionAgentSuggestions;
      break;
  }

  const isCommandPaletteOpen =
    input.startsWith('@') && !input.includes(' ');

  let suggestions: string[] = [];
  if (!isCommandPaletteOpen) {
    const trimmed = input.trim();
    if (trimmed.length > 0 && !input.startsWith('@')) {
      suggestions = allSuggestions
        .filter((s) => s.toLowerCase().includes(input.toLowerCase()))
        .slice(0, 5); // Show up to 5 suggestions
    }
  }

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [input]);

  const handleSendMessage = (message: string) => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setInput('');
    }
  };

  const handleCommandSelect = (agent: AgentType, alias: string) => {
    setActiveAgent(agent);
    setInput(`@${alias} `);
    textareaRef.current?.focus();
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (isCommandPaletteOpen && filteredCommands.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveSuggestionIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveSuggestionIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[activeSuggestionIndex]) {
          const { agent, alias } = filteredCommands[activeSuggestionIndex];
          handleCommandSelect(agent, alias);
        }
      } else if (e.key === 'Escape') {
        setInput('');
      }
      return;
    }

    if (suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveSuggestionIndex(prev => (prev + 1) % suggestions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveSuggestionIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
      } else if (e.key === 'Enter' && activeSuggestionIndex > -1) {
        e.preventDefault();
        handleSendMessage(suggestions[activeSuggestionIndex]);
      }
    }

    if (e.key === 'Enter' && !e.shiftKey && activeSuggestionIndex === -1) {
      e.preventDefault();
      handleSendMessage(input);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsFileAttached(true);
      setShowFileSuccess(true);
      onFileSelect(file);
      
      // Hide success animation after 2 seconds
      setTimeout(() => {
        setShowFileSuccess(false);
      }, 2000);
    }
    // Reset input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeAttachedFile = (e: React.MouseEvent, _fileName: string) => {
    e.stopPropagation();
    // This would need to be handled by the parent component
    // For now, we'll just prevent the default behavior
  };

  const renderCommandPalette = () => (
    <div className="absolute bottom-full mb-2 w-full bg-white dark:bg-black border-2 border-gray-200 dark:border-white/20 rounded-2xl shadow-lg p-2">
      <p className="px-2 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400">AGENTES</p>
      <ul className="space-y-1">
        {filteredCommands.map((command, index) => (
          <li
            key={command.name}
            onClick={() => handleCommandSelect(command.agent, command.alias)}
            className={`p-2 rounded-md cursor-pointer flex items-center ${index === activeSuggestionIndex ? 'bg-gray-100 dark:bg-white/10' : 'hover:bg-gray-100 dark:hover:bg-white/10'
              }`}
          >
            {command.icon}
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{command.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{command.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {isCommandPaletteOpen && filteredCommands.length > 0 && renderCommandPalette()}
      {suggestions.length > 0 && !isCommandPaletteOpen && (
        <div className="absolute bottom-full mb-2 w-full bg-white dark:bg-black border-2 border-gray-200 dark:border-white/20 rounded-2xl shadow-lg p-2">
          <ul className="space-y-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`p-2 rounded-md cursor-pointer text-sm text-gray-800 dark:text-gray-200 ${index === activeSuggestionIndex ? 'bg-gray-100 dark:bg-white/10' : 'hover:bg-gray-100 dark:hover:bg-white/10'
                  }`}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="relative flex items-end p-3 md:p-2 bg-white dark:bg-black border-2 border-gray-200 dark:border-white/20 rounded-2xl shadow-lg">
        {/* Attached files display */}
        {attachedFiles.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2 p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
            {attachedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                <PaperclipIcon className="w-4 h-4" />
                <span className="truncate max-w-32">{file.name}</span>
                <button
                  onClick={(e) => removeAttachedFile(e, file.name)}
                  className="ml-1 hover:text-blue-600 dark:hover:text-blue-400"
                  title="Remover arquivo"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".txt,.md,.pdf,.doc,.docx,.csv,.xlsx"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className={`p-2 rounded-full transition-colors mr-2 shrink-0 ${
            isFileAttached
              ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300'
              : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
          }`}
          aria-label={isFileAttached ? "Arquivo anexado" : "Anexar documento"}
        >
          <PaperclipIcon className={`w-6 h-6 ${showFileSuccess ? 'animate-bounce' : ''}`} />
        </button>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          rows={1}
          className="flex-1 w-full bg-transparent resize-none focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 max-h-52 py-2 text-base"
          disabled={isLoading}
        />
        <button
          onClick={() => handleSendMessage(input)}
          disabled={isLoading || !input.trim()}
          className="ml-2 p-3 bg-black dark:bg-white text-white dark:text-black rounded-full disabled:bg-gray-400 disabled:dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-black shrink-0"
          aria-label="Enviar mensagem"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-t-transparent border-white dark:border-black rounded-full animate-spin"></div>
          ) : (
            <SendIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;