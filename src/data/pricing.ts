import { PricingPlan } from '../types';

/**
 * Configuration Setup - Frais de mise en place
 */
export const setupConfig = {
  startingPrice: 990,
  note: "À partir de 990€ · Devis personnalisé selon votre réseau",
  includes: [
    "Audit de visibilité actuel",
    "Configuration du 'Ton de Marque' IA",
    "Setup technique complet",
    "Formation équipe siège",
    "Onboarding accompagné",
    "Rapport de performance à 30 jours"
  ]
};

/**
 * Plans tarifaires - 3 tiers
 */
export const pricingPlans: PricingPlan[] = [
  {
    title: "ESSENTIEL",
    price: 30,
    period: "/mois/utilisateur",
    features: [
      "Facebook inclus",
      "IA génération illimitée",
      "0% duplicate content garanti",
      "Variables locales (ville, région)",
      "Brand Safety basique",
      "Support email"
    ],
    cta: "Choisir Essentiel",
    variant: "starter",
    highlight: "DÉMARRAGE",
    degressivity: [
      { min: 1, max: 20, price: 30 },
      { min: 21, max: 50, price: 25 },
      { min: 51, max: 100, price: 22 },
      { min: 101, max: Infinity, price: 18 }
    ]
  },
  {
    title: "BUSINESS",
    price: 45,
    period: "/mois/utilisateur",
    features: [
      "Tout Essentiel inclus",
      "Multi-plateforme (Instagram, TikTok)",
      "Google My Business complet",
      "Gestion des avis Google",
      "Analytics avancés par région",
      "Dashboard carte de France",
      "Brand Safety complet",
      "Support prioritaire",
      "Account Manager dédié"
    ],
    cta: "Choisir Business",
    variant: "pro",
    isPopular: true,
    highlight: "POPULAIRE",
    degressivity: [
      { min: 1, max: 20, price: 45 },
      { min: 21, max: 50, price: 38 },
      { min: 51, max: 100, price: 32 },
      { min: 101, max: Infinity, price: 25 }
    ]
  },
  {
    title: "ENTERPRISE",
    price: null,
    period: "Sur devis",
    features: [
      "Tout Business inclus",
      "Network Intelligence (IA qui apprend)",
      "API Google My Business avancée",
      "API & intégrations custom",
      "SSO / SAML",
      "SLA garanti 99.9%",
      "Support dédié 24/7",
      "Formations illimitées",
      "Roadmap produit prioritaire"
    ],
    cta: "Nous contacter",
    variant: "centrale",
    highlight: "GRANDS RÉSEAUX"
  }
];

/**
 * Options multi-plateforme
 */
export const platformOptions = [
  { name: "Facebook", price: 0, included: true, available: true },
  { name: "Instagram", price: 15, included: false, available: true, badge: "Disponible" },
  { name: "Google My Business", price: 0, included: false, available: true, badge: "Business+", note: "Inclus dans Business & Enterprise" },
  { name: "TikTok", price: 15, included: false, available: false, badge: "Q1 2025" },
  { name: "LinkedIn", price: 15, included: false, available: false, badge: "Q1 2025" }
];

/**
 * Configuration simulateur ROI
 */
export const roiConfig = {
  reachPerPost: 850,
  postsPerMonth: 4,
  engagementRate: 0.034, // 3.4%
  conversionRate: 0.02, // 2%
  averageBasket: 85, // €
  agencyCostPerShop: 150, // €/mois
  duplicatePenalty: 0.8 // -80% reach sans VisioPost
};

// Legacy exports pour compatibilité
export const centralePlan = pricingPlans[2];
export const adherentPlans = [pricingPlans[0], pricingPlans[1]];
export const mainPlan = pricingPlans[1]; // Business par défaut
export const pricingInfo = {
  setupNote: setupConfig.note,
  volumeNote: "Tarifs dégressifs selon la taille de votre réseau"
};
