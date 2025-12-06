import { Step } from '../types';

/**
 * Étapes de la solution VisioPost V3.1.1
 * Focus sur le résultat, pas sur la méthode
 */
export const solutionSteps: Step[] = [
  {
    number: "01",
    title: "UPLOADEZ",
    icon: "ShieldCheck",
    features: [
      "Votre visuel et votre message",
      "Notre IA prend le relais",
      "Validation siège garantie"
    ],
    highlight: "1 Campagne",
    gradientIcon: "from-visio-violet to-visio-rose",
    gradientNumber: "from-visio-violet to-visio-rose",
    highlightColor: "visio-violet"
  },
  {
    number: "02",
    title: "GÉNÉRATION AUTOMATIQUE",
    icon: "Sparkles",
    features: [
      "Une version unique par magasin",
      "Personnalisation ville et région",
      "Zéro duplicate content"
    ],
    highlight: "500 Posts Uniques",
    gradientIcon: "from-visio-rose to-visio-bleu",
    gradientNumber: "from-visio-rose to-visio-bleu",
    highlightColor: "visio-rose"
  },
  {
    number: "03",
    title: "PUBLICATION SIMPLIFIÉE",
    icon: "MapPin",
    features: [
      "Le magasin reçoit une notification",
      "3 clics pour publier",
      "Aucune formation nécessaire"
    ],
    highlight: "30 Secondes",
    gradientIcon: "from-visio-bleu to-visio-violet",
    gradientNumber: "from-visio-bleu to-visio-violet",
    highlightColor: "visio-bleu"
  },
  {
    number: "04",
    title: "PORTÉE MAXIMALE",
    icon: "BarChart3",
    features: [
      "Facebook voit des contenus originaux",
      "L'algorithme vous récompense",
      "Analytics consolidés en temps réel"
    ],
    highlight: "+340% Reach",
    gradientIcon: "from-visio-rose to-visio-violet",
    gradientNumber: "from-visio-rose to-visio-violet",
    highlightColor: "visio-rose"
  }
];
