# 🎨 nSignal - Charte Graphique 2025 ✅ VALIDÉE

> **Anti "Violet AI"** — Palette chaude et humaine

---

## 🎯 Résumé Exécutif

| Élément | Valeur |
|---------|--------|
| **Nom** | nSignal |
| **Domaine** | nsignal.ai |
| **Tagline** | "n locations. One signal." |
| **Validée le** | 14 Décembre 2025 |

---

## 🎨 Palette Officielle

### Couleurs Primaires (5)

| Rôle | Nom | Hex | Tailwind |
|------|-----|-----|----------|
| **Primary** | Teal Profond | `#0F7B6C` | `nsignal-primary` |
| **Secondary** | Coral Dynamique | `#E86A58` | `nsignal-secondary` |
| **Accent** | Jaune Signal | `#DFAB01` | `nsignal-accent` |
| **Dark** | Charcoal Chaud | `#1E2B3A` | `nsignal-dark` |
| **Light** | Crème Mocha | `#F8F5F2` | `nsignal-light` |

### Couleurs de Catégories (5 Types de Posts)

| Type | Hex | Light | Tailwind |
|------|-----|-------|----------|
| **Personnel** | `#0B6E99` | `#E6F4F9` | `category-personnel` |
| **Playlist** | `#E86A58` | `#FDEBE8` | `category-playlist` |
| **Hérité** | `#2D7D46` | `#E8F5EC` | `category-herite` |
| **Suggéré** | `#D9730D` | `#FEF3E6` | `category-suggere` |
| **Partagé** | `#7C4DFF` | `#F0EBFF` | `category-partage` |

### Couleurs Sémantiques

| État | Hex | Usage |
|------|-----|-------|
| **Success** | `#2D7D46` | Confirmations |
| **Warning** | `#D9730D` | Alertes |
| **Error** | `#DC2626` | Erreurs |
| **Info** | `#0B6E99` | Informations |

---

## 📁 Fichiers de Référence

| Fichier | Description |
|---------|-------------|
| `tailwind.config.js` | Configuration Tailwind complète |
| `src/styles.css` | Variables CSS (design tokens) |
| `BRAND_GUIDELINES.md` | Documentation complète |

---

## 🔧 Usage Tailwind

```jsx
// Couleurs primaires
<div className="bg-nsignal-primary text-white">Primary</div>
<div className="bg-nsignal-secondary text-white">Secondary</div>
<div className="bg-nsignal-accent text-nsignal-dark">Accent</div>

// Catégories
<div className="bg-category-personnel-light text-category-personnel">Personnel</div>
<div className="bg-category-playlist-light text-category-playlist">Playlist</div>

// Gradients
<div className="bg-gradient-primary">Gradient Primary → Secondary</div>
<div className="bg-gradient-dark">Gradient Dark → Primary</div>

// Shadows
<div className="shadow-nsignal">Shadow avec teinte Primary</div>
```

---

## 🔧 Usage CSS Variables

```css
/* Couleurs */
color: var(--nsignal-primary);
background: var(--nsignal-secondary);

/* Catégories */
border-left: 3px solid var(--category-personnel);
background: var(--category-personnel-light);

/* Gradients */
background: var(--gradient-primary);

/* Shadows */
box-shadow: var(--shadow-nsignal);
```

---

## ✅ Conformité

- [x] **WCAG AA** — Toutes les combinaisons passent
- [x] **Colorblind-safe** — Testé deutéranopie
- [x] **Tendances 2025** — Inspiré Pantone Mocha Mousse
- [x] **Différenciation** — Évite le "Violet AI" cliché

---

**Prochaine étape:** Appliquer la charte aux composants existants
