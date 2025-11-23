import React, { useState, useRef, useEffect } from 'react';
import { useChatStore } from '../store';
import { Conversation } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { NewChatIcon } from './icons/NewChatIcon';
import { TrashIcon } from './icons/TrashIcon';
import { DotsVerticalIcon } from './icons/DotsVerticalIcon';
import { InfoIcon } from './icons/InfoIcon';
import { BotIcon } from './icons/BotIcon';
import { DocumentIcon } from './icons/DocumentIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';
import { ContactIcon } from './icons/ContactIcon';
import FeedbackModal from './FeedbackModal';
import AgentInfoModal from './AgentInfoModal';
import ContactFormModal from './ContactFormModal';
import SelectContactModal from './SelectContactModal';
import ConfirmModal from './ui/ConfirmModal';

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDashboard: () => void;
  onOpenChangePassword: () => void;
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


const HistorySidebar: React.FC<HistorySidebarProps> = ({ isOpen, onClose, onOpenDashboard, onOpenChangePassword }) => {
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
    activeAgent,
    setActiveAgent,
    user,
    signOut,
    sendConversationByEmail
  } = useChatStore();

  const [menuOpenFor, setMenuOpenFor] = useState<string | null>(null);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isAgentInfoOpen, setIsAgentInfoOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [emailSendingId, setEmailSendingId] = useState<string | null>(null);
  const [emailStatus, setEmailStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [selectContactModalOpen, setSelectContactModalOpen] = useState(false);
  const [pendingConversationId, setPendingConversationId] = useState<string | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [conversationToDelete, setConversationToDelete] = useState<string | null>(null);
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

  switch (activeAgent) {
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
    setConversationToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (conversationToDelete) {
      deleteConversation(activeAgent, conversationToDelete);
      setConversationToDelete(null);
    }
  };

  const handleCloseDeleteModal = () => {
    setDeleteConfirmOpen(false);
    setConversationToDelete(null);
  };

  const handleMenuToggle = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setMenuOpenFor(prev => (prev === id ? null : id));
  };

  const handleSendEmail = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setMenuOpenFor(null);
    setPendingConversationId(id);
    setSelectContactModalOpen(true);
  };

  const handleConfirmSendEmail = async (email: string, name: string) => {
    if (!pendingConversationId) return;

    setEmailSendingId(pendingConversationId);
    setEmailStatus(null);

    try {
      await sendConversationByEmail(activeAgent, pendingConversationId, email);
      setEmailStatus({
        type: 'success',
        message: `Email enviado com sucesso para ${name}! Verifique a caixa de entrada.`
      });
      setTimeout(() => setEmailStatus(null), 5000);
    } catch (error: any) {
      console.error('Email send error:', error);
      const errorMsg = error.message || 'Erro ao enviar email. Verifique sua configuração do Resend.';
      setEmailStatus({ type: 'error', message: errorMsg });
      setTimeout(() => setEmailStatus(null), 7000);
    } finally {
      setEmailSendingId(null);
      setPendingConversationId(null);
    }
  };


  const sortedConversations = Object.values(conversations).sort((a: Conversation, b: Conversation) => (b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt));

  return (
    <aside className={`fixed inset-y-0 left-0 z-40 w-80 bg-white dark:bg-black flex flex-col h-full border-r border-gray-200 dark:border-white/20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:shrink-0`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/20">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Histórico</h2>
        <button
          onClick={onClose}
          className="lg:hidden p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full"
          aria-label="Fechar histórico"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 border-b border-gray-200 dark:border-white/20 space-y-4">
        {/* Mobile Agent Selector */}
        <div className="lg:hidden grid grid-cols-3 gap-2">
          <button
            onClick={() => { setActiveAgent('document'); onClose(); }}
            className={`flex flex-col items-center justify-center p-2 rounded-lg border ${activeAgent === 'document' ? 'bg-gray-100 dark:bg-white/10 border-gray-300 dark:border-white/30' : 'border-transparent hover:bg-gray-50 dark:hover:bg-white/5'}`}
          >
            <DocumentIcon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Consultor</span>
          </button>
          <button
            onClick={() => { setActiveAgent('code'); onClose(); }}
            className={`flex flex-col items-center justify-center p-2 rounded-lg border ${activeAgent === 'code' ? 'bg-gray-100 dark:bg-white/10 border-gray-300 dark:border-white/30' : 'border-transparent hover:bg-gray-50 dark:hover:bg-white/5'}`}
          >
            <BotIcon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Código</span>
          </button>
          <button
            onClick={() => { setActiveAgent('suggestion'); onClose(); }}
            className={`flex flex-col items-center justify-center p-2 rounded-lg border ${activeAgent === 'suggestion' ? 'bg-gray-100 dark:bg-white/10 border-gray-300 dark:border-white/30' : 'border-transparent hover:bg-gray-50 dark:hover:bg-white/5'}`}
          >
            <LightbulbIcon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Sugestão</span>
          </button>
        </div>
        <button
          onClick={handleNewChat}
          className="w-full flex items-center justify-center p-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-black"
        >
          <NewChatIcon className="w-5 h-5 mr-2" />
          <span>Novo Chat</span>
        </button>
      </div>

      <div className="grow p-2 overflow-y-auto">
        {sortedConversations.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8 px-4">
            <p>Nenhum histórico para o agente &quot;{
              activeAgent === 'document' ? 'Consultor' :
                activeAgent === 'code' ? 'Código' : 'Sugestão'
            }&quot;.</p>
          </div>
        ) : (
          <ul className="space-y-1">
            {sortedConversations.map((convo: Conversation) => (
              <li key={convo.id}>
                <div
                  onClick={() => handleSelectConversation(convo.id)}
                  className={`w-full text-left p-3 rounded-md group flex items-center justify-between transition-colors duration-200 cursor-pointer ${convo.id === activeConversationId
                    ? 'bg-gray-100 dark:bg-white/10'
                    : 'hover:bg-gray-100 dark:hover:bg-white/10'
                    }`}
                >
                  <div className="grow overflow-hidden pr-2">
                    <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-200" title={convo.title}>
                      {convo.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {timeAgo(convo.updatedAt || convo.createdAt)}
                    </p>
                  </div>

                  <div className="relative shrink-0" ref={menuOpenFor === convo.id ? menuRef : null}>
                    <button
                      onClick={(e) => handleMenuToggle(e, convo.id)}
                      className="p-1 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Opções da conversa"
                    >
                      <DotsVerticalIcon className="w-4 h-4" />
                    </button>
                    {menuOpenFor === convo.id && (
                      <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-black rounded-md shadow-lg border border-gray-200 dark:border-white/20 z-10">
                        <ul className="py-1">
                          <li>
                            <button
                              onClick={(e) => handleSendEmail(e, convo.id)}
                              disabled={emailSendingId === convo.id}
                              className="w-full text-left px-3 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-white/10 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {emailSendingId === convo.id ? (
                                <svg className="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                              )}
                              {emailSendingId === convo.id ? 'Enviando...' : 'Enviar por Email'}
                            </button>
                          </li>
                          <li>
                            <button onClick={(e) => handleDelete(e, convo.id)} className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-white/10 flex items-center">
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

      {/* Email Status Toast */}
      {emailStatus && (
        <div className={`fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg border animate-slide-in ${emailStatus.type === 'success'
          ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800'
          : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800'
          }`}>
          <div className="flex items-start gap-3">
            {emailStatus.type === 'success' ? (
              <svg className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <div className="flex-1">
              <p className={`text-sm font-medium ${emailStatus.type === 'success'
                ? 'text-green-800 dark:text-green-200'
                : 'text-red-800 dark:text-red-200'
              }`}>
                {emailStatus.message}
              </p>
            </div>
            <button
              onClick={() => setEmailStatus(null)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Only Menu Options */}
      <div className="lg:hidden p-4 border-t border-gray-200 dark:border-white/20 space-y-2 overflow-y-auto max-h-60">
        <button
          onClick={() => { onOpenDashboard(); onClose(); }}
          className="w-full flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => setIsAgentInfoOpen(true)}
          className="w-full flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <InfoIcon className="w-5 h-5 mr-3" />
          <span>Informações do Agente</span>
        </button>

        <button
          onClick={() => setIsFeedbackOpen(true)}
          className="w-full flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          <span>Enviar Feedback</span>
        </button>

        <button
          onClick={() => setIsContactModalOpen(true)}
          className="w-full flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <ContactIcon className="w-5 h-5 mr-3" />
          <span>Novo Contato</span>
        </button>

        <div className="h-px bg-gray-200 dark:bg-white/20 my-2"></div>

        <button
          onClick={() => { onOpenChangePassword(); onClose(); }}
          className="w-full flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <div className="w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white mr-3">
            {user?.user_metadata?.full_name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium truncate max-w-[180px]">{user?.user_metadata?.full_name || user?.email}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Alterar Senha</span>
          </div>
        </button>

        <button
          onClick={signOut}
          className="w-full flex items-center p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3h12" />
          </svg>
          <span>Sair</span>
        </button>
      </div>

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />

      <AgentInfoModal
        isOpen={isAgentInfoOpen}
        onClose={() => setIsAgentInfoOpen(false)}
        agentType={activeAgent}
      />

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <SelectContactModal
        isOpen={selectContactModalOpen}
        onClose={() => {
          setSelectContactModalOpen(false);
          setPendingConversationId(null);
        }}
        onSelectContact={handleConfirmSendEmail}
      />

      <ConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        title="Excluir Conversa"
        message="Tem certeza que deseja excluir esta conversa? Esta ação não pode ser desfeita."
        confirmText="Excluir"
        cancelText="Cancelar"
        variant="danger"
      />
    </aside>
  );
};

export default HistorySidebar;