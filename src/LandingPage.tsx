import React, { useState } from 'react';
import { 
  Sparkles, 
  Users, 
  Zap, 
  BarChart3, 
  Calendar, 
  CheckCircle,
  ChevronDown,
  Play,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-visio-violet via-visio-rose to-visio-bleu bg-clip-text text-transparent">
                VisioPost
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-gray-700 hover:text-visio-violet transition">
                Fonctionnalités
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-visio-violet transition">
                Tarifs
              </a>
              <button className="text-gray-700 hover:text-visio-violet transition">
                Connexion
              </button>
              <button className="bg-gradient-to-r from-visio-violet to-visio-rose text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Démo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
                <button className="group bg-gradient-to-r from-visio-violet to-visio-rose text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Commencer gratuitement</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group border-2 border-visio-violet text-visio-violet px-8 py-4 rounded-xl font-semibold text-lg hover:bg-visio-violet hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Voir la démo</span>
                </button>
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

      {/* Social Proof */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Système U</div>
            <div className="text-2xl font-bold text-gray-400">Biocoop</div>
            <div className="text-2xl font-bold text-gray-400">Intersport</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Vous reconnaissez ces situations ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              "Vous créez du contenu... que personne n'utilise",
              "Vos adhérents n'ont ni le temps ni les compétences pour Facebook",
              "Les outils existants imposent au lieu d'inspirer",
              "Vous payez cher des plateformes faites pour des franchises corporate"
            ].map((problem, index) => (
              <div key={index} className="p-6 bg-red-50 border-l-4 border-red-500 text-left rounded-lg">
                <p className="text-gray-700 flex items-start space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span>{problem}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-visio-violet/5 to-visio-rose/5 rounded-2xl">
            <p className="text-xl font-semibold text-gray-900">
              C'est normal. Vous êtes une coopérative, pas Starbucks.
            </p>
          </div>
        </div>
      </section>

      {/* Solution - How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment VisioPost résout tout ça
            </h2>
            <p className="text-xl text-gray-600">Simple. Rapide. Efficace.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-visio-violet transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-visio-violet to-visio-rose flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent">
                    01
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  CENTRALE CRÉE
                </h3>

                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Prenez une photo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>L'IA GPT-4 Vision génère un post</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Créez des "posts suggérés"</span>
                  </li>
                </ul>

                <div className="mt-6 p-3 bg-visio-violet/10 rounded-lg">
                  <p className="text-sm font-semibold text-visio-violet">⏱️ 30 secondes par post</p>
                </div>
              </div>

              <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-visio-rose" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-visio-rose transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-visio-rose to-visio-bleu flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-visio-rose to-visio-bleu bg-clip-text text-transparent">
                    02
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ADHÉRENTS REÇOIVENT
                </h3>

                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Inbox de posts suggérés</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Prévisualisent sur leur page</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Publient en 1 clic (ou pas)</span>
                  </li>
                </ul>

                <div className="mt-6 p-3 bg-visio-rose/10 rounded-lg">
                  <p className="text-sm font-semibold text-visio-rose">💡 Ou créent leurs propres posts IA</p>
                </div>
              </div>

              <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-visio-bleu" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-visio-bleu transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-visio-bleu to-visio-violet flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-visio-bleu to-visio-violet bg-clip-text text-transparent">
                  03
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                RÉSULTATS
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Stats par magasin</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Dashboard consolidé centrale</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>ROI temps mesurable</span>
                </li>
              </ul>

              <div className="mt-6 p-3 bg-visio-bleu/10 rounded-lg">
                <p className="text-sm font-semibold text-visio-bleu">📊 Vision complète réseau</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-visio-violet via-visio-rose to-visio-bleu text-white px-12 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-3">
              <Sparkles className="w-6 h-6" />
              <span>Essayer gratuitement</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-xl text-gray-600">Une plateforme complète pour vos coopératives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Studio IA",
                description: "GPT-4 Vision analyse vos photos et crée des posts professionnels automatiquement",
                gradient: "from-visio-violet to-visio-rose"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Posts Suggérés",
                description: "Distribution automatique de contenu HQ vers tous vos adhérents",
                gradient: "from-visio-rose to-visio-bleu"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Statistiques",
                description: "Analytics par magasin et consolidées pour mesurer votre impact",
                gradient: "from-visio-bleu to-visio-violet"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Calendrier",
                description: "Planifiez vos publications à l'avance et restez organisé",
                gradient: "from-visio-violet to-visio-bleu"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Autonomie",
                description: "Adhérents choisissent ce qu'ils publient - pas d'approbation imposée",
                gradient: "from-visio-rose to-visio-violet"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Illimité",
                description: "Utilisateurs et pages illimités sans frais supplémentaires",
                gradient: "from-visio-bleu to-visio-rose"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
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
                {[
                  "2h par post",
                  "Graphiste nécessaire",
                  "20% adoption adhérents",
                  "HQ paie cher",
                  "Frustration générale"
                ].map((item, index) => (
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
                {[
                  "30 secondes par post",
                  "IA fait tout automatiquement",
                  "80% adhérents publient",
                  "HQ gratuit",
                  "Autonomie & efficacité"
                ].map((item, index) => (
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

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tarification Simple
            </h2>
            <p className="text-xl text-gray-600">Transparent. Équitable. Sans surprise.</p>
          </div>

          {/* Centrale Pricing */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu p-1 rounded-3xl">
              <div className="bg-white rounded-3xl p-10 text-center">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-visio-violet/10 to-visio-rose/10 rounded-full mb-6">
                  <span className="text-visio-violet font-semibold">⭐ OFFRE CENTRALE</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2">CENTRALE</h3>
                
                <div className="mb-8">
                  <span className="text-6xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent">
                    0€
                  </span>
                  <span className="text-2xl text-gray-600">/mois</span>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  Gratuit si ≥10 adhérents payants
                </p>

                <ul className="space-y-4 text-left mb-8">
                  {[
                    "Studio IA illimité",
                    "Distribution automatique",
                    "Dashboard stats consolidées",
                    "Support prioritaire",
                    "Utilisateurs illimités"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-visio-violet to-visio-rose text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300">
                  Commencer gratuitement
                </button>
              </div>
            </div>
          </div>

          {/* Adhérents Pricing */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* FREE */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">FREE</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">0€</span>
                <span className="text-gray-600">/mois</span>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "1 page Facebook",
                  "5 posts IA/mois",
                  "Réception playlists",
                  "Stats basiques"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-visio-violet hover:text-visio-violet transition">
                Essayer
              </button>
            </div>

            {/* STARTER - Most Popular */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border-2 border-visio-rose transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-visio-rose to-visio-bleu text-white px-6 py-2 rounded-full text-sm font-semibold">
                  ⭐ POPULAIRE
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">STARTER</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent">
                  15€
                </span>
                <span className="text-gray-600">/mois</span>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "1 page Facebook",
                  "50 posts IA/mois",
                  "Réception playlists",
                  "Stats avancées",
                  "Sans watermark"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-visio-rose" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-visio-violet to-visio-rose text-white py-3 rounded-xl font-semibold hover:shadow-2xl transition">
                Choisir Starter
              </button>
            </div>

            {/* PRO */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">PRO</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">29€</span>
                <span className="text-gray-600">/mois</span>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "3 pages Facebook",
                  "200 posts IA/mois",
                  "Calendrier éditorial",
                  "Stats complètes",
                  "Exports données"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-visio-bleu" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full border-2 border-visio-bleu text-visio-bleu py-3 rounded-xl font-semibold hover:bg-visio-bleu hover:text-white transition">
                Choisir Pro
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              💡 <span className="font-semibold">Pas de carte bancaire</span> pour essayer gratuitement
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Dois-je approuver chaque post de mes adhérents ?",
                a: "Non ! Vous créez des suggestions que vos adhérents choisissent de publier ou pas. C'est l'esprit coopératif : vous inspirez, vous n'imposez pas."
              },
              {
                q: "L'IA crée vraiment des posts professionnels ?",
                a: "Oui, GPT-4 Vision analyse votre photo et génère automatiquement un texte engageant avec hashtags adaptés. Essayez gratuitement pour constater la qualité."
              },
              {
                q: "Combien coûte la centrale ?",
                a: "0€ si vous avez minimum 10 adhérents qui s'abonnent (à partir de 15€/mois). C'est gagnant-gagnant : vous aidez vos adhérents, ils financent l'outil."
              },
              {
                q: "Puis-je gérer plusieurs pages Facebook ?",
                a: "Oui ! Le plan PRO (29€/mois) inclut 3 pages avec distribution automatique. Parfait si vous avez plusieurs établissements."
              },
              {
                q: "Quelle différence avec Buffer ou Hootsuite ?",
                a: "Ces outils sont faits pour des entreprises classiques. VisioPost est conçu spécifiquement pour les coopératives : distribution de suggestions + création IA + respect de l'autonomie locale."
              },
              {
                q: "Mes données sont-elles sécurisées ?",
                a: "Absolument. Hébergement en Suisse, conformité RGPD, chiffrement AES-256. Vos contenus et statistiques restent privés."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.q}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-visio-violet transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Rejoignez les coopératives qui transforment leur communication
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              Commencez gratuitement. Aucune carte bancaire requise.
            </p>

            <button className="bg-white text-visio-violet px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-3">
              <Sparkles className="w-6 h-6" />
              <span>Créez votre premier post IA maintenant</span>
              <ArrowRight className="w-6 h-6" />
            </button>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-2xl font-bold">VisioPost</span>
              </div>
              <p className="text-gray-400 mb-6">
                La plateforme sociale des coopératives qui respectent l'autonomie de leurs adhérents.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-visio-rose transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-visio-bleu transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-visio-violet transition">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Produit */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Produit</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Fonctionnalités</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Tarifs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Démo</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Changelog</a></li>
              </ul>
            </div>

            {/* Ressources */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Ressources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Vidéos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">API</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Statut</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 VisioPost - Développé par VisioScreen, Suisse
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">CGV</a>
                <a href="#" className="hover:text-white transition">Mentions légales</a>
                <a href="#" className="hover:text-white transition">Confidentialité</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
