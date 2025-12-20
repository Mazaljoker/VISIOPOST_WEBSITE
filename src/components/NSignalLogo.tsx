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

// 5 Couleurs nSignal 2025
const COLORS = {
  teal: '#0F7B6C',
  coral: '#E86A58',
  yellow: '#DFAB01',
  charcoal: '#1E2B3A',
  cream: '#F8F5F2',
} as const;

/**
 * Logo nSignal - Charte Graphique 2025
 * 5 Couleurs en orbite 360° autour du "n" central
 * Dark mode: Charcoal <-> Creme inversees
 */
export const NSignalLogo: React.FC<NSignalLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}) => {
  const { width, height } = sizes[size][variant];

  // Couleurs dynamiques selon theme (inversees)
  const centerBg = theme === 'dark' ? COLORS.cream : COLORS.charcoal;
  const centerText = theme === 'dark' ? COLORS.charcoal : '#FFFFFF';
  const textBrand = theme === 'dark' ? COLORS.cream : COLORS.charcoal;
  // 5eme boule: inverse du centre
  const fifthDot = theme === 'dark' ? COLORS.charcoal : COLORS.cream;

  if (variant === 'icon') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`nsignal-logo nsignal-logo-animated ${className}`}
      >
        {/* Anneau 3 - Externe (Teal) */}
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke={COLORS.teal}
          strokeWidth="1.5"
          fill="none"
          opacity="0.25"
          className="wave wave-3"
        />

        {/* Anneau 2 - Milieu (Coral) */}
        <circle
          cx="32"
          cy="32"
          r="22"
          stroke={COLORS.coral}
          strokeWidth="2"
          fill="none"
          opacity="0.4"
          className="wave wave-2"
        />

        {/* Anneau 1 - Interne (Teal) */}
        <circle
          cx="32"
          cy="32"
          r="16"
          stroke={COLORS.teal}
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
          className="wave wave-1"
        />

        {/* Cercle central avec "n" */}
        <circle cx="32" cy="32" r="10" fill={centerBg} />
        <text
          x="32"
          y="37"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="14"
          fontWeight="800"
          fill={centerText}
        >
          n
        </text>

        {/* 5 Boules en orbite 360° (positions a 72° d'intervalle, rayon 22) */}
        {/* Boule 1 - Droite (0°) - Coral */}
        <circle cx="54" cy="32" r="5" fill={COLORS.coral} className="dot dot-1" />

        {/* Boule 2 - Haut-droite (72°) - Teal */}
        <circle cx="39" cy="11" r="4.5" fill={COLORS.teal} className="dot dot-2" />

        {/* Boule 3 - Haut-gauche (144°) - Jaune */}
        <circle cx="14" cy="18" r="4" fill={COLORS.yellow} className="dot dot-3" />

        {/* Boule 4 - Bas-gauche (216°) - Teal */}
        <circle cx="14" cy="46" r="4" fill={COLORS.teal} className="dot dot-4" />

        {/* Boule 5 - Bas-droite (288°) - Creme/Charcoal */}
        <circle cx="39" cy="53" r="4.5" fill={fifthDot} className="dot dot-5" />
      </svg>
    );
  }

  // Full logo avec texte
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`nsignal-logo nsignal-logo-animated ${className}`}
    >
      {/* Icon reduit et centre */}
      <g transform="translate(0, 0)">
        {/* Anneau 3 - Externe (Teal) */}
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke={COLORS.teal}
          strokeWidth="1"
          fill="none"
          opacity="0.25"
          className="wave wave-3"
        />

        {/* Anneau 2 - Milieu (Coral) */}
        <circle
          cx="24"
          cy="24"
          r="16"
          stroke={COLORS.coral}
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
          className="wave wave-2"
        />

        {/* Anneau 1 - Interne (Teal) */}
        <circle
          cx="24"
          cy="24"
          r="11"
          stroke={COLORS.teal}
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          className="wave wave-1"
        />

        {/* Cercle central avec "n" */}
        <circle cx="24" cy="24" r="7" fill={centerBg} />
        <text
          x="24"
          y="28"
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="10"
          fontWeight="800"
          fill={centerText}
        >
          n
        </text>

        {/* 5 Boules en orbite (rayon 16) */}
        <circle cx="40" cy="24" r="3.5" fill={COLORS.coral} className="dot dot-1" />
        <circle cx="29" cy="9" r="3" fill={COLORS.teal} className="dot dot-2" />
        <circle cx="11" cy="14" r="2.5" fill={COLORS.yellow} className="dot dot-3" />
        <circle cx="11" cy="34" r="2.5" fill={COLORS.teal} className="dot dot-4" />
        <circle cx="29" cy="39" r="3" fill={fifthDot} className="dot dot-5" />
      </g>

      {/* Texte: nSignal */}
      <text x="54" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="28" fontWeight="800" fill={COLORS.teal}>n</text>
      <text x="74" y="32" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="28" fontWeight="700" fill={textBrand}>Signal</text>
    </svg>
  );
};

export default NSignalLogo;
