import React from 'react';

export const BotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="Ícone do Robô"
  >
    <path d="M12 2a2 2 0 0 1 2 2v2h-4V4a2 2 0 0 1 2-2zM4.636 8.364A9 9 0 0 1 12 4a9 9 0 0 1 7.364 4.364L20 10v6a2 2 0 0 1-2 2h-1.586l-1.707-1.707A4.002 4.002 0 0 0 12 15a4.002 4.002 0 0 0-2.707 1.293L7.586 18H6a2 2 0 0 1-2-2v-6l.636-1.636zM9 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    <path d="M5 20h14a1 1 0 0 1 1 1v1H4v-1a1 1 0 0 1 1-1z" />
  </svg>
);
