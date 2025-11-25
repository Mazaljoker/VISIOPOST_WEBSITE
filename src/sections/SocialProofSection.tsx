import { motion } from 'framer-motion';
import { partners } from '../data/socialProof';
import { SocialProofSectionProps } from '../types';

/**
 * Section Social Proof - Logos partenaires + Métriques concrètes
 * Preuve par les chiffres pour convaincre les décideurs B2B
 */
const SocialProofSection = ({ className = '' }: SocialProofSectionProps) => {
  const stats = [
    { value: "+300%", label: "Portée Organique", sub: "vs Publication Centralisée" },
    { value: "100%", label: "Brand Safety", sub: "Validation Siège Garantie" },
    { value: "x50", label: "Productivité", sub: "1 clic pour 50 magasins" },
  ];

  return (
    <section className={`py-16 bg-white border-y border-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logos Partenaires */}
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
          Ils pilotent leur réseau avec VisioPost
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 mb-16 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div key={index} className="text-2xl font-bold text-gray-400 hover:text-visio-violet transition-colors">
              {partner.name}
            </div>
          ))}
        </div>

        {/* Cas Concret / Métriques */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
              Cas Réel
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">
              Impact moyen constaté sur un réseau de 50 points de vente
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                className="pt-8 md:pt-0 px-4"
              >
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-visio-violet to-visio-rose bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;
