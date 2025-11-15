import React from 'react';

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
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
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.32 1.011l-4.2 3.748a.563.563 0 0 0-.162.522l1.257 5.273c.099.418-.36.79-.746.592L12 17.5l-4.793 2.919c-.386.234-.845-.174-.746-.592l1.257-5.273a.563.563 0 0 0-.162-.522l-4.2-3.748c-.38-.348-.179-.971.32-1.011l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z"
    />
  </svg>
);
