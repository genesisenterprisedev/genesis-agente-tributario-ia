import React from 'react';

export const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-4.5 6.01 6.01 0 0 0-1.5-4.5m0 9a6.01 6.01 0 0 1-1.5-4.5 6.01 6.01 0 0 1 1.5-4.5M12 6.75v-1.5m0 12.75a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z"
    />
  </svg>
);
