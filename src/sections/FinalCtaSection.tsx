import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { FinalCtaSectionProps } from '../types';

/**
 * Section Final CTA - Appel à l'action final avec témoignage
 * Lignes originales : 651-689 (~40 lignes)
 */
const FinalCtaSection = ({ className = '' }: FinalCtaSectionProps) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez les coopératives qui transforment leur communication
          </h2>

          <p className="text-xl text-white/90 mb-8">
            Commencez gratuitement. Aucune carte bancaire requise.
          </p>

          <Button
            variant="ghost"
            size="lg"
            className="bg-white text-visio-violet px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl inline-flex items-center space-x-3"
          >
            <Sparkles className="w-6 h-6" />
            <span>Créez votre premier post IA maintenant</span>
            <ArrowRight className="w-6 h-6" />
          </Button>

          <div className="mt-8 flex items-center justify-center space-x-8 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Gratuit pour commencer</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Installation en 2 minutes</span>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <p className="text-white italic">
              "Nos adhérents publient enfin régulièrement et les résultats sont là !"
            </p>
            <p className="text-white/80 mt-2 text-sm">
              — Directeur Marketing, Coopérative partenaire
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
