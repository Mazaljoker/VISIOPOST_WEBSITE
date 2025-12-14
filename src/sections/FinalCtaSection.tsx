import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, TrendingUp, Calendar } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenRoi?: () => void;
}

/**
 * Final CTA Section - Vision nSignal
 */
const FinalCtaSection = ({ onOpenRoi }: FinalCtaSectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-nsignal-primary via-nsignal-primary to-nsignal-secondary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Arrêtez d'envoyer des emails
            <br />
            que personne ne lit
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Passez de 15% à 80% de votre réseau actif sur les réseaux sociaux.
            <br />
            En 40 secondes par magasin.
          </p>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-white/80 mb-1">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Temps par post</span>
            </div>
            <p className="text-3xl font-bold text-white">40 sec</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-white/80 mb-1">
              <Users className="w-5 h-5" />
              <span className="text-sm">Réseau actif</span>
            </div>
            <p className="text-3xl font-bold text-white">80%+</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-white/80 mb-1">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">Engagement</span>
            </div>
            <p className="text-3xl font-bold text-white">+300%</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://calendly.com/nsignal/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-nsignal-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Réserver une démo de 30 min
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Trust elements */}
        <motion.p
          className="mt-8 text-white/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Sans engagement · Démo personnalisée · Réponse sous 24h
        </motion.p>

        {/* The pitch */}
        <motion.div
          className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            "Vous créez du super contenu au siège, mais seulement 15% de vos magasins le publient, 
            parce que <span className="line-through text-white/50">l'email</span> c'est mort. 
            <span className="font-semibold text-white"> nSignal remplace l'email par une app où le franchisé publie en 1 tap</span>. 
            Résultat : 80% de vos magasins actifs. 30€ par magasin par mois, tout inclus."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
