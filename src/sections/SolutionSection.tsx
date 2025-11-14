import { Sparkles, Users, BarChart3 } from 'lucide-react';
import { solutionSteps } from '../data/solutionSteps';
import StepCard from '../components/StepCard';
import Button from '../components/Button';
import { SolutionSectionProps } from '../types';

/**
 * Section Solution - Comment VisioPost fonctionne en 3 étapes
 * Lignes originales : 173-311 (~140 lignes)
 * Réduit à ~75 lignes via StepCard
 */
const SolutionSection = ({ className = '' }: SolutionSectionProps) => {
  // Map des noms d'icônes vers composants
  const iconMap: Record<string, JSX.Element> = {
    Sparkles: <Sparkles className="w-8 h-8 text-white" />,
    Users: <Users className="w-8 h-8 text-white" />,
    BarChart3: <BarChart3 className="w-8 h-8 text-white" />
  };

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comment VisioPost résout tout ça
          </h2>
          <p className="text-xl text-gray-600">Simple. Rapide. Efficace.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutionSteps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              icon={iconMap[step.icon]}
              features={step.features}
              highlight={step.highlight}
              showArrow={index < solutionSteps.length - 1}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            <Sparkles className="w-6 h-6" />
            <span>Essayer gratuitement</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
