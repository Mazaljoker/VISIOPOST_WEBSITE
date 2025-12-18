import { motion } from 'framer-motion';
import { Facebook, Instagram, Video, Linkedin, CheckCircle, Clock, Globe, Star, MessageSquare, MapPin } from 'lucide-react';

const socialPlatforms = [
  {
    name: 'Facebook',
    icon: Facebook,
    status: 'available',
    description: 'Disponible',
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
    description: 'T1 2025',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    status: 'planned',
    description: '2025',
  },
];

const gmbFeatures = [
  { icon: MessageSquare, label: 'Google Posts', description: 'Publications locales avec variations IA' },
  { icon: Star, label: 'Gestion des avis', description: 'Réponses IA personnalisées, brand voice' },
  { icon: MapPin, label: 'Infos synchronisées', description: 'Horaires, adresses, promos en un clic' },
];

/**
 * Section Multi-Platform - RS + GMB
 * Rebrandé pour nReach Studio
 */
const MultiPlatformSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nsignal-dark dark:text-dark-text mb-4">
            Tous vos canaux locaux, <span className="text-nsignal-primary">une seule plateforme</span>
          </h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted">
            Réseaux sociaux + Google My Business = présence digitale locale complète
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Social Media Platforms */}
          <motion.div
            className="bg-white dark:bg-dark-surface rounded-2xl p-6 border border-light-border dark:border-dark-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-nsignal-dark dark:text-dark-text mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Facebook className="w-4 h-4 text-blue-500" />
              </span>
              Réseaux Sociaux
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialPlatforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl text-center border-2 transition-all ${
                    platform.status === 'available'
                      ? 'bg-nsignal-primary/10 border-nsignal-primary'
                      : platform.status === 'coming'
                      ? 'bg-nsignal-secondary/10 border-nsignal-secondary/50'
                      : 'bg-light-surface dark:bg-dark-bg border-light-border dark:border-dark-border'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <platform.icon className={`w-8 h-8 mx-auto mb-2 ${
                    platform.status === 'available'
                      ? 'text-nsignal-primary'
                      : platform.status === 'coming'
                      ? 'text-nsignal-secondary'
                      : 'text-light-text-muted dark:text-dark-text-muted'
                  }`} />
                  <h4 className="font-semibold text-nsignal-dark dark:text-dark-text text-sm mb-1">
                    {platform.name}
                  </h4>
                  <div className={`flex items-center justify-center gap-1 text-xs ${
                    platform.status === 'available'
                      ? 'text-nsignal-primary'
                      : platform.status === 'coming'
                      ? 'text-nsignal-secondary'
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
          </motion.div>

          {/* Google My Business */}
          <motion.div
            className="bg-gradient-to-br from-nsignal-primary/10 to-nsignal-secondary/10 dark:from-nsignal-primary/20 dark:to-nsignal-secondary/20 rounded-2xl p-6 border-2 border-nsignal-primary"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-nsignal-dark dark:text-dark-text flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-nsignal-primary flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </span>
                Google My Business
              </h3>
              <span className="px-3 py-1 bg-nsignal-primary text-nsignal-dark text-xs font-bold rounded-full">
                DISPONIBLE
              </span>
            </div>

            <div className="space-y-4">
              {gmbFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-dark-bg rounded-xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-nsignal-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-nsignal-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-nsignal-dark dark:text-dark-text mb-1">
                      {feature.label}
                    </h4>
                    <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-nsignal-primary/30">
              <p className="text-center text-nsignal-primary font-bold">
                Inclus dans les plans Business & Enterprise
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiPlatformSection;
