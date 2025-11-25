import { motion } from 'framer-motion';
import { centralePlan, adherentPlans } from '../data/pricing';
import PricingCard from '../components/PricingCard';
import { PricingSectionProps } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

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
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const centralCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
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
const PricingSection = ({ className = '' }: PricingSectionProps) => {
  return (
    <section id="pricing" className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarification Simple
          </h2>
          <p className="text-xl text-gray-600">Transparent. Équitable. Sans surprise.</p>
        </motion.div>

        {/* Centrale Pricing */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
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

        {/* Adhérents Pricing */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {adherentPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
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
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600">
            💡 <span className="font-semibold">Tarif dégressif</span> selon la taille du réseau
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
