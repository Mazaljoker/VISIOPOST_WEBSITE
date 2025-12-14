import { motion } from 'framer-motion';
import { Zap, Hand, Camera, CheckCircle, ArrowRight } from 'lucide-react';

/**
 * Solution Section - Les 3 Modes nSignal
 * nSignal = Canal de Distribution (pas un outil de création)
 */
const SolutionSection = () => {
  const modes = [
    {
      id: 'auto',
      icon: Zap,
      emoji: '🤖',
      name: 'Playlist Automatique',
      subtitle: 'Netflix pour posts sociaux',
      description: 'Le siège publie automatiquement sur toutes les pages locales, avec des variations uniques générées par IA.',
      friction: 'ZÉRO',
      frictionColor: 'text-green-500',
      useCases: ['Annonces produits', 'Promos nationales', 'Communications urgentes'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
    },
    {
      id: 'suggest',
      icon: Hand,
      emoji: '👆',
      name: 'Playlist Suggérée',
      subtitle: 'Tinder pour posts sociaux',
      description: 'Le franchisé reçoit une notif, voit le post prêt à publier, et valide en 1 tap. Peut modifier si besoin.',
      friction: '1 TAP',
      frictionColor: 'text-nsignal-primary',
      useCases: ['Contenu hebdomadaire', 'Réseaux autonomes', 'Coopératives'],
      color: 'from-nsignal-primary to-blue-600',
      bgColor: 'bg-nsignal-primary/5',
      borderColor: 'border-nsignal-primary/20',
    },
    {
      id: 'participatif',
      icon: Camera,
      emoji: '🎯',
      name: 'Push Participatif',
      subtitle: 'UGC encadré',
      description: 'Le franchisé complète un template avec sa photo ou son message local. Authenticité + cadre de marque.',
      friction: 'CONTRIBUTION',
      frictionColor: 'text-nsignal-secondary',
      useCases: ['Photos équipe', 'Événements locaux', 'UGC authentique'],
      color: 'from-nsignal-secondary to-purple-600',
      bgColor: 'bg-nsignal-secondary/5',
      borderColor: 'border-nsignal-secondary/20',
    },
  ];

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-nsignal-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-nsignal-primary/10 text-nsignal-primary text-sm font-medium mb-4">
            La solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nsignal-dark dark:text-white mb-6">
            nSignal remplace l'email
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nsignal-primary to-nsignal-secondary">
              par une app mobile
            </span>
          </h2>
          <p className="text-xl text-nsignal-dark/70 dark:text-white/70 max-w-3xl mx-auto">
            3 modes de publication adaptés à votre gouvernance réseau.
            <br />
            Du plus automatisé au plus participatif.
          </p>
        </motion.div>

        {/* Analogy */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 p-6 bg-nsignal-light dark:bg-nsignal-dark-500 rounded-2xl">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📀</span>
              <span className="text-nsignal-dark/50 dark:text-white/50 line-through">CD par la poste</span>
              <ArrowRight className="w-4 h-4 text-nsignal-primary" />
              <span className="text-2xl">🎵</span>
              <span className="font-semibold text-nsignal-dark dark:text-white">Spotify</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-nsignal-dark/20 dark:bg-white/20"></div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <span className="text-nsignal-dark/50 dark:text-white/50 line-through">Email + ZIP</span>
              <ArrowRight className="w-4 h-4 text-nsignal-primary" />
              <span className="text-2xl font-bold text-nsignal-primary">n</span>
              <span className="font-semibold text-nsignal-dark dark:text-white">nSignal</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-nsignal-dark/60 dark:text-white/60">
            On ne vend pas du contenu. On vend le <span className="font-semibold">TUYAU</span>.
          </p>
        </motion.div>

        {/* 3 Modes */}
        <div className="grid lg:grid-cols-3 gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.id}
              className={`relative rounded-2xl p-6 border-2 ${mode.borderColor} ${mode.bgColor} overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-3xl mb-2 block">{mode.emoji}</span>
                  <h3 className="text-xl font-bold text-nsignal-dark dark:text-white">
                    {mode.name}
                  </h3>
                  <p className="text-sm text-nsignal-dark/60 dark:text-white/60">
                    {mode.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-nsignal-dark/50 dark:text-white/50 uppercase">Friction</span>
                  <p className={`font-bold ${mode.frictionColor}`}>{mode.friction}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-nsignal-dark/70 dark:text-white/70 mb-6">
                {mode.description}
              </p>

              {/* Use cases */}
              <div className="space-y-2">
                <span className="text-xs text-nsignal-dark/50 dark:text-white/50 uppercase font-medium">
                  Cas d'usage
                </span>
                <ul className="space-y-1">
                  {mode.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-nsignal-dark dark:text-white">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gradient accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${mode.color}`}></div>
            </motion.div>
          ))}
        </div>

        {/* Key benefit */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-r from-nsignal-primary/10 to-nsignal-secondary/10 rounded-2xl border border-nsignal-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <span className="text-xl line-through text-red-500/50">📧</span>
              </div>
              <div className="text-left">
                <p className="text-sm text-nsignal-dark/60 dark:text-white/60">Avant</p>
                <p className="font-semibold text-nsignal-dark dark:text-white">15-30 min / post</p>
              </div>
            </div>
            
            <ArrowRight className="w-6 h-6 text-nsignal-primary rotate-90 md:rotate-0" />
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <div className="text-left">
                <p className="text-sm text-nsignal-dark/60 dark:text-white/60">Avec nSignal</p>
                <p className="font-semibold text-green-600 dark:text-green-400">40 secondes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
