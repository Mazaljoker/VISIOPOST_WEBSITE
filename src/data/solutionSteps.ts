import { Step } from '../types';

/**
 * Étapes de la solution VisioPost
 * Flow linéaire : Siège -> IA -> Local -> Écoute
 * Histoire claire pour le client B2B
 */
export const solutionSteps: Step[] = [
  {
    number: "01",
    title: "LE SIÈGE IMPULSE",
    icon: "ShieldCheck",
    features: [
      "Définition de la campagne nationale",
      "Verrouillage des assets de marque",
      "Validation du message clé"
    ],
    highlight: "1 Campagne créée",
    gradientIcon: "from-visio-violet to-visio-rose",
    gradientNumber: "from-visio-violet to-visio-rose",
    highlightColor: "visio-violet"
  },
  {
    number: "02",
    title: "L'IA DÉCLINE",
    icon: "Sparkles",
    features: [
      "Génération de 500 variantes uniques",
      "Adaptation au contexte local (Ville/Météo)",
      "Optimisation anti-duplicate"
    ],
    highlight: "500 Posts Uniques",
    gradientIcon: "from-visio-rose to-visio-bleu",
    gradientNumber: "from-visio-rose to-visio-bleu",
    highlightColor: "visio-rose"
  },
  {
    number: "03",
    title: "LE LOCAL PUBLIE",
    icon: "MapPin",
    features: [
      "Notification aux gérants (App mobile)",
      "Publication automatique ou validée",
      "Rayonnement local immédiat"
    ],
    highlight: "100% du Réseau Actif",
    gradientIcon: "from-visio-bleu to-visio-violet",
    gradientNumber: "from-visio-bleu to-visio-violet",
    highlightColor: "visio-bleu"
  },
  {
    number: "04",
    title: "LE SIÈGE MESURE",
    icon: "BarChart3",
    features: [
      "Analytics consolidés en temps réel",
      "Analyse de sentiments IA",
      "Alertes réputation & reporting"
    ],
    highlight: "Visibilité Totale",
    gradientIcon: "from-visio-rose to-visio-violet",
    gradientNumber: "from-visio-rose to-visio-violet",
    highlightColor: "visio-rose"
  }
];
