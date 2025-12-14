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
  Heart,
  Radio
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

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Users,
  BarChart3,
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Shield,
  MapPin,
  Heart,
  Radio
};

/**
 * Section Features - Charte Graphique nSignal 2025
 * Couleurs: Teal #0F7B6C + Coral #E86A58
 */
const FeaturesSection = ({ className = '' }: FeaturesSectionProps) => {
  return (
    <section id="features" className={`py-20 px-4 sm:px-6 lg:px-8 bg-nsignal-light dark:bg-nsignal-dark ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-nsignal-dark dark:text-nsignal-light mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-nsignal-light-700 dark:text-nsignal-light-600">Une plateforme complète pour vos réseaux</p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconComponents[feature.icon];
            const iconElement = IconComponent ? <IconComponent /> : <Sparkles />;
            
            return (
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
                  icon={iconElement}
                  title={feature.title}
                  description={feature.description}
                  gradient={feature.gradient}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bloc Feature Prédictive - AI Intelligence */}
        <motion.div
          className="mt-20 max-w-5xl mx-auto bg-nsignal-dark rounded-3xl p-1 text-white overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          <div className="bg-gradient-to-r from-nsignal-dark-600 to-nsignal-dark p-8 md:p-12 rounded-[22px] border border-nsignal-dark-400">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Texte */}
              <div>
                <div className="inline-block px-4 py-1 bg-nsignal-primary/20 text-nsignal-primary rounded-full text-sm font-bold mb-6">
                  NOUVEAU : AI PREDICTION
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Ne devinez plus. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-nsignal-primary to-nsignal-secondary">
                    Sachez quand poster.
                  </span>
                </h3>
                <p className="text-nsignal-light-600 mb-6 text-lg">
                  Notre algorithme analyse 12 points de données (Météo, Trafic, Historique, Concurrents...) pour déterminer la fenêtre de tir idéale par point de vente.
                </p>
                <div className="flex items-center space-x-4 text-sm font-medium">
                  <div className="flex items-center text-nsignal-primary">
                    <span className="w-2 h-2 bg-nsignal-primary rounded-full mr-2"></span>
                    +45% d'Engagement
                  </div>
                  <div className="flex items-center text-nsignal-secondary">
                    <span className="w-2 h-2 bg-nsignal-secondary rounded-full mr-2"></span>
                    Prédiction à J+7
                  </div>
                </div>
              </div>

              {/* Simulation Graphique */}
              <div className="bg-nsignal-dark-600/50 rounded-xl p-6 border border-nsignal-dark-400 relative">
                <motion.div
                  className="flex justify-between items-end h-32 mb-4 space-x-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="w-full bg-nsignal-dark-400 rounded-t opacity-30"
                    initial={{ height: 0 }}
                    whileInView={{ height: '30%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                  <motion.div
                    className="w-full bg-nsignal-dark-400 rounded-t opacity-40"
                    initial={{ height: 0 }}
                    whileInView={{ height: '50%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                  <motion.div
                    className="w-full bg-gradient-to-t from-nsignal-primary to-nsignal-secondary rounded-t relative group"
                    initial={{ height: 0 }}
                    whileInView={{ height: '90%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.div
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-nsignal-dark text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                    >
                      Meilleur moment : 18h30
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="w-full bg-nsignal-dark-400 rounded-t opacity-50"
                    initial={{ height: 0 }}
                    whileInView={{ height: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />
                  <motion.div
                    className="w-full bg-nsignal-dark-400 rounded-t opacity-30"
                    initial={{ height: 0 }}
                    whileInView={{ height: '40%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                </motion.div>
                <div className="flex justify-between text-xs text-nsignal-light-600 font-mono">
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
