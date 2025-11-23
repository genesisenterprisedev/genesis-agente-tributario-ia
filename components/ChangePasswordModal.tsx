import React, { useState } from 'react';
import { useChatStore } from '../store';
import { KeyIcon } from './icons/KeyIcon';
import { CloseIcon } from './icons/CloseIcon';
import { EyeIcon } from './icons/EyeIcon';
import { EyeSlashIcon } from './icons/EyeSlashIcon';

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { updatePassword, authLoading, authError, authMessage, clearAuthFeedback } = useChatStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            // Manually set an error if passwords don't match, or just alert
            alert("As senhas não coincidem.");
            return;
        }
        await updatePassword(password);
    };

    // Clear feedback when closing
    React.useEffect(() => {
        if (!isOpen) {
            setPassword('');
            setConfirmPassword('');
            clearAuthFeedback();
        }
    }, [isOpen, clearAuthFeedback]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 rounded-2xl shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-white/20">
                    <div className="flex items-center gap-3">
                        <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/10">
                            <KeyIcon className="w-6 h-6 text-gray-600 dark:text-white" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Alterar Senha</h2>
                    </div>
                    <button onClick={onClose} className="p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>
                <div className="p-6">
                    {!authMessage ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Nova Senha
                                </label>
                                <div className="relative mt-1">
                                    <input
                                        id="new-password"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2.5 pr-10 text-gray-900 dark:text-white bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-white focus:border-transparent"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-white"
                                    >
                                        {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Confirmar Nova Senha
                                </label>
                                <input
                                    id="confirm-password"
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-2.5 mt-1 text-gray-900 dark:text-white bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-white focus:border-transparent"
                                />
                            </div>

                            {authError && (
                                <div className="p-3 text-sm text-red-600 bg-red-50 dark:text-white dark:bg-red-900/20 border border-red-200 dark:border-red-500/50 rounded-lg">
                                    <p className="font-bold">Erro:</p>
                                    <p>{authError.message}</p>
                                </div>
                            )}

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={authLoading}
                                    className="w-full px-4 py-2.5 font-semibold text-white bg-blue-600 dark:text-black dark:bg-white rounded-lg hover:bg-blue-700 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {authLoading ? 'Atualizando...' : 'Atualizar Senha'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center">
                            <div className="p-4 mb-6 text-sm text-green-700 bg-green-50 dark:text-white dark:bg-green-900/20 border border-green-200 dark:border-green-500/50 rounded-lg">
                                <p className="font-bold text-lg mb-2">Sucesso!</p>
                                <p>{authMessage}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-full px-4 py-2.5 font-semibold text-gray-700 dark:text-white bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                            >
                                Fechar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordModal;
