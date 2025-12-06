import { motion } from 'framer-motion';
import { ThumbsUp, MessageCircle, Share2, AlertTriangle, CheckCircle, TrendingDown, TrendingUp } from 'lucide-react';
import { BeforeAfterSectionProps } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

interface FacebookPostProps {
  storeName: string;
  storeLocation: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  isDuplicate?: boolean;
  delay?: number;
}

const FacebookPost = ({ 
  storeName, 
  storeLocation, 
  content, 
  likes, 
  comments, 
  shares, 
  isDuplicate = false,
  delay = 0 
}: FacebookPostProps) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md border overflow-hidden ${
        isDuplicate ? 'border-red-200' : 'border-green-200'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Header */}
      <div className="p-3 flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
          isDuplicate ? 'bg-gray-400' : 'bg-gradient-to-r from-visio-violet to-visio-rose'
        }`}>
          {storeName.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900 text-sm">{storeName}</div>
          <div className="text-xs text-gray-500">{storeLocation} · 2h</div>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-2">
        <p className={`text-sm ${isDuplicate ? 'text-gray-500' : 'text-gray-800'}`}>
          {content}
        </p>
      </div>

      {/* Image placeholder */}
      <div className={`h-32 ${isDuplicate ? 'bg-gray-200' : 'bg-gradient-to-br from-visio-violet/10 to-visio-rose/10'}`}>
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-4xl">👓</span>
        </div>
      </div>

      {/* Engagement */}
      <div className="p-3 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <motion.div 
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                isDuplicate ? 'bg-gray-300' : 'bg-blue-500'
              }`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: delay + 0.3, type: 'spring' }}
            >
              <ThumbsUp className="w-3 h-3 text-white" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delay + 0.4 }}
              className={isDuplicate ? 'text-gray-400' : 'text-gray-700 font-medium'}
            >
              {likes}
            </motion.span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{comments}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Share2 className="w-4 h-4" />
              <span>{shares}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Duplicate warning */}
      {isDuplicate && (
        <motion.div 
          className="bg-red-50 px-3 py-2 flex items-center space-x-2 text-red-600 text-xs"
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: 'auto' }}
          transition={{ delay: delay + 0.5 }}
        >
          <AlertTriangle className="w-4 h-4" />
          <span>Contenu identique détecté</span>
        </motion.div>
      )}
    </motion.div>
  );
};

/**
 * Section Avant/Après - Simulation visuelle de posts Facebook
 * Montre concrètement la différence duplicate vs unique
 */
const BeforeAfterSection = ({ className = '' }: BeforeAfterSectionProps) => {
  const beforePosts = [
    {
      storeName: "Optique Lyon",
      storeLocation: "Lyon",
      content: "Découvrez notre nouvelle collection de lunettes solaires Ray-Ban ! Venez vite en magasin.",
      likes: 12,
      comments: 2,
      shares: 0
    },
    {
      storeName: "Optique Bordeaux",
      storeLocation: "Bordeaux", 
      content: "Découvrez notre nouvelle collection de lunettes solaires Ray-Ban ! Venez vite en magasin.",
      likes: 8,
      comments: 1,
      shares: 0
    },
    {
      storeName: "Optique Marseille",
      storeLocation: "Marseille",
      content: "Découvrez notre nouvelle collection de lunettes solaires Ray-Ban ! Venez vite en magasin.",
      likes: 5,
      comments: 0,
      shares: 0
    }
  ];

  const afterPosts = [
    {
      storeName: "Optique Lyon",
      storeLocation: "Lyon",
      content: "Ici à Lyon, on craque pour les nouvelles Ray-Ban ! ☀️ Passez les essayer avant l'été !",
      likes: 156,
      comments: 23,
      shares: 12
    },
    {
      storeName: "Optique Bordeaux",
      storeLocation: "Bordeaux",
      content: "En Gironde, le soleil arrive ! 🌞 Nos Ray-Ban vous attendent. Venez choisir votre style !",
      likes: 203,
      comments: 31,
      shares: 18
    },
    {
      storeName: "Optique Marseille",
      storeLocation: "Marseille",
      content: "Marseille + soleil + Ray-Ban = combo parfait ! 😎 Rdv en boutique cette semaine !",
      likes: 287,
      comments: 42,
      shares: 25
    }
  ];

  const totalBefore = beforePosts.reduce((acc, p) => acc + p.likes + p.comments + p.shares, 0);
  const totalAfter = afterPosts.reduce((acc, p) => acc + p.likes + p.comments + p.shares, 0);

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden ${className}`}>
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-12"
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            La différence en action
          </h2>
          <p className="text-xl text-gray-600">
            Même campagne. Résultats radicalement différents.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* AVANT */}
          <motion.div variants={cardVariants}>
            <div className="bg-red-500 text-white text-center py-3 rounded-t-2xl font-bold flex items-center justify-center space-x-2">
              <TrendingDown className="w-5 h-5" />
              <span>AVANT - Contenu Dupliqué</span>
            </div>
            <div className="bg-white rounded-b-2xl p-6 shadow-xl border-2 border-red-200 border-t-0">
              <div className="space-y-4">
                {beforePosts.map((post, index) => (
                  <FacebookPost
                    key={index}
                    {...post}
                    isDuplicate={true}
                    delay={index * 0.15}
                  />
                ))}
              </div>

              {/* Stats AVANT */}
              <motion.div 
                className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-red-600 font-medium">Engagement total</div>
                    <div className="text-3xl font-bold text-red-700">{totalBefore}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-600 font-medium">Portée estimée</div>
                    <div className="text-3xl font-bold text-red-700">-80%</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center space-x-2 text-red-600 text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Facebook pénalise le duplicate content</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* APRÈS */}
          <motion.div variants={cardVariants}>
            <div className="bg-gradient-to-r from-visio-violet to-visio-rose text-white text-center py-3 rounded-t-2xl font-bold flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>APRÈS - Contenu Unique</span>
            </div>
            <div className="bg-white rounded-b-2xl p-6 shadow-xl border-2 border-green-200 border-t-0">
              <div className="space-y-4">
                {afterPosts.map((post, index) => (
                  <FacebookPost
                    key={index}
                    {...post}
                    isDuplicate={false}
                    delay={index * 0.15 + 0.3}
                  />
                ))}
              </div>

              {/* Stats APRÈS */}
              <motion.div 
                className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-green-600 font-medium">Engagement total</div>
                    <motion.div 
                      className="text-3xl font-bold text-green-700"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, type: 'spring' }}
                    >
                      {totalAfter}
                    </motion.div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium">Portée estimée</div>
                    <motion.div 
                      className="text-3xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1, type: 'spring' }}
                    >
                      +340%
                    </motion.div>
                  </div>
                </div>
                <div className="mt-3 flex items-center space-x-2 text-green-600 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Chaque post est unique = algorithme favorable</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Multiplier effect */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">{totalBefore}</div>
              <div className="text-xs text-gray-500">Avant</div>
            </div>
            <motion.div
              className="text-3xl"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">{totalAfter}</div>
              <div className="text-xs text-gray-500">Après</div>
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <motion.div 
              className="text-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent">
                ×{Math.round(totalAfter / totalBefore)}
              </div>
              <div className="text-xs text-gray-500">Multiplicateur</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BeforeAfterSection;
