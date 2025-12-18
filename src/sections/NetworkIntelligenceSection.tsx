import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'IA Adaptative',
    description: 'Apprend des performances de chaque point de vente',
  },
  {
    icon: TrendingUp,
    title: 'Optimisation Continue',
    description: 'Améliore le contenu basé sur les résultats',
  },
  {
    icon: Target,
    title: 'Ciblage Intelligent',
    description: 'Adapte le message à chaque audience locale',
  },
];

/**
 * Section Network Intelligence - Teaser V5
 * Rebrandé pour nReach Studio
 */
const NetworkIntelligenceSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-nsignal-dark to-nsignal-dark-700">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nsignal-primary/20 text-nsignal-primary mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Bientôt disponible</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Network Intelligence
          </h2>
          <p className="text-lg text-dark-text-muted max-w-2xl mx-auto">
            La prochaine évolution de nReach Studio : une IA qui apprend de votre réseau
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-nsignal-primary/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-nsignal-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-dark-text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkIntelligenceSection;
