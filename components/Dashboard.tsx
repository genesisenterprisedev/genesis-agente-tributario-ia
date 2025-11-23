import React, { useMemo } from 'react';
import { useChatStore, useDocumentStore } from '../store';
import { Conversation, AgentType } from '../types';
import { BotIcon } from './icons/BotIcon';
import { DocumentIcon } from './icons/DocumentIcon';
import { CloseIcon } from './icons/CloseIcon';

interface DashboardProps {
    isOpen: boolean;
    onClose: () => void;
}

interface AgentStats {
    totalConversations: number;
    totalMessages: number;
    userMessages: number;
    botMessages: number;
    averageMessagesPerConversation: number;
    feedbackGood: number;
    feedbackBad: number;
}

interface ConversationWithAgent extends Conversation {
    agentType: AgentType;
}

const Dashboard: React.FC<DashboardProps> = ({ isOpen, onClose }) => {
    const {
        documentConversations,
        codeConversations,
        suggestionConversations,
        user,
    } = useChatStore();

    const { documents } = useDocumentStore();

    // Calculate comprehensive statistics
    const stats = useMemo(() => {
        const allConversations: ConversationWithAgent[] = [
            ...Object.values(documentConversations).map(c => ({ ...c, agentType: 'document' as AgentType })),
            ...Object.values(codeConversations).map(c => ({ ...c, agentType: 'code' as AgentType })),
            ...Object.values(suggestionConversations).map(c => ({ ...c, agentType: 'suggestion' as AgentType })),
        ];

        const allMessages = allConversations.flatMap(c => c.messages);

        // Overall stats
        const totalConversations = allConversations.length;
        const totalMessages = allMessages.length;
        const userMessages = allMessages.filter(m => m.sender === 'user').length;
        const botMessages = allMessages.filter(m => m.sender === 'bot').length;
        const feedbackGood = allMessages.filter(m => m.feedback === 'good').length;
        const feedbackBad = allMessages.filter(m => m.feedback === 'bad').length;

        // Agent-specific stats
        const getAgentStats = (conversations: Record<string, Conversation>): AgentStats => {
            const convos = Object.values(conversations);
            const messages = convos.flatMap(c => c.messages);

            return {
                totalConversations: convos.length,
                totalMessages: messages.length,
                userMessages: messages.filter(m => m.sender === 'user').length,
                botMessages: messages.filter(m => m.sender === 'bot').length,
                averageMessagesPerConversation: convos.length > 0 ? messages.length / convos.length : 0,
                feedbackGood: messages.filter(m => m.feedback === 'good').length,
                feedbackBad: messages.filter(m => m.feedback === 'bad').length,
            };
        };

        const documentStats = getAgentStats(documentConversations);
        const codeStats = getAgentStats(codeConversations);
        const suggestionStats = getAgentStats(suggestionConversations);

        // Recent activity
        const recentConversations = allConversations
            .sort((a, b) => (b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt))
            .slice(0, 5);

        const recentMessages = allMessages
            .sort((a, b) => b.createdAt - a.createdAt)
            .slice(0, 10);

        // Document stats
        const totalDocuments = documents.length;
        const userDocuments = documents.filter(d => d.isDeletable).length;
        const systemDocuments = documents.filter(d => !d.isDeletable).length;

        // Time-based stats
        const now = Date.now();
        const oneDayAgo = now - 24 * 60 * 60 * 1000;
        const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;

        const conversationsToday = allConversations.filter(c => c.createdAt > oneDayAgo).length;
        const conversationsThisWeek = allConversations.filter(c => c.createdAt > oneWeekAgo).length;
        const messagesToday = allMessages.filter(m => m.createdAt > oneDayAgo).length;
        const messagesThisWeek = allMessages.filter(m => m.createdAt > oneWeekAgo).length;

        return {
            overall: {
                totalConversations,
                totalMessages,
                userMessages,
                botMessages,
                feedbackGood,
                feedbackBad,
                conversationsToday,
                conversationsThisWeek,
                messagesToday,
                messagesThisWeek,
            },
            agents: {
                document: documentStats,
                code: codeStats,
                suggestion: suggestionStats,
            },
            documents: {
                total: totalDocuments,
                user: userDocuments,
                system: systemDocuments,
            },
            recent: {
                conversations: recentConversations,
                messages: recentMessages,
            },
        };
    }, [documentConversations, codeConversations, suggestionConversations, documents]);

    if (!isOpen) return null;

    const StatCard: React.FC<{ title: string; value: string | number; subtitle?: string; icon?: React.ReactNode }> =
        ({ title, value, subtitle, icon }) => (
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</p>
                        <p className="text-3xl font-bold text-black dark:text-white">{value}</p>
                        {subtitle && <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{subtitle}</p>}
                    </div>
                    {icon && <div className="ml-2 text-gray-400 dark:text-gray-600">{icon}</div>}
                </div>
            </div>
        );

    const AgentStatsCard: React.FC<{ stats: AgentStats; name: string }> =
        ({ stats, name }) => (
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                    <BotIcon className="w-6 h-6 text-black dark:text-white" />
                    <h3 className="text-lg font-semibold text-black dark:text-white">{name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">Conversas</p>
                        <p className="text-xl font-bold text-black dark:text-white">{stats.totalConversations}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">Mensagens</p>
                        <p className="text-xl font-bold text-black dark:text-white">{stats.totalMessages}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">Média/Conv.</p>
                        <p className="text-xl font-bold text-black dark:text-white">
                            {stats.averageMessagesPerConversation.toFixed(1)}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">Feedback</p>
                        <p className="text-xl font-bold text-black dark:text-white">
                            <span className="text-green-600 dark:text-green-400">↑{stats.feedbackGood}</span>
                            {' '}
                            <span className="text-red-600 dark:text-red-400">↓{stats.feedbackBad}</span>
                        </p>
                    </div>
                </div>
            </div>
        );

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        const now = Date.now();
        const diff = now - timestamp;

        if (diff < 60000) return 'Agora mesmo';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m atrás`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}h atrás`;
        if (diff < 604800000) return `${Math.floor(diff / 86400000)}d atrás`;

        return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
    };

    const getAgentName = (agentType: AgentType) => {
        switch (agentType) {
            case 'document': return 'Consultor';
            case 'code': return 'Código';
            case 'suggestion': return 'Sugestão';
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in overflow-hidden"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-xl shadow-2xl w-full max-w-7xl max-h-[95vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <header className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/20">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-white/10">
                            <svg className="w-7 h-7 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Visão geral de todos os dados da aplicação
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Fechar dashboard"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {/* User Info */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 rounded-lg border border-gray-200 dark:border-white/20">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
                                <span className="text-xl font-bold text-white dark:text-black">
                                    {user?.email?.charAt(0).toUpperCase() || 'U'}
                                </span>
                            </div>
                            <div>
                                <p className="font-semibold text-black dark:text-white">{user?.email}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Membro desde {new Date(user?.created_at || '').toLocaleDateString('pt-BR')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Overall Statistics */}
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-4">Estatísticas Gerais</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <StatCard
                                title="Total de Conversas"
                                value={stats.overall.totalConversations}
                                subtitle={`${stats.overall.conversationsThisWeek} esta semana`}
                                icon={<BotIcon className="w-8 h-8" />}
                            />
                            <StatCard
                                title="Total de Mensagens"
                                value={stats.overall.totalMessages}
                                subtitle={`${stats.overall.messagesThisWeek} esta semana`}
                                icon={
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                }
                            />
                            <StatCard
                                title="Documentos"
                                value={stats.documents.total}
                                subtitle={`${stats.documents.user} enviados por você`}
                                icon={<DocumentIcon className="w-8 h-8" />}
                            />
                            <StatCard
                                title="Taxa de Satisfação"
                                value={
                                    stats.overall.feedbackGood + stats.overall.feedbackBad > 0
                                        ? `${Math.round((stats.overall.feedbackGood / (stats.overall.feedbackGood + stats.overall.feedbackBad)) * 100)}%`
                                        : 'N/A'
                                }
                                subtitle={`${stats.overall.feedbackGood} positivos, ${stats.overall.feedbackBad} negativos`}
                                icon={
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                            />
                        </div>
                    </section>

                    {/* Activity This Week */}
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-4">Atividade Recente</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <StatCard
                                title="Conversas Hoje"
                                value={stats.overall.conversationsToday}
                                subtitle="Últimas 24 horas"
                            />
                            <StatCard
                                title="Mensagens Hoje"
                                value={stats.overall.messagesToday}
                                subtitle="Últimas 24 horas"
                            />
                        </div>
                    </section>

                    {/* Agent Statistics */}
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-4">Uso por Agente</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <AgentStatsCard
                                stats={stats.agents.document}
                                name="Consultor Fiscal"
                            />
                            <AgentStatsCard
                                stats={stats.agents.code}
                                name="Gerador de Código"
                            />
                            <AgentStatsCard
                                stats={stats.agents.suggestion}
                                name="Otimizador de Prompt"
                            />
                        </div>
                    </section>

                    {/* Recent Conversations */}
                    <section className="mb-8">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-4">Conversas Recentes</h3>
                        <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-lg overflow-hidden">
                            <div className="max-h-64 overflow-y-auto">
                                {stats.recent.conversations.length > 0 ? (
                                    <table className="w-full">
                                        <thead className="bg-gray-100 dark:bg-white/5 sticky top-0">
                                            <tr>
                                                <th className="text-left p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Título</th>
                                                <th className="text-left p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Agente</th>
                                                <th className="text-left p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Mensagens</th>
                                                <th className="text-left p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Atualizado</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                                            {stats.recent.conversations.map((conv) => (
                                                <tr key={conv.id} className="hover:bg-gray-50 dark:hover:bg-white/5">
                                                    <td className="p-3 text-sm text-black dark:text-white">{conv.title}</td>
                                                    <td className="p-3 text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="px-2 py-1 bg-gray-200 dark:bg-white/10 rounded text-xs">
                                                            {getAgentName(conv.agentType)}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 text-sm text-gray-600 dark:text-gray-400">{conv.messages.length}</td>
                                                    <td className="p-3 text-sm text-gray-600 dark:text-gray-400">
                                                        {formatDate(conv.updatedAt || conv.createdAt)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                        Nenhuma conversa encontrada
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Documents Overview */}
                    <section>
                        <h3 className="text-xl font-bold text-black dark:text-white mb-4">Documentos</h3>
                        <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-lg overflow-hidden">
                            <div className="max-h-64 overflow-y-auto">
                                {documents.length > 0 ? (
                                    <table className="w-full">
                                        <thead className="bg-gray-100 dark:bg-white/5 sticky top-0">
                                            <tr>
                                                <th className="text-left p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Nome</th>
                                                <th className="text-left p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Tipo</th>
                                                <th className="text-left p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Chunks</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                                            {documents.map((doc) => (
                                                <tr key={doc.id} className="hover:bg-gray-50 dark:hover:bg-white/5">
                                                    <td className="p-3 text-sm text-black dark:text-white truncate max-w-xs">{doc.name}</td>
                                                    <td className="p-3 text-sm text-gray-600 dark:text-gray-400">
                                                        <span className={`px-2 py-1 rounded text-xs ${doc.isDeletable
                                                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                                                            : 'bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-300'
                                                            }`}>
                                                            {doc.isDeletable ? 'Usuário' : 'Sistema'}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 text-sm text-gray-600 dark:text-gray-400">{doc.chunks.length}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                        Nenhum documento encontrado
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default Dashboard;
