import { Faq } from '../types';

/**
 * FAQ B2B - Questions pour DSI/Juridique/Direction Marketing
 * Focus : Sécurité, Compliance, Intégration, ROI
 */
export const faqs: Faq[] = [
  {
    q: "Comment garantissez-vous que l'IA ne publie pas de bêtises ?",
    a: "Sécurité totale. Nous utilisons un système de 'Double-Verrou' : 1. Le Siège valide les thèmes et mots-clés interdits. 2. Notre IA 'Supervisor' relit chaque post avant génération pour vérifier la conformité à la charte. Rien n'est publié sans validation (humaine ou automatique selon votre réglage)."
  },
  {
    q: "Est-ce compatible avec notre outil actuel (Hootsuite, Sociabble...) ?",
    a: "Oui. Visiopost ne remplace pas vos outils corporate, il les complète. Nous gérons la couche 'Locale' que ces outils ne savent pas faire (génération unique par ville). Nous pouvons même nous connecter via API."
  },
  {
    q: "Quel est le modèle économique ?",
    a: "Nous fonctionnons par 'Licence Point de Vente'. Le tarif est dégressif selon la taille du réseau. Le Setup technique (Onboarding) est facturé une seule fois au lancement."
  },
  {
    q: "Quelle charge de travail pour l'équipe Marketing Siège ?",
    a: "Minime. Environ 1h par mois pour valider les campagnes du mois suivant. L'IA se charge des 500 déclinaisons opérationnelles."
  },
  {
    q: "Nos adhérents sont indépendants, on ne peut rien leur imposer.",
    a: "C'est notre force. Le mode 'Suggestion' permet d'envoyer les posts dans l'app mobile de l'adhérent. Il garde le clic final 'Publier'. Taux d'adoption moyen constaté : 85% (car le contenu est excellent)."
  },
  {
    q: "Où sont hébergées les données ?",
    a: "En Europe (France/Allemagne) sur des serveurs certifiés ISO 27001. Vos données clients ne servent jamais à entraîner des modèles IA publics."
  }
];
