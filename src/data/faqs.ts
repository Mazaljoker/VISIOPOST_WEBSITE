import { Faq } from '../types';

/**
 * Liste des 6 questions fréquentes
 * Utilisé dans FaqSection avec accordéon
 */
export const faqs: Faq[] = [
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
];
