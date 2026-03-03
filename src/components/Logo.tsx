import React from 'react';

export const Logo = ({ className = "w-8 h-8", iconOnly = false }: { className?: string, iconOnly?: boolean }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Modern Geometric Logo Icon */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-sm"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Shield/Structure Shape */}
          <path 
            d="M50 5L15 20V45C15 67.5 30 88.5 50 95C70 88.5 85 67.5 85 45V20L50 5Z" 
            fill="#001F3F" 
          />
          {/* Inner Intelligence/Network Pattern */}
          <path 
            d="M50 25L35 40H45V65H55V40H65L50 25Z" 
            fill="#A39382" 
          />
          {/* Accent Dots for "Intelligence" */}
          <circle cx="50" cy="25" r="4" fill="#A39382" />
          <circle cx="35" cy="40" r="3" fill="#A39382" />
          <circle cx="65" cy="40" r="3" fill="#A39382" />
          <circle cx="50" cy="75" r="5" fill="#A39382" opacity="0.5" />
        </svg>
      </div>
      {!iconOnly && (
        <span className="text-2xl font-bold tracking-tighter text-navy">TAQNA</span>
      )}
    </div>
  );
};
