import { ShieldCheck, Play, ArrowRight, CheckCircle } from 'lucide-react'; // Changé Sparkles par ShieldCheck pour le sérieux
import Button from '../components/Button';
import { HeroSectionProps } from '../types';

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-visio-violet/10 to-visio-rose/10 rounded-full">
              <span className="text-visio-violet font-semibold text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Infrastructure Certifiée Brand Safety
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transformez votre Réseau en{' '}
              <span className="bg-gradient-to-r from-visio-violet via-visio-rose to-visio-bleu bg-clip-text text-transparent">
                Média Décentralisé
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Harmonisez la communication nationale avec l'authenticité locale.
              Éliminez le duplicate content. Décuplez votre portée organique.
              Gardez le contrôle absolu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="lg" className="group">
                <span>Demander une Démo Réseau</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="secondary" size="lg" className="group">
                <Play className="w-5 h-5" />
                <span>Voir le concept (2min)</span>
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Compatible Facebook & LinkedIn</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Conforme RGPD / Brand Safety</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-visio-violet/20 via-visio-rose/20 to-visio-bleu/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              {/* Simulation d'interface Pro */}
              <div className="space-y-4">
                 <div className="flex justify-between items-center border-b pb-4">
                    <div className="text-sm font-bold text-gray-500">CAMPAGNE NATIONALE "Rentrée 2025"</div>
                    <div className="text-green-600 text-sm font-bold bg-green-100 px-2 py-1 rounded">VALIDÉE</div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <div className="text-xs text-gray-400 mb-1">Variation Lyon</div>
                        <div className="text-sm font-medium">"Salut les Gones ! La rentrée approche..."</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <div className="text-xs text-gray-400 mb-1">Variation Bordeaux</div>
                        <div className="text-sm font-medium">"Gavé hâte de vous retrouver pour la rentrée..."</div>
                    </div>
                 </div>
                 <div className="pt-2">
                    <div className="text-xs text-gray-500 mb-2">Portée Estimée vs Duplicate Content</div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-visio-violet to-visio-rose"></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                        <span>Standard</span>
                        <span className="font-bold text-visio-violet">+450% Visibilité</span>
                    </div>
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