import React from 'react';

export const WebIcon: React.FC<{ className?: string }> = ({ className }) => (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 12h16.5m-16.5 3.75a9.023 9.023 0 0 1 0-7.5M12 3.75c1.62 3.32 1.62 7.18 0 10.5"
    />
  </svg>
);