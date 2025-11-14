import {
  Sparkles,
  Users,
  BarChart3,
  Calendar,
  CheckCircle,
  Zap
} from 'lucide-react';
import { features } from '../data/features';
import FeatureCard from '../components/FeatureCard';
import { FeaturesSectionProps } from '../types';

/**
 * Section Features - Grille des 6 fonctionnalités principales
 * Lignes originales : 314-372 (~60 lignes)
 */
const FeaturesSection = ({ className = '' }: FeaturesSectionProps) => {
  // Map des noms d'icônes vers composants
  const iconMap: Record<string, JSX.Element> = {
    Sparkles: <Sparkles className="w-8 h-8" />,
    Users: <Users className="w-8 h-8" />,
    BarChart3: <BarChart3 className="w-8 h-8" />,
    Calendar: <Calendar className="w-8 h-8" />,
    CheckCircle: <CheckCircle className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />
  };

  return (
    <section id="features" className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-600">Une plateforme complète pour vos coopératives</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={iconMap[feature.icon]}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
