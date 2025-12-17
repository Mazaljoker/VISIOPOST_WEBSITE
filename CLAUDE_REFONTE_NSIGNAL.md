# 🎯 PLAN DE REFONTE COMPLET: nSignal

## Contexte

**Rebrand:** nReach Studio → **nSignal**
**Domaine:** nsignal.ai
**Tagline:** "n locations. One signal."
**Positionnement:** Plateforme de PILOTAGE social pour réseaux multi-sites

### Cible Principale
- **Qui:** Directeur Marketing de réseaux (franchises, coopératives)
- **Veut:** Contrôle, ROI, Visibilité sur tout le réseau
- **Pain:** 70% des magasins n'ont pas de présence sociale active

### Différenciation Clé
- **Signal** = suggestion, pas imposition (coopérative-friendly)
- **Double sens:** Siège capte les signaux / Terrain reçoit le signal
- **Focus:** Pilotage et visibilité, pas juste création de contenu

---

## 📁 FICHIERS DÉJÀ MODIFIÉS ✅

| Fichier | Status |
|---------|--------|
| `src/components/NSignalLogo.tsx` | ✅ Créé |
| `src/sections/Header.tsx` | ✅ Modifié |
| `src/sections/HeroSection.tsx` | ✅ Modifié |
| `src/sections/Footer.tsx` | ✅ Modifié |
| `index.html` | ✅ Modifié |
| `REBRAND.md` | ✅ Créé |

---

## 📁 FICHIERS À MODIFIER

### 1. src/LandingPage.tsx
**Action:** Mettre à jour les commentaires
```tsx
// Remplacer:
// Landing Page nReach Studio
// Par:
// Landing Page nSignal - Plateforme de Pilotage Social pour Réseaux
```

### 2. src/sections/SocialProofSection.tsx
**Action:** Ajuster le messaging

**Stats à afficher:**
```tsx
const stats = [
  { value: '70%', label: 'des franchises sans présence sociale active' },
  { value: '+340%', label: 'de portée vs duplicate content' },
  { value: '40s', label: 'pour publier (vs 1-4 semaines)' },
  { value: '1000+', label: 'points de vente en pipeline' },
];
```

### 3. src/sections/ProblemSection.tsx
**Action:** Reformuler pour le Dir. Marketing

**Nouveau messaging:**
```
TITRE: "Votre réseau publie-t-il vraiment ?"

PROBLÈMES:
1. "70% de vos magasins sont invisibles sur les réseaux sociaux"
2. "Vous n'avez aucune visibilité sur l'activité sociale locale"
3. "Les agences coûtent cher et ne passent pas à l'échelle"
4. "Le duplicate content pénalise votre portée organique"
```

### 4. src/sections/SolutionSection.tsx
**Action:** Focus sur le PILOTAGE, pas la création

**Nouveau messaging:**
```
TITRE: "Un cockpit pour tout votre réseau"

3 PILIERS:
1. CAPTEZ - "Recevez les signaux de chaque magasin en temps réel"
   - Dashboard centralisé
   - Alertes inactivité
   - Métriques par région

2. COORDONNEZ - "Envoyez le signal, sans imposer"
   - Suggestions de posts (pas d'obligation)
   - Playlists de contenu validé
   - Autonomie locale préservée

3. MESUREZ - "ROI visible, économies prouvées"
   - Analytics réseau consolidés
   - Comparaison régions
   - Économies vs agence
```

### 5. src/sections/BeforeAfterSection.tsx
**Action:** Ajouter perspective siège

**Avant (magasin seul):**
- Posts identiques = pénalité Facebook
- Pas de suivi centralisé
- Siège aveugle

**Après (avec nSignal):**
- Posts uniques par magasin
- Dashboard temps réel
- Visibilité totale

### 6. src/sections/HowItWorksSection.tsx
**Action:** Introduire les 3 MODES

**Structure:**
```
ÉTAPE 1: Connexion (5 min)
- Import magasins
- Connexion pages Facebook
- Configuration région

ÉTAPE 2: Choisissez votre mode
[MODE 1] Free Style Assisté
→ Pour les adhérents autonomes
→ L'IA génère, le magasin valide et publie

[MODE 2] Posts Suggérés (Playlist)
→ Le siège prépare, le magasin choisit
→ 1 clic = publication

[MODE 3] Playlist Automatique
→ Full automation
→ Le siège programme, ça publie tout seul

ÉTAPE 3: Pilotez
- Dashboard centralisé
- Alertes et insights
- ROI en temps réel
```

### 7. src/sections/UseCasesSection.tsx
**Action:** Focus sur les bénéfices siège + terrain

