import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Smartphone, 
  Sparkles, 
  Bell, 
  BarChart3, 
  Shield,
  Users,
  Zap,
  MessageSquare,
  TrendingUp,
  Clock,
  Trophy
} from 'lucide-react';

/**
 * Features Section - Dashboard Siège + App Franchisé + IA
 */
const FeaturesSection = () => {
  const siegeFeatures = [
    {
      icon: Users,
      title: 'Vue réseau complète',
      description: '% de magasins actifs, qui publie, qui ne publie pas',
    },
    {
      icon: Zap,
      title: 'Push en 1 clic',
      description: 'Diffusez une campagne à tout le réseau instantanément',
    },
    {
      icon: BarChart3,
      title: 'Analytics consolidés',
      description: 'Engagement, reach, meilleurs contenus par région',
    },
    {
      icon: Bell,
      title: 'Alertes automatiques',
      description: 'Magasins inactifs, avis négatifs, opportunités',
    },
    {
      icon: MessageSquare,
      title: 'Gestion des avis',
      description: 'Tous les avis Google/Facebook centralisés',
    },
    {
      icon: Shield,
      title: 'Brand safety',
      description: 'Templates verrouillés, workflows d\'approbation',
    },
  ];

  const franchiseFeatures = [
    {
      icon: Smartphone,
      title: 'App mobile native',
      description: 'iOS & Android, optimisée pour usage en magasin',
    },
    {
      icon: Bell,
      title: 'Notifications push',
      description: 'Alerté dès qu\'un nouveau contenu est disponible',
    },
    {
      icon: Zap,
      title: 'Publication 1 tap',
      description: 'Valider = publier, sans copier-coller',
    },
    {
      icon: Clock,
      title: '40 secondes max',
      description: 'Temps moyen pour publier 3 posts',
    },
    {
      icon: TrendingUp,
      title: 'Feedback positif',
      description: 'Vos stats, votre rang dans le réseau',
    },
    {
      icon: Trophy,
      title: 'Gamification',
      description: 'Badges, streaks, célébration des succès',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-nsignal-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-nsignal-primary/10 text-nsignal-primary text-sm font-medium mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nsignal-dark dark:text-white mb-6">
            Deux expériences,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nsignal-primary to-nsignal-secondary">
              un seul objectif
            </span>
          </h2>
          <p className="text-xl text-nsignal-dark/70 dark:text-white/70 max-w-2xl mx-auto">
            Le siège pilote. Le franchisé publie. Tout le monde gagne.
          </p>
        </motion.div>

        {/* Two columns: Siège vs Franchisé */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Siège */}
          <motion.div
            className="bg-nsignal-light dark:bg-nsignal-dark-500 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-nsignal-primary flex items-center justify-center">
                <LayoutDashboard className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-nsignal-dark dark:text-white">Dashboard Siège</h3>
                <p className="text-nsignal-dark/60 dark:text-white/60">Pilotez tout votre réseau</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {siegeFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white dark:bg-nsignal-dark-400 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-nsignal-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-nsignal-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-nsignal-dark dark:text-white text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-nsignal-dark/60 dark:text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard preview */}
            <div className="mt-6 bg-white dark:bg-nsignal-dark-400 rounded-xl p-4 border border-nsignal-light-400 dark:border-nsignal-dark-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-nsignal-dark dark:text-white">Couverture réseau</span>
                <span className="text-sm text-green-500 font-semibold">+12% ce mois</span>
              </div>
              <div className="flex gap-4 text-center">
                <div className="flex-1 p-3 bg-nsignal-light dark:bg-nsignal-dark-500 rounded-lg">
                  <p className="text-2xl font-bold text-nsignal-primary">87%</p>
                  <p className="text-xs text-nsignal-dark/60 dark:text-white/60">Actifs</p>
                </div>
                <div className="flex-1 p-3 bg-nsignal-light dark:bg-nsignal-dark-500 rounded-lg">
                  <p className="text-2xl font-bold text-nsignal-dark dark:text-white">1.2K</p>
                  <p className="text-xs text-nsignal-dark/60 dark:text-white/60">Posts</p>
                </div>
                <div className="flex-1 p-3 bg-nsignal-light dark:bg-nsignal-dark-500 rounded-lg">
                  <p className="text-2xl font-bold text-nsignal-secondary">4.7%</p>
                  <p className="text-xs text-nsignal-dark/60 dark:text-white/60">Engage.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Franchisé */}
          <motion.div
            className="bg-nsignal-light dark:bg-nsignal-dark-500 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-nsignal-secondary flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-nsignal-dark dark:text-white">App Franchisé</h3>
                <p className="text-nsignal-dark/60 dark:text-white/60">Publiez en 1 tap</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {franchiseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white dark:bg-nsignal-dark-400 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-nsignal-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-nsignal-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-nsignal-dark dark:text-white text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-nsignal-dark/60 dark:text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* App preview */}
            <div className="mt-6 bg-white dark:bg-nsignal-dark-400 rounded-xl p-4 border border-nsignal-light-400 dark:border-nsignal-dark-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-nsignal-dark dark:text-white">Votre activité</span>
                <span className="text-xs bg-nsignal-secondary/10 text-nsignal-secondary px-2 py-1 rounded-full font-medium">
                  🏆 Top 15%
                </span>
              </div>
              <div className="flex gap-4 text-center">
                <div className="flex-1 p-3 bg-nsignal-light dark:bg-nsignal-dark-500 rounded-lg">
                  <p className="text-2xl font-bold text-nsignal-secondary">12</p>
                  <p className="text-xs text-nsignal-dark/60 dark:text-white/60">Posts</p>
                </div>
                <div className="flex-1 p-3 bg-nsignal-light dark:bg-nsignal-dark-500 rounded-lg">
                  <p className="text-2xl font-bold text-nsignal-dark dark:text-white">847</p>
                  <p className="text-xs text-nsignal-dark/60 dark:text-white/60">Personnes</p>
                </div>
                <div className="flex-1 p-3 bg-nsignal-light dark:bg-nsignal-dark-500 rounded-lg">
                  <p className="text-2xl font-bold text-green-500">+23%</p>
                  <p className="text-xs text-nsignal-dark/60 dark:text-white/60">vs mois -1</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* IA en arrière-plan */}
        <motion.div
          className="bg-gradient-to-r from-nsignal-primary/10 via-nsignal-secondary/10 to-nsignal-primary/10 rounded-2xl p-6 md:p-8 border border-nsignal-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-nsignal-primary to-nsignal-secondary flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-nsignal-dark dark:text-white mb-2">
                L'IA travaille en arrière-plan
              </h3>
              <p className="text-nsignal-dark/70 dark:text-white/70 mb-4">
                Le franchisé ne voit rien. Mais chaque post est unique grâce à notre moteur de génération IA qui crée des variations anti-duplicate automatiquement.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="px-3 py-1 bg-white dark:bg-nsignal-dark-500 rounded-full text-sm text-nsignal-dark dark:text-white">
                  ✓ Variations de texte
                </span>
                <span className="px-3 py-1 bg-white dark:bg-nsignal-dark-500 rounded-full text-sm text-nsignal-dark dark:text-white">
                  ✓ Personnalisation locale
                </span>
                <span className="px-3 py-1 bg-white dark:bg-nsignal-dark-500 rounded-full text-sm text-nsignal-dark dark:text-white">
                  ✓ 729+ combinaisons
                </span>
                <span className="px-3 py-1 bg-white dark:bg-nsignal-dark-500 rounded-full text-sm text-nsignal-dark dark:text-white">
                  ✓ 0 pénalité algorithme
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
