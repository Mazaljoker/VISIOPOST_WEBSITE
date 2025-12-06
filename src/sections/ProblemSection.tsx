import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { problems, problemStat } from '../data/problems';
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

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

/**
 * Section Problème - Le duplicate content et ses conséquences
 */
const ProblemSection = ({ className = '' }: ProblemSectionProps) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 ${className}`}>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={titleVariants}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Le problème que personne ne vous dit
        </motion.h2>
        
        <motion.p
          variants={titleVariants}
          className="text-xl text-gray-600 mb-12"
        >
          Ce qui se passe vraiment quand votre réseau publie
        </motion.p>

        <motion.div
          className="space-y-4 mt-8 text-left"
          variants={containerVariants}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                x: 5,
                transition: { duration: 0.2 },
              }}
              className="p-6 bg-white border-l-4 border-red-500 rounded-lg shadow-sm"
            >
              <p className="text-gray-700 flex items-start space-x-3">
                <motion.span
                  className="text-red-500 text-xl flex-shrink-0"
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
                <span className="text-lg">{problem}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={statVariants}
          className="mt-16 p-8 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl text-white"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="w-12 h-12" />
            <div className="text-left">
              <div className="text-5xl font-bold">{problemStat.value}</div>
              <div className="text-xl opacity-90">{problemStat.label}</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
