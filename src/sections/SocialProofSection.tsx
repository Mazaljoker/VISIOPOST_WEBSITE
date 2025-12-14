import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const stats = [
  {
    value: '+340%',
    label: 'de portée organique',
    icon: TrendingUp,
    color: 'text-nsignal-primary',
  },
  {
    value: '500+',
    label: 'points de vente',
    icon: Users,
    color: 'text-nsignal-secondary',
  },
  {
    value: '30s',
    label: 'par post généré',
    icon: Clock,
    color: 'text-nsignal-primary',
  },
  {
    value: '0',
    label: 'duplicate content',
    icon: CheckCircle,
    color: 'text-nsignal-accent',
  },
];

/**
 * Section Social Proof - Charte Graphique nSignal 2025
 */
const SocialProofSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-nsignal-dark border-y border-nsignal-light-400 dark:border-nsignal-dark-400">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-nsignal-light dark:bg-nsignal-dark-500 mb-3`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-extrabold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-nsignal-light-700 dark:text-nsignal-light-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
