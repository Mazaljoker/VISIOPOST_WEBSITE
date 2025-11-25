import { motion } from 'framer-motion';
import { centralePlan, adherentPlans } from '../data/pricing';
import PricingCard from '../components/PricingCard';
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

// Individual card variants with rewind
const pricingCardVariants = {
  hidden: { opacity: 0, y: 70, scale: 0.9 },
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

const centralCardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 50 },
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
 * Section Pricing - Tarification B2B avec animations pop
 */
const PricingSection = ({ className = '', onOpenRoi }: PricingSectionProps) => {
  return (
    <section id="pricing" className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Title - appears once */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarification Simple
          </h2>
          <p className="text-xl text-gray-600">Transparent. Équitable. Sans surprise.</p>
        </motion.div>

        {/* Centrale Pricing - with rewind */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-50px" }}
          variants={centralCardVariants}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
        >
          <PricingCard
            title={centralePlan.title}
            price={centralePlan.price}
            period={centralePlan.period}
            features={centralePlan.features}
            cta={centralePlan.cta}
            variant={centralePlan.variant}
            highlight={centralePlan.highlight}
          />
        </motion.div>

        {/* Adhérents Pricing - each card with individual rewind */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {adherentPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3, margin: "-30px" }}
              variants={pricingCardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                cta={plan.cta}
                variant={plan.variant}
                isPopular={plan.isPopular}
                highlight={plan.highlight}
                onClick={plan.variant === 'starter' ? onOpenRoi : undefined}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer text - with rewind */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-gray-600">
            <span className="font-semibold">Tarif dégressif</span> selon la taille du réseau
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
