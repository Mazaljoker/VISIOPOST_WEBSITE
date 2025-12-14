import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "En quoi nSignal est différent de Hootsuite ou Buffer ?",
    answer: "Hootsuite et Buffer sont faits pour un community manager qui gère quelques comptes. nSignal est conçu pour les réseaux de 50 à 500+ magasins où chaque franchisé doit pouvoir publier simplement, sans formation, en 40 secondes. C'est un canal de distribution, pas un outil de scheduling."
  },
  {
    question: "Nos franchisés ne sont pas technophiles, vont-ils utiliser l'app ?",
    answer: "C'est justement notre force. L'app est aussi simple que d'envoyer un SMS. Notification push → ouvrir → 1 tap = publié. Pas de copier-coller, pas de téléchargement. Si le franchisé sait liker une photo sur Facebook, il sait utiliser nSignal."
  },
  {
    question: "Comment évitez-vous les pénalités de Facebook pour contenu dupliqué ?",
    answer: "Notre IA génère automatiquement des variations uniques pour chaque magasin : accroches différentes, personnalisation locale, rotation des hashtags. Le franchisé ne voit rien de tout ça, mais chaque post est unique. Résultat : 0 pénalité algorithmique."
  },
  {
    question: "On a déjà une agence, pourquoi changer ?",
    answer: "Votre agence crée peut-être du super contenu, mais qui le diffuse sur vos 200 pages locales ? Avec un taux de diffusion de 15%, 85% du travail est gaspillé. nSignal peut travailler AVEC votre agence : elle alimente la plateforme, nSignal assure la distribution."
  },
  {
    question: "Combien de temps pour déployer sur tout le réseau ?",
    answer: "Setup siège : 1 jour. Onboarding franchisés : ils téléchargent l'app et se connectent en 2 minutes. Pas de formation nécessaire. La plupart des réseaux sont opérationnels en moins d'une semaine."
  },
  {
    question: "Est-ce que le siège garde le contrôle sur ce qui est publié ?",
    answer: "Absolument. Vous choisissez le mode : publication automatique (siège publie directement), suggérée (franchisé approuve), ou participative (franchisé complète un template). Templates verrouillés, workflows d'approbation, brand safety garantie."
  },
  {
    question: "Quelles plateformes sont supportées ?",
    answer: "Facebook est disponible maintenant. Instagram arrive T1 2026, Google Business Profile T2 2026. TikTok, YouTube Shorts et LinkedIn suivront selon la demande. Notre architecture permet d'ajouter de nouvelles plateformes rapidement."
  },
  {
    question: "Comment se passe la facturation ?",
    answer: "30€ par magasin par mois, tout inclus. Pas de frais de setup, pas de modules supplémentaires. Offre spéciale : le siège est gratuit si vous avez 10+ magasins actifs. On propose aussi des pilotes à -50% sur 20 magasins pendant 2 mois."
  },
];

/**
 * FAQ Section - Questions alignées avec la nouvelle vision
 */
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-nsignal-dark">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-nsignal-primary/10 text-nsignal-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-nsignal-dark dark:text-white">
            Questions fréquentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-nsignal-light-400 dark:border-nsignal-dark-400 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-nsignal-light dark:bg-nsignal-dark-500 hover:bg-nsignal-light-300 dark:hover:bg-nsignal-dark-400 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-nsignal-dark dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-nsignal-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white dark:bg-nsignal-dark-600">
                  <p className="text-nsignal-dark/70 dark:text-white/70">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