**Par secteur:**
```
OPTIQUE (Krys, Atol)
- Siège: Campagnes nationales adaptées localement
- Terrain: Posts prêts, 30 secondes pour publier
- Résultat: 89% des magasins actifs

DISTRIBUTION (Système U, Leclerc)
- Siège: Promos locales sans duplicate
- Terrain: Autonomie préservée
- Résultat: +340% portée organique

AUDIO (Audika, Amplifon)
- Siège: Visibilité sur 500+ centres
- Terrain: Contenu médical validé
- Résultat: Compliance garantie
```

### 8. src/sections/FeaturesSection.tsx
**Action:** Réorganiser autour du PILOTAGE

**Features à mettre en avant:**
```tsx
const features = [
  {
    icon: "Radio", // Signal
    title: "Dashboard Pilotage",
    description: "Vue temps réel sur l'activité de tout votre réseau. Alertes inactivité, insights performance."
  },
  {
    icon: "Sparkles",
    title: "Génération IA Anti-Duplicate",
    description: "Chaque magasin = un post unique. 0% pénalité Facebook garanti."
  },
  {
    icon: "ListMusic", // Playlist
    title: "3 Modes de Distribution",
    description: "Free Style, Playlist, ou Full Auto. Adaptez à la maturité de chaque adhérent."
  },
  {
    icon: "MapPin",
    title: "Personnalisation Locale",
    description: "Ville, région, événements locaux. Chaque post parle à son audience."
  },
  {
    icon: "BarChart3",
    title: "Analytics Réseau",
    description: "Comparez vos régions, identifiez les top performers, mesurez le ROI."
  },
  {
    icon: "Shield",
    title: "Validation Centralisée",
    description: "Le siège valide les blocs, pas les posts. Brand safety garantie."
  }
];
```

### 9. src/sections/MultiPlatformSection.tsx
**Action:** Mettre à jour roadmap

```
MAINTENANT: Facebook ✅
Q1 2026: Instagram 🔜
Q2 2026: Google Business Profile
Q3 2026: TikTok, LinkedIn
```

### 10. src/sections/NetworkIntelligenceSection.tsx
**Action:** Teaser V5 avec focus pilotage

```
TITRE: "L'IA qui apprend de votre réseau"

FEATURES FUTURES:
- Détection automatique des tendances locales
- Recommandations de timing optimal
- Prédiction de performance
- Alertes proactives
```

### 11. src/sections/PricingSection.tsx
**Action:** Clarifier l'offre siège gratuit

```
OFFRE:
- 30€/utilisateur/mois
- Siège GRATUIT si 10+ adhérents payants
- Setup: 990€ - 2990€ selon taille

PACKAGES:
[STARTER] 10-50 magasins
[GROWTH] 50-200 magasins  
[ENTERPRISE] 200+ magasins
```

### 12. src/sections/FaqSection.tsx + src/data/faqs.ts
**Action:** Nouvelles FAQ orientées pilotage

```tsx
export const faqs = [
  {
    question: "Qu'est-ce que nSignal ?",
    answer: "nSignal est une plateforme de pilotage social pour réseaux multi-sites. Elle permet aux sièges de coordonner la présence sociale de centaines de points de vente tout en préservant l'autonomie locale."
  },
  {
    question: "En quoi nSignal diffère des outils classiques ?",
    answer: "Contrairement aux outils qui imposent du contenu, nSignal propose 3 modes (Free Style, Playlist, Auto) qui s'adaptent à la maturité de chaque adhérent. Le siège suggère, le terrain décide."
  },
  {
    question: "Comment évitez-vous le duplicate content ?",
    answer: "Notre IA génère des variations uniques pour chaque magasin à partir de blocs validés. Même message, mais formulation différente = 0% pénalité Facebook."
  },
  {
    question: "Quel est le temps de mise en place ?",
    answer: "40 secondes par magasin. Import CSV, connexion Facebook, c'est prêt. Pas de formation longue, interface intuitive."
  },
  {
    question: "Le siège peut-il voir l'activité de chaque magasin ?",
    answer: "Oui ! Dashboard temps réel avec vue par région, alertes inactivité, et analytics consolidés. Vous savez exactement qui publie et quand."
  },
  {
    question: "Et si un adhérent ne veut pas utiliser la plateforme ?",
    answer: "C'est sa liberté ! nSignal ne force rien. Mais avec le mode Playlist (1 clic = publication), même les plus réticents adoptent facilement."
  }
];
```

### 13. src/sections/FinalCtaSection.tsx
**Action:** CTA orienté pilotage

