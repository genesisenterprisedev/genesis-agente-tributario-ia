import React, { useState } from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { useChatStore } from '../store';

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
    const { saveContact } = useChatStore();
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        celular: '',
        mensagem: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        try {
            await saveContact({
                first_name: formData.nome,
                last_name: formData.sobrenome,
                email: formData.email,
                phone: formData.celular,
                message: formData.mensagem
            });
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ nome: '', sobrenome: '', email: '', celular: '', mensagem: '' });
            }, 2000);
        } catch (error) {
            console.error('Error saving contact:', error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-2xl shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/20">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Cadastro de Contato</h2>
                    <button onClick={onClose} className="p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>
                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    required
                                    value={formData.nome}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-1 text-gray-900 dark:text-white bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-white focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Sobrenome
                                </label>
                                <input
                                    type="text"
                                    id="sobrenome"
                                    name="sobrenome"
                                    required
                                    value={formData.sobrenome}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-1 text-gray-900 dark:text-white bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-white focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-1 text-gray-900 dark:text-white bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-white focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="celular" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Celular
                            </label>
                            <input
                                type="tel"
                                id="celular"
                                name="celular"
                                required
                                value={formData.celular}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-1 text-gray-900 dark:text-white bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-white focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Mensagem / Observações
                            </label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                rows={4}
                                value={formData.mensagem}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-1 text-gray-900 dark:text-white bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-white focus:border-transparent resize-none"
                            />
                        </div>

                        <div className="pt-4 space-y-3">
                            {status === 'success' && (
                                <div className="p-3 text-sm text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 rounded-lg">
                                    Contato salvo com sucesso!
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="p-3 text-sm text-red-700 bg-red-100 dark:bg-red-900/30 dark:text-red-400 rounded-lg">
                                    Erro ao salvar contato. Tente novamente.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-4 py-2.5 font-semibold text-white dark:text-black bg-blue-600 dark:bg-white rounded-lg hover:bg-blue-700 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-white dark:focus:ring-offset-black transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Salvando...' : 'Salvar Contato'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactFormModal;
