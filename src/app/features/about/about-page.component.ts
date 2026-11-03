import { Component, inject, signal } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterLink } from "@angular/router";
import { PharmacyService } from "../../core/services/pharmacy.service";
import { ScrollRevealDirective } from "../../shared/scroll-reveal/scroll-reveal.directive";

@Component({
  standalone: true,
  selector: "app-about-page",
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    ScrollRevealDirective,
  ],
  templateUrl: "./about-page.component.html",
  styleUrl: "./about-page.component.css",
})
export class AboutPageComponent {
  private readonly pharmacyService = inject(PharmacyService);

  protected readonly pharmacyCount = this.pharmacyService.pharmacies.length;
  protected readonly submitted = signal(false);
  protected readonly contactStatus = signal("");
  protected readonly contactForm = new FormGroup({
    name: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(100)],
    }),
    email: new FormControl("", {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(254),
      ],
    }),
    subject: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(120)],
    }),
    message: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(2000)],
    }),
  });

  protected readonly values = [
    {
      symbol: "♡",
      title: "Accessibilité",
      text: "Rendre les informations pharmaceutiques plus faciles à consulter.",
    },
    {
      symbol: "◈",
      title: "Confidentialité",
      text: "Limiter les données personnelles au strict nécessaire.",
    },
    {
      symbol: "✦",
      title: "Innovation",
      text: "Améliorer l’accès aux informations utiles sur tous les écrans.",
    },
    {
      symbol: "✓",
      title: "Fiabilité",
      text: "Présenter clairement les sources et les limites des informations disponibles.",
    },
  ];

  protected readonly features = [
    "Localisation à proximité, sur demande",
    "Horaires et coordonnées visibles sur chaque fiche",
    "Appel direct et préparation d’itinéraire",
    "Recherche par ville, nom ou disponibilité",
    "Informations sans vente en ligne de médicaments",
    "Parcours pensé pour le mobile comme pour le desktop",
  ];

  protected readonly commitments = [
    {
      title: "Aucune vente en ligne",
      text: "PHARMCI ne vend ni ne livre de médicaments via Internet.",
    },
    {
      title: "Aucun transfert d’ordonnance",
      text: "La plateforme ne permet pas de transmettre une ordonnance.",
    },
    {
      title: "Neutralité",
      text: "Les résultats sont présentés comme un annuaire, sans orientation préférentielle.",
    },
    {
      title: "Données personnelles",
      text: "La position n’est demandée qu’à la demande de l’utilisateur et sert au tri local des résultats.",
    },
  ];

  protected submitContact(): void {
    this.submitted.set(true);
    this.contactStatus.set("");
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      return;
    }

    this.contactStatus.set(
      "Le formulaire est valide, mais aucun service d’envoi n’est configuré : votre message n’a pas été transmis.",
    );
  }
}
