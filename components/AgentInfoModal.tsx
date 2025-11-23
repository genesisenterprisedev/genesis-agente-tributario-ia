import React from 'react';
import { AgentType } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { BotIcon } from './icons/BotIcon';
import { DOCUMENT_MODEL, PRIMARY_MODEL } from '../services/geminiService';

interface AgentInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  agentType: AgentType;
}

const agentContent = {
  document: {
    title: 'Sobre o Consultor de Documentos',
    description:
      'Este agente é um especialista em análise de documentos e conhecimento tributário. Sua principal função é responder a perguntas com base no contexto fornecido nos documentos enviados e em sua base de conhecimento interna. Quando necessário, ele utiliza a busca na web para complementar suas respostas.',
    capabilities: [
      'Analisar arquivos de texto (TXT, MD) e PDF.',
      'Utilizar a técnica RAG (Retrieval-Augmented Generation) para encontrar as informações mais relevantes nos documentos.',
      'Buscar informações atualizadas na web para complementar o conhecimento.',
      'Citar as fontes da web utilizadas nas respostas.',
    ],
    limitations: [
      'Não fornece aconselhamento financeiro ou tributário licenciado.',
      'As respostas são baseadas nas informações disponíveis e podem não cobrir todas as especificidades de um caso real.',
      'A precisão depende da qualidade e clareza dos documentos fornecidos.',
      'O conhecimento sobre eventos muito recentes pode ser limitado.',
    ],
  },
  code: {
    title: 'Sobre o Gerador de Código Fiscal',
    description:
      'Este agente é um programador sênior especialista em criar trechos de código para resolver problemas tributários e fiscais, com foco em Python e Delphi. Ele pode utilizar o contexto da conversa na aba "Consultor" para gerar um código mais preciso.',
    capabilities: [
      'Gerar funções e scripts em Python e Delphi.',
      'Adicionar comentários explicativos no código.',
      'Utilizar o histórico da conversa do "Consultor" como contexto.',
      'Formatar o código em blocos para fácil leitura e cópia.',
    ],
    limitations: [
      'Não pode executar ou testar o código gerado.',
      'O código é fornecido como um exemplo e deve ser revisado por um desenvolvedor qualificado antes do uso em produção.',
      'Não compreende a arquitetura completa de um projeto ou sistema existente.',
      'Pode não utilizar as bibliotecas ou frameworks mais recentes, a menos que seja especificado.',
    ],
  },
  suggestion: {
    title: 'Sobre o Otimizador de Sugestões',
    description:
      'Este agente atua como um especialista em prompts. Em vez de responder diretamente à sua pergunta, ele analisa sua intenção e sugere 3 maneiras alternativas e mais eficazes de formular a mesma pergunta para obter melhores resultados de um assistente de IA fiscal. Ideal para refinar suas buscas e obter respostas mais precisas.',
    capabilities: [
      'Analisar a intenção por trás de uma pergunta.',
      'Sugerir 3 novas formulações de prompt.',
      'Explicar brevemente por que cada sugestão é melhor.',
      'Ajudar a treinar o usuário a fazer perguntas mais eficazes.',
    ],
    limitations: [
      'Não responde à pergunta original diretamente.',
      'As sugestões são baseadas em heurísticas e podem não ser sempre perfeitas.',
      'Funciona melhor com perguntas abertas e complexas.',
    ],
  },
};

const AgentInfoModal: React.FC<AgentInfoModalProps> = ({ isOpen, onClose, agentType }) => {
  if (!isOpen) return null;

  const content = agentContent[agentType];

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-transform duration-300 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/20">
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-white/10">
              <BotIcon className="w-6 h-6 text-gray-600 dark:text-white" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white" id="modal-title">
              {content.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 rounded-full"
            aria-label="Fechar modal"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>

        <main className="p-6 overflow-y-auto text-black dark:text-white">
          <p className="text-sm leading-relaxed mb-6">{content.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-semibold text-black dark:text-white mb-2">
                Capacidades
              </h3>
              <ul className="space-y-2 list-disc list-inside text-sm">
                {content.capabilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black dark:text-white mr-2 mt-1">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold text-black dark:text-white mb-2">
                Limitações
              </h3>
              <ul className="space-y-2 list-disc list-inside text-sm">
                {content.limitations.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-black dark:text-white mr-2 mt-1">&#10007;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {agentType === 'document' && (
            <section className="mt-6">
              <h3 className="text-md font-semibold text-black dark:text-white mb-2">
                Modelos LLM configurados
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                Estes modelos são definidos na configuração do ambiente e indicam qual LLM está sendo usado atualmente para o Consultor de Documentos.
              </p>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <dt className="font-semibold text-black dark:text-white">
                    Modelo do Consultor de Documentos
                  </dt>
                  <dd className="text-gray-700 dark:text-gray-300 break-all">
                    {DOCUMENT_MODEL}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-black dark:text-white">
                    Modelo padrão (fallback global)
                  </dt>
                  <dd className="text-gray-700 dark:text-gray-300 break-all">
                    {PRIMARY_MODEL}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-black dark:text-white">
                    Modelo de embeddings de documentos
                  </dt>
                  <dd className="text-gray-700 dark:text-gray-300 break-all">
                    text-embedding-ada-002
                  </dd>
                </div>
              </dl>
            </section>
          )}

          <div className="mt-6 p-3 bg-gray-100 dark:bg-white/10 border-l-4 border-black dark:border-white rounded-r-lg">
            <p className="text-xs text-black dark:text-white">
              <strong>Aviso:</strong> As informações e o código gerados por esta IA são para fins informativos e não substituem o aconselhamento de um profissional qualificado. Verifique sempre as informações com fontes oficiais.
            </p>
          </div>

        </main>
      </div>
      {/* FIX: Removed invalid 'jsx' prop from style tag. The 'jsx' prop is specific to styled-jsx (commonly used with Next.js) and is not a standard React attribute. A standard <style> tag achieves the same result for defining the keyframe animations. */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
           animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AgentInfoModal;