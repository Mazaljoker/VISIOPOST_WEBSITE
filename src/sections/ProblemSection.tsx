import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Copy, Ban, Facebook, Instagram, Linkedin, Globe, MessageCircle, MapPinOff, Star } from 'lucide-react';

const socialProblems = [
  {
    icon: Copy,
    title: 'Contenu dupliqué',
    description: 'Le même post sur 100 pages = pénalité algorithmique',
  },
  {
    icon: TrendingDown,
    title: 'Portée en chute',
    description: 'Vos posts atteignent moins de 2% de votre audience',
  },
  {
    icon: Ban,
    title: 'Engagement nul',
    description: 'Contenu non personnalisé = aucune interaction locale',
  },
];

const gmbProblems = [
  {
    icon: MapPinOff,
    title: 'Fiches incohérentes',
    description: 'Horaires, infos différentes d\'un magasin à l\'autre',
  },
  {
    icon: MessageCircle,
    title: 'Avis sans réponse',
    description: 'Des centaines d\'avis ignorés nuisent à votre réputation',
  },
  {
    icon: Star,
    title: 'SEO local négligé',
    description: 'Vos concurrents locaux vous dépassent sur Google Maps',
  },
];

const socialPlatforms = [
  { icon: Facebook, name: 'Facebook' },
  { icon: Instagram, name: 'Instagram' },
  { icon: Linkedin, name: 'LinkedIn' },
];

/**
 * Section Problem - Les problèmes de présence digitale locale
 * Rebrandé pour nReach Studio - RS + GMB
 */
const ProblemSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto">
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
          <h2 className="text-3xl md:text-4xl font-bold text-nsignal-dark dark:text-dark-text mb-4">
            Gérer la présence locale de 100+ magasins ?<br />
            <span className="text-red-500">Mission impossible.</span>
          </h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-3xl mx-auto">
            Deux batailles à mener en même temps : les réseaux sociaux ET Google My Business.
            Sans les bons outils, votre visibilité locale s'effondre.
          </p>
        </motion.div>

        {/* Two columns: Social Media & GMB */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Social Media Problems */}
          <motion.div
            className="bg-white dark:bg-dark-bg rounded-2xl p-6 border border-light-border dark:border-dark-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {socialPlatforms.map((platform, index) => (
                  <div key={index} className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center border-2 border-white dark:border-dark-bg">
                    <platform.icon className="w-4 h-4 text-blue-500" />
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-nsignal-dark dark:text-dark-text">
                Réseaux Sociaux
              </h3>
            </div>
            <div className="space-y-4">
              {socialProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-nsignal-dark dark:text-dark-text mb-1">
                      {problem.title}
                    </h4>
                    <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-light-border dark:border-dark-border">
              <p className="text-center text-red-500 font-bold text-lg">-80% de portée</p>
              <p className="text-center text-sm text-light-text-muted dark:text-dark-text-muted">quand 50+ pages publient le même contenu</p>
            </div>
          </motion.div>

          {/* GMB Problems */}
          <motion.div
            className="bg-white dark:bg-dark-bg rounded-2xl p-6 border border-light-border dark:border-dark-border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-nsignal-primary/20 flex items-center justify-center">
                <Globe className="w-4 h-4 text-nsignal-primary" />
              </div>
              <h3 className="text-xl font-bold text-nsignal-dark dark:text-dark-text">
                Google My Business
              </h3>
            </div>
            <div className="space-y-4">
              {gmbProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-nsignal-dark dark:text-dark-text mb-1">
                      {problem.title}
                    </h4>
                    <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-light-border dark:border-dark-border">
              <p className="text-center text-orange-500 font-bold text-lg">76% des recherches locales</p>
              <p className="text-center text-sm text-light-text-muted dark:text-dark-text-muted">aboutissent à une visite en magasin sous 24h</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
