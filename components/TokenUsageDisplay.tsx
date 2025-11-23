import React from 'react';
import { useChatStore } from '../store';
import { getModelForConversation } from '../services/geminiService';

const TokenUsageDisplay: React.FC = () => {
    const { activeAgent, proTokenCount, proTokenLimit, visibleAgents } = useChatStore();

    // Se visibleAgents for false, não mostrar nada
    if (!visibleAgents) {
        return null;
    }

    // Obtém o modelo real configurado para o agente ativo
    const activeModel = getModelForConversation(activeAgent);
    const proUsagePercentage = (proTokenCount / proTokenLimit) * 100;

    // Extrai um nome amigável do modelo
    const getModelDisplayName = (model: string) => {
        if (model.includes('gpt-4o-mini')) return 'GPT-4o Mini';
        if (model.includes('gpt-4o')) return 'GPT-4o';
        if (model.includes('glm-4.5-air')) return 'GLM-4.5 Air';
        if (model.includes('gemma-3-27b')) return 'Gemma 3-27B';
        if (model.includes('flash')) return 'Flash';
        if (model.includes('pro')) return 'Pro';
        // Extrai parte final do modelo como fallback
        const parts = model.split('/');
        return parts[parts.length - 1] || model;
    };

    const modelDisplayName = getModelDisplayName(activeModel);

    return (
        <div className="flex flex-col items-end">
            <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                <span className="font-semibold hidden sm:inline">Modelo Ativo: </span>
                <span className={`font-bold px-2 py-0.5 rounded-full text-xs bg-gray-100 text-black dark:bg-white/10 dark:text-white`}>
                    {modelDisplayName}
                </span>
            </div>
            <div className="w-28 sm:w-48">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 text-right whitespace-nowrap">
                    <span className="hidden sm:inline">Uso: </span>
                    {proTokenCount.toLocaleString()}/{proTokenLimit.toLocaleString()}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-white/10">
                    <div
                        className="bg-black dark:bg-white h-2 rounded-full"
                        style={{ width: `${Math.min(proUsagePercentage, 100)}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default TokenUsageDisplay;