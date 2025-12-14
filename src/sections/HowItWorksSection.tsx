import { motion } from 'framer-motion';
import { Bell, Smartphone, ThumbsUp, CheckCircle, Clock, Eye } from 'lucide-react';

/**
 * How It Works Section - Le Flux 40 Secondes
 * Montrer la simplicité côté franchisé
 */
const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: Bell,
      title: 'Notification push',
      description: '📱 "3 nouveaux posts disponibles pour votre magasin"',
      time: '0 sec',
      visual: (
        <div className="bg-gray-900 rounded-2xl p-4 text-white max-w-[280px] mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-nsignal-primary to-nsignal-secondary flex items-center justify-center">
              <span className="text-sm font-bold">n</span>
            </div>
            <div>
              <p className="text-xs text-gray-400">nSignal</p>
              <p className="text-sm">3 nouveaux posts disponibles</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs bg-nsignal-primary px-2 py-1 rounded">Voir</span>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      icon: Smartphone,
      title: 'Ouvre l\'app',
      description: 'Voit le post déjà personnalisé avec son nom de magasin et son adresse',
      time: '5 sec',
      visual: (
        <div className="bg-white dark:bg-nsignal-dark-500 rounded-2xl p-4 border border-nsignal-light-400 dark:border-nsignal-dark-400 max-w-[280px] mx-auto">
          <div className="aspect-video bg-gradient-to-br from-nsignal-primary/20 to-nsignal-secondary/20 rounded-lg mb-3 flex items-center justify-center">
            <span className="text-4xl">🎉</span>
          </div>
          <p className="text-sm text-nsignal-dark dark:text-white mb-2">
            "C'est les SOLDES chez <span className="font-bold text-nsignal-primary">Krys Lyon 6e</span> ! 🔥 Jusqu'à -50%..."
          </p>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-gray-100 dark:bg-nsignal-dark-400 rounded-lg text-sm">👎 Passer</button>
            <button className="flex-1 py-2 bg-nsignal-primary text-white rounded-lg text-sm font-medium">👍 Publier</button>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      icon: ThumbsUp,
      title: '1 Tap = Publié',
      description: 'Le post est immédiatement publié sur la page Facebook du magasin',
      time: '40 sec',
      visual: (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center max-w-[280px] mx-auto border-2 border-green-200 dark:border-green-800">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <p className="text-lg font-bold text-green-700 dark:text-green-400 mb-1">
            Publié sur Facebook !
          </p>
          <p className="text-sm text-green-600/70 dark:text-green-400/70">
            Post suivant ? →
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-nsignal-light dark:bg-nsignal-dark-600">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-nsignal-primary/10 text-nsignal-primary text-sm font-medium mb-4">
            Comment ça marche
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nsignal-dark dark:text-white mb-6">
            Le flux de publication
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nsignal-primary to-nsignal-secondary">
              en 40 secondes
            </span>
          </h2>
          <p className="text-xl text-nsignal-dark/70 dark:text-white/70 max-w-2xl mx-auto">
            Côté franchisé, c'est aussi simple que de liker une photo sur Instagram
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-nsignal-primary via-nsignal-secondary to-green-500 transform -translate-y-1/2 z-0"></div>

          {/* Steps */}
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-nsignal-dark-500 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Step header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nsignal-primary to-nsignal-secondary flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-nsignal-primary font-bold">ÉTAPE {step.number}</span>
                      <h3 className="text-lg font-bold text-nsignal-dark dark:text-white">{step.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-nsignal-dark/60 dark:text-white/60">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{step.time}</span>
                  </div>
                </div>

                {/* Visual */}
                <div className="mb-4">
                  {step.visual}
                </div>

                {/* Description */}
                <p className="text-center text-sm text-nsignal-dark/70 dark:text-white/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Before */}
          <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <h3 className="font-bold text-red-700 dark:text-red-400">Avant : Email</h3>
                <p className="text-sm text-red-600/70 dark:text-red-400/70">15-30 minutes</p>
              </div>
            </div>
            <ol className="space-y-2 text-sm text-red-700 dark:text-red-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400">1.</span>
                <span>Ouvrir l'email (si on le voit...)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">2.</span>
                <span>Télécharger le ZIP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">3.</span>
                <span>Décompresser</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">4.</span>
                <span>Ouvrir le PDF des textes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">5.</span>
                <span>Copier le texte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">6.</span>
                <span>Aller sur Facebook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">7.</span>
                <span>Coller le texte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">8.</span>
                <span>Ajouter l'image</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">9.</span>
                <span>Adapter avec le nom du magasin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">10.</span>
                <span>Publier</span>
              </li>
            </ol>
            <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-800">
              <div className="flex items-center justify-between">
                <span className="text-red-600 dark:text-red-400">Taux de diffusion :</span>
                <span className="font-bold text-red-700 dark:text-red-400">10-25%</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <h3 className="font-bold text-green-700 dark:text-green-400">Après : nSignal</h3>
                <p className="text-sm text-green-600/70 dark:text-green-400/70">40 secondes</p>
              </div>
            </div>
            <ol className="space-y-2 text-sm text-green-700 dark:text-green-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Reçoit une notification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Ouvre l'app</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Voit le post prêt (déjà personnalisé)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="font-semibold">1 tap → Publié ✅</span>
              </li>
            </ol>
            <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-800 flex-grow flex flex-col justify-end">
              <div className="flex items-center justify-between mt-auto">
                <span className="text-green-600 dark:text-green-400">Taux de diffusion :</span>
                <span className="font-bold text-green-700 dark:text-green-400">80%+ (objectif)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Siège visibility */}
        <motion.div
          className="mt-8 bg-white dark:bg-nsignal-dark-500 rounded-2xl p-6 border border-nsignal-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-nsignal-primary/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-nsignal-primary" />
              </div>
              <div>
                <h3 className="font-bold text-nsignal-dark dark:text-white">Et le siège dans tout ça ?</h3>
                <p className="text-sm text-nsignal-dark/70 dark:text-white/70">
                  Dashboard temps réel : qui a publié, qui n'a pas publié, quel contenu marche
                </p>
              </div>
            </div>
            <div className="flex gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-nsignal-primary">247</p>
                <p className="text-xs text-nsignal-dark/60 dark:text-white/60">magasins suivis</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-500">87%</p>
                <p className="text-xs text-nsignal-dark/60 dark:text-white/60">actifs ce mois</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-nsignal-secondary">4.7%</p>
                <p className="text-xs text-nsignal-dark/60 dark:text-white/60">engagement moyen</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
