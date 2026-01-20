# 💊 PHARMCI - Localisateur de Pharmacies en Côte d'Ivoire

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**PHARMCI** est une plateforme web moderne permettant de localiser facilement les pharmacies ouvertes en Côte d'Ivoire. Avec une interface intuitive et des fonctionnalités avancées, trouvez rapidement une pharmacie près de chez vous, 24h/24.

## 🌟 Fonctionnalités

### ⚡ Fonctionnalités principales

- **Recherche intelligente** : Trouvez des pharmacies par nom, ville ou région
- **Géolocalisation** : Localisez les pharmacies les plus proches de votre position
- **Filtres avancés** :
  - Pharmacies ouvertes maintenant
  - Pharmacies de garde
  - Recherche par proximité
- **Interface responsive** : Compatible mobile, tablette et desktop
- **Données en temps réel** : Plus de 500 pharmacies référencées

### 🎨 Interface utilisateur

- Design moderne et attrayant
- Animations fluides
- Navigation intuitive
- Thème adaptatif
- Éléments flottants décoratifs

### 📱 Technologies utilisées

- **Frontend** : HTML5, CSS3, JavaScript ES6+
- **Framework CSS** : Bootstrap 5.3.0
- **Icônes** : Font Awesome 6.4.0
- **Polices** : Google Fonts (Inter)
- **API** : Géolocalisation HTML5

## 🚀 Démo en ligne

