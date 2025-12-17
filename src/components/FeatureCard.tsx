import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

/**
 * FeatureCard - Charte Graphique nSignal 2025
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradient = 'bg-gradient-to-br from-nsignal-primary to-nsignal-secondary'
}) => {
  return (
    <div className="bg-white dark:bg-nsignal-dark-500 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-nsignal-light-400 dark:border-nsignal-dark-400 h-full">
      {/* Icon */}
      <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center mb-4 text-white`}>
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-nsignal-dark dark:text-nsignal-light mb-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-nsignal-light-700 dark:text-nsignal-light-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
