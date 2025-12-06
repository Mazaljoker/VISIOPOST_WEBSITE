import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import { platformOptions } from '../data/pricing';

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

/**
 * Section Multi-Plateforme - Facebook + à venir
 */
const MultiPlatformSection = ({ className = '' }: { className?: string }) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Facebook. Et bientôt tout le reste.
          </h2>
          <p className="text-xl text-gray-600">
            Nous lançons avec Facebook, là où le problème duplicate est le plus critique.
            Instagram, TikTok et LinkedIn arrivent.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {platformOptions.map((platform, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-xl text-center border-2 transition-all ${
                platform.included
                  ? 'bg-gradient-to-br from-visio-violet/5 to-visio-rose/5 border-visio-violet'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {platform.name}
              </div>
              
              {platform.included ? (
                <div className="flex items-center justify-center text-green-600 font-medium">
                  <Check className="w-5 h-5 mr-1" />
                  Disponible
                </div>
              ) : (
                <div className="flex items-center justify-center text-blue-600 font-medium">
                  <Clock className="w-4 h-4 mr-1" />
                  {platform.badge}
                </div>
              )}

              {!platform.included && (
                <div className="text-sm text-gray-500 mt-2">
                  +{platform.price}€/mois
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MultiPlatformSection;
