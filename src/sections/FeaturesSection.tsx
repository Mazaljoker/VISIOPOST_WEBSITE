import { motion } from 'framer-motion';
import {
  Sparkles,
  Users,
  BarChart3,
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Shield,
  MapPin,
  Heart
} from 'lucide-react';
import { features } from '../data/features';
import FeatureCard from '../components/FeatureCard';
import { FeaturesSectionProps } from '../types';

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

// Individual card variants with rewind support
const featureCardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

/**
 * Section Features - Grille des 6 fonctionnalités principales
 * Animation staggered pour effet "cascade"
 * Rebrandé pour nReach Studio
 */
const FeaturesSection = ({ className = '' }: FeaturesSectionProps) => {
  // Map des noms d'icônes vers composants
  const iconMap: Record<string, JSX.Element> = {
    Sparkles: <Sparkles className="w-8 h-8" />,
    Users: <Users className="w-8 h-8" />,
    BarChart3: <BarChart3 className="w-8 h-8" />,
    Clock: <Clock className="w-8 h-8" />,
    TrendingUp: <TrendingUp className="w-8 h-8" />,
    CheckCircle: <CheckCircle className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
    Shield: <Shield className="w-8 h-8" />,
    MapPin: <MapPin className="w-8 h-8" />,
    Heart: <Heart className="w-8 h-8" />
  };

  return (
    <section id="features" className={`py-20 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Title - appears once */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-nreach-midnight dark:text-dark-text mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-light-text-muted dark:text-dark-text-muted">Une plateforme complète pour vos réseaux</p>
        </motion.div>

        {/* Feature cards - each has individual scroll trigger with rewind */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3, margin: "-30px" }}
              variants={featureCardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FeatureCard
                icon={iconMap[feature.icon]}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            </motion.div>
          ))}
        </div>

        {/* Bloc Feature Prédictive - AI Intelligence - with rewind */}
        <motion.div
          className="mt-20 max-w-5xl mx-auto bg-nreach-midnight rounded-3xl p-1 text-white overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <div className="bg-gradient-to-r from-nreach-midnight-600 to-nreach-midnight p-8 md:p-12 rounded-[22px] border border-dark-border">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Texte */}
              <div>
                <div className="inline-block px-4 py-1 bg-nreach-electric/20 text-nreach-electric rounded-full text-sm font-bold mb-6">
                  NOUVEAU : AI PREDICTION
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Ne devinez plus. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-nreach-electric to-nreach-lavande">
                    Sachez quand poster.
                  </span>
                </h3>
                <p className="text-dark-text-muted mb-6 text-lg">
                  Notre algorithme analyse 12 points de données (Météo, Trafic, Historique, Concurrents...) pour déterminer la fenêtre de tir idéale par point de vente.
                </p>
                <div className="flex items-center space-x-4 text-sm font-medium">
                  <div className="flex items-center text-nreach-electric">
                    <span className="w-2 h-2 bg-nreach-electric rounded-full mr-2"></span>
                    +45% d'Engagement
                  </div>
                  <div className="flex items-center text-nreach-lavande">
                    <span className="w-2 h-2 bg-nreach-lavande rounded-full mr-2"></span>
                    Prédiction à J+7
                  </div>
                </div>
              </div>

              {/* Simulation Graphique */}
              <div className="bg-dark-surface/50 rounded-xl p-6 border border-dark-border relative">
                {/* Faux Graphique animé */}
                <motion.div
                  className="flex justify-between items-end h-32 mb-4 space-x-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="w-full bg-dark-border rounded-t opacity-30"
                    initial={{ height: 0 }}
                    whileInView={{ height: '30%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                  <motion.div
                    className="w-full bg-dark-border rounded-t opacity-40"
                    initial={{ height: 0 }}
                    whileInView={{ height: '50%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                  <motion.div
                    className="w-full bg-gradient-to-t from-nreach-electric to-nreach-lavande rounded-t relative group"
                    initial={{ height: 0 }}
                    whileInView={{ height: '90%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.div
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-nreach-midnight text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                    >
                      Meilleur moment : 18h30
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="w-full bg-dark-border rounded-t opacity-50"
                    initial={{ height: 0 }}
                    whileInView={{ height: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />
                  <motion.div
                    className="w-full bg-dark-border rounded-t opacity-30"
                    initial={{ height: 0 }}
                    whileInView={{ height: '40%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                </motion.div>
                <div className="flex justify-between text-xs text-dark-text-muted font-mono">
                  <span>14h</span>
                  <span>16h</span>
                  <span className="text-white font-bold">18h</span>
                  <span>20h</span>
                  <span>22h</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
