import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, MapPin, BarChart3, Zap } from 'lucide-react';
import { solutionSteps } from '../data/solutionSteps';
import StepCard from '../components/StepCard';
import Button from '../components/Button';
import { SolutionSectionProps } from '../types';

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
  hidden: { opacity: 0, y: 80, scale: 0.85 },
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

const benefitsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
};

/**
 * Section Solution - Comment VisioPost résout le problème
 */
const SolutionSection = ({ className = '' }: SolutionSectionProps) => {
  const iconMap: Record<string, JSX.Element> = {
    Sparkles: <Sparkles className="w-8 h-8 text-white" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-white" />,
    MapPin: <MapPin className="w-8 h-8 text-white" />,
    BarChart3: <BarChart3 className="w-8 h-8 text-white" />,
    Zap: <Zap className="w-8 h-8 text-white" />
  };

  const benefits = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Brand Safety 100%", desc: "Chaque variation respecte votre charte" },
    { icon: <Zap className="w-6 h-6" />, title: "30 secondes", desc: "Le magasin choisit et publie" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Portée maximale", desc: "Facebook récompense le contenu unique" }
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Une campagne. Des centaines de posts uniques.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uploadez votre visuel et votre message. Notre IA génère automatiquement 
            une version unique pour chaque magasin. Même campagne. Zéro duplicate.
          </p>
        </motion.div>

        {/* 3 Bénéfices clés */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={benefitsVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-visio-violet to-visio-rose rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3, margin: "-50px" }}
              variants={cardVariants}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="primary" size="lg">
              <Sparkles className="w-6 h-6" />
              <span>Demander une Démo</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
