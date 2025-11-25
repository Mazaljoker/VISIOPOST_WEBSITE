import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { X, TrendingUp, PiggyBank, ArrowRight } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import Button from './Button';

interface RoiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Constants moved outside to prevent re-creation
const CONSTANTS = {
  REACH_PER_POST: 850,
  POSTS_PER_MONTH: 4,
  AGENCY_COST: 150,
  VISIOPOST_COST: 39,
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 350, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.15 },
  },
};

// --- Sub-component for Animated Numbers ---
const AnimatedNumber = ({ value }: { value: number }) => {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString('fr-FR')
  );

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
};

const RoiModal = ({ isOpen, onClose }: RoiModalProps) => {
  const [shops, setShops] = useState(50);

  // Memoize calculations for performance
  const { totalReach, annualSavings } = useMemo(() => {
    return {
      totalReach: shops * CONSTANTS.REACH_PER_POST * CONSTANTS.POSTS_PER_MONTH,
      annualSavings: (CONSTANTS.AGENCY_COST - CONSTANTS.VISIOPOST_COST) * shops * 12,
    };
  }, [shops]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-visio-violet to-visio-rose p-6 text-white flex justify-between items-center shrink-0">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6" />
                </div>
                Simulateur de Performance
              </h3>
              <button
                onClick={onClose}
                className="hover:bg-white/20 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content (Scrollable if needed on small screens) */}
            <div className="p-6 md:p-8 overflow-y-auto">
              {/* Slider Section */}
              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-gray-700 font-bold text-lg">
                    Taille de votre réseau
                  </label>
                  <span className="text-3xl font-bold text-visio-violet">
                    {shops} <span className="text-base font-normal text-gray-500">magasins</span>
                  </span>
                </div>
                
                <div className="relative w-full h-6 flex items-center">
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={shops}
                    onChange={(e) => setShops(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-visio-rose focus:outline-none focus:ring-2 focus:ring-visio-violet/50 z-10"
                  />
                  {/* Track progress visual fill (optional but nice) */}
                  <div 
                    className="absolute h-2 bg-visio-violet rounded-l-lg pointer-events-none top-1/2 -translate-y-1/2" 
                    style={{ width: `${((shops - 10) / 490) * 100}%` }} 
                  />
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Card 1 : Reach */}
                <motion.div
                  className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 relative overflow-hidden"
                  whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                >
                  <div className="text-blue-600 font-semibold mb-1 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Portée Organique / mois
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    <AnimatedNumber value={totalReach} />
                  </div>
                  <div className="text-sm text-blue-600/80 mt-2 font-medium">
                    Vues locales qualifiées
                  </div>
                </motion.div>

                {/* Card 2 : Savings */}
                <motion.div
                  className="bg-green-50/50 p-6 rounded-2xl border border-green-100 relative overflow-hidden"
                  whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.1)" }}
                >
                  <div className="text-green-600 font-semibold mb-1 flex items-center gap-2">
                    <PiggyBank className="w-4 h-4" />
                    Économie annuelle
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    <AnimatedNumber value={annualSavings} /> €
                  </div>
                  <div className="text-sm text-green-600/80 mt-2 font-medium">
                    vs Agence classique
                  </div>
                </motion.div>
              </div>

              {/* Footer CTA */}
              <div className="text-center bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-gray-500 mb-6 text-sm">
                  *Estimations basées sur les performances moyennes du secteur Retail.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl shadow-visio-violet/20">
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