import React from 'react';

interface NReachLogoProps {
  variant?: 'full' | 'icon';
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { full: { width: 160, height: 32 }, icon: { width: 32, height: 32 } },
  md: { full: { width: 220, height: 44 }, icon: { width: 48, height: 48 } },
  lg: { full: { width: 280, height: 56 }, icon: { width: 64, height: 64 } },
};

export const NReachLogo: React.FC<NReachLogoProps> = ({
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
        {/* Outer rings */}
        <circle cx="32" cy="32" r="28" stroke={c.ring} strokeWidth="2" fill="none" opacity="0.15" />
        <circle cx="32" cy="32" r="21" stroke={c.ring} strokeWidth="2" fill="none" opacity="0.25" />
        
        {/* Center circle with n */}
        <circle cx="32" cy="32" r="14" fill={c.primary} />
        <text
          x="32"
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
        
        {/* Diagonal nodes */}
        <circle cx="52" cy="12" r="3" fill={electric} opacity="0.6" />
        <circle cx="52" cy="52" r="3" fill={electric} opacity="0.6" />
        <circle cx="12" cy="52" r="3" fill={electric} opacity="0.6" />
        <circle cx="12" cy="12" r="3" fill={electric} opacity="0.6" />
      </svg>
    );
  }

  // Full logo
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon */}
      <g>
        <circle cx="24" cy="24" r="22" stroke={c.ring} strokeWidth="1.5" fill="none" opacity="0.15" />
        <circle cx="24" cy="24" r="16" stroke={c.ring} strokeWidth="1.5" fill="none" opacity="0.25" />
        <circle cx="24" cy="24" r="11" fill={c.primary} />
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="14"
          fontWeight="800"
          fill={theme === 'light' ? '#FFFFFF' : '#0F1219'}
        >
          n
        </text>
        <circle cx="24" cy="2" r="3" fill={electric} />
        <circle cx="46" cy="24" r="3" fill={electric} />
        <circle cx="24" cy="46" r="3" fill={electric} />
        <circle cx="2" cy="24" r="3" fill={electric} />
      </g>
      
      {/* Text */}
      <text x="58" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="26" fontWeight="800" fill={electric}>n</text>
      <text x="75" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="26" fontWeight="800" fill={c.text}>Reach</text>
      <text x="156" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="22" fontWeight="500" fill={c.muted}>Studio</text>
    </svg>
  );
};

export default NReachLogo;
