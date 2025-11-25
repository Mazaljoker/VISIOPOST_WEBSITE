import { CheckCircle } from 'lucide-react';
import { PricingCardProps } from '../types';
import Button from './Button';

/**
 * Composant PricingCard pour les plans tarifaires
 * Utilisé 4 fois : 1 centrale + 3 adhérents (FREE, STARTER, PRO)
 *
 * Features:
 * - Badge "populaire" optionnel
 * - Gradient pour centrale et STARTER
 * - Prix grand format
 * - Liste features avec checkmarks colorés
 * - CTA adapté au variant
 */
const PricingCard = ({
  title,
  price,
  period = '/mois',
  features,
  cta,
  isPopular = false,
  variant = 'free',
  highlight,
  onClick
}: PricingCardProps) => {
  const isCentrale = variant === 'centrale';
  const isStarter = variant === 'starter';

  // Styles conditionnels selon le variant
  const cardClasses = isCentrale
    ? "bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu p-1 rounded-3xl"
    : isStarter
    ? "relative bg-white rounded-2xl shadow-2xl p-8 border-2 border-visio-rose transform scale-105"
    : "bg-white rounded-2xl shadow-xl p-8 border border-gray-200";

  const checkColor = variant === 'free' ? 'text-gray-400' : variant === 'starter' ? 'text-visio-rose' : variant === 'pro' ? 'text-visio-bleu' : 'text-green-500';

  const priceClasses = isCentrale
    ? "text-6xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent"
    : isStarter
    ? "text-5xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent"
    : "text-5xl font-bold text-gray-900";

  return (
    <div className={cardClasses}>
      {isCentrale ? (
        <div className="bg-white rounded-3xl p-10 text-center">
          {highlight && (
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-visio-violet/10 to-visio-rose/10 rounded-full mb-6">
              <span className="text-visio-violet font-semibold">{highlight}</span>
            </div>
          )}
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="mb-8">
            <span className={priceClasses}>{price}€</span>
            <span className="text-2xl text-gray-600">{period}</span>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Gratuit si ≥10 adhérents payants
          </p>
          <ul className="space-y-4 text-left mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className={`w-6 h-6 ${checkColor} flex-shrink-0`} />
                <span className="text-gray-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <Button variant="primary" size="lg" className="w-full" onClick={onClick}>
            {cta}
          </Button>
        </div>
      ) : (
        <>
          {isPopular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-visio-rose to-visio-bleu text-white px-6 py-2 rounded-full text-sm font-semibold">
                {highlight}
              </span>
            </div>
          )}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="mb-6">
            <span className={priceClasses}>{price}€</span>
            <span className="text-gray-600">{period}</span>
          </div>
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className={`w-5 h-5 ${checkColor}`} />
                <span className={variant === 'starter' ? "text-gray-700 font-medium" : "text-gray-600"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <Button
            variant={isStarter ? 'primary' : variant === 'pro' ? 'secondary' : 'ghost'}
            size="md"
            className="w-full"
            onClick={onClick}
          >
            {cta}
          </Button>
        </>
      )}
    </div>
  );
};

export default PricingCard;
