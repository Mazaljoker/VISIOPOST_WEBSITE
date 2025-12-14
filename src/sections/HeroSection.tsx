import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Radio, Users, Zap, MapPin, Play, MessageSquare, Eye, BarChart3 } from 'lucide-react';
import { Button } from '../components/Button';

const stats = [
  { value: 'n', label: 'locations', icon: Users },
  { value: '1', label: 'signal', icon: Radio },
  { value: '∞', label: 'variations', icon: Zap },
];

const examplePosts = [
  {
    city: 'Lyon',
    region: 'Auvergne-Rhône-Alpes',
    text: '"Ici à Lyon, on craque pour les nouvelles Ray-Ban !"',
  },
  {
    city: 'Bordeaux',
    region: 'Nouvelle-Aquitaine',
    text: '"En Nouvelle-Aquitaine, c\'est LA tendance de l\'été !"',
  },
];

/**
 * HeroSection - Charte Graphique nSignal 2025
 * Couleurs: Teal #0F7B6C + Coral #E86A58 + Charcoal #1E2B3A
 */
export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'exemple' | 'video'>('exemple');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background - Charcoal Chaud */}
      <div className="absolute inset-0 bg-nsignal-dark-500" />
      
      {/* Glow Effects - Teal & Coral */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nsignal-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nsignal-secondary/20 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nsignal-primary/10 border border-nsignal-primary/30 mb-8"
            >
              <Radio className="w-4 h-4 text-nsignal-primary" />
              <span className="text-nsignal-primary text-sm font-medium">
                Plateforme de pilotage social pour réseaux
              </span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              <span className="text-nsignal-primary">n</span> locations.
              <br />
              <span className="bg-gradient-to-r from-nsignal-primary to-nsignal-secondary bg-clip-text text-transparent">
                One signal.
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-nsignal-light-600 max-w-xl mb-8"
            >
              <span className="text-white font-semibold">Pilotez</span> la présence sociale de tout votre réseau.
              <br />
              <span className="text-nsignal-primary">Captez les signaux. Coordonnez sans imposer.</span>
            </motion.p>
            
            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm"
            >
              <div className="flex items-center gap-2 text-nsignal-light-600">
                <Eye className="w-4 h-4 text-nsignal-primary" />
                <span>Visibilité temps réel</span>
              </div>
              <div className="flex items-center gap-2 text-nsignal-light-600">
                <BarChart3 className="w-4 h-4 text-nsignal-secondary" />
                <span>Dashboard siège</span>
              </div>
              <div className="flex items-center gap-2 text-nsignal-light-600">
                <Zap className="w-4 h-4 text-nsignal-accent" />
                <span>0% duplicate</span>
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10"
            >
              <Button variant="primary" size="lg" icon={<ArrowRight size={20} />}>
                Démarrer gratuitement
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-nsignal-primary hover:text-nsignal-primary">
                Voir la démo
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-nsignal-primary" />
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs text-nsignal-light-600">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Demo Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white dark:bg-nsignal-dark-500 rounded-2xl shadow-2xl overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-nsignal-light-400 dark:border-nsignal-dark-400">
                <button
                  onClick={() => setActiveTab('exemple')}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'exemple'
                      ? 'text-nsignal-dark dark:text-nsignal-light border-b-2 border-nsignal-primary'
                      : 'text-nsignal-light-700 dark:text-nsignal-light-600 hover:text-nsignal-dark dark:hover:text-nsignal-light'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Exemple
                </button>
                <button
                  onClick={() => setActiveTab('video')}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'video'
                      ? 'text-nsignal-dark dark:text-nsignal-light border-b-2 border-nsignal-primary'
                      : 'text-nsignal-light-700 dark:text-nsignal-light-600 hover:text-nsignal-dark dark:hover:text-nsignal-light'
                  }`}
                >
                  <Play className="w-4 h-4" />
                  Vidéo
                  <span className="px-2 py-0.5 bg-nsignal-light-300 dark:bg-nsignal-dark-600 rounded text-xs">2min</span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'exemple' ? (
                    <motion.div
                      key="exemple"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {/* Campaign Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs text-nsignal-light-700 dark:text-nsignal-light-600 uppercase tracking-wide">Campagne</p>
                          <h4 className="font-bold text-nsignal-dark dark:text-nsignal-light">"Nouvelle Collection"</h4>
                        </div>
                        <div className="px-3 py-1.5 bg-nsignal-primary text-white text-sm font-bold rounded-lg">
                          500 POSTS UNIQUES
                        </div>
                      </div>

                      {/* Example Posts */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {examplePosts.map((post, index) => (
                          <div
                            key={index}
                            className="bg-nsignal-light-300 dark:bg-nsignal-dark-600 rounded-xl p-4 border border-nsignal-light-400 dark:border-nsignal-dark-400"
                          >
                            <div className="flex items-center gap-1.5 text-nsignal-primary text-xs font-medium mb-2">
                              <MapPin className="w-3 h-3" />
                              {post.city}
                            </div>
                            <p className="text-sm text-nsignal-dark dark:text-nsignal-light">
                              {post.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Comparison Bar */}
                      <div>
                        <p className="text-xs text-nsignal-light-700 dark:text-nsignal-light-600 mb-2">
                          Portée Estimée vs Duplicate Content
                        </p>
                        <div className="flex h-3 rounded-full overflow-hidden">
                          <div className="w-1/5 bg-red-500" />
                          <div className="flex-1 bg-gradient-to-r from-nsignal-primary to-nsignal-secondary" />
                        </div>
                        <div className="flex justify-between mt-2 text-xs font-medium">
                          <span className="text-red-500">Duplicate = -80%</span>
                          <span className="text-nsignal-primary">nSignal = +340%</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="video"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="aspect-video bg-nsignal-dark rounded-xl flex items-center justify-center cursor-pointer group"
                    >
                      <div className="w-16 h-16 bg-nsignal-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -right-4 bg-white dark:bg-nsignal-dark-500 rounded-xl px-4 py-2 shadow-lg border border-nsignal-light-400 dark:border-nsignal-dark-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-nsignal-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-nsignal-dark dark:text-nsignal-light">Live demo</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-nsignal-light dark:from-nsignal-dark to-transparent" />
    </section>
  );
};

export default HeroSection;
