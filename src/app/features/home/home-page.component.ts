import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { RouterLink } from "@angular/router";
import { ScrollRevealDirective } from "../../shared/scroll-reveal/scroll-reveal.directive";

@Component({
  standalone: true,
  selector: "app-home-page",
  imports: [MatButtonModule, MatCardModule, RouterLink, ScrollRevealDirective],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent {
  protected readonly features = [
    {
      icon: "⌖",
      title: "Repérez les pharmacies",
      description:
        "Recherchez par nom ou par ville, et demandez les établissements proches de votre position.",
    },
    {
      icon: "◷",
      title: "Consultez les horaires",
      description:
        "Retrouvez les horaires renseignés et vérifiez le statut calculé pour aujourd’hui.",
    },
    {
      icon: "↗",
      title: "Préparez votre trajet",
      description:
        "Ouvrez l’itinéraire vers une pharmacie dans votre application de cartographie.",
    },
  ];

  protected readonly steps = [
    "Cherchez un nom ou sélectionnez une ville.",
    "Comparez les informations disponibles sur les fiches.",
    "Appelez la pharmacie ou ouvrez l’itinéraire.",
  ];

  protected readonly tips = [
    {
      icon: "◷",
      title: "Confirmez les horaires",
      description:
        "Les horaires affichés sont indicatifs et peuvent évoluer. Un appel permet de vérifier que la pharmacie est ouverte.",
    },
    {
      icon: "☎",
      title: "Contactez l’établissement",
      description:
        "Utilisez le numéro indiqué sur la fiche pour obtenir directement les informations les plus récentes.",
    },
    {
      icon: "↗",
      title: "Préparez votre trajet",
      description:
        "Consultez l’adresse et ouvrez l’itinéraire proposé avant de vous déplacer.",
    },
  ];
}
