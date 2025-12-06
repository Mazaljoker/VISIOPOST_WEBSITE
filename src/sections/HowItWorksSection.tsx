import { motion } from 'framer-motion';
import { Building2, Sparkles, Store, ArrowRight, CheckCircle, Settings } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
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

const arrowVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

interface FlowStepProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  details: string[];
  gradient: string;
  delay?: number;
}

const FlowStep = ({ icon, title, subtitle, details, gradient, delay = 0 }: FlowStepProps) => (
  <motion.div
    variants={stepVariants}
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg mb-4`}
      animate={pulseAnimation}
      transition={{ ...pulseAnimation.transition, delay }}
    >
      {icon}
    </motion.div>
    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
    <div className="space-y-1">
      {details.map((detail, index) => (
        <motion.div
          key={index}
          className="flex items-center space-x-2 text-xs text-gray-600"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.2 + index * 0.1 }}
        >
          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
          <span>{detail}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AnimatedArrow = () => (
  <motion.div
    variants={arrowVariants}
    className="hidden md:flex items-center justify-center px-4"
  >
    <motion.div
      className="flex items-center"
      animate={{ x: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="w-12 lg:w-20 h-0.5 bg-gradient-to-r from-visio-violet to-visio-rose" />
      <ArrowRight className="w-6 h-6 text-visio-rose -ml-1" />
    </motion.div>
  </motion.div>
);

const MobileArrow = () => (
  <motion.div
    className="flex md:hidden justify-center py-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <ArrowRight className="w-6 h-6 text-visio-rose rotate-90" />
    </motion.div>
  </motion.div>
);

/**
 * Section How It Works - Flowchart animé
 * Montre le processus Siège → VisioPost → Magasins
 */
const HowItWorksSection = ({ className = '' }: { className?: string }) => {
  const steps = [
    {
      icon: <Building2 className="w-10 h-10 md:w-12 md:h-12 text-white" />,
      title: "Le Siège",
      subtitle: "Crée une campagne",
      details: [
        "Upload visuel + message",
        "Définit le ton de marque",
        "Valide avant diffusion"
      ],
      gradient: "from-visio-violet to-purple-600"
    },
    {
      icon: <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-white" />,
      title: "VisioPost",
      subtitle: "Génère les variations",
      details: [
        "500 versions uniques",
        "Personnalisation locale",
        "0% duplicate content"
      ],
      gradient: "from-visio-rose to-pink-600"
    },
    {
      icon: <Store className="w-10 h-10 md:w-12 md:h-12 text-white" />,
      title: "Les Magasins",
      subtitle: "Publient en 1 clic",
      details: [
        "Notification reçue",
        "Choix du post suggéré",
        "Publication immédiate"
      ],
      gradient: "from-visio-bleu to-blue-600"
    }
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            De la création à la publication, tout est fluide.
          </p>
        </motion.div>

        {/* Flowchart */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <FlowStep {...steps[0]} delay={0} />
          <AnimatedArrow />
          <MobileArrow />
          <FlowStep {...steps[1]} delay={0.3} />
          <AnimatedArrow />
          <MobileArrow />
          <FlowStep {...steps[2]} delay={0.6} />
        </motion.div>

        {/* Mode Toggle Teaser */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Settings className="w-5 h-5 text-visio-violet" />
              <span className="font-semibold text-gray-900">Vous gardez le contrôle</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                className="flex items-center space-x-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-200"
                whileHover={{ scale: 1.02, borderColor: '#8B5CF6' }}
              >
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div>
                  <div className="font-medium text-gray-900">Mode Automatique</div>
                  <div className="text-xs text-gray-500">Publication directe après validation siège</div>
                </div>
              </motion.div>

              <span className="text-gray-400 font-medium">ou</span>

              <motion.div
                className="flex items-center space-x-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-200"
                whileHover={{ scale: 1.02, borderColor: '#EC4899' }}
              >
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <div>
                  <div className="font-medium text-gray-900">Mode Manuel</div>
                  <div className="text-xs text-gray-500">Le magasin choisit parmi les suggestions</div>
                </div>
              </motion.div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              Chaque réseau définit le niveau d'autonomie de ses points de vente
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
