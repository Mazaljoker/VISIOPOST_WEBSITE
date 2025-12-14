import React from 'react';

interface NSignalLogoProps {
  variant?: 'full' | 'icon';
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { full: { width: 180, height: 32 }, icon: { width: 32, height: 32 } },
  md: { full: { width: 240, height: 44 }, icon: { width: 48, height: 48 } },
  lg: { full: { width: 300, height: 56 }, icon: { width: 64, height: 64 } },
};

/**
 * Logo nSignal - Charte Graphique 2025
 * Couleurs: Teal #0F7B6C + Coral #E86A58
 */
export const NSignalLogo: React.FC<NSignalLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}) => {
  const { width, height } = sizes[size][variant];
  
  // Nouvelles couleurs nSignal 2025
  const colors = {
    light: {
      primary: '#1E2B3A',    // Charcoal Chaud
      text: '#1E2B3A',
      muted: '#6B6259',
      ring: '#1E2B3A',
    },
    dark: {
      primary: '#F8F5F2',    // Crème Mocha
      text: '#F8F5F2',
      muted: '#B8B0A8',
      ring: '#F8F5F2',
    },
  };
  
  const c = colors[theme];
  const teal = '#0F7B6C';     // Primary - Teal Profond
  const coral = '#E86A58';    // Secondary - Coral Dynamique

  if (variant === 'icon') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Signal waves - Coral */}
        <path
          d="M32 8 C32 8, 52 20, 52 32 C52 44, 32 56, 32 56"
          stroke={coral}
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M32 14 C32 14, 46 23, 46 32 C46 41, 32 50, 32 50"
          stroke={coral}
          strokeWidth="2"
          fill="none"
          opacity="0.35"
        />
        <path
          d="M32 20 C32 20, 40 26, 40 32 C40 38, 32 44, 32 44"
          stroke={coral}
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
        />
        
        {/* Center circle with n - Teal */}
        <circle cx="26" cy="32" r="16" fill={teal} />
        <text
          x="26"
          y="40"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="20"
          fontWeight="800"
          fill="#FFFFFF"
        >
          n
        </text>
        
        {/* Signal dot - Coral */}
        <circle cx="56" cy="32" r="5" fill={coral} />
      </svg>
    );
  }

  // Full logo
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon with signal waves */}
      <g>
        {/* Signal waves - Coral */}
        <path
          d="M24 4 C24 4, 42 14, 42 24 C42 34, 24 44, 24 44"
          stroke={coral}
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M24 10 C24 10, 36 17, 36 24 C36 31, 24 38, 24 38"
          stroke={coral}
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
        
        {/* Center circle - Teal */}
        <circle cx="18" cy="24" r="12" fill={teal} />
        <text
          x="18"
          y="30"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="14"
          fontWeight="800"
          fill="#FFFFFF"
        >
          n
        </text>
        
        {/* Signal dot - Coral */}
        <circle cx="44" cy="24" r="4" fill={coral} />
      </g>
      
      {/* Text: nSignal */}
      <text x="58" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="28" fontWeight="800" fill={teal}>n</text>
      <text x="78" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="28" fontWeight="700" fill={c.text}>Signal</text>
    </svg>
  );
};

export default NSignalLogo;
