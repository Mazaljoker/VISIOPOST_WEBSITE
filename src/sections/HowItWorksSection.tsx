import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, Store, Sparkles, Shield, Eye } from 'lucide-react';

const mainSteps = [
  {
    icon: Building2,
    title: 'Siège',
    description: 'Crée une campagne avec image + brief',
  },
  {
    icon: Sparkles,
    title: 'nSignal',
    description: 'Génère n variations uniques avec notre IA',
    highlight: true,
  },
  {
    icon: Store,
    title: 'Magasins',
    description: 'Reçoivent et publient leur version unique',
  },
];

const controlFeatures = [
  {
    icon: Shield,
    title: 'Brand Safety 100%',
    description: 'Chaque variation respecte votre charte graphique et éditoriale',
  },
  {
    icon: Eye,
    title: 'Validation Siège',
    description: 'Prévisualisation et approbation avant diffusion',
  },
];


/**
 * Section How It Works - Charte Graphique nSignal 2025
 */
const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nsignal-light dark:bg-nsignal-dark-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nsignal-dark dark:text-nsignal-light mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-nsignal-light-700 dark:text-nsignal-light-600 max-w-2xl mx-auto">
            Un processus simple en 3 étapes pour diffuser du contenu unique sur tout votre réseau
          </p>
        </motion.div>

        {/* Main Flow: Siège → nSignal → Magasins */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
          {mainSteps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className={`flex flex-col items-center p-6 rounded-2xl w-full md:w-64 ${
                  step.highlight
                    ? 'bg-gradient-to-br from-nsignal-primary/10 to-nsignal-secondary/10 border-2 border-nsignal-primary'
                    : 'bg-white dark:bg-nsignal-dark border border-nsignal-light-400 dark:border-nsignal-dark-400'
                } shadow-card`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  step.highlight
                    ? 'bg-gradient-to-br from-nsignal-primary to-nsignal-secondary'
                    : 'bg-gradient-to-br from-nsignal-dark to-nsignal-primary'
                }`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  step.highlight ? 'text-nsignal-primary' : 'text-nsignal-dark dark:text-nsignal-light'
                }`}>
                  {step.title}
                </h3>
                <p className="text-sm text-nsignal-light-700 dark:text-nsignal-light-600 text-center">
                  {step.description}
                </p>
              </motion.div>
              
              {index < mainSteps.length - 1 && (
                <motion.div
                  className="hidden md:block"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                >
                  <ArrowRight className="w-8 h-8 text-nsignal-primary" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Vous gardez le contrôle */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-nsignal-dark dark:text-nsignal-light text-center mb-8">
            Vous gardez le <span className="text-nsignal-primary">contrôle</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {controlFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-white dark:bg-nsignal-dark rounded-xl p-5 border border-nsignal-light-400 dark:border-nsignal-dark-400 shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-nsignal-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-nsignal-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-nsignal-dark dark:text-nsignal-light mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-nsignal-light-700 dark:text-nsignal-light-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
