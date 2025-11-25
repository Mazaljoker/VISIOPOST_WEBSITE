import { Step } from '../types';

export const solutionSteps: Step[] = [
  {
    number: "01",
    title: "CONTRÔLE CENTRAL",
    icon: "ShieldCheck", // Assurez-vous d'importer l'icone ou mapper
    features: [
      "Le Siège définit le message clé",
      "Verrouillage de la charte graphique",
      "Validation des templates IA"
    ],
    highlight: "🛡️ Brand Safety Totale",
    gradientIcon: "from-visio-violet to-visio-rose",
    gradientNumber: "from-visio-violet to-visio-rose",
    highlightColor: "visio-violet"
  },
  {
    number: "02",
    title: "CONTEXTUALISATION",
    icon: "Sparkles",
    features: [
      "L'IA adapte le ton par ville",
      "Injection de données locales (Météo, Events)",
      "Variation sémantique anti-spam"
    ],
    highlight: "📍 500 Posts Uniques générés",
    gradientIcon: "from-visio-rose to-visio-bleu",
    gradientNumber: "from-visio-rose to-visio-bleu",
    highlightColor: "visio-rose"
  },
  {
    number: "03",
    title: "DISTRIBUTION INTELLIGENTE",
    icon: "BarChart3",
    features: [
      "Publication étalée (Time Staggering)",
      "Maximisation du Reach Organique",
      "Reporting consolidé au siège"
    ],
    highlight: "📈 +300% de Portée",
    gradientIcon: "from-visio-bleu to-visio-violet",
    gradientNumber: "from-visio-bleu to-visio-violet",
    highlightColor: "visio-bleu"
  },
  {
    number: "04",
    title: "ÉCOUTE DU RÉSEAU",
    icon: "Heart",
    features: [
      "Analyse de sentiments IA",
      "Alertes commentaires négatifs",
      "Dashboard réputation temps réel"
    ],
    highlight: "🛡️ Protection Réputation",
    gradientIcon: "from-visio-rose to-visio-violet",
    gradientNumber: "from-visio-rose to-visio-violet",
    highlightColor: "visio-rose"
  }
];