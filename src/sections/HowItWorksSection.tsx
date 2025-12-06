import { motion } from 'framer-motion';
import { Building2, ArrowRight, Store, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Building2,
    title: 'Siège',
    description: 'Crée une campagne avec image + brief',
  },
  {
    icon: Sparkles,
    title: 'nReach Studio',
    description: 'Génère n variations uniques avec l\'IA',
    highlight: true,
  },
  {
    icon: Store,
    title: 'Magasins',
    description: 'Reçoivent et publient leur version unique',
  },
];

/**
 * Section How It Works - Flowchart animé
 * Rebrandé pour nReach Studio
 */
const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nreach-midnight dark:text-dark-text mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-2xl mx-auto">
            Un processus simple en 3 étapes pour diffuser du contenu unique sur tout votre réseau
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <>
              <motion.div
                key={index}
                className={`flex flex-col items-center p-6 rounded-2xl w-full md:w-64 ${
                  step.highlight
                    ? 'bg-gradient-to-br from-nreach-electric/10 to-nreach-lavande/10 border-2 border-nreach-electric'
                    : 'bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border'
                } shadow-card`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  step.highlight
                    ? 'bg-gradient-to-br from-nreach-electric to-nreach-lavande'
                    : 'bg-light-surface dark:bg-dark-surface'
                }`}>
                  <step.icon className={`w-8 h-8 ${
                    step.highlight ? 'text-white' : 'text-nreach-midnight dark:text-dark-text'
                  }`} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  step.highlight ? 'text-nreach-electric' : 'text-nreach-midnight dark:text-dark-text'
                }`}>
                  {step.title}
                </h3>
                <p className="text-sm text-light-text-muted dark:text-dark-text-muted text-center">
                  {step.description}
                </p>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                >
                  <ArrowRight className="w-8 h-8 text-nreach-electric" />
                </motion.div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
