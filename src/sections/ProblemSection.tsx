import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Copy, Ban, Facebook, Instagram, Linkedin } from 'lucide-react';

const problems = [
  {
    icon: Copy,
    title: 'Contenu dupliqué',
    description: 'Le même post sur 100 pages = pénalité algorithmique sur tous les réseaux',
  },
  {
    icon: TrendingDown,
    title: 'Portée en chute',
    description: 'Vos posts atteignent moins de 2% de votre audience potentielle',
  },
  {
    icon: Ban,
    title: 'Engagement nul',
    description: 'Aucune interaction car le contenu n\'est pas personnalisé localement',
  },
];

const platforms = [
  { icon: Facebook, name: 'Facebook' },
  { icon: Instagram, name: 'Instagram' },
  { icon: Linkedin, name: 'LinkedIn' },
];

/**
 * Section Problem - Charte Graphique nSignal 2025
 */
const ProblemSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nsignal-light dark:bg-nsignal-dark-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Le problème</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-nsignal-dark dark:text-nsignal-light mb-4">
            Les réseaux sociaux pénalisent le contenu dupliqué
          </h2>
          <p className="text-lg text-nsignal-light-700 dark:text-nsignal-light-600 max-w-3xl mx-auto mb-6">
            Quand vous créez une campagne et la diffusez à l'identique sur tous vos points de vente, 
            les algorithmes réduisent drastiquement votre portée organique.
          </p>

          {/* Platforms affected */}
          <div className="flex items-center justify-center gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-nsignal-dark rounded-full border border-nsignal-light-400 dark:border-nsignal-dark-400"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <platform.icon className="w-4 h-4 text-red-500" />
                <span className="text-sm text-nsignal-light-700 dark:text-nsignal-light-600">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-nsignal-dark rounded-xl p-6 border border-nsignal-light-400 dark:border-nsignal-dark-400 shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-nsignal-dark dark:text-nsignal-light mb-2">
                {problem.title}
              </h3>
              <p className="text-nsignal-light-700 dark:text-nsignal-light-600">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
