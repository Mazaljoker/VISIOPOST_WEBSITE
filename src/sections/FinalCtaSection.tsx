import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
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

const pulseGlow = {
  initial: { boxShadow: '0 0 0 0 rgba(139, 92, 246, 0)' },
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(139, 92, 246, 0.4)',
      '0 0 0 20px rgba(139, 92, 246, 0)',
      '0 0 0 0 rgba(139, 92, 246, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

/**
 * Section Final CTA - Appel à l'action B2B spectaculaire
 * Animation d'entrée scale + glow pulsant
 */
const FinalCtaSection = ({ className = '', onOpenRoi }: FinalCtaSectionProps) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <motion.div
        className="max-w-5xl mx-auto text-center"
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
          {/* Background particles effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
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
            className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10"
          >
            Prêt à industrialiser votre présence locale ?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto relative z-10"
          >
            Ne laissez plus vos 50 points de vente invisibles.
            Lancez un pilote sur 20 magasins en moins de 15 jours.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              variants={pulseGlow}
              initial="initial"
              animate="animate"
            >
              <Button
                variant="ghost"
                size="lg"
                className="bg-white text-visio-violet px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Parler à un Expert Réseau</span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenRoi}
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                <span>Simuler le ROI</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm relative z-10"
          >
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ShieldCheck className="w-5 h-5" />
              </motion.div>
              <span>Conformité RGPD validée</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span>Setup Pilot offert (offre limitée)</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCtaSection;
