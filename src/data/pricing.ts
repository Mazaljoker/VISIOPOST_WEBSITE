import { PricingPlan } from '../types';

/**
 * Plan tarifaire pour les centrales
 * Gratuit si ≥10 adhérents payants
 */
export const centralePlan: PricingPlan = {
  title: "CENTRALE",
  price: 0,
  period: "/mois",
  features: [
    "Studio IA illimité",
    "Distribution automatique",
    "Dashboard stats consolidées",
    "Support prioritaire",
    "Utilisateurs illimités"
  ],
  cta: "Commencer gratuitement",
  variant: "centrale",
  highlight: "⭐ OFFRE CENTRALE"
};

/**
 * Plans tarifaires pour les adhérents
 * 3 niveaux : FREE, STARTER (populaire), PRO
 */
export const adherentPlans: PricingPlan[] = [
  // Plan FREE
  {
    title: "FREE",
    price: 0,
    period: "/mois",
    features: [
      "1 page Facebook",
      "5 posts IA/mois",
      "Réception playlists",
      "Stats basiques"
    ],
    cta: "Essayer",
    variant: "free",
    isPopular: false
  },

  // Plan STARTER (POPULAIRE)
  {
    title: "STARTER",
    price: 15,
    period: "/mois",
    features: [
      "1 page Facebook",
      "50 posts IA/mois",
      "Réception playlists",
      "Stats avancées",
      "Sans watermark"
    ],
    cta: "Choisir Starter",
    variant: "starter",
    isPopular: true,
    highlight: "⭐ POPULAIRE"
  },

  // Plan PRO
  {
    title: "PRO",
    price: 29,
    period: "/mois",
    features: [
      "3 pages Facebook",
      "200 posts IA/mois",
      "Calendrier éditorial",
      "Stats complètes",
      "Exports données"
    ],
    cta: "Choisir Pro",
    variant: "pro",
    isPopular: false
  }
];
