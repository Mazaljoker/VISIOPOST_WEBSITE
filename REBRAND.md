# 🎨 nReach Studio - Guide de Migration

## Changement de Marque

**Ancien nom:** VisioPost  
**Nouveau nom:** nReach Studio  
**Domaines:** nreachstudio.com, nreachstudio.fr  
**Tagline:** "n locations. One studio."

---

## 🎨 Palette de Couleurs

### Brand Colors

| Nom | Hex | Usage |
|-----|-----|-------|
| **Midnight** | `#1A1F3D` | Primary, headers, logo |
| **Electric Cyan** | `#00D4AA` | Accent, CTAs, highlights |
| **Lavande Tech** | `#6B7AED` | Secondary, hover states |

### Light Mode

| Nom | Hex | Usage |
|-----|-----|-------|
| Background | `#FFFFFF` | Fond principal |
| Surface | `#F9FAFB` | Cards, surfaces |
| Text | `#0F1219` | Texte principal |
| Text Muted | `#6B7280` | Texte secondaire |
| Border | `#E5E7EB` | Bordures |

### Dark Mode

| Nom | Hex | Usage |
|-----|-----|-------|
| Background | `#0F1219` | Fond principal |
| Surface | `#1F2937` | Cards, surfaces |
| Text | `#E5E7EB` | Texte principal |
| Text Muted | `#9CA3AF` | Texte secondaire |
| Border | `#374151` | Bordures |

---

## 🔤 Typographie

**Font:** Plus Jakarta Sans  
**Weights:** 400, 500, 600, 700, 800

| Usage | Size | Weight |
|-------|------|--------|
| H1 | 48px | 800 |
| H2 | 32px | 700 |
| H3 | 24px | 700 |
| Body | 16px | 400 |
| Button | 15px | 600 |
| Small | 14px | 500 |

---

## 📁 Assets

```
public/
├── favicon.svg
├── logos/
│   ├── nreach-logo-light.svg
│   ├── nreach-logo-dark.svg
│   ├── nreach-icon-light.svg
│   └── nreach-icon-dark.svg
```

---

## 🔄 Checklist Migration

### Phase 1: Assets & Config ✅
- [x] Logos SVG (light/dark)
- [x] Favicon
- [x] tailwind.config.js
- [x] index.html (meta tags)

### Phase 2: Composants UI
- [ ] Header.tsx
- [ ] Footer.tsx
- [ ] Button.tsx
- [ ] PricingCard.tsx
- [ ] FeatureCard.tsx

### Phase 3: Sections
- [ ] HeroSection.tsx
- [ ] PricingSection.tsx
- [ ] FeaturesSection.tsx
- [ ] FaqSection.tsx
- [ ] FinalCtaSection.tsx

### Phase 4: Contenu
- [ ] Remplacer "VisioPost" → "nReach Studio"
- [ ] Mettre à jour les textes
- [ ] Ajouter tagline

### Phase 5: Tests
- [ ] Light mode
- [ ] Dark mode
- [ ] Responsive
- [ ] Accessibilité

---

## 🎯 Classes Tailwind Utiles

```jsx
// Backgrounds
className="bg-nreach-midnight"
className="bg-nreach-electric"
className="bg-gradient-electric"
className="bg-gradient-midnight"

// Text
className="text-nreach-midnight"
className="text-nreach-electric"
className="text-light-text"
className="dark:text-dark-text"

// Shadows
className="shadow-nreach"
className="shadow-card"
className="hover:shadow-nreach-lg"

// Borders
className="border-light-border dark:border-dark-border"
```

---

## 📝 Remplacement de Texte

| Ancien | Nouveau |
|--------|----------|
| VisioPost | nReach Studio |
| visio-violet | nreach-midnight |
| visio-rose | nreach-electric |
| visio-bleu | nreach-lavande |
| #3f2680 | #1A1F3D |
| #ed1164 | #00D4AA |
| #00aeef | #6B7AED |
