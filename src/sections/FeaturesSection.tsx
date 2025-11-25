import { motion } from 'framer-motion';
import {
  Sparkles,
  Users,
  BarChart3,
  Calendar,
  CheckCircle,
  Zap,
  Shield,
  MapPin,
  Heart
} from 'lucide-react';
import { features } from '../data/features';
import FeatureCard from '../components/FeatureCard';
import { FeaturesSectionProps } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

/**
 * Section Features - Grille des 6 fonctionnalités principales
 * Animation staggered pour effet "cascade"
 */
const FeaturesSection = ({ className = '' }: FeaturesSectionProps) => {
  // Map des noms d'icônes vers composants
  const iconMap: Record<string, JSX.Element> = {
    Sparkles: <Sparkles className="w-8 h-8" />,
    Users: <Users className="w-8 h-8" />,
    BarChart3: <BarChart3 className="w-8 h-8" />,
    Calendar: <Calendar className="w-8 h-8" />,
    CheckCircle: <CheckCircle className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
    Shield: <Shield className="w-8 h-8" />,
    MapPin: <MapPin className="w-8 h-8" />,
    Heart: <Heart className="w-8 h-8" />
  };

  return (
    <section id="features" className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-600">Une plateforme complète pour vos réseaux</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
