import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button - Charte Graphique nSignal 2025
 * 
 * Variantes:
 * - primary: Teal Profond #0F7B6C
 * - secondary: Coral Dynamique #E86A58
 * - accent: Jaune Signal #DFAB01
 * - outline: Bordure Teal
 * - ghost: Transparent
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-xl
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-nsignal-primary text-white
      hover:bg-nsignal-primary-600
      focus:ring-nsignal-primary
      shadow-nsignal hover:shadow-nsignal-lg
    `,
    secondary: `
      bg-nsignal-secondary text-white
      hover:bg-nsignal-secondary-600
      focus:ring-nsignal-secondary
      shadow-warm
    `,
    accent: `
      bg-nsignal-accent text-nsignal-dark
      hover:bg-nsignal-accent-600
      focus:ring-nsignal-accent
    `,
    outline: `
      bg-transparent border-2 border-nsignal-primary text-nsignal-primary
      hover:bg-nsignal-primary hover:text-white
      focus:ring-nsignal-primary
    `,
    ghost: `
      bg-transparent text-nsignal-dark dark:text-nsignal-light
      hover:bg-nsignal-light-400 dark:hover:bg-nsignal-dark-400
      focus:ring-nsignal-primary
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </motion.button>
  );
};

export default Button;
