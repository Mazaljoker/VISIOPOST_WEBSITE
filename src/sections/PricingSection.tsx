import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Zap, Building2, HelpCircle } from 'lucide-react';
import { pricingPlans, setupConfig, platformOptions } from '../data/pricing';
import Button from '../components/Button';
import { PricingSectionProps } from '../types';

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

interface PlanCardProps {
  title: string;
  price: number | null;
  period: string;
  features: string[];
  cta: string;
  highlight?: string;
  isPopular?: boolean;
  variant: string;
  onOpenRoi?: () => void;
}

const PlanCard = ({ title, price, period, features, cta, highlight, isPopular, variant, onOpenRoi }: PlanCardProps) => {
  const getIcon = () => {
    switch (variant) {
      case 'starter': return <Zap className="w-5 h-5" />;
      case 'pro': return <Star className="w-5 h-5" />;
      case 'centrale': return <Building2 className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getGradient = () => {
    switch (variant) {
      case 'starter': return 'from-blue-500 to-blue-600';
      case 'pro': return 'from-visio-violet to-visio-rose';
      case 'centrale': return 'from-gray-800 to-gray-900';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden flex flex-col ${
        isPopular ? 'border-visio-violet' : 'border-gray-100'
      }`}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-visio-violet to-visio-rose text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
            ⭐ RECOMMANDÉ
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`bg-gradient-to-r ${getGradient()} p-6 text-white`}>
        <div className="flex items-center space-x-2 mb-2">
          {getIcon()}
          {highlight && <span className="text-sm font-medium opacity-90">{highlight}</span>}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline">
          {price !== null ? (
            <>
              <span className="text-4xl font-extrabold">{price}€</span>
              <span className="text-sm ml-2 opacity-80">{period}</span>
            </>
          ) : (
            <span className="text-2xl font-bold">{period}</span>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="p-6 flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant={isPopular ? 'primary' : 'secondary'}
            size="lg"
            className="w-full"
            onClick={variant === 'starter' ? onOpenRoi : undefined}
          >
            <span>{cta}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

/**
 * Section Pricing - 3 plans avec setup et simulateur ROI
 */
const PricingSection = ({ className = '', onOpenRoi }: PricingSectionProps) => {
  return (
    <section id="pricing" className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarification transparente
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des plans adaptés à la taille de votre réseau. Sans surprise.
          </p>
        </motion.div>

        {/* Setup Banner */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-visio-violet/5 to-visio-rose/5 rounded-2xl p-6 border border-visio-violet/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 text-visio-violet font-semibold mb-1">
                  <Zap className="w-4 h-4" />
                  <span>Frais de mise en place (one-shot)</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  À partir de {setupConfig.startingPrice}€
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Devis personnalisé selon la taille de votre réseau
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {setupConfig.includes.slice(0, 3).map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200"
                  >
                    <Check className="w-3 h-3 text-green-500 mr-1" />
                    {item}
                  </span>
                ))}
                <span className="inline-flex items-center px-3 py-1 bg-white rounded-full text-xs text-gray-500 border border-gray-200">
                  +{setupConfig.includes.length - 3} inclus
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingPlans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              cta={plan.cta}
              highlight={plan.highlight}
              isPopular={plan.isPopular}
              variant={plan.variant}
              onOpenRoi={onOpenRoi}
            />
          ))}
        </motion.div>

        {/* Platforms */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Plateformes supportées
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platformOptions.map((platform, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl text-center border-2 transition-all ${
                  platform.included
                    ? 'bg-green-50 border-green-200'
                    : platform.available
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="font-semibold text-gray-900">{platform.name}</div>
                {platform.included ? (
                  <div className="text-xs text-green-600 font-medium mt-1">
                    ✓ Inclus dans tous les plans
                  </div>
                ) : (
                  <>
                    <div className="text-xs text-gray-500 mt-1">+{platform.price}€/mois</div>
                    {platform.badge && (
                      <div className={`text-xs font-medium mt-1 ${
                        platform.available ? 'text-blue-600' : 'text-gray-400'
                      }`}>
                        {platform.badge}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
            <HelpCircle className="w-4 h-4" />
            <span>Tarifs dégressifs selon la taille de votre réseau</span>
          </div>
          <div className="mt-4">
            <button
              onClick={onOpenRoi}
              className="text-visio-violet hover:text-visio-rose font-medium underline underline-offset-4 transition-colors"
            >
              Simuler mon tarif et mon ROI →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
