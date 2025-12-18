import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Glasses, ShoppingCart, Dumbbell, Scissors, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

interface UseCaseData {
  id: string;
  icon: React.ReactNode;
  sector: string;
  color: string;
  bgGradient: string;
  posts: {
    location: string;
    content: string;
    likes: number;
    comments: number;
    shares: number;
  }[];
}

const useCases: UseCaseData[] = [
  {
    id: 'optique',
    icon: <Glasses className="w-5 h-5" />,
    sector: 'Optique',
    color: 'text-nsignal-secondary',
    bgGradient: 'from-nsignal-secondary to-nsignal-primary',
    posts: [
      {
        location: 'Lyon',
        content: "Ici à Lyon, on craque pour les nouvelles Ray-Ban ! ☀️ Essayage gratuit ce weekend !",
        likes: 156,
        comments: 23,
        shares: 12
      },
      {
        location: 'Marseille',
        content: "Marseille + soleil = lunettes obligatoires ! 😎 -20% sur la collection été, rdv en boutique !",
        likes: 203,
        comments: 31,
        shares: 18
      },
      {
        location: 'Bordeaux',
        content: "Les Bordelais le savent : le style commence par le regard 👓 Nouvelle collection dispo !",
        likes: 178,
        comments: 19,
        shares: 14
      }
    ]
  },
  {
    id: 'distribution',
    icon: <ShoppingCart className="w-5 h-5" />,
    sector: 'Grande Distribution',
    color: 'text-green-600',
    bgGradient: 'from-green-500 to-emerald-500',
    posts: [
      {
        location: 'Rennes',
        content: "🍎 Arrivage de pommes bio bretonnes ce matin ! Direct du producteur à Rennes. Quantités limitées !",
        likes: 234,
        comments: 45,
        shares: 67
      },
      {
        location: 'Toulouse',
        content: "Toulouse, c'est cassoulet ! 🫘 Tous les ingrédients locaux en promo cette semaine. À vos marmites !",
        likes: 312,
        comments: 89,
        shares: 54
      },
      {
        location: 'Lille',
        content: "Les Ch'tis aiment le bon ! 🧀 Maroilles, mimolette... notre rayon fromages vous attend !",
        likes: 189,
        comments: 34,
        shares: 28
      }
    ]
  },
  {
    id: 'fitness',
    icon: <Dumbbell className="w-5 h-5" />,
    sector: 'Salle de Sport',
    color: 'text-orange-600',
    bgGradient: 'from-orange-500 to-red-500',
    posts: [
      {
        location: 'Nice',
        content: "💪 Nice, on se remet en forme avant l'été ! Cours de HIIT gratuit ce samedi. Qui relève le défi ?",
        likes: 145,
        comments: 67,
        shares: 23
      },
      {
        location: 'Strasbourg',
        content: "Strasbourg bouge ! 🏋️ Nouvelle salle de crossfit ouverte. 1ère séance offerte pour les Strasbourgeois !",
        likes: 198,
        comments: 54,
        shares: 41
      },
      {
        location: 'Nantes',
        content: "Nantes, prêts pour le marathon ? 🏃 Programme spécial running ce mois-ci. Inscrivez-vous !",
        likes: 167,
        comments: 38,
        shares: 56
      }
    ]
  },
  {
    id: 'coiffure',
    icon: <Scissors className="w-5 h-5" />,
    sector: 'Salon Coiffure',
    color: 'text-pink-600',
    bgGradient: 'from-pink-500 to-rose-500',
    posts: [
      {
        location: 'Paris 11e',
        content: "✂️ Le balayage californien fait fureur dans le 11e ! Rdv dispo cette semaine. Qui veut son glow-up ?",
        likes: 267,
        comments: 43,
        shares: 19
      },
      {
        location: 'Montpellier',
        content: "Montpellier sous le soleil ☀️ = cheveux protégés ! Soin réparateur offert pour toute coupe ce mois-ci.",
        likes: 189,
        comments: 28,
        shares: 15
      },
      {
        location: 'Grenoble',
        content: "Grenobloises, la tendance coupe courte arrive en montagne ! 🏔️ Venez découvrir les nouveaux looks.",
        likes: 145,
        comments: 31,
        shares: 12
      }
    ]
  }
];

interface MiniPostProps {
  location: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  gradient: string;
  delay: number;
}

