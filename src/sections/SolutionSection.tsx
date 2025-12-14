import { motion } from 'framer-motion';
import { Upload, Sparkles, Bell, TrendingUp, Shield, Clock, BarChart3, Check, ArrowRight } from 'lucide-react';

const topCards = [
  {
    icon: Shield,
    title: 'Brand Safety 100%',
    description: 'Chaque variation respecte votre charte',
  },
  {
    icon: Clock,
    title: '30 secondes',
    description: 'Le magasin choisit et publie',
  },
  {
    icon: BarChart3,
    title: 'Portée maximale',
    description: 'Les réseaux récompensent le contenu unique',
  },
];

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'UPLOADEZ',
    features: [
      'Votre visuel et votre message',
      'Notre IA prend le relais',
      'Validation siège garantie',
    ],
    badge: '1 Campagne',
    badgeColor: 'bg-nsignal-dark text-white',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'GÉNÉRATION AUTOMATIQUE',
    features: [
      'Une version unique par magasin',
      'Personnalisation ville et région',
      'Zéro duplicate content',
    ],
    badge: '500 Posts Uniques',
    badgeColor: 'bg-nsignal-dark text-white',
  },
  {
    number: '03',
    icon: Bell,
    title: 'PUBLICATION SIMPLIFIÉE',
    features: [
      'Le magasin reçoit une notification',
      '3 clics pour publier',
      'Aucune formation nécessaire',
    ],
    badge: '30 Secondes',
    badgeColor: 'bg-nsignal-secondary text-white',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'PORTÉE MAXIMALE',
    features: [
      'Les réseaux voient des contenus originaux',
      "L'algorithme vous récompense",
      'Analytics consolidés en temps réel',
    ],
    badge: '+340% Reach',
    badgeColor: 'bg-nsignal-primary text-white',
  },
];

/**
 * Section Solution - Charte Graphique nSignal 2025
 */
const SolutionSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-nsignal-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nsignal-dark dark:text-nsignal-light mb-4">
            Comment <span className="text-nsignal-primary">nSignal</span> résout le problème
          </h2>
          <p className="text-lg text-nsignal-light-700 dark:text-nsignal-light-600 max-w-2xl mx-auto">
            Un processus simple et sécurisé pour générer du contenu unique sur tout votre réseau
          </p>
        </motion.div>

        {/* Top Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {topCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-nsignal-light dark:bg-nsignal-dark-500 rounded-2xl p-6 border border-nsignal-light-400 dark:border-nsignal-dark-400 shadow-card text-center"
              whileHover={{ y: -4 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-nsignal-primary/20 to-nsignal-secondary/20 flex items-center justify-center">
                <card.icon className="w-7 h-7 text-nsignal-primary" />
              </div>
              <h3 className="text-lg font-bold text-nsignal-dark dark:text-nsignal-light mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-nsignal-light-700 dark:text-nsignal-light-600">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-nsignal-light dark:bg-nsignal-dark-500 rounded-2xl p-6 border border-nsignal-light-400 dark:border-nsignal-dark-400 shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Arrow between cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-nsignal-primary" />
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-nsignal-dark to-nsignal-primary flex items-center justify-center">
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Number */}
              <div className="text-4xl font-extrabold text-nsignal-primary mb-2">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-nsignal-dark dark:text-nsignal-light mb-4 uppercase tracking-wide">
                {step.title}
              </h3>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {step.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm text-nsignal-light-700 dark:text-nsignal-light-600">
                    <Check className="w-4 h-4 text-nsignal-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Badge */}
              <div className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${step.badgeColor}`}>
                {step.badge}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
