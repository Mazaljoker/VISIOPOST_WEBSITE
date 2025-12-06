import { useState } from 'react';
import { ShieldCheck, Play, ArrowRight, CheckCircle, Monitor, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { HeroSectionProps } from '../types';

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

const heroTitle = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut' as const,
    },
  },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

const pulseGlow = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [activeTab, setActiveTab] = useState<'campagne' | 'video'>('campagne');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={heroItem}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-visio-violet/10 to-visio-rose/10 rounded-full"
            >
              <span className="text-visio-violet font-semibold text-sm flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ShieldCheck className="w-4 h-4" />
                </motion.div>
                Technologie Anti-Duplicate Brevetée
              </span>
            </motion.div>

            <motion.h1
              variants={heroTitle}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Vos 500 pages publient.{' '}
              <motion.span
                className="bg-gradient-to-r from-visio-violet via-visio-rose to-visio-bleu bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ backgroundSize: '200% 100%' }}
              >
                Zéro contenu dupliqué.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Quand un réseau poste le même contenu partout, Facebook coupe la portée.
              Notre IA génère des publications uniques pour chaque point de vente.
              <span className="block mt-2 font-semibold text-gray-800">
                Votre reach explose.
              </span>
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="primary" size="lg" className="group">
                  <span>Demander une Démo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="group w-full"
                  onClick={() => {
                    setActiveTab('video');
                    setTimeout(() => {
                      const video = document.querySelector('video');
                      if (video) {
                        video.play();
                        if (video.requestFullscreen) {
                          video.requestFullscreen();
                        }
                      }
                    }, 400);
                  }}
                >
                  <Play className="w-5 h-5" />
                  <span>Voir comment ça marche (2min)</span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
            >
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>+340% de portée organique</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>100% des posts uniques</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>30 secondes pour publier</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-visio-violet/20 via-visio-rose/20 to-visio-bleu/20 rounded-3xl blur-3xl"
              variants={pulseGlow}
              initial="initial"
              animate="animate"
            />

            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
              variants={floatAnimation}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="flex border-b border-gray-100 bg-gray-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <button
                  onClick={() => setActiveTab('campagne')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all ${
                    activeTab === 'campagne'
                      ? 'text-visio-violet border-b-2 border-visio-violet bg-white'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                  <span className="hidden sm:inline">Exemple</span>
                </button>
                <button
                  onClick={() => setActiveTab('video')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all ${
                    activeTab === 'video'
                      ? 'text-visio-violet border-b-2 border-visio-violet bg-white'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Video className="w-4 h-4" />
                  <span className="hidden sm:inline">Vidéo</span>
                  <span className="text-xs bg-visio-violet/10 text-visio-violet px-1.5 py-0.5 rounded">2min</span>
                </button>
              </motion.div>

              <AnimatePresence mode="wait">
                {activeTab === 'campagne' ? (
                  <motion.div
                    key="campagne"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    <div className="flex justify-between items-center border-b pb-4 mb-4">
                      <div className="text-sm font-bold text-gray-500">CAMPAGNE "Nouvelle Collection"</div>
                      <motion.div
                        className="text-green-600 text-sm font-bold bg-green-100 px-2 py-1 rounded"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                      >
                        500 POSTS UNIQUES
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <motion.div
                        className="bg-gray-50 p-3 rounded-lg border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.02, borderColor: '#8B5CF6' }}
                      >
                        <div className="text-xs text-gray-400 mb-1">📍 Lyon</div>
                        <div className="text-sm font-medium">"Ici à Lyon, on craque pour les nouvelles Ray-Ban !"</div>
                      </motion.div>
                      <motion.div
                        className="bg-gray-50 p-3 rounded-lg border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.02, borderColor: '#EC4899' }}
                      >
                        <div className="text-xs text-gray-400 mb-1">📍 Bordeaux</div>
                        <div className="text-sm font-medium">"En Nouvelle-Aquitaine, c'est LA tendance de l'été !"</div>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-xs text-gray-500 mb-2">Portée Estimée vs Duplicate Content</div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-visio-violet to-visio-rose"
                          initial={{ width: '0%' }}
                          animate={{ width: '85%' }}
                          transition={{ delay: 0.6, duration: 1.5, ease: 'easeOut' }}
                        />
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span className="text-red-400">Duplicate = -80%</span>
                        <span className="font-bold text-visio-violet">VisioPost = +340%</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                      <video
                        src="/videos/presentation.mp4"
                        className="absolute inset-0 w-full h-full object-cover"
                        controls={isPlaying}
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => setIsPlaying(false)}
                        onClick={(e) => {
                          if (!isPlaying) {
                            (e.target as HTMLVideoElement).play();
                          }
                        }}
                      />

                      {!isPlaying && (
                        <>
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <motion.button
                              className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition group"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                              onClick={() => {
                                const video = document.querySelector('video');
                                if (video) video.play();
                              }}
                            >
                              <Play className="w-8 h-8 text-visio-violet ml-1 group-hover:scale-110 transition" />
                            </motion.button>
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                          <motion.div
                            className="absolute bottom-4 left-4 right-4 z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="text-white text-sm font-medium">
                              Découvrez comment VisioPost élimine le duplicate content
                            </div>
                            <div className="text-white/70 text-xs mt-1">
                              Sans inscription • Résultat immédiat
                            </div>
                          </motion.div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
