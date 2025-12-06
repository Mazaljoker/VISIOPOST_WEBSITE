import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { mainPlan, platformOptions, pricingInfo } from '../data/pricing';
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
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

/**
 * Section Pricing - Nouveau modèle V3.1.1
 * Setup + 30€/user + plateformes optionnelles
 */
const PricingSection = ({ className = '' }: PricingSectionProps) => {
  return (
    <section id="pricing" className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarification claire. ROI immédiat.
          </h2>
          <p className="text-xl text-gray-600">
            Transparent. Équitable. Sans surprise.
          </p>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-visio-violet to-visio-rose p-8 text-white text-center">
            <div className="text-sm font-bold uppercase tracking-wide opacity-90 mb-2">
              {mainPlan.highlight}
            </div>
            <div className="flex items-baseline justify-center">
              <span className="text-6xl font-bold">{mainPlan.price}€</span>
              <span className="text-xl ml-2 opacity-90">{mainPlan.period}</span>
            </div>
            <div className="mt-4 text-sm opacity-80">
              {pricingInfo.setupNote}
            </div>
          </div>

          {/* Features */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {mainPlan.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Platforms */}
            <div className="border-t pt-6 mb-8">
              <div className="text-sm font-semibold text-gray-500 uppercase mb-4">Plateformes</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {platformOptions.map((platform, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-center ${
                      platform.included
                        ? 'bg-green-50 border border-green-200'
                        : platform.available
                        ? 'bg-blue-50 border border-blue-200'
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className="font-semibold text-gray-900">{platform.name}</div>
                    {platform.included ? (
                      <div className="text-xs text-green-600 font-medium">✓ Inclus</div>
                    ) : (
                      <>
                        <div className="text-xs text-gray-500">+{platform.price}€/mois</div>
                        {platform.badge && (
                          <div className="text-xs text-blue-600 font-medium mt-1">{platform.badge}</div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="primary" size="lg" className="w-full md:w-auto">
                  <span>{mainPlan.cta}</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
              <p className="text-sm text-gray-500 mt-4">
                {pricingInfo.volumeNote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
