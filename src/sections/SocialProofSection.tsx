import { motion } from 'framer-motion';

/**
 * Social Proof Section - Stats clés
 */
const SocialProofSection = () => {
  const stats = [
    {
      value: '15%',
      label: 'Taux moyen de diffusion',
      subtext: 'avec l\'email traditionnel',
      color: 'text-red-500',
    },
    {
      value: '80%',
      label: 'Objectif nSignal',
      subtext: 'de réseau actif',
      color: 'text-green-500',
    },
    {
      value: '40s',
      label: 'Temps par post',
      subtext: 'vs 15-30 min avant',
      color: 'text-nsignal-primary',
    },
    {
      value: '+300%',
      label: 'Engagement',
      subtext: 'contenu local vs corporate',
      color: 'text-nsignal-secondary',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-nsignal-dark border-y border-nsignal-light-400 dark:border-nsignal-dark-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </p>
              <p className="text-sm font-medium text-nsignal-dark dark:text-white">
                {stat.label}
              </p>
              <p className="text-xs text-nsignal-dark/60 dark:text-white/60">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
