import { problems } from '../data/problems';
import { ProblemSectionProps } from '../types';

/**
 * Section Problème - Pain points des coopératives
 * Lignes originales : 142-170 (~30 lignes)
 */
const ProblemSection = ({ className = '' }: ProblemSectionProps) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Le Mur Algorithmique : Pourquoi votre réseau est invisible
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 bg-red-50 border-l-4 border-red-500 text-left rounded-lg"
            >
              <p className="text-gray-700 flex items-start space-x-3">
                <span className="text-red-500 text-xl">❌</span>
                <span>{problem}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-visio-violet/5 to-visio-rose/5 rounded-2xl">
          <p className="text-xl font-semibold text-gray-900">
            Résultat : Vous avez une armée d'ambassadeurs, mais leurs armes sont enrayées par les filtres Anti-Spam de Meta et LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
