import { PricingPlan } from '../types';

/**
 * Frais de setup selon taille réseau
 */
export const setupFees = [
  { maxUsers: 50, price: 990, label: "Réseau < 50 points de vente" },
  { maxUsers: 200, price: 1990, label: "Réseau 50-200 points de vente" },
  { maxUsers: Infinity, price: 2990, label: "Réseau 200+ points de vente" }
];

/**
 * Tarification par utilisateur avec dégressivité
 */
export const userPricing = [
  { maxUsers: 20, price: 30 },
  { maxUsers: 50, price: 25 },
  { maxUsers: 100, price: 20 },
  { maxUsers: Infinity, price: 15 }
];

/**
 * Options multi-plateforme (par réseau, pas par user)
 */
export const platformOptions = [
  { name: "Facebook", price: 0, included: true, available: true },
  { name: "Instagram", price: 15, included: false, available: true, badge: "Janvier 2025" },
  { name: "TikTok", price: 15, included: false, available: false, badge: "Q1 2025" },
  { name: "LinkedIn", price: 15, included: false, available: false, badge: "Q1 2025" }
];

/**
 * Plan principal affiché sur la landing
 */
export const mainPlan: PricingPlan = {
  title: "VISIOPOST",
  price: 30,
  period: "/utilisateur/mois",
  features: [
    "Facebook inclus",
    "IA génération illimitée",
    "0% duplicate content garanti",
    "Analytics consolidés",
    "Onboarding accompagné",
    "Support prioritaire"
  ],
  cta: "Demander un devis",
  variant: "centrale",
  highlight: "À PARTIR DE"
};

/**
 * Informations complémentaires pricing
 */
export const pricingInfo = {
  setupNote: "+ Frais de mise en place selon votre réseau",
  volumeNote: "Tarifs dégressifs selon la taille de votre réseau",
  optionsNote: "Options : Instagram, TikTok, LinkedIn"
};

// Legacy exports pour compatibilité
export const centralePlan = mainPlan;
export const adherentPlans: PricingPlan[] = [];
