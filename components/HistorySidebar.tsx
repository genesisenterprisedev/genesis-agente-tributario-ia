import React, { useState, useRef, useEffect } from 'react';
import { useChatStore } from '../store';
import { Conversation } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { NewChatIcon } from './icons/NewChatIcon';
import { TrashIcon } from './icons/TrashIcon';
import { DotsVerticalIcon } from './icons/DotsVerticalIcon';

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper function for relative time
const timeAgo = (timestamp: number): string => {
  const now = new Date();
  const secondsPast = (now.getTime() - timestamp) / 1000;
  if (secondsPast < 60) return `agora mesmo`;
  if (secondsPast < 3600) return `${Math.round(secondsPast / 60)}m atrás`;
  if (secondsPast <= 86400) return `${Math.round(secondsPast / 3600)}h atrás`;
  
  const day = new Date(timestamp);
  return day.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
};


const HistorySidebar: React.FC<HistorySidebarProps> = ({ isOpen, onClose }) => {
  const { 
    documentConversations, 
    codeConversations,
    suggestionConversations,
    activeDocumentConversationId,
    activeCodeConversationId,
    activeSuggestionConversationId,
    startNewConversation, 
    deleteConversation, 
    setActiveConversation,
    activeAgent
  } = useChatStore();

  const [menuOpenFor, setMenuOpenFor] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  
  let conversations: Record<string, Conversation>;
  let activeConversationId: string | null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpenFor(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  switch(activeAgent) {
    case 'code':
      conversations = codeConversations;
      activeConversationId = activeCodeConversationId;
      break;
    case 'suggestion':
      conversations = suggestionConversations;
      activeConversationId = activeSuggestionConversationId;
      break;
    case 'document':
    default:
      conversations = documentConversations;
      activeConversationId = activeDocumentConversationId;
      break;
  }


  const handleSelectConversation = (id: string) => {
    setActiveConversation(activeAgent, id);
    onClose(); // Close sidebar on mobile after selection
  };
  
  const handleNewChat = () => {
    startNewConversation(activeAgent);
    onClose();
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setMenuOpenFor(null);
    if (window.confirm("Tem certeza que deseja excluir esta conversa?")) {
        deleteConversation(activeAgent, id);
    }
  };

  const handleMenuToggle = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setMenuOpenFor(prev => (prev === id ? null : id));
  };


  const sortedConversations = Object.values(conversations).sort((a: Conversation, b: Conversation) => (b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt));

  return (
     <aside className={`fixed inset-y-0 left-0 z-40 w-80 bg-gray-50 dark:bg-gray-900 flex flex-col h-full border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:flex-shrink-0`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Histórico</h2>
         <button 
          onClick={onClose} 
          className="lg:hidden p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
          aria-label="Fechar histórico"
        >
            <CloseIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={handleNewChat}
          className="w-full flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          <NewChatIcon className="w-5 h-5 mr-2" />
          <span>Novo Chat</span>
        </button>
      </div>
      
      <div className="flex-grow p-2 overflow-y-auto">
        {sortedConversations.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8 px-4">
            <p>Nenhum histórico para o agente "{
              activeAgent === 'document' ? 'Consultor' : 
              activeAgent === 'code' ? 'Código' : 'Sugestão'
            }".</p>
          </div>
        ) : (
          <ul className="space-y-1">
            {sortedConversations.map((convo: Conversation) => (
              <li key={convo.id}>
                <div
                  onClick={() => handleSelectConversation(convo.id)}
                  className={`w-full text-left p-3 rounded-md group flex items-center justify-between transition-colors duration-200 cursor-pointer ${
                    convo.id === activeConversationId
                      ? 'bg-blue-100 dark:bg-blue-900/50'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex-grow overflow-hidden pr-2">
                    <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-200" title={convo.title}>
                      {convo.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {timeAgo(convo.updatedAt || convo.createdAt)}
                    </p>
                  </div>

                  <div className="relative flex-shrink-0" ref={menuOpenFor === convo.id ? menuRef : null}>
                    <button
                      onClick={(e) => handleMenuToggle(e, convo.id)}
                      className="p-1 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Opções da conversa"
                    >
                      <DotsVerticalIcon className="w-4 h-4" />
                    </button>
                     {menuOpenFor === convo.id && (
                      <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                        <ul className="py-1">
                          <li>
                            <button onClick={(e) => handleDelete(e, convo.id)} className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center">
                              <TrashIcon className="w-4 h-4 mr-2" /> Excluir
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default HistorySidebar;