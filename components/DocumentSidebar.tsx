import React, { useRef, useState, useEffect } from 'react';
import { useDocumentStore } from '../store';
import { DocumentIcon } from './icons/DocumentIcon';
import { PaperclipIcon } from './icons/PaperclipIcon';
import { CloseIcon } from './icons/CloseIcon';
import { LockIcon } from './icons/LockIcon';
import { DotsVerticalIcon } from './icons/DotsVerticalIcon';
import { PencilIcon } from './icons/PencilIcon';
import { EyeIcon } from './icons/EyeIcon';
import { TrashIcon } from './icons/TrashIcon';
import { Document } from '../types';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);


interface DocumentContentViewerProps {
  content: string;
}

const DocumentContentViewer: React.FC<DocumentContentViewerProps> = ({ content }) => (
  <div className="p-3 pt-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50">
    <div className="max-h-64 overflow-y-auto border-t border-gray-200 dark:border-gray-700 pt-2">
        <pre className="whitespace-pre-wrap font-sans">
        {content || "Este documento não contém texto para ser exibido."}
        </pre>
    </div>
  </div>
);


interface DocumentItemProps {
  doc: Document;
  isExpanded: boolean;
  onDelete: (id: string) => void;
  onRename: (id: string, newName: string) => void;
  onToggleExpand: (id: string) => void;
}

const DocumentItem: React.FC<DocumentItemProps> = ({ doc, isExpanded, onDelete, onRename, onToggleExpand }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [name, setName] = useState(doc.name);
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isRenaming && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isRenaming]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRename = () => {
    if (name.trim() && name.trim() !== doc.name) {
      onRename(doc.id, name.trim());
    } else {
      setName(doc.name); // Revert to original if empty or unchanged
    }
    setIsRenaming(false);
    setIsMenuOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRename();
    } else if (e.key === 'Escape') {
      setName(doc.name);
      setIsRenaming(false);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="mb-2 rounded-md bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between p-2 cursor-pointer" onClick={() => onToggleExpand(doc.id)}>
        <div className="flex items-center overflow-hidden flex-grow">
          <DocumentIcon className="w-5 h-5 mr-2 flex-shrink-0 text-gray-500 dark:text-gray-400" />
          {isRenaming ? (
            <input
              ref={inputRef}
              type="text"
              value={name}
              onClick={(e) => e.stopPropagation()} // Prevent expand/collapse when clicking input
              onChange={(e) => setName(e.target.value)}
              onBlur={handleRename}
              onKeyDown={handleKeyDown}
              className="text-sm bg-transparent border-b border-blue-500 focus:outline-none text-gray-800 dark:text-gray-200 w-full"
            />
          ) : (
            <span className="truncate text-sm text-gray-800 dark:text-gray-200" title={doc.name}>
              {doc.name}
            </span>
          )}
        </div>

        <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
           <ChevronDownIcon className={`w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform duration-300 mr-1 ${isExpanded ? 'rotate-180' : ''}`} />
            <div className="relative flex-shrink-0" ref={menuRef}>
            {doc.isDeletable ? (
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
                <DotsVerticalIcon className="w-5 h-5" />
                </button>
            ) : (
                <LockIcon className="w-4 h-4 ml-2 flex-shrink-0 text-gray-400 dark:text-gray-500" title="Este documento faz parte da base de conhecimento e não pode ser excluído." />
            )}
            {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                <ul className="py-1">
                    <li>
                    <button onClick={() => { onToggleExpand(doc.id); setIsMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                        <EyeIcon className="w-4 h-4 mr-2" /> {isExpanded ? 'Ocultar' : 'Visualizar'}
                    </button>
                    </li>
                    <li>
                    <button onClick={() => { setIsRenaming(true); setIsMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                        <PencilIcon className="w-4 h-4 mr-2" /> Renomear
                    </button>
                    </li>
                    <li>
                    <button onClick={() => { onDelete(doc.id); setIsMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center">
                        <TrashIcon className="w-4 h-4 mr-2" /> Excluir
                    </button>
                    </li>
                </ul>
                </div>
            )}
            </div>
        </div>
      </div>
       <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
            <DocumentContentViewer content={doc.content || ''} />
        </div>
      </div>
    </div>
  );
};


const DocumentSidebar: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
  const { documents, addDocument, deleteDocument, renameDocument, isLoading, error } = useDocumentStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [expandedDocId, setExpandedDocId] = useState<string | null>(null);

  const handleToggleExpand = (docId: string) => {
    setExpandedDocId(prevId => prevId === docId ? null : docId);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      addDocument(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const baseDocuments = documents.filter(doc => !doc.isDeletable);
  const userDocuments = documents.filter(doc => doc.isDeletable);

  return (
    <>
      <aside className={`fixed inset-y-0 right-0 z-40 w-80 bg-gray-50 dark:bg-gray-900/95 flex flex-col h-full border-l border-gray-200 dark:border-gray-700/50 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:translate-x-0 lg:flex-shrink-0`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Documentos</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Contexto do agente.</p>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
            aria-label="Fechar documentos"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
          
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 px-1">Base de Conhecimento</h3>
          {baseDocuments.length > 0 ? (
              baseDocuments.map((doc) => <DocumentItem key={doc.id} doc={doc} onDelete={() => {}} onRename={() => {}} onToggleExpand={handleToggleExpand} isExpanded={expandedDocId === doc.id} />)
          ) : (
              <p className="text-xs text-gray-400 dark:text-gray-500 px-1">Nenhum conhecimento base carregado.</p>
          )}

          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-6 mb-2 px-1">Documentos Enviados</h3>
          {userDocuments.length > 0 ? (
              userDocuments.map((doc) => <DocumentItem key={doc.id} doc={doc} onDelete={deleteDocument} onRename={renameDocument} onToggleExpand={handleToggleExpand} isExpanded={expandedDocId === doc.id} />)
          ) : (
              <div className="text-center text-gray-500 dark:text-gray-400 mt-4 py-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
                  <DocumentIcon className="w-8 h-8 mx-auto mb-1 text-gray-400" />
                  <p className='text-sm'>Nenhum documento enviado.</p>
              </div>
          )}

          {isLoading && (
            <div className="flex items-center justify-center mt-4">
              <div className="w-6 h-6 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
              <span className="ml-2 text-gray-600 dark:text-gray-300">Processando...</span>
            </div>
          )}

          {error && <p className="text-red-500 text-sm mt-2 p-2 bg-red-100 dark:bg-red-900/20 rounded-md whitespace-pre-wrap">{error}</p>}
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".txt,.md,.pdf"
          />
          <button
            onClick={handleUploadClick}
            disabled={isLoading}
            className="w-full flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg disabled:bg-gray-400 disabled:dark:bg-gray-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <PaperclipIcon className="w-5 h-5 mr-2" />
            <span>Enviar Documento</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default DocumentSidebar;