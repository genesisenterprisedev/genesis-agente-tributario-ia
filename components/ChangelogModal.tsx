import React, { useState, useEffect } from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { supabase } from '../services/supabaseClient';

interface ChangelogEntry {
    id: string;
    version: string;
    title: string;
    description: string | null;
    category: 'feature' | 'bugfix' | 'improvement' | 'breaking' | 'security' | 'docs';
    release_date: string;
    author: string | null;
    tags: string[] | null;
    is_published: boolean;
}

interface ChangelogModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const categoryConfig = {
    feature: {
        label: 'Nova Funcionalidade',
        icon: '✨',
        color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300',
        badgeColor: 'bg-blue-600 text-white',
    },
    bugfix: {
        label: 'Correção',
        icon: '🐛',
        color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300',
        badgeColor: 'bg-red-600 text-white',
    },
    improvement: {
        label: 'Melhoria',
        icon: '⚡',
        color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300',
        badgeColor: 'bg-green-600 text-white',
    },
    breaking: {
        label: 'Breaking Change',
        icon: '⚠️',
        color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300',
        badgeColor: 'bg-orange-600 text-white',
    },
    security: {
        label: 'Segurança',
        icon: '🔒',
        color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300',
        badgeColor: 'bg-purple-600 text-white',
    },
    docs: {
        label: 'Documentação',
        icon: '📚',
        color: 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300',
        badgeColor: 'bg-gray-600 text-white',
    },
};

const ChangelogModal: React.FC<ChangelogModalProps> = ({ isOpen, onClose }) => {
    const [entries, setEntries] = useState<ChangelogEntry[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (isOpen) {
            loadChangelog();
        }
    }, [isOpen]);

    const loadChangelog = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('changelog')
                .select('*')
                .eq('is_published', true)
                .order('release_date', { ascending: false });

            if (error) throw error;
            setEntries(data || []);
        } catch (error) {
            console.error('Error loading changelog:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const filteredEntries = entries.filter(entry => {
        const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
        const matchesSearch =
            entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.version.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Agrupar por versão
    const groupedEntries = filteredEntries.reduce((acc, entry) => {
        if (!acc[entry.version]) {
            acc[entry.version] = [];
        }
        acc[entry.version].push(entry);
        return acc;
    }, {} as Record<string, ChangelogEntry[]>);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(date);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-gray-200 dark:border-gray-700"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            📝 Changelog
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Acompanhe todas as novidades, melhorias e correções
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                        aria-label="Fechar"
                    >
                        <CloseIcon className="w-5 h-5" />
                    </button>
                </div>

                {/* Filters */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 space-y-4">
                    {/* Search */}
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Buscar por título, descrição ou versão..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === 'all'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            Todos
                        </button>
                        {Object.entries(categoryConfig).map(([key, config]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedCategory(key)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${selectedCategory === key
                                        ? config.badgeColor
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <span>{config.icon}</span>
                                <span>{config.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <svg className="w-10 h-10 text-blue-600 dark:text-blue-500 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Carregando changelog...</p>
                        </div>
                    ) : filteredEntries.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {searchTerm || selectedCategory !== 'all' ? 'Nenhuma entrada encontrada' : 'Nenhuma atualização ainda'}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {searchTerm || selectedCategory !== 'all' ? 'Tente outro filtro ou busca' : 'As atualizações aparecerão aqui'}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {Object.entries(groupedEntries).map(([version, versionEntries]) => (
                                <div key={version} className="space-y-4">
                                    {/* Version Header */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                                            {version.split('.')[0]}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                Versão {version}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {formatDate(versionEntries[0].release_date)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Entries */}
                                    <div className="space-y-3 ml-6 border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                                        {versionEntries.map((entry) => {
                                            const config = categoryConfig[entry.category];
                                            return (
                                                <div
                                                    key={entry.id}
                                                    className={`p-4 rounded-xl border-2 ${config.color} transition-all hover:shadow-md`}
                                                >
                                                    <div className="flex items-start justify-between gap-3">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.badgeColor}`}>
                                                                    {config.icon} {config.label}
                                                                </span>
                                                                {entry.tags && entry.tags.length > 0 && (
                                                                    <div className="flex gap-1">
                                                                        {entry.tags.map((tag, idx) => (
                                                                            <span
                                                                                key={idx}
                                                                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs"
                                                                            >
                                                                                #{tag}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                                {entry.title}
                                                            </h4>
                                                            {entry.description && (
                                                                <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                                                                    {entry.description}
                                                                </p>
                                                            )}
                                                            {entry.author && (
                                                                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                                                                    Por {entry.author}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChangelogModal;
