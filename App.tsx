import React, { useState, useEffect, useRef } from 'react';
import { useChatStore, useDocumentStore } from './store';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import HistorySidebar from './components/HistorySidebar';
import DocumentSidebar from './components/DocumentSidebar';
import ThemeToggle from './components/ThemeToggle';
import TokenUsageDisplay from './components/TokenUsageDisplay';
import AgentInfoModal from './components/AgentInfoModal';
import { MenuIcon } from './components/icons/MenuIcon';
import { DocumentIcon } from './components/icons/DocumentIcon';
import { BotIcon } from './components/icons/BotIcon';
import { InfoIcon } from './components/icons/InfoIcon';
import { documentAgentSuggestions, codeAgentSuggestions, suggestionAgentSuggestions } from './suggestions';
import { Conversation, Message, AgentType } from './types';
import { KeyIcon } from './components/icons/KeyIcon';
import { CloseIcon } from './components/icons/CloseIcon';
import { EyeIcon } from './components/icons/EyeIcon';
import { EyeSlashIcon } from './components/icons/EyeSlashIcon';

// ForgotPasswordModal Component
const ForgotPasswordModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const { sendPasswordResetEmail, authLoading, authError, authMessage } = useChatStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendPasswordResetEmail(email);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                <header className="flex items-center justify-between p-4 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gray-700">
                            <KeyIcon className="w-6 h-6 text-yellow-400" />
                        </div>
                        <h2 className="text-lg font-semibold text-white">Redefinir Senha</h2>
                    </div>
                    <button onClick={onClose} className="p-1 text-gray-400 hover:bg-gray-700 rounded-full">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>
                <div className="p-6">
                    {!authMessage ? (
                    <form onSubmit={handleSubmit}>
                        <p className="text-sm text-gray-400 mb-4">
                            Digite o endereço de e-mail associado à sua conta e enviaremos um link para redefinir sua senha.
                        </p>
                        <div>
                            <label htmlFor="reset-email" className="block text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                id="reset-email" name="email" type="email" autoComplete="email" required
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2.5 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        {authError && (
                            <div className="p-3 mt-4 text-sm text-red-300 bg-red-900/20 rounded-lg">
                                <p className="font-bold">Ocorreu um erro:</p>
                                <pre className="mt-1 font-sans text-xs whitespace-pre-wrap">{authError.message}</pre>
                            </div>
                        )}
                        <div className="mt-6">
                            <button type="submit" disabled={authLoading}
                                    className="w-full px-4 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-all duration-300">
                                {authLoading ? 'Enviando...' : 'Enviar Link de Redefinição'}
                            </button>
                        </div>
                    </form>
                    ) : (
                        <div>
                             <div className="p-4 text-sm text-center text-green-300 bg-green-900/20 rounded-lg">
                                <p className="font-bold">Verifique seu E-mail!</p>
                                <p className="mt-2">{authMessage}</p>
                            </div>
                            <button onClick={onClose} className="w-full mt-6 px-4 py-2.5 font-semibold text-white bg-gray-600 rounded-lg hover:bg-gray-500">
                                Fechar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


// LoginPage Component
const LoginPage: React.FC<{ onNavigateToSignup: () => void; onNavigateToForgotPassword: () => void; }> = ({ onNavigateToSignup, onNavigateToForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, authLoading, authError } = useChatStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Coluna de Branding */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-blue-600 p-8 text-center">
          <BotIcon className="w-24 h-24 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Gênesis Agente IA</h1>
          <p className="text-blue-200">Sua expertise fiscal, potencializada por IA.</p>
        </div>
        {/* Coluna do Formulário */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
           <h1 className="text-3xl font-bold text-white mb-2">
            Bem-vindo de volta!
          </h1>
          <p className="mb-8 text-sm text-gray-400">
            Faça login para acessar o assistente.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email" name="email" type="email" autoComplete="email" required
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Senha
                </label>
                <div className="text-sm">
                  <button type="button" onClick={onNavigateToForgotPassword} className="font-medium text-blue-400 hover:underline">
                    Esqueci minha senha
                  </button>
                </div>
              </div>
              <div className="relative mt-1">
                <input
                  id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 pr-10 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            {authError && (
                <div className="p-3 my-2 text-sm text-red-300 bg-red-900/20 rounded-lg">
                    <p className="font-bold">Ocorreu um erro:</p>
                    <pre className="mt-1 font-sans text-xs whitespace-pre-wrap">{authError.message}</pre>
                </div>
            )}
            <div>
              <button type="submit" disabled={authLoading}
                      className="w-full px-4 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-all duration-300">
                {authLoading ? 'Entrando...' : 'Entrar'}
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-400 mt-8">
            Não tem uma conta?{' '}
            <button onClick={onNavigateToSignup}
                    className="font-medium text-blue-400 hover:underline">
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// SignupPage Component
const SignupPage: React.FC<{ onNavigateToLogin: () => void; }> = ({ onNavigateToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('Contador');
  const { signUp, authLoading, authError, authMessage } = useChatStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(email, password, { full_name: fullName, user_type: userType });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Coluna de Branding */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-blue-600 p-8 text-center">
          <BotIcon className="w-24 h-24 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Gênesis Agente IA</h1>
          <p className="text-blue-200">Comece a transformar sua análise tributária.</p>
        </div>
        {/* Coluna do Formulário */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
            <h1 className="text-3xl font-bold text-white mb-2">
                Crie sua Conta
            </h1>
            <p className="mb-6 text-sm text-gray-400">
                Junte-se a nós e simplifique suas tarefas fiscais.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
            <fieldset disabled={authLoading || !!authMessage}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Nome Completo</label>
                  <input id="fullName" name="fullName" type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)}
                         className="w-full px-4 py-2.5 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                         className="w-full px-4 py-2.5 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">Senha</label>
                  <div className="relative mt-1">
                    <input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2.5 pr-10 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                        aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                        {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5" />
                        ) : (
                        <EyeIcon className="h-5 w-5" />
                        )}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-300">Tipo de Usuário</label>
                  <select id="userType" name="userType" value={userType} onChange={(e) => setUserType(e.target.value)}
                          className="w-full px-4 py-2.5 mt-1 text-white bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Contador</option>
                    <option>Advogado</option>
                    <option>Empresário</option>
                    <option>Desenvolvedor</option>
                    <option>Estudante</option>
                    <option>Outro</option>
                  </select>
                </div>
                
                {authMessage && !authError && (
                  <div className="p-3 my-2 text-sm text-green-300 bg-green-900/20 rounded-lg">
                      <p className="font-bold">Sucesso!</p>
                      <p className="mt-1">{authMessage}</p>
                  </div>
                )}

                {authError && (
                  <div className="p-3 my-2 text-sm text-red-300 bg-red-900/20 rounded-lg">
                      <p className="font-bold">Ocorreu um erro ao cadastrar:</p>
                      <pre className="mt-1 font-sans text-xs whitespace-pre-wrap">{authError.message}</pre>
                  </div>
                )}

                <div>
                  <button type="submit" disabled={authLoading || !!authMessage}
                          className="w-full px-4 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-all duration-300">
                    {authLoading ? 'Cadastrando...' : 'Cadastrar'}
                  </button>
                </div>
              </fieldset>
            </form>
            <p className="text-sm text-center text-gray-400 mt-6">
              Já tem uma conta?{' '}
              <button onClick={onNavigateToLogin} className="font-medium text-blue-400 hover:underline">
                Faça login
              </button>
            </p>
        </div>
      </div>
    </div>
  );
};


// Main Chat Application Component
const ChatApplication: React.FC = () => {
    const { 
    documentConversations, 
    codeConversations,
    suggestionConversations,
    activeDocumentConversationId,
    activeCodeConversationId,
    activeSuggestionConversationId,
    sendMessage, 
    isLoading, 
    activeAgent,
    setActiveAgent,
    setMessageFeedback,
    loadInitialData,
    signOut,
  } = useChatStore();
  const { documents } = useDocumentStore();
  
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
  const [isAgentInfoOpen, setIsAgentInfoOpen] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  let activeConversationId: string | null = null;
  let conversations: Record<string, Conversation> = {};
  let agentName = '';
  let suggestions: string[] = [];

  switch (activeAgent) {
    case 'code':
      activeConversationId = activeCodeConversationId;
      conversations = codeConversations;
      agentName = 'Gerador de Código';
      suggestions = codeAgentSuggestions;
      break;
    case 'suggestion':
      activeConversationId = activeSuggestionConversationId;
      conversations = suggestionConversations;
      agentName = 'Otimizador de Prompt';
      suggestions = suggestionAgentSuggestions;
      break;
    case 'document':
    default:
      activeConversationId = activeDocumentConversationId;
      conversations = documentConversations;
      agentName = 'Consultor Fiscal';
      suggestions = documentAgentSuggestions;
      break;
  }
  
  const activeConversation: Conversation | undefined = activeConversationId ? conversations[activeConversationId] : undefined;
  const messages: Message[] = activeConversation?.messages || [];

  useEffect(() => {
    const initializeApp = async () => {
      await loadInitialData();
      setIsInitializing(false);
    };
    initializeApp();
  }, [loadInitialData]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSendMessage = (message: string) => {
    sendMessage(message, documents);
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };
  
  const handleFeedback = (messageId: string, feedback: 'good' | 'bad') => {
    if (activeConversationId) {
        setMessageFeedback(activeAgent, activeConversationId, messageId, feedback);
    }
  };

  const AgentTabButton: React.FC<{ agent: AgentType, label: string }> = ({ agent, label }) => (
    <button
        onClick={() => setActiveAgent(agent)}
        className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
            activeAgent === agent
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
    >
        {label}
    </button>
);


  if (isInitializing) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center">
          <BotIcon className="w-16 h-16 text-blue-500 animate-pulse" />
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Carregando assistente...
          </p>
        </div>
      </div>
    );
  }

  const renderWelcomeScreen = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
        <BotIcon className="w-12 h-12 text-gray-600 dark:text-gray-300" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {agentName}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Comece uma conversa, envie um documento ou escolha uma das sugestões abaixo.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
        {suggestions.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSuggestionClick(s)}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors shadow"
          >
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{s}</p>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`flex h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}>
      <HistorySidebar isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} />

      <main className="flex-1 flex flex-col h-screen relative">
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsHistoryOpen(true)} className="lg:hidden p-1 text-gray-500 dark:text-gray-400">
              <MenuIcon className="w-6 h-6" />
            </button>
             <div className="flex items-center p-1 bg-gray-200/50 dark:bg-gray-900/50 rounded-lg">
                <AgentTabButton agent="document" label="Consultor" />
                <AgentTabButton agent="code" label="Código" />
                <AgentTabButton agent="suggestion" label="Sugestão" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsAgentInfoOpen(true)} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
                <InfoIcon className="w-5 h-5"/>
            </button>
            <TokenUsageDisplay />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
             <button onClick={signOut} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700" title="Sair">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3h12" />
                </svg>
            </button>
            {activeAgent === 'document' && (
              <button onClick={() => setIsDocumentsOpen(true)} className="lg:hidden p-1 text-gray-500 dark:text-gray-400">
                <DocumentIcon className="w-6 h-6" />
              </button>
            )}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 pb-24">
          {messages.length === 0 ? renderWelcomeScreen() : (
            <div>
              <h1 className="text-center text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                 {activeConversation?.title}
              </h1>
              {messages.map((msg) => (
                <ChatMessage 
                  key={msg.id} 
                  message={msg} 
                  onFeedback={(feedback) => handleFeedback(msg.id, feedback)} 
                />
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent">
          <ChatInput 
            onSendMessage={handleSendMessage} 
            isLoading={isLoading} 
            onUploadClick={() => setIsDocumentsOpen(true)}
            activeAgent={activeAgent}
          />
        </div>
      </main>

      {activeAgent === 'document' && <DocumentSidebar isOpen={isDocumentsOpen} onClose={() => setIsDocumentsOpen(false)} />}
      
      <AgentInfoModal 
        isOpen={isAgentInfoOpen}
        onClose={() => setIsAgentInfoOpen(false)}
        agentType={activeAgent}
      />
    </div>
  );
};

// App Router
const App: React.FC = () => {
    const { session, authLoading, initAuth, clearAuthFeedback } = useChatStore();
    const [page, setPage] = useState<'login' | 'signup'>('login');
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = initAuth();
        return () => unsubscribe();
    }, [initAuth]);

    const handleCloseForgotPassword = () => {
        setIsForgotPasswordOpen(false);
        clearAuthFeedback();
    };

    if (authLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col items-center">
                    <BotIcon className="w-16 h-16 text-blue-500 animate-pulse" />
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Carregando...</p>
                </div>
            </div>
        );
    }
    
    if (!session) {
        return (
            <>
                {page === 'login' ? (
                    <LoginPage 
                        onNavigateToSignup={() => { clearAuthFeedback(); setPage('signup'); }} 
                        onNavigateToForgotPassword={() => { clearAuthFeedback(); setIsForgotPasswordOpen(true); }}
                    />
                ) : (
                    <SignupPage 
                        onNavigateToLogin={() => { clearAuthFeedback(); setPage('login'); }} 
                    />
                )}
                <ForgotPasswordModal 
                    isOpen={isForgotPasswordOpen} 
                    onClose={handleCloseForgotPassword}
                />
            </>
        );
    }

    return <ChatApplication />;
};


export default App;