import { Component, input, output } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import type {
  Pharmacy,
  PharmacyStatus,
} from "../../core/models/pharmacy.model";

@Component({
  standalone: true,
  selector: "app-pharmacy-card",
  imports: [DecimalPipe, MatButtonModule, MatCardModule],
  templateUrl: "./pharmacy-card.component.html",
  styleUrl: "./pharmacy-card.component.css",
})
export class PharmacyCardComponent {
  readonly pharmacy = input.required<Pharmacy>();
  readonly status = input.required<PharmacyStatus>();
  readonly todayHours = input.required<string>();
  readonly distanceKm = input<number | null>(null);
  readonly detailsRequested = output<Pharmacy>();

  protected readonly statusLabels: Record<PharmacyStatus, string> = {
    open: "Ouverte",
    closed: "Fermée",
    garde: "De garde",
  };

  protected get directionsUrl(): string {
    const { lat, lng } = this.pharmacy().coordinates;
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }
}
