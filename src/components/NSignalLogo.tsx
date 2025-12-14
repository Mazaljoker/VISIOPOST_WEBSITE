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

export const NSignalLogo: React.FC<NSignalLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}) => {
  const { width, height } = sizes[size][variant];
  
  const colors = {
    light: {
      primary: '#1A1F3D',
      text: '#1A1F3D',
      muted: '#6B7280',
      ring: '#1A1F3D',
    },
    dark: {
      primary: '#FFFFFF',
      text: '#FFFFFF',
      muted: '#9CA3AF',
      ring: '#FFFFFF',
    },
  };
  
  const c = colors[theme];
  const electric = '#00D4AA';

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
        {/* Signal waves */}
        <path
          d="M32 8 C32 8, 52 20, 52 32 C52 44, 32 56, 32 56"
          stroke={c.ring}
          strokeWidth="2"
          fill="none"
          opacity="0.15"
        />
        <path
          d="M32 14 C32 14, 46 23, 46 32 C46 41, 32 50, 32 50"
          stroke={c.ring}
          strokeWidth="2"
          fill="none"
          opacity="0.25"
        />
        <path
          d="M32 20 C32 20, 40 26, 40 32 C40 38, 32 44, 32 44"
          stroke={c.ring}
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        
        {/* Center circle with n */}
        <circle cx="28" cy="32" r="14" fill={c.primary} />
        <text
          x="28"
          y="39"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="18"
          fontWeight="800"
          fill={theme === 'light' ? '#FFFFFF' : '#0F1219'}
        >
          n
        </text>
        
        {/* Network nodes */}
        <circle cx="32" cy="4" r="4" fill={electric} />
        <circle cx="60" cy="32" r="4" fill={electric} />
        <circle cx="32" cy="60" r="4" fill={electric} />
        <circle cx="4" cy="32" r="4" fill={electric} />
        
        {/* Diagonal signal dots */}
        <circle cx="54" cy="14" r="3" fill={electric} opacity="0.6" />
        <circle cx="54" cy="50" r="3" fill={electric} opacity="0.6" />
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
        {/* Signal waves */}
        <path
          d="M24 4 C24 4, 42 14, 42 24 C42 34, 24 44, 24 44"
          stroke={c.ring}
          strokeWidth="1.5"
          fill="none"
          opacity="0.15"
        />
        <path
          d="M24 10 C24 10, 36 17, 36 24 C36 31, 24 38, 24 38"
          stroke={c.ring}
          strokeWidth="1.5"
          fill="none"
          opacity="0.25"
        />
        
        {/* Center circle */}
        <circle cx="20" cy="24" r="11" fill={c.primary} />
        <text
          x="20"
          y="30"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="14"
          fontWeight="800"
          fill={theme === 'light' ? '#FFFFFF' : '#0F1219'}
        >
          n
        </text>
        
        {/* Network nodes */}
        <circle cx="24" cy="2" r="3" fill={electric} />
        <circle cx="46" cy="24" r="3" fill={electric} />
        <circle cx="24" cy="46" r="3" fill={electric} />
        <circle cx="2" cy="24" r="3" fill={electric} />
      </g>
      
      {/* Text: nSignal */}
      <text x="58" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="28" fontWeight="800" fill={electric}>n</text>
      <text x="78" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="28" fontWeight="800" fill={c.text}>Signal</text>
    </svg>
  );
};

export default NSignalLogo;
