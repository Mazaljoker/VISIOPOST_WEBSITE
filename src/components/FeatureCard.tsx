import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

/**
 * Feature Card Component
 * Rebrandé pour nSignal 2025
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <div className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-light-border dark:border-dark-border shadow-card hover:shadow-nsignal transition-all duration-300 h-full">
      {/* Icon Container */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
          gradient || 'bg-gradient-to-br from-nsignal-primary to-nsignal-secondary'
        }`}
      >
        {/* Clone icon with white color */}
        {React.isValidElement(icon)
          ? React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7 text-white' })
          : icon
        }
      </div>
      <h3 className="text-lg font-bold text-nsignal-dark dark:text-dark-text mb-2">
        {title}
      </h3>
      <p className="text-light-text-muted dark:text-dark-text-muted text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