const MiniPost = ({ location, content, likes, comments, shares, gradient, delay }: MiniPostProps) => (
  <motion.div
    className="bg-white dark:bg-dark-surface rounded-lg shadow-md border border-light-border dark:border-dark-border overflow-hidden"
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ delay, duration: 0.3 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="p-3">
      <div className="flex items-center space-x-2 mb-2">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold`}>
          {location.charAt(0)}
        </div>
        <div>
          <div className="font-medium text-sm text-nsignal-dark dark:text-dark-text">{location}</div>
          <div className="text-xs text-light-text-muted dark:text-dark-text-muted">Sponsorisé · 1h</div>
        </div>
      </div>
      <p className="text-sm text-light-text dark:text-dark-text-muted mb-3 line-clamp-2">{content}</p>
      <div className="flex items-center justify-between text-xs text-light-text-muted dark:text-dark-text-muted pt-2 border-t border-light-border dark:border-dark-border">
        <div className="flex items-center space-x-1">
          <ThumbsUp className="w-3 h-3 text-nsignal-primary" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <MessageCircle className="w-3 h-3" />
            <span>{comments}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Share2 className="w-3 h-3" />
            <span>{shares}</span>
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

/**
 * Section Use Cases - Exemples par secteur
 * Tabs interactifs avec posts adaptés
 * Rebrandé pour nReach Studio
 */
const UseCasesSection = ({ className = '' }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState('optique');
  const activeCase = useCases.find(uc => uc.id === activeTab) || useCases[0];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-light-surface dark:bg-dark-surface ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-nsignal-dark dark:text-dark-text mb-4">
            Adapté à votre secteur
          </h2>
          <p className="text-xl text-light-text-muted dark:text-dark-text-muted">
            Chaque réseau a son ton. <span className="text-nsignal-primary">nReach Studio</span> s'adapte.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {useCases.map((useCase) => (
            <motion.button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeTab === useCase.id
                  ? `bg-gradient-to-r ${useCase.bgGradient} text-white shadow-lg`
                  : 'bg-white dark:bg-dark-bg text-light-text-muted dark:text-dark-text-muted hover:bg-light-surface dark:hover:bg-dark-surface border border-light-border dark:border-dark-border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {useCase.icon}
              <span>{useCase.sector}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Campaign header */}
              <div className="bg-white dark:bg-dark-bg rounded-t-2xl p-4 border border-light-border dark:border-dark-border border-b-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activeCase.bgGradient} flex items-center justify-center text-white`}>
                      {activeCase.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-nsignal-dark dark:text-dark-text">Campagne {activeCase.sector}</div>
                      <div className="text-xs text-light-text-muted dark:text-dark-text-muted">1 visuel → 150 posts uniques générés</div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span className="px-3 py-1 bg-nsignal-primary/10 text-nsignal-primary text-xs font-medium rounded-full">
                      ✓ 0% duplicate content
                    </span>
                  </div>
                </div>
              </div>

              {/* Posts grid */}
              <div className="bg-light-surface dark:bg-dark-surface rounded-b-2xl p-6 border border-light-border dark:border-dark-border border-t-0">
                <div className="grid md:grid-cols-3 gap-4">
                  {activeCase.posts.map((post, index) => (
                    <MiniPost
                      key={`${activeTab}-${index}`}
                      {...post}
                      gradient={activeCase.bgGradient}
                      delay={index * 0.1}
                    />
                  ))}
                </div>

                {/* Stats footer */}
                <motion.div
                  className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-nsignal-primary" />
                    <span className="text-light-text-muted dark:text-dark-text-muted">Engagement moyen :</span>
                    <span className="font-bold text-nsignal-dark dark:text-dark-text">
                      +{Math.round(activeCase.posts.reduce((acc, p) => acc + p.likes + p.comments + p.shares, 0) / 3)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-nsignal-secondary" />
                    <span className="text-light-text-muted dark:text-dark-text-muted">Portée estimée :</span>
                    <span className="font-bold text-nsignal-primary">
                      +340%
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-light-text-muted dark:text-dark-text-muted">
            Et aussi : <span className="font-medium text-nsignal-dark dark:text-dark-text">Restauration</span>, <span className="font-medium text-nsignal-dark dark:text-dark-text">Automobile</span>, <span className="font-medium text-nsignal-dark dark:text-dark-text">Immobilier</span>, <span className="font-medium text-nsignal-dark dark:text-dark-text">Services</span>...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
