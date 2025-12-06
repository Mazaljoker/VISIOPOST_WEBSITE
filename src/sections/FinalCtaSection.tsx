import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { FinalCtaSectionProps } from '../types';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

/**
 * Section Final CTA - Appel à l'action avec Calendly
 */
const FinalCtaSection = ({ className = '' }: FinalCtaSectionProps) => {
  const reassurances = [
    "Sans engagement",
    "Démo personnalisée",
    "Réponse sous 24h"
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu rounded-3xl p-12 shadow-2xl relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
          >
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10"
          >
            Prêt à libérer le potentiel de votre réseau ?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto relative z-10"
          >
            30 minutes pour vous montrer comment VisioPost transforme 
            votre communication locale.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="ghost"
                size="lg"
                className="bg-white text-visio-violet px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>Réserver ma démo</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm relative z-10"
          >
            {reassurances.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-4 h-4" />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCtaSection;
