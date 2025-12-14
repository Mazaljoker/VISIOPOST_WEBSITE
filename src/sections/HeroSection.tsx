import { motion } from 'framer-motion';
import { ArrowRight, Play, Clock, Users, TrendingUp } from 'lucide-react';

/**
 * Hero Section - Vision nSignal
 * Message clé: "Du contenu siège au post local en 40 secondes"
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nsignal-primary/5 via-transparent to-nsignal-secondary/5" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nsignal-primary/10 border border-nsignal-primary/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nsignal-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nsignal-primary"></span>
          </span>
          <span className="text-sm font-medium text-nsignal-primary">
            Le canal de distribution social pour réseaux multi-sites
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-nsignal-dark dark:text-white mb-6 leading-tight"
        >
          Du contenu siège au post local
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nsignal-primary to-nsignal-secondary">
            en 40 secondes
          </span>
        </motion.h1>

        {/* Subheadline - La vraie douleur */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-nsignal-dark/70 dark:text-white/70 mb-8 max-w-3xl mx-auto"
        >
          Vous créez du super contenu au siège, mais{' '}
          <span className="text-nsignal-primary font-semibold">seulement 15% de vos magasins le publient</span>.
          <br className="hidden md:block" />
          nSignal remplace l'email par une app où le franchisé publie en 1 tap.
        </motion.p>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-nsignal-primary" />
            <span className="text-nsignal-dark dark:text-white">
              <span className="font-bold">40 sec</span> vs 30 min
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-nsignal-secondary" />
            <span className="text-nsignal-dark dark:text-white">
              <span className="font-bold">80%</span> du réseau actif
            </span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-nsignal-dark dark:text-white">
              <span className="font-bold">+300%</span> engagement
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://calendly.com/nsignal/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-nsignal-primary text-white font-semibold rounded-xl shadow-lg shadow-nsignal-primary/25 hover:shadow-xl hover:shadow-nsignal-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Voir une démo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-nsignal-dark/20 dark:border-white/20 text-nsignal-dark dark:text-white font-semibold rounded-xl hover:border-nsignal-primary hover:text-nsignal-primary transition-all duration-300">
            <Play className="w-5 h-5" />
            Voir comment ça marche
          </button>
        </motion.div>

        {/* Visual representation of the flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="bg-white dark:bg-nsignal-dark-500 rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto border border-nsignal-light-400 dark:border-nsignal-dark-400">
            {/* Flow visualization */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Siège */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-nsignal-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <p className="font-semibold text-nsignal-dark dark:text-white">Siège</p>
                <p className="text-sm text-nsignal-dark/60 dark:text-white/60">Crée une fois</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-nsignal-primary"
                >
                  <ArrowRight className="w-8 h-8" />
                </motion.div>
              </div>

              {/* nSignal */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-nsignal-primary to-nsignal-secondary flex items-center justify-center shadow-lg">
                  <span className="text-2xl text-white font-bold">n</span>
                </div>
                <p className="font-semibold text-nsignal-dark dark:text-white">nSignal</p>
                <p className="text-sm text-nsignal-dark/60 dark:text-white/60">Distribue à tous</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  className="text-nsignal-secondary"
                >
                  <ArrowRight className="w-8 h-8" />
                </motion.div>
              </div>

              {/* Magasins */}
              <div className="flex-1 text-center">
                <div className="flex justify-center gap-1 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span className="text-xl">🏪</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span className="text-xl">🏪</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span className="text-xl">🏪</span>
                  </div>
                </div>
                <p className="font-semibold text-nsignal-dark dark:text-white">247 magasins</p>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">Publient en 1 tap</p>
              </div>
            </div>

            {/* Timer */}
            <div className="mt-6 pt-6 border-t border-nsignal-light-400 dark:border-nsignal-dark-400 text-center">
              <span className="inline-flex items-center gap-2 text-sm text-nsignal-dark/60 dark:text-white/60">
                <Clock className="w-4 h-4" />
                Temps total : <span className="font-bold text-nsignal-primary">40 secondes</span> par magasin
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
