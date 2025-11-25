import { motion } from 'framer-motion';
import { problems } from '../data/problems';
import { ProblemSectionProps } from '../types';

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
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const conclusionVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

/**
 * Section Problème - Le Mur Algorithmique
 * Animations en cascade pour impact visuel
 */
const ProblemSection = ({ className = '' }: ProblemSectionProps) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={titleVariants}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Le Mur Algorithmique : Pourquoi votre réseau est invisible
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-12"
          variants={containerVariants}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                x: 5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              className="p-6 bg-red-50 border-l-4 border-red-500 text-left rounded-lg cursor-default"
            >
              <p className="text-gray-700 flex items-start space-x-3">
                <motion.span
                  className="text-red-500 text-xl"
                  animate={{
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.5,
                  }}
                >
                  ❌
                </motion.span>
                <span>{problem}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={conclusionVariants}
          className="mt-12 p-8 bg-gradient-to-r from-visio-violet/5 to-visio-rose/5 rounded-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-xl font-semibold text-gray-900">
            Résultat : Vous avez une armée d'ambassadeurs, mais leurs armes sont enrayées par les filtres Anti-Spam de Meta et LinkedIn.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
