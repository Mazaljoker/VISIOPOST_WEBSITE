import { PricingPlan } from '../types';

/**
 * Plan tarifaire pour les centrales - Programme Pilote
 * Setup one-shot pour démarrer sans risque
 */
export const centralePlan: PricingPlan = {
  title: "PROGRAMME PILOTE",
  price: 2500,
  period: " (Setup One-shot)",
  features: [
    "Audit de visibilité actuel",
    "Configuration du 'Ton de Marque' IA",
    "Setup technique (20 magasins)",
    "Formation équipe siège",
    "Rapport de performance à 30 jours"
  ],
  cta: "Lancer un Pilote",
  variant: "centrale",
  highlight: "🚀 DÉMARRAGE SANS RISQUE"
};

/**
 * Plans tarifaires pour les adhérents
 * Licence Réseau - offre volume disponible
 */
export const adherentPlans: PricingPlan[] = [
  {
    title: "Licence RÉSEAU",
    price: 39,
    period: "/mois/point de vente",
    features: [
      "Accès Plateforme Visiopost",
      "3 à 5 Posts IA / semaine",
      "Modération automatique",
      "Support Adhérent inclus",
      "Facturation centralisée possible"
    ],
    cta: "Simuler mon tarif",
    variant: "starter",
    isPopular: true,
    highlight: "OFFRE VOLUME DISPONIBLE"
  }
];
