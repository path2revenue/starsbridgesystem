# ⭐ StarsBridgeSystem — Landing Page

**Landing page professionnelle pour StarsBridgeSystem**, construite avec le système [Landing Factory](https://github.com/path2revenue/landing-factory).

🔗 **Production** : Déployé automatiquement sur Vercel à chaque push sur `main`.

---

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
```

- **Site** : http://localhost:3000
- **Admin** : http://localhost:3000/admin

---

## ⚙️ Variables d'environnement

Créer `.env.local` à la racine :

```env
SITE_ID=starsbridgesystem
ADMIN_PASSWORD=<mot-de-passe>
SUPABASE_URL=https://blfzcszrsoowowxgzbaq.supabase.co
SUPABASE_SERVICE_KEY=<clé-service>
```

---

## 🎨 Design System

### Palettes disponibles (9)
🔵 Trust · 🟣 Vibrant · 🟡 Luxury · 🟢 Healthcare · 🟠 Creative · ⚫ Dark · 🔴 Obsidian · 🌅 Sunset · 🌊 Ocean

### Styles visuels (6)
Linear · Glassmorphism · Aurora · Bento · Minimal · Brutalist

### Polices (8)
Inter · Montserrat · Playfair Display · Roboto · Lato · Space Grotesk · DM Sans · Outfit

Tout se configure depuis **`/admin`** > onglet **Design & SEO**.

---

## 📦 Structure

```
app/
├── components/     # 16 sections de landing page
├── admin/          # Panneau d'administration
├── api/            # Routes API (login, save, upload)
├── mentions-legales/
├── merci/
├── globals.css     # Palettes + styles visuels
├── layout.js       # Layout (fonts, tracking, SEO)
└── page.js         # Assemblage des sections
lib/
├── config.js       # Chargement config Supabase
├── supabase.js     # Client Supabase
└── auth.js         # Auth admin
```

---

## 📝 Éditer le contenu

1. Aller sur `/admin`
2. Se connecter avec le mot de passe
3. Modifier les sections (7 onglets)
4. Enregistrer → Live en ~60 secondes

---

## 🔄 Synchroniser avec le template

Si le template Landing Factory évolue :

```bash
robocopy "c:\Workflows\LandingPages\landing-factory" "c:\Workflows\LandingPages\starsbridgesystem" /MIR /XD node_modules .next .git /XF .env.local
npm install
npm run build
git add -A && git commit -m "sync: update from factory" && git push origin main
```

---

## 📄 Licence

Propriétaire — Path2Revenue. Tous droits réservés.
