import { motion } from 'framer-motion';
import { Facebook, Instagram, Video, Linkedin, CheckCircle, Clock } from 'lucide-react';

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
    description: 'T1 2025',
  },
  {
    name: 'TikTok',
    icon: Video,
    status: 'coming',
    description: 'T2 2025',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    status: 'planned',
    description: '2025',
  },
];

/**
 * Section Multi-Platform - Plateformes supportées
 * Rebrandé pour nReach Studio
 */
const MultiPlatformSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nreach-midnight dark:text-dark-text mb-4">
            Multi-plateforme
          </h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted">
            Aujourd'hui Facebook, demain tout le reste
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl text-center border-2 transition-all ${
                platform.status === 'available'
                  ? 'bg-nreach-electric/10 border-nreach-electric'
                  : platform.status === 'coming'
                  ? 'bg-nreach-lavande/10 border-nreach-lavande/50'
                  : 'bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <platform.icon className={`w-10 h-10 mx-auto mb-3 ${
                platform.status === 'available'
                  ? 'text-nreach-electric'
                  : platform.status === 'coming'
                  ? 'text-nreach-lavande'
                  : 'text-light-text-muted dark:text-dark-text-muted'
              }`} />
              <h3 className="font-semibold text-nreach-midnight dark:text-dark-text mb-1">
                {platform.name}
              </h3>
              <div className={`flex items-center justify-center gap-1 text-xs ${
                platform.status === 'available'
                  ? 'text-nreach-electric'
                  : platform.status === 'coming'
                  ? 'text-nreach-lavande'
                  : 'text-light-text-muted dark:text-dark-text-muted'
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
