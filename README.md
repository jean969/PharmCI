# PHARMCI

PHARMCI est une application web de recherche d’informations sur les pharmacies en Côte d’Ivoire. Elle permet de parcourir les fiches locales, rechercher par nom ou ville, consulter les horaires indiqués et ouvrir un itinéraire.

## Stack technique

- Angular 22 avec composants standalone et routing lazy-loadé
- Angular Material 22
- TypeScript strict, RxJS et tests Vitest via Angular CLI
- CSS personnalisé pour l’identité visuelle et le responsive
- Nginx pour le déploiement Docker

## Pages

| Route           | Page                                     |
| --------------- | ---------------------------------------- |
| `/`             | Accueil                                  |
| `/pharmacies`   | Recherche et fiches des pharmacies       |
| `/a-propos`     | Présentation, engagements et formulaire  |
| `/espace-sante` | Conseils, astuces et guide des symptômes |

Les routes principales chargent leurs composants à la demande. Navigation et pied de page sont partagés.

## Prérequis et lancement

Utilisez une version de Node.js prise en charge par Angular CLI 22, ainsi que npm.

```bash
npm ci
npm start
```

Le serveur de développement démarre sur `http://localhost:4200`.

```bash
npm run build
npm test -- --watch=false
```

Pour construire l’image de production :

```bash
docker build -t pharmci .
docker run --rm -p 8080:80 pharmci
```

Le site sera accessible sur `http://localhost:8080`. Nginx redirige les routes SPA vers Angular et sert les fichiers compilés.

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` construit l’application avec le chemin `/PharmCI/`, puis publie automatiquement les fichiers compilés sur chaque push vers `main`. Il inclut aussi un `404.html` basé sur l’application pour permettre l’accès direct aux routes Angular.

Dans les paramètres du dépôt GitHub, sous **Settings > Pages > Build and deployment**, sélectionnez **GitHub Actions** comme source. Le site est ensuite disponible à l’adresse `https://jean969.github.io/PharmCI/`.

## Structure

```text
src/
  app/
    core/
      data/             # Fiches locales des pharmacies
      models/           # Types métier
      services/         # Recherche, horaires et géolocalisation
    features/
      about/
      health/
      home/
      pharmacies/
    shared/
      pharmacy-card/
      pharmacy-details-dialog/
      site-footer/
      site-header/
    app.routes.ts
  index.html
  material-theme.scss
  styles.css
```

## Données et limites actuelles

- Les pharmacies sont fournies par le fichier local `src/app/core/data/pharmacies.data.ts` : il contient 42 fiches distinctes. Un doublon exact présent dans la liste d’origine a été retiré pendant la migration. Ce projet ne dispose pas encore de backend ni d’API de données.
- Aucune fiche n’est actuellement marquée comme pharmacie de garde. Les horaires et coordonnées sont locaux et ne sont pas garantis en temps réel; contactez l’établissement pour les confirmer.
- La géolocalisation est déclenchée uniquement lorsque l’utilisateur choisit « Près de moi ». Elle nécessite un navigateur compatible et un contexte sécurisé (HTTPS ou localhost).
- L’itinéraire ouvre Google Maps; aucun compte ou clé Google Maps n’est requis par l’application.
- Le formulaire de contact applique une validation côté client, mais ne transmet pas les messages : aucun service d’envoi n’est configuré.
- L’Espace Santé fournit des informations générales et ne remplace pas l’avis d’un professionnel. PHARMCI ne vend ni ne livre de médicaments et ne permet pas le transfert d’ordonnances.

## Commandes npm

- `npm start` — lancer le serveur Angular
- `npm run build` — compiler l’application de production
- `npm run watch` — compiler en mode développement avec surveillance
- `npm test -- --watch=false` — exécuter les tests une fois
