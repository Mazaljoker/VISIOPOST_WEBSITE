import { CheckCircle, ArrowRight } from 'lucide-react';
import { StepCardProps } from '../types';

/**
 * Composant StepCard pour les étapes de solution
 * Utilisé 3 fois dans SolutionSection
 *
 * Features:
 * - Numéro large avec gradient
 * - Icône avec fond gradient
 * - Liste de features avec checkmarks
 * - Highlight coloré en bas
 * - Arrow optionnelle à droite (desktop)
 */
const StepCard = ({ number, title, icon, features, highlight, showArrow = false }: StepCardProps) => {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-visio-violet transition-all duration-300">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-visio-violet to-visio-rose flex items-center justify-center mb-6`}>
          {icon}
        </div>

        <div className="mb-4">
          <span className="text-5xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent">
            {number}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>

        <ul className="space-y-3 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 p-3 bg-visio-violet/10 rounded-lg">
          <p className="text-sm font-semibold text-visio-violet">{highlight}</p>
        </div>
      </div>

      {showArrow && (
        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
          <ArrowRight className="w-8 h-8 text-visio-rose" />
        </div>
      )}
    </div>
  );
};

export default StepCard;
