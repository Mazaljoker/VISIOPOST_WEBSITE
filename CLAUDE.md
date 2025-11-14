# 🤖 CLAUDE.md - Instructions Claude Code

## 🎯 Mission

Développer le **site web complet VisioPost** (landing + pages additionnelles) en suivant **KISS, SRP, SOLID, DRY**.

## 🌐 Scope - Site Web Complet

### Pages à Développer

#### Phase 1 : Landing Page ✅
- `/` - Homepage avec Hero, Playlists, Features, Pricing, FAQ

#### Phase 2 : Pages Produit 📄
- `/features` - Détail fonctionnalités
- `/playlists` - Page dédiée USP principal
- `/pricing` - Tarification détaillée + ROI calculator

#### Phase 3 : Content 📄
- `/blog` - Articles SEO
- `/case-studies` - Études de cas clients
- `/resources` - Templates & guides

#### Phase 4 : Support 📄
- `/about` - À propos équipe
- `/contact` - Formulaire + démo
- `/legal/*` - CGV, Privacy, Cookies

#### Phase 5 : Marketing 📄
- `/demo` - Demande démo
- `/partners` - Programme partenaires
- `/integrations` - Facebook, Instagram, etc.

## 🏗️ Architecture Cible

```
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   ├── ui/              # Button, Card, Input, Modal
│   ├── sections/        # FeatureCard, PricingCard, etc.
│   └── forms/           # ContactForm, DemoRequestForm
├── pages/
│   ├── home/            # Landing page + sections
│   ├── features/        # Page fonctionnalités
│   ├── playlists/       # Page dédiée Playlists
│   ├── pricing/         # Pricing détaillée
│   ├── blog/            # Blog + articles
│   ├── contact/         # Contact
│   └── legal/           # Pages légales
├── data/                # features.ts, pricing.ts, faqs.ts
├── hooks/               # useFaq, useForm, useAnalytics
├── utils/               # classNames, validation, seo
├── router/              # React Router config
└── App.tsx              # App avec routing
```

## 🎨 Design System VisioScreen

### Couleurs (IMMUABLES)
```
Violet: #3f2680
Rose:   #ed1164
Bleu:   #00aeef
```

**RÈGLE ABSOLUE** : NE JAMAIS modifier ces couleurs.

## ⚡ Principes

### KISS - Keep It Simple
- Code lisible > Code clever
- Solution la plus simple

### SRP - Single Responsibility
- 1 composant = 1 responsabilité
- Fichiers <300 lignes
- Composants <100 lignes

### SOLID
- Single Responsibility
- Open/Closed
- Liskov Substitution
- Interface Segregation  
- Dependency Inversion

### DRY - Don't Repeat Yourself
- Zéro duplication
- Composants réutilisables

## 🚨 Règles STRICTES

### ❌ INTERDIT
1. Modifier couleurs VisioScreen
2. Dupliquer code
3. Fichiers >300 lignes
4. Types `any`
5. Inline styles
6. Console.log en prod
7. Hardcoded data dans composants

### ✅ OBLIGATOIRE
1. TypeScript strict
2. Composants <100 lignes
3. Props interfaces explicites
4. Extraction data dans `/data`
5. Tests manuel (npm run dev)
6. Responsive mobile-first
7. Accessibilité WCAG AA
8. SEO meta tags par page
9. Routing propre
10. Navigation breadcrumbs

## 💡 Concept Clé : Playlists

**USP PRINCIPAL** - À mentionner partout :
- Landing page : Section dédiée
- Header : Menu item highlighted
- Page /playlists : Page entière
- Features : Feature principale
- Pricing : Dans chaque plan
- Blog : Articles explicatifs

**Analogie** : "Netflix pour posts sociaux"

## 🎯 Priorités Développement

### P0 - Semaine 1
1. Setup React Router
2. Layout global (Header + Footer)
3. Refactor Landing en composants
4. Système UI (Button, Card, Input)

### P1 - Semaine 2-3  
1. Page /playlists (USP)
2. Page /features
3. Page /pricing
4. Page /contact

### P2 - Semaine 4-5
1. Blog
2. Case studies
3. Resources
4. Pages légales

## 🔄 Workflow Git

### Format Commits
```
feat(pages): add PlaylistsPage
feat(components): add DemoRequestForm
refactor(home): extract HeroSection
fix(navigation): mobile menu bug
```

## 🏁 Checklist Avant Commit

- [ ] KISS : Simple ?
- [ ] SRP : 1 responsabilité ?
- [ ] SOLID : Principes OK ?
- [ ] DRY : Pas duplication ?
- [ ] TypeScript strict ?
- [ ] Responsive testé ?
- [ ] Routes fonctionnent ?
- [ ] SEO meta tags ?
- [ ] Build réussit ?
- [ ] Couleurs inchangées ?

## 📚 Documentation Complète

Le fichier complet (1700+ lignes) avec exemples détaillés, templates et guidelines est disponible en local dans le projet.

---

**Version** : 2.0 (Full Website)  
**Projet** : VisioPost Website Complet  
**Auteur** : Claude + Franck-Olivier
