import { motion } from 'framer-motion';
import { Mail, Clock, Eye, AlertTriangle, XCircle } from 'lucide-react';

/**
 * Problem Section - L'Email est Mort
 * Focus sur le vrai problème: le canal de distribution, pas le contenu
 */
const ProblemSection = () => {
  const emailProblems = [
    {
      icon: Mail,
      title: 'Noyé dans 500 emails',
      description: 'Le franchisé reçoit 50-100 emails/jour. Le vôtre n\'existe pas.',
    },
    {
      icon: Clock,
      title: '12 étapes pour publier',
      description: 'Télécharger → Ouvrir → Copier → Facebook → Coller → Adapter → Publier = abandon',
    },
    {
      icon: Eye,
      title: 'Aucune visibilité',
      description: 'Le siège envoie dans le vide. Qui a publié ? Qui a ignoré ? Mystère.',
    },
    {
      icon: AlertTriangle,
      title: 'Tension réseau',
      description: '"Vous n\'avez pas publié" devient culpabilisant et crée des conflits.',
    },
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-nsignal-light dark:bg-nsignal-dark-600">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium mb-4">
            Le vrai problème
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nsignal-dark dark:text-white mb-6">
            L'email est <span className="text-red-500">mort</span> pour la distribution de contenu
          </h2>
          <p className="text-xl text-nsignal-dark/70 dark:text-white/70 max-w-3xl mx-auto">
            Vous créez du super contenu au siège. Mais le problème n'est pas le contenu.
            <br />
            <span className="font-semibold text-nsignal-dark dark:text-white">C'est le CANAL.</span>
          </p>
        </motion.div>

        {/* Email workflow visualization */}
        <motion.div
          className="bg-white dark:bg-nsignal-dark-500 rounded-2xl shadow-xl p-6 md:p-8 mb-12 border border-red-200 dark:border-red-900/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-nsignal-dark dark:text-white">Le workflow actuel dans 95% des réseaux</h3>
          </div>

          {/* Email flow diagram */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {/* Siège */}
              <div className="flex-shrink-0 text-center">
                <div className="w-20 h-20 mx-auto mb-2 rounded-2xl bg-nsignal-primary/10 flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <p className="text-sm font-medium text-nsignal-dark dark:text-white">Siège</p>
                <p className="text-xs text-nsignal-dark/60 dark:text-white/60">Crée le contenu</p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex items-center">
                <div className="w-16 h-0.5 bg-red-300 dark:bg-red-700"></div>
                <span className="text-red-400">→</span>
              </div>

              {/* Email */}
              <div className="flex-shrink-0 text-center">
                <div className="w-20 h-20 mx-auto mb-2 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="text-3xl">📧</span>
                </div>
                <p className="text-sm font-medium text-red-600 dark:text-red-400">Email</p>
                <p className="text-xs text-nsignal-dark/60 dark:text-white/60">+ PDF + ZIP</p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex items-center">
                <div className="w-16 h-0.5 bg-red-300 dark:bg-red-700"></div>
                <span className="text-red-400">→</span>
              </div>

              {/* Inbox */}
              <div className="flex-shrink-0 text-center">
                <div className="w-20 h-20 mx-auto mb-2 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative">
                  <span className="text-3xl">📥</span>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    99+
                  </span>
                </div>
                <p className="text-sm font-medium text-nsignal-dark dark:text-white">Inbox</p>
                <p className="text-xs text-red-500">500 emails</p>
              </div>

              {/* Arrow 3 */}
              <div className="hidden md:flex items-center">
                <div className="w-16 h-0.5 bg-red-300 dark:bg-red-700"></div>
                <span className="text-red-400">→</span>
              </div>

              {/* Ignored */}
              <div className="flex-shrink-0 text-center">
                <div className="w-20 h-20 mx-auto mb-2 rounded-2xl bg-red-500/20 flex items-center justify-center">
                  <span className="text-3xl">🗑️</span>
                </div>
                <p className="text-sm font-medium text-red-600 dark:text-red-400">Ignoré</p>
                <p className="text-xs text-nsignal-dark/60 dark:text-white/60">85% du temps</p>
              </div>
            </div>

            {/* Result bar */}
            <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-red-500">15%</span>
                  <span className="text-nsignal-dark/70 dark:text-white/70">
                    de taux de diffusion moyen
                  </span>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-red-600 dark:text-red-400 font-semibold">
                    85% de votre travail créatif est gaspillé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emailProblems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-nsignal-dark-500 rounded-xl p-6 border border-nsignal-light-400 dark:border-nsignal-dark-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-nsignal-dark dark:text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-nsignal-dark/70 dark:text-white/70">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-nsignal-dark dark:text-white italic max-w-4xl mx-auto">
            "On crée du super contenu au siège,
            <br />
            <span className="text-nsignal-primary">mais personne ne l'utilise."</span>
          </blockquote>
          <p className="mt-4 text-nsignal-dark/60 dark:text-white/60">
            — Ce que nous disent 9 directeurs marketing de réseau sur 10
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
