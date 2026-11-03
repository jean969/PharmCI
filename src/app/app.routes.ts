import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    title: "Accueil | PHARMCI",
    loadComponent: () =>
      import("./features/home/home-page.component").then(
        (component) => component.HomePageComponent,
      ),
  },
  {
    path: "pharmacies",
    title: "Pharmacies | PHARMCI",
    loadComponent: () =>
      import("./features/pharmacies/pharmacies-page.component").then(
        (component) => component.PharmaciesPageComponent,
      ),
  },
  {
    path: "a-propos",
    title: "À propos | PHARMCI",
    loadComponent: () =>
      import("./features/about/about-page.component").then(
        (component) => component.AboutPageComponent,
      ),
  },
  {
    path: "espace-sante",
    title: "Espace santé | PHARMCI",
    loadComponent: () =>
      import("./features/health/health-page.component").then(
        (component) => component.HealthPageComponent,
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
