import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, PiggyBank, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';

interface RoiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: { duration: 0.2 },
  },
};

const RoiModal = ({ isOpen, onClose }: RoiModalProps) => {
  const [shops, setShops] = useState(50);

  // Algorithme de calcul fictif mais réaliste
  const reachPerPost = 850; // Portée moyenne organique boostée
  const postsPerMonth = 4;

  // Calculs
  const totalReach = (shops * reachPerPost * postsPerMonth).toLocaleString('fr-FR');
  const agencyCost = shops * 150; // Coût moyen agence par mois
  const visiopostCost = shops * 39; // Coût Visiopost
  const savings = ((agencyCost - visiopostCost) * 12).toLocaleString('fr-FR');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop sombre */}
          <motion.div
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* La Modale */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-visio-violet to-visio-rose p-6 text-white flex justify-between items-center">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Simulateur de Performance
              </h3>
              <button
                onClick={onClose}
                className="hover:bg-white/20 p-2 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-8">
                <label className="block text-gray-700 font-bold mb-4 text-lg">
                  Combien de points de vente dans votre réseau ?
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={shops}
                  onChange={(e) => setShops(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-visio-rose"
                />
                <motion.div
                  className="text-center mt-2 font-bold text-3xl text-visio-violet"
                  key={shops}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {shops} magasins
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Card 1 : Portée */}
                <motion.div
                  className="bg-blue-50 p-6 rounded-xl border border-blue-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Portée Organique / mois
                  </div>
                  <motion.div
                    className="text-3xl font-bold text-gray-900"
                    key={totalReach}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                  >
                    {totalReach}
                  </motion.div>
                  <div className="text-sm text-gray-500 mt-1">
                    Vues locales qualifiées
                  </div>
                </motion.div>

                {/* Card 2 : Économie */}
                <motion.div
                  className="bg-green-50 p-6 rounded-xl border border-green-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-green-600 font-semibold mb-2 flex items-center gap-2">
                    <PiggyBank className="w-4 h-4" />
                    Économie annuelle est.
                  </div>
                  <motion.div
                    className="text-3xl font-bold text-gray-900"
                    key={savings}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                  >
                    {savings} €
                  </motion.div>
                  <div className="text-sm text-gray-500 mt-1">
                    vs Agence digitale classique
                  </div>
                </motion.div>
              </div>

              <div className="text-center bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 mb-4">
                  Ces chiffres sont des estimations basées sur la moyenne de nos
                  clients.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    <span>Télécharger mon rapport détaillé</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RoiModal;
