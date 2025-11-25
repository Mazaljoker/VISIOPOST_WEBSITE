import { motion } from 'framer-motion';
import { Sparkles, Users, BarChart3, ShieldCheck, Heart } from 'lucide-react';
import { solutionSteps } from '../data/solutionSteps';
import StepCard from '../components/StepCard';
import Button from '../components/Button';
import { SolutionSectionProps } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

const stepVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.8,
    },
  },
};

/**
 * Section Solution - Comment VisioPost fonctionne en 3 étapes
 * Animations step by step révélant le processus
 */
const SolutionSection = ({ className = '' }: SolutionSectionProps) => {
  // Map des noms d'icônes vers composants
  const iconMap: Record<string, JSX.Element> = {
    Sparkles: <Sparkles className="w-8 h-8 text-white" />,
    Users: <Users className="w-8 h-8 text-white" />,
    BarChart3: <BarChart3 className="w-8 h-8 text-white" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-white" />,
    Heart: <Heart className="w-8 h-8 text-white" />
  };

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white ${className}`}>
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
            Comment VisioPost résout tout ça
          </h2>
          <p className="text-xl text-gray-600">Simple. Rapide. Efficace.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutionSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              <StepCard
                number={step.number}
                title={step.title}
                icon={iconMap[step.icon]}
                features={step.features}
                highlight={step.highlight}
                showArrow={index < solutionSteps.length - 1}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          variants={buttonVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="primary" size="lg">
              <Sparkles className="w-6 h-6" />
              <span>Réserver une Démo</span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SolutionSection;
