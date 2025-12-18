import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { X, TrendingUp, PiggyBank, ArrowRight, Users, Target, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { roiConfig, pricingPlans } from '../data/pricing';
import { DegressivityTier } from '../types';
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
const AnimatedNumber = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current: number) =>
    Math.round(current).toLocaleString('fr-FR')
  );

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <span>
      <motion.span>{display}</motion.span>{suffix}
    </span>
  );
};

// --- Metric Card Component ---
interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  sublabel: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

const MetricCard = ({ icon, label, value, suffix = '', sublabel, color }: MetricCardProps) => {
  const colorClasses = {
    blue: 'bg-nsignal-primary/10 border-nsignal-primary/30 text-nsignal-primary',
    green: 'bg-green-50 border-green-200 text-green-600',
    purple: 'bg-nsignal-secondary/10 border-nsignal-secondary/30 text-nsignal-secondary',
    orange: 'bg-orange-50 border-orange-200 text-orange-600',
    red: 'bg-red-50 border-red-200 text-red-600',
  };

  return (
    <motion.div
      className={`p-4 rounded-xl border ${colorClasses[color]}`}
      whileHover={{ y: -2, scale: 1.02 }}
    >
      <div className="font-semibold text-sm flex items-center gap-2 mb-1">
        {icon}
        {label}
      </div>
      <div className="text-2xl font-extrabold text-nsignal-dark dark:text-dark-text">
        <AnimatedNumber value={value} suffix={suffix} />
      </div>
      <div className="text-xs opacity-80 mt-1">{sublabel}</div>
    </motion.div>
  );
};

