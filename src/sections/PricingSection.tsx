import { motion } from 'framer-motion';
import { Check, ArrowRight, Building, Store, Gift } from 'lucide-react';

/**
 * Pricing Section - Simple: 30€/magasin/mois
 */
const PricingSection = () => {
  const included = [
    'Accès siège illimité',
    'App mobile tous franchisés',
    'Génération IA illimitée',
    'Toutes les plateformes',
    'Analytics & reporting',
    'Support & onboarding',
    'Variations anti-duplicate',
    'Notifications push',
    'Gestion des avis',
    'Mises à jour incluses',
  ];

  const examples = [
    { stores: 50, monthly: 1500, yearly: 18000 },
    { stores: 100, monthly: 3000, yearly: 36000 },
    { stores: 250, monthly: 7500, yearly: 90000 },
  ];

  const competitors = [
    { name: 'SOCi', price: '100-150K€/an', note: 'Complexe, opaque' },
    { name: 'Agence traditionnelle', price: '80-120K€/an', note: 'Pas scalable' },
    { name: 'Hootsuite Enterprise', price: '~50K€/an', note: 'Pas multi-location' },
    { name: 'nSignal', price: '36K€/an', note: '(100 magasins)', highlight: true },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-nsignal-light dark:bg-nsignal-dark-600">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-nsignal-primary/10 text-nsignal-primary text-sm font-medium mb-4">
            Tarification simple
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nsignal-dark dark:text-white mb-6">
            Un prix.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nsignal-primary to-nsignal-secondary">
              Tout inclus.
            </span>
          </h2>
          <p className="text-xl text-nsignal-dark/70 dark:text-white/70 max-w-2xl mx-auto">
            Pas de frais cachés. Pas de modules à ajouter. Juste un prix par magasin.
          </p>
        </motion.div>

        {/* Main pricing card */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-nsignal-dark-500 rounded-3xl shadow-2xl overflow-hidden border-2 border-nsignal-primary">
            {/* Header */}
            <div className="bg-gradient-to-r from-nsignal-primary to-nsignal-secondary p-6 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">nSignal pour votre réseau</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-bold">30€</span>
                <div className="text-left">
                  <p className="text-white/90">/ magasin</p>
                  <p className="text-white/70 text-sm">/ mois</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Included features */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {included.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-nsignal-dark dark:text-white">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Special offer */}
              <div className="bg-gradient-to-r from-nsignal-primary/10 to-nsignal-secondary/10 rounded-xl p-4 mb-8 border border-nsignal-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-nsignal-primary/20 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-nsignal-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-nsignal-dark dark:text-white">
                      🎁 Offre lancement
                    </p>
                    <p className="text-sm text-nsignal-dark/70 dark:text-white/70">
                      Siège <span className="font-semibold text-nsignal-primary">GRATUIT</span> si 10+ magasins actifs payants
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://calendly.com/nsignal/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-nsignal-primary text-white text-center font-semibold rounded-xl hover:bg-nsignal-primary/90 transition-colors"
              >
                Demander une démo
                <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Examples */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-lg font-semibold text-nsignal-dark dark:text-white mb-6">
            Exemples de tarification
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {examples.map((example, index) => (
              <div
                key={index}
                className="bg-white dark:bg-nsignal-dark-500 rounded-xl p-6 text-center border border-nsignal-light-400 dark:border-nsignal-dark-400"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Store className="w-5 h-5 text-nsignal-primary" />
                  <span className="text-2xl font-bold text-nsignal-dark dark:text-white">
                    {example.stores}
                  </span>
                  <span className="text-nsignal-dark/60 dark:text-white/60">magasins</span>
                </div>
                <p className="text-3xl font-bold text-nsignal-primary mb-1">
                  {example.monthly.toLocaleString()}€
                  <span className="text-base font-normal text-nsignal-dark/60 dark:text-white/60">/mois</span>
                </p>
                <p className="text-sm text-nsignal-dark/60 dark:text-white/60">
                  soit {example.yearly.toLocaleString()}€/an
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison */}
        <motion.div
          className="bg-white dark:bg-nsignal-dark-500 rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-lg font-semibold text-nsignal-dark dark:text-white mb-6">
            Comparaison (pour 100 magasins)
          </h3>
          <div className="space-y-3">
            {competitors.map((competitor, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl ${
                  competitor.highlight
                    ? 'bg-gradient-to-r from-nsignal-primary/10 to-nsignal-secondary/10 border-2 border-nsignal-primary'
                    : 'bg-nsignal-light dark:bg-nsignal-dark-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  {competitor.highlight ? (
                    <div className="w-8 h-8 rounded-lg bg-nsignal-primary flex items-center justify-center">
                      <span className="text-white font-bold text-sm">n</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
                  )}
                  <div>
                    <p className={`font-semibold ${competitor.highlight ? 'text-nsignal-primary' : 'text-nsignal-dark dark:text-white'}`}>
                      {competitor.name}
                    </p>
                    <p className="text-xs text-nsignal-dark/60 dark:text-white/60">
                      {competitor.note}
                    </p>
                  </div>
                </div>
                <p className={`font-bold ${competitor.highlight ? 'text-nsignal-primary text-xl' : 'text-nsignal-dark/70 dark:text-white/70 line-through'}`}>
                  {competitor.price}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-nsignal-dark/60 dark:text-white/60">
            <span className="font-semibold text-nsignal-primary">2-4x moins cher</span> que les alternatives
          </p>
        </motion.div>

        {/* Pilot offer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white dark:bg-nsignal-dark-500 rounded-2xl border border-nsignal-light-400 dark:border-nsignal-dark-400">
            <Building className="w-8 h-8 text-nsignal-secondary" />
            <div className="text-left">
              <p className="font-semibold text-nsignal-dark dark:text-white">
                Offre pilote disponible
              </p>
              <p className="text-sm text-nsignal-dark/70 dark:text-white/70">
                Testez sur 20 magasins pendant 2 mois à -50%. Si moins de 60% d'activation, vous ne payez pas la suite.
              </p>
            </div>
            <a
              href="https://calendly.com/nsignal/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-nsignal-secondary text-white font-medium rounded-lg hover:bg-nsignal-secondary/90 transition-colors whitespace-nowrap"
            >
              En savoir plus
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