```
TITRE: "Prêt à piloter votre réseau ?"
SOUS-TITRE: "Découvrez comment nSignal peut transformer votre présence sociale en 15 minutes."

CTA PRINCIPAL: "Réserver une démo"
CTA SECONDAIRE: "Calculer mon ROI"
```

### 14. src/data/features.ts
**Action:** Remplacer contenu (voir section 8)

### 15. src/data/solutionSteps.ts
**Action:** Aligner avec nouveaux 3 piliers

### 16. src/data/problems.ts
**Action:** Reformuler problèmes

### 17. src/components/RoiModal.tsx
**Action:** Remplacer "nReach" par "nSignal"

---

## 🎨 ÉLÉMENTS VISUELS À CRÉER

### 1. public/favicon.svg
```svg
<!-- Logo n avec ondes signal -->
```

### 2. public/og-image.jpg
- Dimensions: 1200x630
- Contenu: Logo nSignal + "n locations. One signal."

### 3. Icônes à utiliser (Lucide)
```
Radio - Pour "Signal"
Eye - Pour "Visibilité"
BarChart3 - Pour "Analytics"
Users - Pour "Réseau"
ListMusic - Pour "Playlist"
Zap - Pour "Rapidité"
Shield - Pour "Sécurité"
MapPin - Pour "Local"
```

---

## 🔍 RECHERCHER/REMPLACER GLOBAL

Dans TOUS les fichiers:

| Rechercher | Remplacer par |
|------------|---------------|
| `nReach Studio` | `nSignal` |
| `nReach` | `nSignal` |
| `nreachstudio.com` | `nsignal.ai` |
| `nreachstudio` | `nsignal` |
| `One studio` | `One signal` |
| `NReachLogo` | `NSignalLogo` |

---

## 📋 ORDRE D'EXÉCUTION RECOMMANDÉ

### Phase 1: Renommage Global
1. Rechercher/remplacer dans tous les fichiers
2. Supprimer `src/components/NReachLogo.tsx` (ancien)
3. Mettre à jour imports

### Phase 2: Sections Critiques (conversion)
1. `ProblemSection.tsx` - Pain points
2. `SolutionSection.tsx` - 3 piliers
3. `HowItWorksSection.tsx` - 3 modes
4. `FeaturesSection.tsx` - Features pilotage

### Phase 3: Sections Support
5. `SocialProofSection.tsx` - Stats
6. `BeforeAfterSection.tsx` - Comparaison
7. `UseCasesSection.tsx` - Secteurs
8. `PricingSection.tsx` - Tarifs

### Phase 4: Finalisation
9. `FaqSection.tsx` + `faqs.ts` - FAQ
10. `FinalCtaSection.tsx` - CTA
11. `LandingPage.tsx` - Commentaires
12. Assets visuels

### Phase 5: Tests
- Vérifier tous les imports
- Tester navigation
- Vérifier responsive
- Valider SEO

---

## 💡 TONE OF VOICE

### Pour le Siège (Dir. Marketing)
- Professionnel, ROI-focused
- "Pilotez", "Visibilité", "Contrôle"
- Métriques et résultats

### Pour le Terrain (Adhérents)
- Simple, rassurant
- "Suggestion", "Choix", "Autonomie"
- Pas d'imposition

### Mots-clés à utiliser
✅ Signal, Pilotage, Visibilité, Coordonner, Suggérer
❌ Command, Control, Imposer, Forcer, Centraliser

---

## 🚀 COMMANDES CLAUDE CODE

```bash
# Phase 1: Renommage
sed -i 's/nReach Studio/nSignal/g' src/**/*.tsx
sed -i 's/nReach/nSignal/g' src/**/*.tsx
sed -i 's/nreachstudio.com/nsignal.ai/g' src/**/*.tsx
sed -i 's/One studio/One signal/g' src/**/*.tsx

# Phase 2: Supprimer ancien logo
rm src/components/NReachLogo.tsx

# Phase 3: Build test
npm run build
```

---

## ✅ CHECKLIST FINALE

- [ ] Tous les "nReach" remplacés par "nSignal"
- [ ] Logo avec ondes signal
- [ ] Messaging orienté "pilotage"
- [ ] 3 modes expliqués (Free Style, Playlist, Auto)
- [ ] Dashboard siège mis en avant
- [ ] Coopérative-friendly (suggestion, pas imposition)
- [ ] SEO mis à jour (title, meta, OG)
- [ ] FAQ actualisée
- [ ] CTA clairs
- [ ] Build sans erreur
- [ ] Responsive OK

---

**Dernière mise à jour:** 14 Décembre 2025
