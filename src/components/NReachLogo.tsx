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

// nReach Studio - Nouvelle charte couleurs 2025
const nsignalColors = {
  primary: '#0F7B6C',    // Teal
  secondary: '#E86A58',  // Coral
  accent: '#DFAB01',     // Yellow
  dark: '#1E2B3A',       // Charcoal
  light: '#F8F5F2',      // Cream
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
      primary: nsignalColors.dark,
      text: nsignalColors.dark,
      muted: '#6B6259',
      ring: nsignalColors.dark,
    },
    dark: {
      primary: '#FFFFFF',
      text: '#FFFFFF',
      muted: '#B8B0A8',
      ring: '#FFFFFF',
    },
  };

  const c = colors[theme];

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
          fill={theme === 'light' ? '#FFFFFF' : nsignalColors.dark}
        >
          n
        </text>

        {/* Network nodes - 4 colors around the n */}
        <circle cx="32" cy="4" r="4" fill={nsignalColors.primary} />    {/* Top - Teal */}
        <circle cx="60" cy="32" r="4" fill={nsignalColors.secondary} /> {/* Right - Coral */}
        <circle cx="32" cy="60" r="4" fill={nsignalColors.accent} />    {/* Bottom - Yellow */}
        <circle cx="4" cy="32" r="4" fill={nsignalColors.dark} />       {/* Left - Charcoal */}

        {/* Diagonal nodes - alternating colors */}
        <circle cx="52" cy="12" r="3" fill={nsignalColors.secondary} opacity="0.7" />
        <circle cx="52" cy="52" r="3" fill={nsignalColors.accent} opacity="0.7" />
        <circle cx="12" cy="52" r="3" fill={nsignalColors.primary} opacity="0.7" />
        <circle cx="12" cy="12" r="3" fill={nsignalColors.dark} opacity="0.7" />
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
          fill={theme === 'light' ? '#FFFFFF' : nsignalColors.dark}
        >
          n
        </text>
        {/* Network nodes - 4 colors */}
        <circle cx="24" cy="2" r="3" fill={nsignalColors.primary} />    {/* Top - Teal */}
        <circle cx="46" cy="24" r="3" fill={nsignalColors.secondary} /> {/* Right - Coral */}
        <circle cx="24" cy="46" r="3" fill={nsignalColors.accent} />    {/* Bottom - Yellow */}
        <circle cx="2" cy="24" r="3" fill={nsignalColors.dark} />       {/* Left - Charcoal */}
      </g>

      {/* Text: nReach Studio */}
      <text x="58" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="26" fontWeight="800" fill={nsignalColors.primary}>n</text>
      <text x="75" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="26" fontWeight="800" fill={c.text}>Reach</text>
      <text x="156" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="22" fontWeight="500" fill={c.muted}>Studio</text>
    </svg>
  );
};

export default NReachLogo;
