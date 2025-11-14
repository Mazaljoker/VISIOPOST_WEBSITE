import { Feature } from '../types';

/**
 * Liste des 6 fonctionnalités principales de VisioPost
 * Utilisé dans FeaturesSection
 */
export const features: Feature[] = [
  {
    icon: "Sparkles",
    title: "Studio IA",
    description: "GPT-4 Vision analyse vos photos et crée des posts professionnels automatiquement",
    gradient: "from-visio-violet to-visio-rose"
  },
  {
    icon: "Users",
    title: "Posts Suggérés",
    description: "Distribution automatique de contenu HQ vers tous vos adhérents",
    gradient: "from-visio-rose to-visio-bleu"
  },
  {
    icon: "BarChart3",
    title: "Statistiques",
    description: "Analytics par magasin et consolidées pour mesurer votre impact",
    gradient: "from-visio-bleu to-visio-violet"
  },
  {
    icon: "Calendar",
    title: "Calendrier",
    description: "Planifiez vos publications à l'avance et restez organisé",
    gradient: "from-visio-violet to-visio-bleu"
  },
  {
    icon: "CheckCircle",
    title: "Autonomie",
    description: "Adhérents choisissent ce qu'ils publient - pas d'approbation imposée",
    gradient: "from-visio-rose to-visio-violet"
  },
  {
    icon: "Zap",
    title: "Illimité",
    description: "Utilisateurs et pages illimités sans frais supplémentaires",
    gradient: "from-visio-bleu to-visio-rose"
  }
];
