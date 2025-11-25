import { Sparkles, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import Button from '../components/Button';
import { FinalCtaSectionProps } from '../types';

/**
 * Section Final CTA - Appel à l'action B2B pour réseaux
 * Transformation : "Essayer gratuit" -> "Parler à un Expert Réseau"
 */
const FinalCtaSection = ({ className = '' }: FinalCtaSectionProps) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          {/* Background effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-50"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Prêt à industrialiser votre présence locale ?
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
            Ne laissez plus vos 50 points de vente invisibles.
            Lancez un pilote sur 20 magasins en moins de 15 jours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button
              variant="ghost"
              size="lg"
              className="bg-white text-visio-violet px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Parler à un Expert Réseau</span>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg flex items-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              <span>Simuler le ROI</span>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm relative z-10">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Conformité RGPD validée</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Setup Pilot offert (offre limitée)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
