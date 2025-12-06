import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { NReachLogo } from '../components/NReachLogo';

const stats = [
  { value: 'n', label: 'locations', icon: Users },
  { value: '1', label: 'studio', icon: Zap },
  { value: '∞', label: 'variations', icon: Sparkles },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-midnight" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nreach-electric/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nreach-lavande/20 rounded-full blur-3xl" />
      
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
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nreach-electric/10 border border-nreach-electric/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-nreach-electric" />
            <span className="text-nreach-electric text-sm font-medium">
              Propulsé par l'IA GPT-4 Vision
            </span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            <span className="text-nreach-electric">n</span> locations.
            <br />
            <span className="bg-gradient-to-r from-nreach-electric to-nreach-lavande bg-clip-text text-transparent">
              One studio.
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl text-dark-text-muted max-w-3xl mx-auto mb-10"
          >
            Générez des posts Facebook <span className="text-white font-semibold">uniques</span> pour
            chaque point de vente de votre réseau.
            <br className="hidden sm:block" />
            <span className="text-nreach-electric">Fini les pénalités de contenu dupliqué.</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="primary" size="lg" icon={<ArrowRight size={20} />}>
              Démarrer gratuitement
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-nreach-electric hover:text-nreach-electric">
              Voir la démo
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-8 sm:gap-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-nreach-electric" />
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-dark-text-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light-bg dark:from-dark-bg to-transparent" />
    </section>
  );
};

export default HeroSection;
