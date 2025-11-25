import { CheckCircle } from 'lucide-react';
import { BeforeAfterSectionProps } from '../types';

/**
 * Section Avant/Après - Comparaison avant et après VisioPost
 * Lignes originales : 375-434 (~61 lignes)
 */
const BeforeAfterSection = ({ className = '' }: BeforeAfterSectionProps) => {
  const avant = [
    "Contenu Dupliqué (Pénalisé)",
    "Portée Organique proche de 0",
    "Risque d'image (Amateurisme)",
    "Réseau passif et silencieux",
    "Aucune Data centralisée"
  ];

  const apres = [
    "Contenu 100% Unique & Local",
    "Reach Maximisé (Boost Algo)",
    "Image de Marque Contrôlée",
    "Réseau Activé & Puissant",
    "Pilotage par la Data"
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Avant VisioPost vs Après
          </h2>
          <p className="text-xl text-gray-600">La différence est spectaculaire</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Avant */}
          <div className="bg-red-50 rounded-2xl shadow-xl p-8 border-2 border-red-200">
            <div className="text-center mb-6">
              <span className="text-4xl">❌</span>
              <h3 className="text-2xl font-bold text-red-700 mt-4">AVANT</h3>
            </div>

            <ul className="space-y-4">
              {avant.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Après */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl p-8 border-2 border-green-200">
            <div className="text-center mb-6">
              <span className="text-4xl">✅</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent mt-4">
                APRÈS
              </h3>
            </div>

            <ul className="space-y-4">
              {apres.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-green-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
