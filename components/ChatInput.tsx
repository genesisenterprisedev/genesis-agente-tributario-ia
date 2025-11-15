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
  onUploadClick: () => void;
  isLoading: boolean;
  activeAgent: AgentType;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onUploadClick, isLoading, activeAgent }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const setActiveAgent = useChatStore((state) => state.setActiveAgent);

  const commands = [
      { 
        name: 'Pesquisa na web', 
        description: 'Mudar para o agente de documentos.',
        agent: 'document' as AgentType, 
        alias: 'web',
        icon: <WebIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" /> 
      },
      { 
        name: 'Gerar Código', 
        description: 'Mudar para o agente de programação.',
        agent: 'code' as AgentType, 
        alias: 'codigo',
        icon: <CodeBracketIcon className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" /> 
      },
      {
        name: 'Sugestão',
        description: 'Melhorar a sua pergunta.',
        agent: 'suggestion' as AgentType,
        alias: 'sugestao',
        icon: <LightbulbIcon className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0" />
      }
  ];
  
  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(input.substring(1).toLowerCase()) ||
    cmd.alias.toLowerCase().includes(input.substring(1).toLowerCase())
  );


  useEffect(() => {
    // FIX: Determine which set of suggestions to use based on the active agent and use it to filter suggestions. This resolves the 'allSuggestions is not defined' error.
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

    // Command Palette Logic
    if (input.startsWith('@') && !input.includes(' ')) {
        setIsCommandPaletteOpen(true);
        setSuggestions([]);
        setActiveSuggestionIndex(0); // Default to the first command
        return;
    } 
    setIsCommandPaletteOpen(false);

    // Regular Suggestions Logic
    if (input.trim().length > 0 && !input.startsWith('@')) {
      const filtered = allSuggestions.filter(s => 
        s.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Show up to 5 suggestions
    } else {
      setSuggestions([]);
    }
    setActiveSuggestionIndex(-1); // Reset selection when input changes
  }, [input, activeAgent]);


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
      setSuggestions([]);
    }
  };
  
  const handleCommandSelect = (agent: AgentType, alias: string) => {
    setActiveAgent(agent);
    setInput(`@${alias} `);
    setIsCommandPaletteOpen(false);
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
            if(filteredCommands[activeSuggestionIndex]) {
                const { agent, alias } = filteredCommands[activeSuggestionIndex];
                handleCommandSelect(agent, alias);
            }
        } else if (e.key === 'Escape') {
            setIsCommandPaletteOpen(false);
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
      } else if (e.key === 'Escape') {
        setSuggestions([]);
      }
    }
    
    if (e.key === 'Enter' && !e.shiftKey && activeSuggestionIndex === -1) {
      e.preventDefault();
      handleSendMessage(input);
    }
  };

  const renderCommandPalette = () => (
     <div className="absolute bottom-full mb-2 w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-2">
        <p className="px-2 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400">AGENTES</p>
        <ul className="space-y-1">
            {filteredCommands.map((command, index) => (
              <li
                key={command.name}
                onClick={() => handleCommandSelect(command.agent, command.alias)}
                className={`p-2 rounded-md cursor-pointer flex items-center ${
                    index === activeSuggestionIndex ? 'bg-blue-100 dark:bg-blue-900/50' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
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
        <div className="absolute bottom-full mb-2 w-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-2">
          <ul className="space-y-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`p-2 rounded-md cursor-pointer text-sm text-gray-800 dark:text-gray-200 ${
                  index === activeSuggestionIndex ? 'bg-blue-100 dark:bg-blue-900/50' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="relative flex items-end p-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
        <button
          onClick={onUploadClick}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors mr-2 flex-shrink-0"
          aria-label="Anexar documento"
        >
          <PaperclipIcon className="w-6 h-6" />
        </button>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem ou '@' para mudar de agente..."
          rows={1}
          className="flex-1 w-full bg-transparent resize-none focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 max-h-52"
          disabled={isLoading}
        />
        <button
          onClick={() => handleSendMessage(input)}
          disabled={isLoading || !input.trim()}
          className="ml-2 p-3 bg-blue-600 text-white rounded-full disabled:bg-gray-400 disabled:dark:bg-gray-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex-shrink-0"
          aria-label="Enviar mensagem"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
          ) : (
            <SendIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;