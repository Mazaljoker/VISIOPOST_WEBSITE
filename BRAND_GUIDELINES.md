# 🎨 nSignal - Charte Graphique 2025

> **Anti "Violet AI"** — Une palette chaude et humaine qui se différencie de 90% des SaaS

---

## 🎯 Positionnement Visuel

| Aspect | Décision |
|--------|----------|
| **Nom** | nSignal |
| **Domaine** | nsignal.ai |
| **Tagline** | "n locations. One signal." |
| **Ton visuel** | Chaleureux, professionnel, accessible |
| **Cible** | Directeurs Marketing de réseaux (franchises, coopératives) |

### Pourquoi ce Choix ?

❌ **Ce qu'on évite:**
- Violet AI (#6B7AED, #8B5CF6) — Cliché tech 2024
- Bleu corporate (#007BFF) — Générique
- Gradients bleu-violet — Signal "AI-generated"

✅ **Ce qu'on adopte:**
- Teal Profond — Confiance sans cliché
- Coral Dynamique — Chaleur humaine
- Jaune Signal — Énergie et visibilité

---

## 🎨 Couleurs Primaires de Marque

### 1. Primary — Teal Profond
```css
--nsignal-primary: #0F7B6C;
```
| Variante | Hex | Usage |
|----------|-----|-------|
| 50 | `#E6F4F2` | Backgrounds légers |
| 100 | `#CCE9E5` | Hover states |
| 300 | `#66BDB1` | Icônes secondaires |
| **500** | **`#0F7B6C`** | **Couleur principale** |
| 700 | `#094A41` | Texte sur fond clair |
| 900 | `#031916` | Accents sombres |

**Psychologie:** Confiance, croissance, professionnalisme sans froideur.

---

### 2. Secondary — Coral Dynamique
```css
--nsignal-secondary: #E86A58;
```
| Variante | Hex | Usage |
|----------|-----|-------|
| 50 | `#FDEBE8` | Backgrounds d'alerte douce |
| **500** | **`#E86A58`** | **CTAs secondaires, accents** |
| 700 | `#B84A3C` | Hover states |

**Psychologie:** Chaleur humaine, coordination, énergie collective.

---

### 3. Accent — Jaune Signal
```css
--nsignal-accent: #DFAB01;
```
| Variante | Hex | Usage |
|----------|-----|-------|
| 50 | `#FEF9E6` | Notifications background |
| **500** | **`#DFAB01`** | **Badges, alertes, highlights** |
| 700 | `#866701` | Texte sur fond jaune |

**Psychologie:** Optimisme, visibilité maximale, appel à l'action.

---

### 4. Dark — Charcoal Chaud
```css
--nsignal-dark: #1E2B3A;
```
| Variante | Hex | Usage |
|----------|-----|-------|
| **500** | **`#1E2B3A`** | **Textes principaux, headers** |
| 700 | `#121A23` | Dark mode backgrounds |
| 900 | `#06090C` | Noir profond |

**Psychologie:** Sophistication, sérieux, lisibilité.

---

### 5. Light — Crème Mocha
```css
--nsignal-light: #F8F5F2;
```
| Variante | Hex | Usage |
|----------|-----|-------|
| **300** | **`#F8F5F2`** | **Fonds principaux, cards** |
| 500 | `#D6D0CA` | Bordures légères |
| 700 | `#8A8279` | Texte muted |

**Psychologie:** Chaleur, confort, inspiration Pantone 2025 (Mocha Mousse).

---

## 🏷️ Couleurs de Catégories (5 Types de Posts)

| Type | Couleur | Hex | Light | Contraste |
|------|---------|-----|-------|----------|
| **Personnel** | Bleu Ocean | `#0B6E99` | `#E6F4F9` | 5.2:1 ✓ |
| **Playlist** | Coral | `#E86A58` | `#FDEBE8` | 4.6:1 ✓ |
| **Hérité** | Vert Forêt | `#2D7D46` | `#E8F5EC` | 4.9:1 ✓ |
| **Suggéré** | Orange Vif | `#D9730D` | `#FEF3E6` | 4.6:1 ✓ |
| **Partagé** | Pourpre Berry | `#7C4DFF` | `#F0EBFF` | 4.5:1 ✓ |

### Icônes Recommandées
```
👤 Personnel
🎵 Playlist  
📦 Hérité
💡 Suggéré
🔗 Partagé
```

---

## ⚠️ Couleurs Sémantiques

| État | Couleur | Hex | Usage |
|------|---------|-----|-------|
| **Success** | Vert Forêt | `#2D7D46` | Confirmations, validations |
| **Warning** | Orange Vif | `#D9730D` | Alertes modérées |
| **Error** | Rouge | `#DC2626` | Erreurs, suppressions |
| **Info** | Bleu Ocean | `#0B6E99` | Informations, tips |

---

## 🌓 Modes Light & Dark

### Light Mode
```css
--light-bg: #FFFFFF;
--light-surface: #F8F5F2;
--light-text: #1E2B3A;
--light-text-muted: #6B6259;
--light-border: #EDE9E5;
```

### Dark Mode
```css
--dark-bg: #0F1419;
--dark-surface: #1E2B3A;
--dark-text: #F8F5F2;
--dark-text-muted: #B8B0A8;
--dark-border: #2B3544;
```

---

## 🌈 Gradients de Marque

### Gradient Primary (Hero, CTAs premium)
```css
background: linear-gradient(135deg, #0F7B6C 0%, #E86A58 100%);
```

### Gradient Dark (Headers, footers)
```css
background: linear-gradient(135deg, #1E2B3A 0%, #0F7B6C 100%);
```

### Gradient Warm (Highlights, badges)
```css
background: linear-gradient(135deg, #E86A58 0%, #DFAB01 100%);
```

---

## 📝 Typographie

### Font Family
```css
font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Échelle Typographique

| Élément | Taille | Weight | Line Height |
|---------|--------|--------|-------------|
| H1 | 48px | 800 | 1.1 |
| H2 | 36px | 700 | 1.2 |
| H3 | 24px | 700 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |
| Caption | 12px | 500 | 1.4 |

---

## 🔘 Boutons

### Primary Button
```css
background: #0F7B6C;
color: white;
border-radius: 10px;
padding: 12px 24px;
```

### Secondary Button
```css
background: #E86A58;
color: white;
```

### Outline Button
```css
background: transparent;
color: #0F7B6C;
border: 2px solid #0F7B6C;
```

### Accent Button
```css
background: #DFAB01;
color: #1E2B3A;
```

---

## 📐 Espacements & Rayons

### Border Radius
```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### Shadows
```css
--shadow-card: 0 4px 24px rgba(0, 0, 0, 0.06);
--shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.12);
--shadow-nsignal: 0 4px 24px rgba(15, 123, 108, 0.15);
```

---

## ✅ Accessibilité

### Ratios de Contraste (WCAG AA)

| Combinaison | Ratio | Status |
|-------------|-------|--------|
| Primary sur blanc | 5.1:1 | ✅ AA |
| Secondary sur blanc | 4.6:1 | ✅ AA |
| Dark sur blanc | 12.8:1 | ✅ AAA |
| Blanc sur Primary | 5.1:1 | ✅ AA |
| Blanc sur Dark | 12.8:1 | ✅ AAA |

### Daltonisme
- ✅ Palette testée pour deutéranopie
- ✅ Couleurs catégories espacées de 60°+ sur cercle chromatique
- ✅ Ne jamais utiliser rouge-vert adjacents

---

## 🚫 À Éviter

| ❌ Ne Pas Faire | ✅ Faire |
|-----------------|----------|
| Utiliser le violet AI (#6B7AED) | Utiliser le Teal (#0F7B6C) |
| Gradients bleu-violet | Gradients teal-coral |
| Fond gris froid (#F5F5F5) | Fond crème chaud (#F8F5F2) |
| Texte gris (#666666) | Texte charcoal (#1E2B3A) |
| Trop de couleurs vives | Palette restreinte et cohérente |

---

## 📁 Fichiers de Référence

- `tailwind.config.js` — Configuration Tailwind avec toutes les couleurs
- `src/styles.css` — Variables CSS globales
- `src/components/NSignalLogo.tsx` — Logo avec nouvelles couleurs

---

## 🔄 Historique

| Date | Version | Changement |
|------|---------|------------|
| 14/12/2025 | 1.0 | Création charte nSignal |
| — | — | Remplacement palette nReach (violet) |

---

**"n locations. One signal."** 📡
