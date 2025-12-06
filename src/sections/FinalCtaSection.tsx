import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { NReachLogo } from '../components/NReachLogo';

const benefits = [
  'Configuration en 5 minutes',
  'Aucune carte bancaire requise',
  'Support dédié en français',
  'Annulation à tout moment',
];

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-midnight" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-nreach-electric/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nreach-lavande/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <NReachLogo variant="icon" theme="dark" size="lg" />
        </motion.div>
        
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
        >
          Prêt à maximiser la
          <br />
          <span className="bg-gradient-to-r from-nreach-electric to-nreach-lavande bg-clip-text text-transparent">
            portée de votre réseau ?
          </span>
        </motion.h2>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-dark-text-muted mb-10 max-w-2xl mx-auto"
        >
          Rejoignez les réseaux qui génèrent déjà des milliers de posts uniques
          pour leurs points de vente.
        </motion.p>
        
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <CheckCircle className="w-4 h-4 text-nreach-electric" />
              <span className="text-sm text-dark-text-muted">{benefit}</span>
            </div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button variant="primary" size="lg" icon={<ArrowRight size={20} />}>
            Démarrer gratuitement
          </Button>
        </motion.div>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-nreach-electric font-medium italic"
        >
          "n locations. One studio."
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
