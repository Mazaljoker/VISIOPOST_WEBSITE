import { motion } from 'framer-motion';
import { X, Check, TrendingDown, TrendingUp, Copy, Sparkles, MapPin } from 'lucide-react';

const beforeItems = [
  'Même texte sur toutes les pages',
  'Aucune personnalisation locale',
  'Pénalité algorithme détectée',
];

const afterItems = [
  'Texte unique par point de vente',
  'Variables {{ville}}, {{région}} intégrées',
  'Algorithme récompense le contenu original',
];

/**
 * Section Before/After - Comparaison visuelle compact
 * Rebrandé pour nReach Studio
 */
const BeforeAfterSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nsignal-dark dark:text-dark-text mb-3">
            La différence en action
          </h2>
          <p className="text-light-text-muted dark:text-dark-text-muted">
            Comparez l'impact sur votre portée organique
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* BEFORE Card */}
          <motion.div
            className="bg-white dark:bg-dark-surface rounded-2xl border-2 border-red-200 dark:border-red-900/50 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-200 dark:border-red-900/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Copy className="w-5 h-5 text-red-500" />
                  <span className="font-bold text-red-600 dark:text-red-400">AVANT</span>
                </div>
                <div className="flex items-center gap-1 text-red-500">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm font-bold">-80%</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Fake Post Preview */}
              <div className="bg-light-surface dark:bg-dark-bg rounded-lg p-4 mb-4 border border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-muted dark:text-dark-text-muted italic">
                  "Découvrez notre nouvelle collection printemps !"
                </p>
                <div className="mt-2 text-xs text-red-500 flex items-center gap-1">
                  <X className="w-3 h-3" />
                  Identique sur 100 pages
                </div>
              </div>

              {/* Problems List */}
              <ul className="space-y-2">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-light-text-muted dark:text-dark-text-muted">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* AFTER Card */}
          <motion.div
            className="bg-white dark:bg-dark-surface rounded-2xl border-2 border-nsignal-primary overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="bg-nsignal-primary/10 px-6 py-4 border-b border-nsignal-primary/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-nsignal-primary" />
                  <span className="font-bold text-nsignal-primary">AVEC NREACH</span>
                </div>
                <div className="flex items-center gap-1 text-nsignal-primary">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-bold">+340%</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Fake Post Preview */}
              <div className="bg-light-surface dark:bg-dark-bg rounded-lg p-4 mb-4 border border-nsignal-primary/30">
                <div className="flex items-center gap-1 text-nsignal-primary text-xs mb-1">
                  <MapPin className="w-3 h-3" />
                  Lyon
                </div>
                <p className="text-sm text-nsignal-dark dark:text-dark-text">
                  "Ici à Lyon, on craque pour la nouvelle collection !"
                </p>
                <div className="mt-2 text-xs text-nsignal-primary flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  100% unique
                </div>
              </div>

              {/* Benefits List */}
              <ul className="space-y-2">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-light-text-muted dark:text-dark-text-muted">
                    <Check className="w-4 h-4 text-nsignal-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          className="mt-8 bg-white dark:bg-dark-surface rounded-xl p-4 border border-light-border dark:border-dark-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-light-text-muted dark:text-dark-text-muted">Portée organique comparée</span>
          </div>
          <div className="flex h-4 rounded-full overflow-hidden bg-light-surface dark:bg-dark-bg">
            <div className="w-[15%] bg-red-500 flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">-80%</span>
            </div>
            <div className="flex-1 bg-gradient-to-r from-nsignal-primary to-nsignal-secondary flex items-center justify-center">
              <span className="text-[10px] text-nsignal-dark font-bold">+340% avec nReach Studio</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
