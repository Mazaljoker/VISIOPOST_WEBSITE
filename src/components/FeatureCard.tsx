import { FeatureCardProps } from '../types';

/**
 * Composant FeatureCard pour la grille de fonctionnalités
 * Utilisé 6 fois dans FeaturesSection
 *
 * Features:
 * - Icône avec gradient coloré
 * - Effet hover (scale + shadow)
 * - Border subtile
 */
const FeatureCard = ({ icon, title, description, gradient }: FeatureCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
