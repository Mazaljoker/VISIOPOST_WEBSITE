# 🤖 CLAUDE.md - Instructions Claude Code

## ⚠️ REBRAND EN COURS: nSignal

**IMPORTANT:** Ce projet est en cours de rebrand de "nReach Studio" vers **nSignal**.

📋 **Voir le plan complet:** [CLAUDE_REFONTE_NSIGNAL.md](./CLAUDE_REFONTE_NSIGNAL.md)

### Résumé Rebrand
| Avant | Après |
|-------|-------|
| nReach Studio | **nSignal** |
| nreachstudio.com | **nsignal.ai** |
| "n locations. One studio." | **"n locations. One signal."** |
| Focus: Création contenu | **Focus: Pilotage réseau** |

---

## 🎯 Mission

Développer le **site web complet nSignal** (landing + pages additionnelles) en suivant **KISS, SRP, SOLID, DRY**.

**Positionnement:** Plateforme de PILOTAGE social pour réseaux multi-sites (franchises, coopératives)

**Cible:** Directeur Marketing qui veut visibilité et contrôle sur tout son réseau

## 🌐 Scope - Site Web Complet

### Pages à Développer

#### Phase 1 : Landing Page 🔄 EN COURS
- `/` - Homepage avec nouveau messaging "Pilotage"

#### Phase 2 : Pages Produit 📄
- `/features` - Détail fonctionnalités (3 modes)
- `/how-it-works` - Les 3 modes expliqués
- `/pricing` - Tarification détaillée + ROI calculator

#### Phase 3 : Content 📄
- `/blog` - Articles SEO
- `/case-studies` - Études de cas clients
- `/resources` - Templates & guides

#### Phase 4 : Support 📄
- `/about` - À propos équipe
- `/contact` - Formulaire + démo
- `/legal/*` - CGV, Privacy, Cookies

## 🏗️ Architecture

```
src/
├── components/
│   ├── NSignalLogo.tsx    # ✅ NOUVEAU
│   ├── layout/
│   ├── ui/
│   └── forms/
├── sections/
│   ├── Header.tsx         # ✅ MODIFIÉ
│   ├── HeroSection.tsx    # ✅ MODIFIÉ
│   ├── Footer.tsx         # ✅ MODIFIÉ
│   ├── ProblemSection.tsx # 🔄 À MODIFIER
│   ├── SolutionSection.tsx # 🔄 À MODIFIER
│   └── ...
├── data/
│   ├── features.ts        # 🔄 À MODIFIER
│   ├── faqs.ts            # 🔄 À MODIFIER
│   └── ...
└── ...
```

## 🎨 Design System nSignal

### Couleurs (inchangées)
```css
--midnight: #1A1F3D
--electric: #00D4AA
--lavande: #6B7AED
```

### Icônes clés (Lucide)
```
Radio - Signal
Eye - Visibilité
BarChart3 - Analytics
Users - Réseau
ListMusic - Playlist
Zap - Rapidité
Shield - Sécurité
MapPin - Local
```

## ⚡ Principes

### KISS - Keep It Simple
- Code lisible > Code clever
- Solution la plus simple

### SRP - Single Responsibility
- 1 composant = 1 responsabilité
- Fichiers <300 lignes
- Composants <100 lignes

### DRY - Don't Repeat Yourself
- Zéro duplication
- Composants réutilisables

## 🚨 Règles STRICTES

### ❌ INTERDIT
1. Utiliser "nReach" (remplacer par "nSignal")
2. Dupliquer code
3. Fichiers >300 lignes
4. Types `any`
5. Inline styles
6. Messaging "imposition/contrôle" (utiliser "suggestion/signal")

### ✅ OBLIGATOIRE
1. TypeScript strict
2. Composants <100 lignes
3. Props interfaces explicites
4. Extraction data dans `/data`
5. Responsive mobile-first
6. SEO meta tags
7. Tone coopérative-friendly

## 💡 Concepts Clés

### 3 Modes de Distribution
1. **Free Style Assisté** - L'adhérent crée avec aide IA
2. **Posts Suggérés (Playlist)** - Le siège propose, l'adhérent choisit
3. **Playlist Automatique** - Full automation

### Double Sens "Signal"
- **Pour le Siège:** "Captez les signaux de votre réseau"
- **Pour le Terrain:** "Recevez le signal, décidez vous-même"

### Mots-clés
✅ Signal, Pilotage, Visibilité, Coordonner, Suggérer
❌ Command, Control, Imposer, Forcer, Centraliser

## 🔄 Workflow Git

### Format Commits
```
feat(sections): update ProblemSection for nSignal rebrand
refactor(components): replace NReachLogo with NSignalLogo
fix(data): update faqs for new messaging
```

## 🏁 Checklist Avant Commit

- [ ] Tous "nReach" remplacés par "nSignal" ?
- [ ] Messaging orienté "pilotage" ?
- [ ] Coopérative-friendly (pas d'imposition) ?
- [ ] TypeScript strict ?
- [ ] Responsive testé ?
- [ ] Build réussit ?

## 📚 Documentation

- **Plan de refonte complet:** [CLAUDE_REFONTE_NSIGNAL.md](./CLAUDE_REFONTE_NSIGNAL.md)
- **Historique rebrand:** [REBRAND.md](./REBRAND.md)

---

**Version** : 3.0 (Rebrand nSignal)  
**Projet** : nSignal Website  
**Domaine** : nsignal.ai
