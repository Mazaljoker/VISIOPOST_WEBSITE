# 🤖 CLAUDE.md - Instructions pour Claude Code

Ce fichier contient les instructions complètes pour Claude Code afin de maintenir et développer la landing page VisioPost en suivant **STRICTEMENT** les principes **KISS**, **SRP**, **SOLID** et **DRY**.

## 🎯 Principes Fondamentaux

### 1. KISS (Keep It Simple, Stupid)
- Code lisible > Code clever
- Solution la plus simple qui fonctionne
- Pas d'over-engineering

### 2. SRP (Single Responsibility Principle)
- Chaque composant = UNE seule responsabilité
- Fichiers <300 lignes
- Composants <100 lignes idéalement

### 3. SOLID Principles
- **S**ingle Responsibility
- **O**pen/Closed (extensible sans modification)
- **L**iskov Substitution
- **I**nterface Segregation
- **D**ependency Inversion

### 4. DRY (Don't Repeat Yourself)
- Zéro duplication
- Extraire patterns répétitifs en composants réutilisables

## 🎨 Design System VisioScreen

### Couleurs (IMMUABLES)

```typescript
'visio-violet': '#3f2680'
'visio-rose':   '#ed1164'
'visio-bleu':   '#00aeef'
```

**RÈGLE ABSOLUE** : Ne JAMAIS modifier ces couleurs.

## 🏗️ Architecture

### Structure Actuelle
```
src/
├── LandingPage.tsx  # ⚠️ 771 lignes - À REFACTORER
├── App.tsx
├── main.tsx
└── styles.css
```

### Structure Cible (Après Refactoring)
```
src/
├── components/       # Composants réutilisables
│   ├── Button.tsx
│   ├── FeatureCard.tsx
│   └── PricingCard.tsx
├── sections/        # Sections de page
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── PlaylistExplanation.tsx
│   ├── SolutionSection.tsx
│   ├── FeaturesSection.tsx
│   ├── PricingSection.tsx
│   └── FaqSection.tsx
├── data/           # Données séparées
│   ├── features.ts
│   ├── pricing.ts
│   └── faqs.ts
├── hooks/          # Custom hooks
│   └── useFaq.ts
└── utils/          # Utilitaires
    └── classNames.ts
```

## 🚨 Règles STRICTES

### ❌ INTERDIT
1. Modifier les couleurs VisioScreen sans validation
2. Dupliquer du code
3. Fichiers >300 lignes
4. Types `any` en TypeScript
5. Inline styles (utiliser Tailwind uniquement)
6. Console.log en production
7. Hardcoded data dans les composants

### ✅ OBLIGATOIRE
1. Typage TypeScript strict
2. Composants <100 lignes
3. Props interfaces explicites
4. Extraction data dans `/data` si répétitif
5. Tests manuel après chaque modif
6. Responsive mobile-first
7. Accessibilité WCAG AA

## 🎯 Priorités de Refactoring

### P0 (Urgent)
1. **Refactoring LandingPage.tsx** (771 lignes → composants séparés)
2. **Extraction données** dans `/data`
3. **Tests responsive** complets

### Plan de Refactoring

#### Étape 1 : Sections
Extraire chaque section majeure dans `src/sections/`:
- `HeroSection.tsx` (~80 lignes)
- `SocialProof.tsx` (~30 lignes)
- `ProblemSection.tsx` (~60 lignes)
- `PlaylistExplanation.tsx` (~150 lignes)
- `SolutionSection.tsx` (~120 lignes)
- `FeaturesSection.tsx` (~80 lignes)
- `BeforeAfterSection.tsx` (~60 lignes)
- `PricingSection.tsx` (~150 lignes)
- `FaqSection.tsx` (~80 lignes)
- `FinalCtaSection.tsx` (~50 lignes)
- `Footer.tsx` (~80 lignes)

#### Étape 2 : Composants Réutilisables
Créer dans `src/components/`:
- `Button.tsx` - Boutons avec variants
- `FeatureCard.tsx` - Cards features
- `PricingCard.tsx` - Cards pricing
- `FaqItem.tsx` - Item FAQ accordéon

#### Étape 3 : Données
Extraire dans `src/data/`:
- `features.ts` - Liste des 6 features
- `pricing.ts` - Plans tarifaires
- `faqs.ts` - Questions FAQ
- `content.ts` - Textes statiques

#### Étape 4 : Hooks
Créer `src/hooks/useFaq.ts` pour logique FAQ

## 📏 Standards de Code

### TypeScript
```typescript
// BON ✅
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ variant, size = 'md', children, onClick }: ButtonProps) => {
  // ...
};

// MAUVAIS ❌
const Button = (props: any) => { ... };
```

### Naming Conventions
- Composants: PascalCase (`HeroSection`)
- Fonctions: camelCase (`toggleFaq`)
- Constantes: UPPER_SNAKE_CASE (`MAX_PAGES`)
- CSS: kebab-case Tailwind

### Imports
```typescript
import React, { useState } from 'react';     // React
import { Sparkles } from 'lucide-react';     // Libs
import Button from './components/Button';     // Composants
import { features } from './data/features';   // Data
import { cn } from './utils/classNames';      // Utils
import './styles.css';                        // Styles
```

## 💡 Concept Clé : Playlists

**CRITIQUE** : Le système de Playlists est l'USP principal.

Il DOIT être :
- ✅ Expliqué clairement (section dédiée)
- ✅ Mentionné partout
- ✅ Différencié : "Netflix pour posts sociaux"

## 🧪 Testing

### Avant chaque commit
```bash
npm run dev        # Vérifier rendu
npm run build      # Vérifier build
```

**Checklist** :
- [ ] Pas d'erreur console
- [ ] Responsive mobile
- [ ] Couleurs VisioScreen OK
- [ ] Animations fluides

## 🔄 Workflow Git

### Format Commits
```
type(scope): description

feat(pricing): add playlist mention
fix(faq): accordion mobile bug
refactor(landing): extract HeroSection
```

## 🏁 Checklist Avant Commit

- [ ] KISS : Code simple ?
- [ ] SRP : 1 responsabilité ?
- [ ] SOLID : Principes respectés ?
- [ ] DRY : Pas de duplication ?
- [ ] TypeScript strict ?
- [ ] Responsive testé ?
- [ ] Build réussit ?
- [ ] Couleurs inchangées ?

---

## 📚 Documentation Complète

Pour la documentation exhaustive (20+ pages), voir le fichier complet dans le repo.

Ce fichier contient :
- Exemples détaillés de refactoring
- Cas d'usage spécifiques
- Templates de composants
- Guidelines d'accessibilité
- Optimisations performance

---

**Version** : 1.0  
**Projet** : VisioPost Landing Page  
**Auteur** : Claude + Franck-Olivier
