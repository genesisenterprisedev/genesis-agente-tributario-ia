import React from 'react';
import { useChatStore } from '../store';
import { PRIMARY_MODEL } from '../services/geminiService';

const TokenUsageDisplay: React.FC = () => {
  const { activeModel, proTokenCount, proTokenLimit } = useChatStore();

  const proUsagePercentage = (proTokenCount / proTokenLimit) * 100;

  return (
    <div className="flex flex-col items-end">
        <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            <span className="font-semibold hidden sm:inline">Modelo Ativo: </span>
            <span className={`font-bold px-2 py-0.5 rounded-full text-xs ${activeModel === PRIMARY_MODEL ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                {activeModel.includes('pro') ? 'Pro' : 'Flash'}
            </span>
        </div>
        {activeModel === PRIMARY_MODEL && (
             <div className="w-28 sm:w-48">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 text-right whitespace-nowrap">
                    <span className="hidden sm:inline">Uso (Pro): </span>
                    {proTokenCount.toLocaleString()}/{proTokenLimit.toLocaleString()}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${Math.min(proUsagePercentage, 100)}%` }}
                    ></div>
                </div>
            </div>
        )}
    </div>
  );
};

export default TokenUsageDisplay;