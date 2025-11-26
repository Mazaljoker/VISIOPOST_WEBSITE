import { ShieldCheck, Play, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { HeroSectionProps } from '../types';

// Variants pour animations hero spectaculaires
const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

const heroTitle = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut' as const,
    },
  },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

const pulseGlow = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={heroItem}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-visio-violet/10 to-visio-rose/10 rounded-full"
            >
              <span className="text-visio-violet font-semibold text-sm flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ShieldCheck className="w-4 h-4" />
                </motion.div>
                Infrastructure Certifiée Brand Safety
              </span>
            </motion.div>

            <motion.h1
              variants={heroTitle}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Transformez votre Réseau en{' '}
              <motion.span
                className="bg-gradient-to-r from-visio-violet via-visio-rose to-visio-bleu bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ backgroundSize: '200% 100%' }}
              >
                Média Décentralisé
              </motion.span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              <span className="block mb-2 font-semibold text-gray-800">
                Le problème : Vos 500 pages locales sont muettes ou désordonnées.
              </span>
              Diffusez automatiquement vos campagnes nationales sur l'ensemble de vos points de vente.
              Chaque magasin publie une version unique et locale, sans double effort ni risque d'erreur.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="primary" size="lg" className="group">
                  <span>Demander une Démo Réseau</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center"
              >
                <Button variant="secondary" size="lg" className="group w-full">
                  <Play className="w-5 h-5" />
                  <span>Voir le concept (2min)</span>
                </Button>
                <span className="text-xs text-gray-400 mt-2">Pas d'inscription requise</span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
            >
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Compatible Facebook & LinkedIn</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Conforme RGPD / Brand Safety</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glow effect animé */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-visio-violet/20 via-visio-rose/20 to-visio-bleu/20 rounded-3xl blur-3xl"
              variants={pulseGlow}
              initial="initial"
              animate="animate"
            />

            {/* Video de présentation paysage */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
              variants={floatAnimation}
              initial="initial"
              animate="animate"
            >
              {/* Header avec titre style interface */}
              <motion.div
                className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-sm font-bold text-gray-500">PRÉSENTATION VISIOPOST</div>
                <motion.div
                  className="text-visio-violet text-sm font-bold bg-visio-violet/10 px-2 py-1 rounded"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring', stiffness: 300 }}
                >
                  2 MIN
                </motion.div>
              </motion.div>

              {/* Container vidéo 16:9 */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                {/* Placeholder vidéo - remplacer par iframe ou video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: 'spring', stiffness: 300 }}
                  >
                    <Play className="w-8 h-8 text-visio-violet ml-1 group-hover:scale-110 transition" />
                  </motion.button>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                {/* Texte overlay bas */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="text-white/90 text-sm font-medium">
                    Découvrez comment VisioPost transforme votre communication réseau
                  </div>
                </motion.div>
              </div>

              {/* Footer avec stats */}
              <motion.div
                className="px-6 py-4 bg-gray-50 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Sans inscription • Résultat immédiat</span>
                  <motion.span
                    className="font-bold text-visio-violet"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    +450% Visibilité
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
