import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

/**
 * Feature Card Component
 * Rebrandé pour nReach Studio
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <div className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-light-border dark:border-dark-border shadow-card hover:shadow-nreach transition-all duration-300 h-full">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
        gradient || 'bg-gradient-to-br from-nreach-electric to-nreach-lavande'
      }`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-nreach-midnight dark:text-dark-text mb-2">
        {title}
      </h3>
      <p className="text-light-text-muted dark:text-dark-text-muted text-sm">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
