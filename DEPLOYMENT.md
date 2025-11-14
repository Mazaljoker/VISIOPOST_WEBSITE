# 🚀 Guide de Déploiement - VisioPost Landing Page

## 📋 Prérequis

- Node.js 18+ installé
- npm ou yarn
- Compte Vercel/Netlify (gratuit)

---

## 🛠️ Installation Locale

### 1. Installation des dépendances

```bash
cd visiopost-landing
npm install
```

### 2. Lancer en développement

```bash
npm run dev
```

La page sera accessible sur `http://localhost:3000`

### 3. Build de production

```bash
npm run build
```

Le dossier `dist/` contiendra les fichiers optimisés.

---

## 🌐 Déploiement sur Vercel (Recommandé)

### Option A : Via interface web

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer "Add New" → "Project"
3. Importer depuis GitHub/GitLab
4. Vercel détecte automatiquement Vite
5. Cliquer "Deploy"

### Option B : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Production
vercel --prod
```

### Configuration Vercel

Créer `vercel.json` :

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 🔷 Déploiement sur Netlify

### Via interface web

1. Aller sur [netlify.com](https://netlify.com)
2. "Add new site" → "Import from Git"
3. Sélectionner le repo
4. Build settings :
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

### Via CLI

```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Init
netlify init

# Deploy
netlify deploy --prod
```

### Configuration Netlify

Créer `netlify.toml` :

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🐳 Déploiement avec Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml+rss text/javascript;
}
```

### Build & Run

```bash
# Build image
docker build -t visiopost-landing .

# Run container
docker run -p 80:80 visiopost-landing
```

---

## 🔒 Variables d'Environnement

### Pour Analytics (optionnel)

Créer `.env` :

```bash
VITE_GA_ID=G-XXXXXXXXXX
VITE_HOTJAR_ID=XXXXXXX
```

Utiliser dans `index.html` :

```javascript
if (import.meta.env.VITE_GA_ID) {
  // Init Google Analytics
}
```

---

## 🎯 Domaine Personnalisé

### Sur Vercel

1. Aller dans Settings → Domains
2. Ajouter `www.visiopost.app`
3. Configurer DNS :

```
Type  Name  Value
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

### Sur Netlify

1. Domain settings → Add custom domain
2. Configurer DNS :

```
Type  Name  Value
A     @     75.2.60.5
CNAME www   your-site.netlify.app
```

---

## 📊 Configuration Analytics

### Google Analytics

Dans `index.html` :

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Hotjar

```html
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:XXXXXXX,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

---

## ✅ Checklist Pré-Déploiement

### Contenu
- [ ] Tous les textes finalisés
- [ ] Vidéo démo intégrée
- [ ] Images optimisées (WebP)
- [ ] Témoignages clients
- [ ] Logos partenaires

### Technique
- [ ] `npm run build` fonctionne
- [ ] Pas d'erreurs TypeScript
- [ ] Tests responsive mobile/desktop
- [ ] Performance Lighthouse > 90
- [ ] Accessibilité WCAG AA

### SEO
- [ ] Meta tags renseignés
- [ ] Open Graph configuré
- [ ] Favicon ajouté
- [ ] Sitemap.xml généré
- [ ] robots.txt créé

### Légal
- [ ] CGV linkées
- [ ] Mentions légales
- [ ] Politique de confidentialité
- [ ] Cookie consent (si tracking)

### Monitoring
- [ ] Google Analytics configuré
- [ ] Hotjar configuré (optionnel)
- [ ] Sentry pour erreurs (optionnel)
- [ ] Uptime monitoring

---

## 🐛 Troubleshooting

### Build échoue

```bash
# Nettoyer cache
rm -rf node_modules dist
npm install
npm run build
```

### Les couleurs Tailwind ne s'affichent pas

Vérifier `tailwind.config.js` :
```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

### Erreur 404 sur routes

Ajouter dans Vercel/Netlify :
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 📈 Optimisations Post-Déploiement

### Performance

1. **CDN** : Activé par défaut sur Vercel/Netlify
2. **Compression** : Gzip/Brotli automatique
3. **Cache** : Headers optimisés

### SEO

1. **Soumettre à Google** : [search.google.com/search-console](https://search.google.com/search-console)
2. **Bing Webmaster** : [bing.com/webmasters](https://bing.com/webmasters)
3. **Sitemap** : Générer avec `sitemap.xml`

### Monitoring

```bash
# Lighthouse CI
npm i -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage
```

---

## 🆘 Support

- Documentation Vite : [vitejs.dev](https://vitejs.dev)
- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Documentation Netlify : [docs.netlify.com](https://docs.netlify.com)

---

## 📞 Contact

Questions sur le déploiement ? contact@visiopost.app
