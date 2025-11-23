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

const DatabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);

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
  <div className="p-3 pt-2 text-sm text-black dark:text-white bg-gray-50 dark:bg-white/10">
    <div className="max-h-64 overflow-y-auto border-t border-gray-200 dark:border-white/20 pt-2">
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
  onMoveToKnowledgeBase?: (id: string) => void;
}

const DocumentItem: React.FC<DocumentItemProps> = ({ doc, isExpanded, onDelete, onRename, onToggleExpand, onMoveToKnowledgeBase }) => {
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
    <div className="mb-2 rounded-md bg-white dark:bg-black shadow-sm border border-gray-200 dark:border-white/20">
      <div className="flex items-center justify-between p-2 cursor-pointer" onClick={() => onToggleExpand(doc.id)}>
        <div className="flex items-center overflow-hidden grow">
          <DocumentIcon className="w-5 h-5 mr-2 shrink-0 text-gray-500 dark:text-gray-400" />
          {isRenaming ? (
            <input
              ref={inputRef}
              type="text"
              value={name}
              onClick={(e) => e.stopPropagation()} // Prevent expand/collapse when clicking input
              onChange={(e) => setName(e.target.value)}
              onBlur={handleRename}
              onKeyDown={handleKeyDown}
              className="text-sm bg-transparent border-b border-black dark:border-white focus:outline-none text-gray-800 dark:text-gray-200 w-full"
            />
          ) : (
            <span className="truncate text-sm text-gray-800 dark:text-gray-200" title={doc.name}>
              {doc.name}
            </span>
          )}
        </div>

        <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
          <ChevronDownIcon className={`w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform duration-300 mr-1 ${isExpanded ? 'rotate-180' : ''}`} />
          <div className="relative shrink-0" ref={menuRef}>
            {doc.isDeletable ? (
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10">
                <DotsVerticalIcon className="w-5 h-5" />
              </button>
            ) : (
              <LockIcon className="w-4 h-4 ml-2 shrink-0 text-gray-400 dark:text-gray-500" title="Este documento faz parte da base de conhecimento e não pode ser excluído." />
            )}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-black rounded-md shadow-lg border border-gray-200 dark:border-white/20 z-10">
                <ul className="py-1">
                  <li>
                    <button onClick={() => { onToggleExpand(doc.id); setIsMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 flex items-center">
                      <EyeIcon className="w-4 h-4 mr-2" /> {isExpanded ? 'Ocultar' : 'Visualizar'}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setIsRenaming(true); setIsMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 flex items-center">
                      <PencilIcon className="w-4 h-4 mr-2" /> Renomear
                    </button>
                  </li>
                  {onMoveToKnowledgeBase && (
                    <li>
                      <button onClick={() => { onMoveToKnowledgeBase(doc.id); setIsMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 flex items-center">
                        <DatabaseIcon className="w-4 h-4 mr-2" /> Adicionar à Base
                      </button>
                    </li>
                  )}
                  <li>
                    <button onClick={() => { onDelete(doc.id); setIsMenuOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-white/10 flex items-center">
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
  const { documents, addDocument, deleteDocument, renameDocument, moveToKnowledgeBase, isLoading, error } = useDocumentStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [expandedDocId, setExpandedDocId] = useState<string | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

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

  const handleMoveToKnowledgeBase = async (id: string) => {
    try {
      await moveToKnowledgeBase(id);
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 5000);
    } catch (error: any) {
      console.error('Error moving to knowledge base:', error);
      // O erro já é tratado no store, apenas logamos aqui
    }
  };

  const baseDocuments = documents.filter(doc => !doc.isDeletable);
  const userDocuments = documents.filter(doc => doc.isDeletable);

  return (
    <>
      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-4 right-4 z-50 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-4 shadow-lg animate-slide-in max-w-sm">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800 dark:text-green-200">
                Documento adicionado à Base de Conhecimento!
              </p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                Agora ele será usado como contexto RAG nas conversas.
              </p>
            </div>
            <button
              onClick={() => setShowSuccessToast(false)}
              className="text-green-400 hover:text-green-600 dark:hover:text-green-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <aside className={`fixed inset-y-0 right-0 z-40 w-80 bg-white dark:bg-black flex flex-col h-full border-l border-gray-200 dark:border-white/20 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:translate-x-0 lg:shrink-0`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/20">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Documentos</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Contexto do agente.</p>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full"
            aria-label="Fechar documentos"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="grow p-4 overflow-y-auto">

          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 px-1">Base de Conhecimento</h3>
          {baseDocuments.length > 0 ? (
            baseDocuments.map((doc) => <DocumentItem key={doc.id} doc={doc} onDelete={() => { }} onRename={() => { }} onToggleExpand={handleToggleExpand} isExpanded={expandedDocId === doc.id} />)
          ) : (
            <p className="text-xs text-gray-400 dark:text-gray-500 px-1">Nenhum conhecimento base carregado.</p>
          )}

          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-6 mb-2 px-1">Documentos Enviados</h3>
          {userDocuments.length > 0 ? (
            userDocuments.map((doc) => <DocumentItem key={doc.id} doc={doc} onDelete={deleteDocument} onRename={renameDocument} onToggleExpand={handleToggleExpand} isExpanded={expandedDocId === doc.id} onMoveToKnowledgeBase={handleMoveToKnowledgeBase} />)
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-4 py-4 border-2 border-dashed border-gray-300 dark:border-white/20 rounded-lg">
              <DocumentIcon className="w-8 h-8 mx-auto mb-1 text-gray-400" />
              <p className='text-sm'>Nenhum documento enviado.</p>
            </div>
          )}

          {isLoading && (
            <div className="flex items-center justify-center mt-4">
              <div className="w-6 h-6 border-2 border-t-transparent border-black dark:border-white rounded-full animate-spin"></div>
              <span className="ml-2 text-gray-600 dark:text-gray-300">Processando...</span>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 p-3 text-sm text-red-800 dark:text-red-200 whitespace-pre-wrap">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex-1">
                  <p className="font-semibold mb-1">Erro ao processar documento</p>
                  <p className="text-xs leading-snug">{error}</p>
                </div>
                <button
                  type="button"
                  onClick={() => useDocumentStore.setState({ error: null })}
                  className="text-red-400 hover:text-red-600 dark:hover:text-red-200 ml-1"
                  aria-label="Fechar mensagem de erro"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-white/20">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".txt,.md,.pdf,.doc,.docx,.csv,.xlsx"
          />
          <button
            onClick={handleUploadClick}
            disabled={isLoading}
            className="w-full flex items-center justify-center p-3 bg-black dark:bg-white text-white dark:text-black rounded-lg disabled:bg-gray-400 disabled:dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-black"
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