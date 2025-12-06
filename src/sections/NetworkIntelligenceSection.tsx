import { motion } from 'framer-motion';
import { Brain, TrendingUp, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * Section Network Intelligence - Teaser V5
 */
const NetworkIntelligenceSection = ({ className = '' }: { className?: string }) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white ${className}`}>
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-visio-violet/20 rounded-full text-visio-rose text-sm font-semibold mb-6">
            <Brain className="w-4 h-4 mr-2" />
            BIENTÔT DISPONIBLE
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Votre réseau devient plus intelligent chaque jour
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Après 1 mois d'utilisation, notre IA analyse les performances de tous vos magasins. 
            Elle identifie ce qui fonctionne et applique les recettes gagnantes à l'ensemble du réseau.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <TrendingUp className="w-10 h-10 text-visio-rose mb-4" />
            <h3 className="text-lg font-semibold mb-2">Apprentissage continu</h3>
            <p className="text-gray-400 text-sm">
              L'IA analyse chaque post publié et son engagement
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <Sparkles className="w-10 h-10 text-visio-violet mb-4" />
            <h3 className="text-lg font-semibold mb-2">Recettes gagnantes</h3>
            <p className="text-gray-400 text-sm">
              Ce qui marche à Lyon est automatiquement proposé à Marseille
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <Brain className="w-10 h-10 text-visio-bleu mb-4" />
            <h3 className="text-lg font-semibold mb-2">Amélioration automatique</h3>
            <p className="text-gray-400 text-sm">
              Plus vous utilisez VisioPost, meilleurs sont vos résultats
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NetworkIntelligenceSection;
