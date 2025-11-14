import { partners } from '../data/socialProof';
import { SocialProofSectionProps } from '../types';

/**
 * Section Social Proof - Logos partenaires
 * Lignes originales : 130-139 (~11 lignes)
 */
const SocialProofSection = ({ className = '' }: SocialProofSectionProps) => {
  return (
    <section className={`py-12 bg-white border-y border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8">Ils nous font confiance</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="text-2xl font-bold text-gray-400">
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
