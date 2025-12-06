import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type Theme = 'light' | 'dark' | 'auto';

const themes: { value: Theme; icon: React.FC<{ className?: string }>; label: string }[] = [
  { value: 'light', icon: Sun, label: 'Clair' },
  { value: 'dark', icon: Moon, label: 'Sombre' },
  { value: 'auto', icon: Monitor, label: 'Auto' },
];

/**
 * ThemeToggle - Bouton de bascule Light/Dark/Auto
 * 
 * Affiche l'icône du thème actuel et cycle entre les 3 options
 */
export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();

  // Cycle vers le thème suivant
  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };

  const currentTheme = themes.find(t => t.value === theme) || themes[2];
  const CurrentIcon = currentTheme.icon;

  return (
    <motion.button
      onClick={cycleTheme}
      className={`relative p-2 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-nreach-electric transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Thème: ${currentTheme.label}`}
      aria-label={`Changer le thème (actuel: ${currentTheme.label})`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          <CurrentIcon className="w-5 h-5 text-nreach-midnight dark:text-dark-text" />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

/**
 * ThemeToggleExpanded - Version avec les 3 boutons visibles
 * 
 * Pour une UI plus explicite (ex: page settings)
 */
export const ThemeToggleExpanded: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`inline-flex rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-1 ${className}`}>
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            theme === value
              ? 'bg-nreach-electric text-nreach-midnight'
              : 'text-light-text-muted dark:text-dark-text-muted hover:text-nreach-midnight dark:hover:text-dark-text'
          }`}
          title={label}
          aria-label={`Thème ${label}`}
        >
          <Icon className="w-4 h-4" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
