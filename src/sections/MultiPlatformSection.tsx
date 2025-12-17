import { motion } from 'framer-motion';
import { Facebook, Instagram, Video, CheckCircle, Clock, MapPin } from 'lucide-react';

const platforms = [
  {
    name: 'Facebook',
    icon: Facebook,
    status: 'available',
    description: 'Disponible maintenant',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    status: 'coming',
    description: 'T1 2026',
  },
  {
    name: 'Google Business',
    icon: MapPin,
    status: 'coming',
    description: 'T2 2026',
  },
  {
    name: 'TikTok',
    icon: Video,
    status: 'planned',
    description: '2026',
  },
];

/**
 * Section Multi-Platform - Charte Graphique nSignal 2025
 */
const MultiPlatformSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-nsignal-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nsignal-dark dark:text-nsignal-light mb-4">
            Multi-plateforme
          </h2>
          <p className="text-lg text-nsignal-light-700 dark:text-nsignal-light-600">
            Aujourd'hui Facebook, demain tout le reste
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl text-center border-2 transition-all ${
                platform.status === 'available'
                  ? 'bg-nsignal-primary/10 border-nsignal-primary'
                  : platform.status === 'coming'
                  ? 'bg-nsignal-secondary/10 border-nsignal-secondary/50'
                  : 'bg-nsignal-light dark:bg-nsignal-dark-500 border-nsignal-light-400 dark:border-nsignal-dark-400'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <platform.icon className={`w-10 h-10 mx-auto mb-3 ${
                platform.status === 'available'
                  ? 'text-nsignal-primary'
                  : platform.status === 'coming'
                  ? 'text-nsignal-secondary'
                  : 'text-nsignal-light-700 dark:text-nsignal-light-600'
              }`} />
              <h3 className="font-semibold text-nsignal-dark dark:text-nsignal-light mb-1">
                {platform.name}
              </h3>
              <div className={`flex items-center justify-center gap-1 text-xs ${
                platform.status === 'available'
                  ? 'text-nsignal-primary'
                  : platform.status === 'coming'
                  ? 'text-nsignal-secondary'
                  : 'text-nsignal-light-700 dark:text-nsignal-light-600'
              }`}>
                {platform.status === 'available' ? (
                  <CheckCircle className="w-3 h-3" />
                ) : (
                  <Clock className="w-3 h-3" />
                )}
                {platform.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiPlatformSection;
