import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Copy, Ban } from 'lucide-react';

const problems = [
  {
    icon: Copy,
    title: 'Contenu dupliqué',
    description: 'Le même post sur 100 pages = pénalité algorithmique Facebook',
  },
  {
    icon: TrendingDown,
    title: 'Portée en chute',
    description: 'Vos posts atteignent moins de 2% de votre audience',
  },
  {
    icon: Ban,
    title: 'Engagement nul',
    description: 'Aucune interaction car le contenu n\'est pas personnalisé',
  },
];

/**
 * Section Problem - Le problème du duplicate content
 * Rebrandé pour nReach Studio
 */
const ProblemSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-surface dark:bg-dark-surface">
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
          <h2 className="text-3xl md:text-4xl font-bold text-nreach-midnight dark:text-dark-text mb-4">
            Facebook pénalise le contenu dupliqué
          </h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            Quand tous vos points de vente publient le même contenu, l'algorithme Facebook réduit drastiquement votre portée.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark-bg rounded-xl p-6 border border-light-border dark:border-dark-border shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-nreach-midnight dark:text-dark-text mb-2">
                {problem.title}
              </h3>
              <p className="text-light-text-muted dark:text-dark-text-muted">
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
