import React from 'react';
import { Document } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { DocumentIcon } from './icons/DocumentIcon';

interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: Document | null;
}

const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({ isOpen, onClose, document }) => {
  if (!isOpen || !document) return null;

  const fullText = document.chunks.map(chunk => chunk.text).join('');

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-3xl h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <DocumentIcon className="w-6 h-6 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate" title={document.name}>
              {document.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
            aria-label="Fechar modal"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>

        <main className="p-6 overflow-y-auto flex-grow">
          <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-sans">
            {fullText || "Este documento não contém texto para ser exibido."}
          </pre>
        </main>
      </div>
    </div>
  );
};

export default DocumentViewerModal;