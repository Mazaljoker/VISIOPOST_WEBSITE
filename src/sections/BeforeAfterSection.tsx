import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { BeforeAfterSectionProps } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const slideFromLeft = {
  hidden: { opacity: 0, x: -100, rotateY: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100, rotateY: 15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

/**
 * Section Avant/Après - Comparaison spectaculaire
 * Animation slide depuis les côtés pour effet "versus"
 */
const BeforeAfterSection = ({ className = '' }: BeforeAfterSectionProps) => {
  const avant = [
    "Contenu Dupliqué (Pénalisé)",
    "Portée Organique proche de 0",
    "Risque d'image (Amateurisme)",
    "Réseau passif et silencieux",
    "Aucune Data centralisée"
  ];

  const apres = [
    "Contenu 100% Unique & Local",
    "Reach Maximisé (Boost Algo)",
    "Image de Marque Contrôlée",
    "Réseau Activé & Puissant",
    "Pilotage par la Data"
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden ${className}`}>
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Avant VisioPost vs Après
          </h2>
          <p className="text-xl text-gray-600">La différence est spectaculaire</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Avant */}
          <motion.div
            variants={slideFromLeft}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 25px 50px -12px rgba(239, 68, 68, 0.25)',
              transition: { duration: 0.3 },
            }}
            className="bg-red-50 rounded-2xl shadow-xl p-8 border-2 border-red-200"
          >
            <div className="text-center mb-6">
              <motion.span
                className="text-4xl inline-block"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ❌
              </motion.span>
              <h3 className="text-2xl font-bold text-red-700 mt-4">AVANT</h3>
            </div>

            <motion.ul
              className="space-y-4"
              variants={containerVariants}
            >
              {avant.map((item, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  className="flex items-center space-x-3 text-red-700"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-red-500 rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  />
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Après */}
          <motion.div
            variants={slideFromRight}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.25)',
              transition: { duration: 0.3 },
            }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8 border-2 border-green-200"
          >
            <div className="text-center mb-6">
              <motion.span
                className="text-4xl inline-block"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
              >
                ✅
              </motion.span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent mt-4">
                APRÈS
              </h3>
            </div>

            <motion.ul
              className="space-y-4"
              variants={containerVariants}
            >
              {apres.map((item, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  className="flex items-center space-x-3 text-green-700"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.7, type: 'spring' }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </motion.div>
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BeforeAfterSection;
