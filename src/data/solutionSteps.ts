import { Step } from '../types';

/**
 * Les 3 étapes du processus VisioPost
 * Utilisé dans SolutionSection
 */
export const solutionSteps: Step[] = [
  {
    number: "01",
    title: "CENTRALE CRÉE",
    icon: "Sparkles",
    features: [
      "Prenez une photo",
      "L'IA GPT-4 Vision génère un post",
      "Créez des \"posts suggérés\""
    ],
    highlight: "⏱️ 30 secondes par post",
    gradientIcon: "from-visio-violet to-visio-rose",
    gradientNumber: "from-visio-violet to-visio-rose",
    highlightColor: "visio-violet"
  },
  {
    number: "02",
    title: "ADHÉRENTS REÇOIVENT",
    icon: "Users",
    features: [
      "Inbox de posts suggérés",
      "Prévisualisent sur leur page",
      "Publient en 1 clic (ou pas)"
    ],
    highlight: "💡 Ou créent leurs propres posts IA",
    gradientIcon: "from-visio-rose to-visio-bleu",
    gradientNumber: "from-visio-rose to-visio-bleu",
    highlightColor: "visio-rose"
  },
  {
    number: "03",
    title: "RÉSULTATS",
    icon: "BarChart3",
    features: [
      "Stats par magasin",
      "Dashboard consolidé centrale",
      "ROI temps mesurable"
    ],
    highlight: "📊 Vision complète réseau",
    gradientIcon: "from-visio-bleu to-visio-violet",
    gradientNumber: "from-visio-bleu to-visio-violet",
    highlightColor: "visio-bleu"
  }
];