Visitez la version live : [PHARMCI Live Demo](#) _(lien à ajouter)_

## 📦 Installation

### Prérequis

- Navigateur web moderne
- Serveur web local (optionnel pour le développement)

### Installation locale

1. **Clonez le repository**

```bash
git clone https://github.com/votre-username/pharmci.git
cd pharmci
```

2. **Lancez le projet**

```bash
# Option 1: Ouvrez directement index.html dans votre navigateur
open index.html

# Option 2: Utilisez un serveur local
python -m http.server 8000
# ou
npx serve .
```

3. **Accédez au site**
   Ouvrez votre navigateur et allez à `http://localhost:8000`

## 📁 Structure du projet

```
pharmci/
│
├── index.html                 # Page principale
├── pharmacie.html             # Page de localisation des pharmacies
├── A-propos.html              # Page à propos
├── espace.html                # Espace utilisateur/admin
│
├── css/                        # Fichiers de styles
│   ├── styles.css             # Styles principaux
│   ├── pharm.css              # Styles pour la page pharmacie
│   ├── A-propos.css           # Styles pour la page à propos
│   └── espace.css             # Styles pour l'espace utilisateur
│
├── js/                         # Fichiers JavaScript
│   ├── main.js                # Script principal (Vite)
│   ├── app.js                 # Logique applicative
│   ├── script.js              # Script pour la page pharmacie
│   ├── data.js                # Données des pharmacies
│   ├── city.js                # Données des villes
│   ├── cityFilter.js          # Filtrage des villes
│   ├── espace.js              # Logique pour l'espace utilisateur
│   └── counter.js             # Utilitaires de comptage
│
├── package.json               # Configuration npm/Vite
├── package-lock.json          # Dépendances verrouillées
├── README.md                  # Documentation
├── LICENSE                    # Licence MIT
└── Cahier_des_Charges_PHARMCI.docx  # Cahier des charges
```

## 🎯 Utilisation

### Recherche de pharmacies

1. **Recherche par texte**

   - Tapez le nom d'une pharmacie ou d'une ville dans la barre de recherche
   - Les résultats s'affichent en temps réel

2. **Utilisation des filtres**

   - **Près de moi** : Active la géolocalisation
   - **Ouvertes maintenant** : Filtre les pharmacies actuellement ouvertes
   - **Pharmacies de garde** : Affiche uniquement les pharmacies de garde

3. **Affichage des détails**
   - Cliquez sur une pharmacie pour voir ses informations complètes
   - Adresse, téléphone, horaires, services disponibles

## 🛠️ Développement

### Scripts disponibles

```bash
# Lancer un serveur de développement Vite
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

### Technologies de build

Le projet utilise **Vite** pour le build et le développement rapide :

- **Vite** v5.4.2
- Compilation rapide en développement
- Optimisation de bundle pour la production

### Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Standards de code

- Utilisez ES6+ pour JavaScript avec modules ES
- Suivez les conventions de nommage camelCase
- Commentez le code complexe
- Testez sur différents navigateurs (Chrome, Firefox, Safari, Edge)
- Respectez la structure modulaire du projet Vite

### Pages et fonctionnalités

#### Index.html (Accueil)

Page d'accueil avec présentation générale de PHARMCI

#### Pharmacie.html (Localisateur)

Page principale de recherche et localisation des pharmacies avec :

- Recherche par nom ou ville
- Filtres avancés (ouvertes maintenant, de garde)
- Géolocalisation
- Affichage détaillé des pharmacies

#### A-propos.html

Page informationnelle sur le projet PHARMCI, son équipe et sa mission

#### Espace.html

Espace utilisateur/administrateur pour :

- Gestion des pharmacies
- Profil utilisateur
- Notifications

## 📊 Statistiques

- **500+** pharmacies répertoriées
- **19** régions couvertes
- **24/7** service disponible
- **1000+** utilisateurs actifs

## 🗺️ Régions couvertes

- **Abidjan** - District autonome
- **Yamoussoukro** - District de la capitale
- **Bouaké** - Région du Gbêkê
- **Daloa** - Région du Haut-Sassandra
- **San-Pédro** - Région du Bas-Sassandra
- **Et 14 autres régions...**

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` pour les configurations spécifiques :

```env
API_KEY=votre_cle_api
DEFAULT_CITY=Abidjan
MAX_RESULTS=50
```

### Personnalisation des couleurs

Modifiez les variables CSS dans `styles.css` :

```css
:root {
  --color-primary: #4f46e5;
  --color-secondary: #7c3aed;
  --color-accent: #06b6d4;
}
```

## 📱 Compatibilité

### Navigateurs supportés

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Opera 67+

### Appareils

- 📱 Mobile (iOS/Android)
- 📱 Tablette
- 💻 Desktop
- 📺 Smart TV

## 🚦 Roadmap

### Version 1.1.0 (En cours)

- [ ] Système de notation des pharmacies
- [ ] Chat en temps réel avec les pharmaciens
- [ ] Notifications push
- [ ] Mode hors ligne

### Version 1.2.0 (Prévu)

- [ ] Application mobile native
- [ ] Système de réservation
- [ ] Intégration paiement mobile
- [ ] API publique

### Version 2.0.0 (Futur)

- [ ] Intelligence artificielle pour recommandations
- [ ] Réalité augmentée
- [ ] Expansion vers d'autres pays d'Afrique

## 🐛 Signaler un bug

Si vous trouvez un bug, veuillez créer une issue avec :

- Description détaillée du problème
- Étapes pour reproduire
- Navigateur et version
- Captures d'écran si nécessaire

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

```
MIT License

Copyright (c) 2025 PHARMCI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

## 👥 Équipe

### Développeurs

- Yavo Jean-Pierre - _Développeur Principal_ - [@votre-github](https://github.com/jean969)

### Contributeurs

Merci à tous les [contributeurs](https://github.com/votre-username/pharmci/contributors) qui ont participé au projet !

## 📞 Contact

- **Email** : contact@pharmci.ci
- **Site web** : https://pharmci.ci
- **Twitter** : [@pharmci](https://twitter.com/pharmci)
- **LinkedIn** : [PHARMCI](https://linkedin.com/company/pharmci)

## 🙏 Remerciements

- [Bootstrap](https://getbootstrap.com/) pour le framework CSS
- [Font Awesome](https://fontawesome.com/) pour les icônes
- [Google Fonts](https://fonts.google.com/) pour les polices
- La communauté open source pour l'inspiration

---

<div align="center">

**[⬆ Retour en haut](#-pharmci---localisateur-de-pharmacies-en-côte-divoire)**

Fait avec ❤️ en Côte d'Ivoire

</div>

