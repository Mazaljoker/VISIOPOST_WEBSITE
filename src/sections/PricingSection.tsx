import { centralePlan, adherentPlans } from '../data/pricing';
import PricingCard from '../components/PricingCard';
import { PricingSectionProps } from '../types';

/**
 * Section Pricing - Tarification centrale + 3 plans adhérents
 * Lignes originales : 437-589 (~154 lignes)
 * Réduit à ~65 lignes via PricingCard
 */
const PricingSection = ({ className = '' }: PricingSectionProps) => {
  return (
    <section id="pricing" className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarification Simple
          </h2>
          <p className="text-xl text-gray-600">Transparent. Équitable. Sans surprise.</p>
        </div>

        {/* Centrale Pricing */}
        <div className="max-w-2xl mx-auto mb-16">
          <PricingCard
            title={centralePlan.title}
            price={centralePlan.price}
            period={centralePlan.period}
            features={centralePlan.features}
            cta={centralePlan.cta}
            variant={centralePlan.variant}
            highlight={centralePlan.highlight}
          />
        </div>

        {/* Adhérents Pricing */}
        <div className="grid md:grid-cols-3 gap-8">
          {adherentPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              cta={plan.cta}
              variant={plan.variant}
              isPopular={plan.isPopular}
              highlight={plan.highlight}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            💡 <span className="font-semibold">Pas de carte bancaire</span> pour essayer gratuitement
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
