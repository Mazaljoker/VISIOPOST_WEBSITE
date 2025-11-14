# 🚀 VisioPost Landing Page

Landing page moderne et optimisée pour VisioPost avec les couleurs officielles VisioScreen.

## ✨ Fonctionnalités

- ✅ Design moderne avec gradient VisioScreen (violet → rose → bleu)
- ✅ Responsive mobile-first
- ✅ Animations fluides
- ✅ SEO optimisé
- ✅ Performance optimale
- ✅ TypeScript + React
- ✅ Tailwind CSS

## 🎨 Palette Couleurs VisioScreen

```css
Violet: #3f2680
Rose:   #ed1164
Bleu:   #00aeef
```

## 📦 Installation

```bash
# Installation des dépendances
npm install

# Développement local
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

## 🏗️ Structure

```
visiopost-landing/
├── LandingPage.tsx      # Composant principal
├── App.tsx              # Point d'entrée React
├── styles.css           # Styles globaux + Tailwind
├── tailwind.config.js   # Configuration Tailwind avec couleurs VisioScreen
├── index.html           # HTML entry point
└── package.json         # Dépendances
```

## 📝 Sections de la Page

1. **Hero** - Message principal + CTA
2. **Social Proof** - Logos partenaires
3. **Problème** - Pain points coopératives
4. **Solution** - Comment VisioPost fonctionne (3 étapes)
5. **Fonctionnalités** - Grid 6 features
6. **Avant/Après** - Comparaison
7. **Pricing** - Tarifs transparents
8. **FAQ** - Questions fréquentes
9. **CTA Final** - Conversion
10. **Footer** - Navigation + légal

## 🎯 Points Clés

### Positionnement
- **Océan Bleu** : Coopératives (pas franchises corporate)
- **USP** : GPT-4 Vision + Posts suggérés + Centrale gratuite
- **Ton** : Direct, bénéfices concrets, sans jargon

### Conversion
- CTA répété 4 fois
- "Sans carte bancaire" répété 3 fois
- Vidéo démo < 60s
- Social proof

### SEO
- Meta tags optimisés
- Structure sémantique
- Open Graph + Twitter Cards
- Performance (Lighthouse > 90)

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy dist/ folder
```

### Variables d'environnement

Aucune variable nécessaire pour la landing page statique.

## 🎨 Personnalisation

### Modifier les couleurs

Éditer `tailwind.config.js` :

```javascript
colors: {
  'visio-violet': {
    DEFAULT: '#3f2680',
    // ...
  }
}
```

### Ajouter une section

```tsx
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Votre contenu */}
  </div>
</section>
```

### Modifier le texte

Tous les textes sont dans `LandingPage.tsx` - chercher par section.

## 📊 Analytics

Ajouter dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Hotjar -->
<script>
  (function(h,o,t,j,a,r){
    // Hotjar code
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## ✅ Checklist Pré-Lancement

- [ ] Textes validés
- [ ] Vidéo démo tournée et intégrée
- [ ] Screenshots produit HD
- [ ] Témoignage client
- [ ] CGV + Mentions légales
- [ ] Formulaire de contact fonctionne
- [ ] Test mobile (iPhone + Android)
- [ ] Test desktop (Chrome, Safari, Firefox)
- [ ] Lighthouse score > 90
- [ ] Meta tags vérifiés
- [ ] Favicon ajouté
- [ ] Analytics installés

## 🐛 Troubleshooting

### Les couleurs ne s'affichent pas

Vérifier que Tailwind est bien configuré et que `styles.css` est importé dans `App.tsx`.

### Les icônes ne s'affichent pas

Installer lucide-react :
```bash
npm install lucide-react
```

### Build échoue

Vérifier TypeScript :
```bash
npx tsc --noEmit
```

## 📞 Support

Pour toute question : contact@visiopost.app

## 📄 Licence

Propriété de VisioScreen SA, Suisse © 2025
