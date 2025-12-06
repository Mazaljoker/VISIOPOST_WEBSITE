import { motion } from 'framer-motion';
import { Sparkles, Shuffle, MapPin, CheckCircle } from 'lucide-react';

const solutions = [
  {
    icon: Sparkles,
    title: 'IA Générative',
    description: 'GPT-4 Vision analyse vos images et génère des textes uniques',
  },
  {
    icon: Shuffle,
    title: 'Variations Infinies',
    description: 'Chaque point de vente reçoit une version différente du post',
  },
  {
    icon: MapPin,
    title: 'Localisation Auto',
    description: 'Variables dynamiques : ville, région, horaires adaptés',
  },
];

/**
 * Section Solution - Comment nReach Studio résout le problème
 * Rebrandé pour nReach Studio
 */
const SolutionSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nreach-electric/10 text-nreach-electric mb-4">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">La solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-nreach-midnight dark:text-dark-text mb-4">
            nReach Studio génère du contenu <span className="text-nreach-electric">unique</span>
          </h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            Notre IA crée des variations uniques de chaque post pour chaque point de vente de votre réseau.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark-surface rounded-xl p-6 border border-light-border dark:border-dark-border shadow-card hover:shadow-nreach transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-nreach-electric to-nreach-lavande rounded-xl flex items-center justify-center mb-4">
                <solution.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-nreach-midnight dark:text-dark-text mb-2">
                {solution.title}
              </h3>
              <p className="text-light-text-muted dark:text-dark-text-muted">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