const RoiModal = ({ isOpen, onClose }: RoiModalProps) => {
  const [shops, setShops] = useState(50);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro'>('starter');

  // Get plan price based on selection and degressivity
  const getPlanPrice = useMemo(() => {
    const plan = pricingPlans.find(p => p.variant === selectedPlan);
    if (!plan || !plan.degressivity) return selectedPlan === 'starter' ? 30 : 45;
    
    const tier = plan.degressivity.find((d: DegressivityTier) => shops >= d.min && shops <= d.max);
    return tier?.price || plan.price || 30;
  }, [shops, selectedPlan]);

  // Memoize all calculations
  const metrics = useMemo(() => {
    const { reachPerPost, postsPerMonth, engagementRate, conversionRate, averageBasket, agencyCostPerShop, duplicatePenalty } = roiConfig;
    
    // Portée avec nReach (pas de pénalité)
    const reachWithNReach = shops * reachPerPost * postsPerMonth;
    
    // Portée sans nReach (pénalité duplicate)
    const reachWithoutNReach = Math.round(reachWithNReach * (1 - duplicatePenalty));
    
    // Gain de portée
    const reachGain = reachWithNReach - reachWithoutNReach;
    const reachGainPercent = Math.round((reachGain / reachWithoutNReach) * 100);
    
    // Engagement
    const engagementWithNReach = Math.round(reachWithNReach * engagementRate);
    const engagementWithoutNReach = Math.round(reachWithoutNReach * engagementRate);
    
    // Conversions potentielles
    const conversions = Math.round(engagementWithNReach * conversionRate);
    
    // Revenu additionnel estimé
    const additionalRevenue = conversions * averageBasket;
    
    // Coût nReach
    const nreachCost = shops * getPlanPrice;
    
    // Économie vs agence
    const agencyCost = shops * agencyCostPerShop;
    const savingsVsAgency = agencyCost - nreachCost;
    
    // ROI
    const totalBenefit = additionalRevenue + savingsVsAgency;
    const roi = Math.round((totalBenefit / nreachCost) * 100);
    
    return {
      reachWithNReach,
      reachWithoutNReach,
      reachGain,
      reachGainPercent,
      engagementWithNReach,
      engagementWithoutNReach,
      conversions,
      additionalRevenue,
      nreachCost,
      agencyCost,
      savingsVsAgency,
      roi
    };
  }, [shops, getPlanPrice]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-nsignal-dark/60 backdrop-blur-md"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white dark:bg-dark-surface rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-nsignal-dark to-nsignal-secondary p-6 text-white flex justify-between items-center shrink-0">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6" />
                </div>
                Simulateur ROI nReach Studio
              </h3>
              <button
                onClick={onClose}
                className="hover:bg-white/20 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto">
              {/* Controls */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Slider */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <label className="text-nsignal-dark dark:text-dark-text font-bold">
                      Taille du réseau
                    </label>
                    <span className="text-2xl font-bold text-nsignal-primary">
                      {shops} <span className="text-sm font-normal text-light-text-muted dark:text-dark-text-muted">points de vente</span>
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
                      className="w-full h-2 bg-light-border dark:bg-dark-border rounded-lg appearance-none cursor-pointer accent-nsignal-primary focus:outline-none z-10"
                    />
                    <div 
                      className="absolute h-2 bg-gradient-to-r from-nsignal-primary to-nsignal-secondary rounded-l-lg pointer-events-none top-1/2 -translate-y-1/2" 
                      style={{ width: `${((shops - 10) / 490) * 100}%` }} 
                    />
                  </div>
                  <div className="flex justify-between text-xs text-light-text-muted dark:text-dark-text-muted mt-1">
                    <span>10</span>
                    <span>250</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Plan selector */}
                <div>
                  <label className="text-nsignal-dark dark:text-dark-text font-bold block mb-3">
                    Plan sélectionné
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedPlan('starter')}
                      className={`flex-1 p-3 rounded-xl border-2 transition-all ${
                        selectedPlan === 'starter'
                          ? 'border-nsignal-primary bg-nsignal-primary/5'
                          : 'border-light-border dark:border-dark-border hover:border-nsignal-primary/50'
                      }`}
                    >
                      <div className="font-bold text-nsignal-dark dark:text-dark-text">Essentiel</div>
                      <div className="text-sm text-light-text-muted dark:text-dark-text-muted">{getPlanPrice}€/user</div>
                    </button>
                    <button
                      onClick={() => setSelectedPlan('pro')}
                      className={`flex-1 p-3 rounded-xl border-2 transition-all ${
                        selectedPlan === 'pro'
                          ? 'border-nsignal-secondary bg-nsignal-secondary/5'
                          : 'border-light-border dark:border-dark-border hover:border-nsignal-secondary/50'
                      }`}
                    >
                      <div className="font-bold text-nsignal-dark dark:text-dark-text">Business</div>
                      <div className="text-sm text-light-text-muted dark:text-dark-text-muted">{selectedPlan === 'pro' ? getPlanPrice : 45}€/user</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Comparison: Without vs With */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
                  <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 font-semibold mb-3">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Sans nReach</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-light-text-muted dark:text-dark-text-muted">Portée mensuelle</span>
                      <span className="font-bold text-red-600 dark:text-red-400">{metrics.reachWithoutNReach.toLocaleString('fr-FR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-light-text-muted dark:text-dark-text-muted">Engagement</span>
                      <span className="font-bold text-red-600 dark:text-red-400">{metrics.engagementWithoutNReach.toLocaleString('fr-FR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-light-text-muted dark:text-dark-text-muted">Pénalité duplicate</span>
                      <span className="font-bold text-red-600 dark:text-red-400">-80%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-nsignal-primary/10 rounded-xl p-4 border border-nsignal-primary/30">
                  <div className="flex items-center space-x-2 text-nsignal-primary font-semibold mb-3">
                    <CheckCircle className="w-4 h-4" />
                    <span>Avec nReach Studio</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-light-text-muted dark:text-dark-text-muted">Portée mensuelle</span>
                      <span className="font-bold text-nsignal-primary">{metrics.reachWithNReach.toLocaleString('fr-FR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-light-text-muted dark:text-dark-text-muted">Engagement</span>
                      <span className="font-bold text-nsignal-primary">{metrics.engagementWithNReach.toLocaleString('fr-FR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-light-text-muted dark:text-dark-text-muted">Gain de portée</span>
                      <span className="font-bold text-nsignal-primary">+{metrics.reachGainPercent}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <MetricCard
                  icon={<TrendingUp className="w-4 h-4" />}
                  label="Portée gagnée"
                  value={metrics.reachGain}
                  sublabel="vues/mois"
                  color="blue"
                />
                <MetricCard
                  icon={<Users className="w-4 h-4" />}
                  label="Conversions"
                  value={metrics.conversions}
                  sublabel="clients potentiels/mois"
                  color="purple"
                />
                <MetricCard
                  icon={<PiggyBank className="w-4 h-4" />}
                  label="Économie vs agence"
                  value={metrics.savingsVsAgency}
                  suffix="€"
                  sublabel="par mois"
                  color="green"
                />
                <MetricCard
                  icon={<Target className="w-4 h-4" />}
                  label="ROI estimé"
                  value={metrics.roi}
                  suffix="%"
                  sublabel="retour sur investissement"
                  color="orange"
                />
              </div>

              {/* Cost breakdown */}
              <div className="bg-light-surface dark:bg-dark-bg rounded-xl p-4 border border-light-border dark:border-dark-border mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-nsignal-dark dark:text-dark-text">Récapitulatif mensuel</span>
                  <span className="text-xs text-light-text-muted dark:text-dark-text-muted">Plan {selectedPlan === 'starter' ? 'Essentiel' : 'Business'}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-light-text-muted dark:text-dark-text-muted">{shops} utilisateurs × {getPlanPrice}€</span>
                    <span className="font-bold text-nsignal-dark dark:text-dark-text">{metrics.nreachCost.toLocaleString('fr-FR')}€/mois</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Économie vs agence ({roiConfig.agencyCostPerShop}€/PDV)</span>
                    <span className="font-bold">+{metrics.savingsVsAgency.toLocaleString('fr-FR')}€/mois</span>
                  </div>
                  <div className="flex justify-between text-nsignal-primary">
                    <span>Revenu additionnel estimé</span>
                    <span className="font-bold">+{metrics.additionalRevenue.toLocaleString('fr-FR')}€/mois</span>
                  </div>
                  <div className="border-t border-light-border dark:border-dark-border pt-2 mt-2 flex justify-between">
                    <span className="font-bold text-nsignal-dark dark:text-dark-text">Bénéfice net estimé</span>
                    <span className="font-bold text-nsignal-primary text-lg">
                      +{(metrics.savingsVsAgency + metrics.additionalRevenue - metrics.nreachCost).toLocaleString('fr-FR')}€/mois
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="text-center">
                <p className="text-light-text-muted dark:text-dark-text-muted mb-4 text-xs">
                  *Estimations basées sur les performances moyennes du secteur Retail. Résultats réels variables.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl shadow-nsignal-primary/20">
                    <Zap className="w-5 h-5 mr-2" />
                    <span>Demander mon devis personnalisé</span>
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
