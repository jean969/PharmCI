import { Component, computed, inject, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { PharmacyService } from "../../core/services/pharmacy.service";
import { GeolocationService } from "../../core/services/geolocation.service";
import type {
  Pharmacy,
  PharmacyFilterStatus,
  PharmacyStatus,
} from "../../core/models/pharmacy.model";
import { PharmacyCardComponent } from "../../shared/pharmacy-card/pharmacy-card.component";
import { PharmacyDetailsDialogComponent } from "../../shared/pharmacy-details-dialog/pharmacy-details-dialog.component";
import { ScrollRevealDirective } from "../../shared/scroll-reveal/scroll-reveal.directive";

@Component({
  standalone: true,
  selector: "app-pharmacies-page",
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    PharmacyCardComponent,
    ScrollRevealDirective,
  ],
  templateUrl: "./pharmacies-page.component.html",
  styleUrl: "./pharmacies-page.component.css",
})
export class PharmaciesPageComponent {
  protected readonly pharmacyService = inject(PharmacyService);
  private readonly geolocationService = inject(GeolocationService);
  private readonly dialog = inject(MatDialog);

  protected readonly query = signal("");
  protected readonly city = signal("");
  protected readonly service = signal("");
  protected readonly status = signal<PharmacyFilterStatus>("all");
  protected readonly position = signal<GeolocationPosition | null>(null);
  protected readonly locationError = signal("");
  protected readonly isLocating = signal(false);
  protected readonly cities = this.pharmacyService.cities;

  protected readonly results = computed(() => {
    const matches = this.pharmacyService.search(
      this.query(),
      this.city(),
      this.status(),
      this.service(),
    );
    const position = this.position()?.coords;

    return matches
      .map((pharmacy) => ({
        pharmacy,
        status: this.pharmacyService.getStatus(pharmacy),
        todayHours: this.pharmacyService.getTodayHours(pharmacy),
        distanceKm: position
          ? this.pharmacyService.getDistance(pharmacy, position)
          : null,
      }))
      .sort((first, second) => {
        if (first.distanceKm === null || second.distanceKm === null) {
          return first.pharmacy.name.localeCompare(second.pharmacy.name, "fr");
        }
        return first.distanceKm - second.distanceKm;
      });
  });

  protected readonly statusOptions: {
    value: PharmacyFilterStatus;
    label: string;
  }[] = [
    { value: "all", label: "Tous les statuts" },
    { value: "open", label: "Ouvertes maintenant" },
    { value: "garde", label: "Pharmacies de garde" },
    { value: "closed", label: "Fermées" },
  ];

  protected readonly serviceOptions = [
    { value: "24h", label: "24 h / 24" },
    { value: "consultation", label: "Consultation" },
    { value: "injection", label: "Injection" },
    { value: "analyses", label: "Analyses" },
    { value: "urgence", label: "Urgence" },
  ];

  protected openDetails(pharmacy: Pharmacy): void {
    this.dialog.open(PharmacyDetailsDialogComponent, {
      ariaLabel: `Détails de ${pharmacy.name}`,
      data: pharmacy,
      enterAnimationDuration: "240ms",
      exitAnimationDuration: "180ms",
      maxWidth: "min(94vw, 640px)",
      width: "640px",
    });
  }

  protected async locateNearby(): Promise<void> {
    this.isLocating.set(true);
    this.locationError.set("");

    try {
      const position = await this.geolocationService.getCurrentPosition();
      this.position.set(position);
    } catch (error) {
      this.locationError.set(
        error instanceof Error
          ? error.message
          : "La position n’a pas pu être déterminée.",
      );
    } finally {
      this.isLocating.set(false);
    }
  }

  protected clearFilters(): void {
    this.query.set("");
    this.city.set("");
    this.service.set("");
    this.status.set("all");
    this.position.set(null);
    this.locationError.set("");
  }
}
