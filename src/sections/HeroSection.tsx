import { Sparkles, Play, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { HeroSectionProps } from '../types';

/**
 * Section Hero - Message principal + CTA + vidéo démo
 * Lignes originales : 57-127 (~72 lignes)
 */
const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-visio-violet/10 to-visio-rose/10 rounded-full">
              <span className="text-visio-violet font-semibold text-sm">
                🚀 Powered by GPT-4 Vision
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              La plateforme sociale des{' '}
              <span className="bg-gradient-to-r from-visio-violet via-visio-rose to-visio-bleu bg-clip-text text-transparent">
                coopératives
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Créez du contenu IA en 30 secondes. Distribuez à votre réseau.
              Laissez-les choisir ce qu'ils publient. Gratuitement pour vous.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="lg" className="group">
                <Sparkles className="w-5 h-5" />
                <span>Commencer gratuitement</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="secondary" size="lg" className="group">
                <Play className="w-5 h-5" />
                <span>Voir la démo</span>
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Gratuit pour votre centrale</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Sans carte bancaire</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-visio-violet/20 via-visio-rose/20 to-visio-bleu/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-20 h-20 mx-auto text-visio-violet mb-4" />
                  <p className="text-gray-600 font-semibold">Vidéo démo 30 secondes</p>
                  <p className="text-sm text-gray-500 mt-2">Photo → Post IA → Publié</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-visio-violet/5 to-visio-rose/5 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Temps de création</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent">
                    30s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
