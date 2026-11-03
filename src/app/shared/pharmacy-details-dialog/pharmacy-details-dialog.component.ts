import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import type { Pharmacy } from "../../core/models/pharmacy.model";

@Component({
  standalone: true,
  selector: "app-pharmacy-details-dialog",
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: "./pharmacy-details-dialog.component.html",
  styleUrl: "./pharmacy-details-dialog.component.css",
})
export class PharmacyDetailsDialogComponent {
  protected readonly pharmacy = inject<Pharmacy>(MAT_DIALOG_DATA);
  protected readonly hours = [
    { key: "lundi", label: "Lundi" },
    { key: "mardi", label: "Mardi" },
    { key: "mercredi", label: "Mercredi" },
    { key: "jeudi", label: "Jeudi" },
    { key: "vendredi", label: "Vendredi" },
    { key: "samedi", label: "Samedi" },
    { key: "dimanche", label: "Dimanche" },
  ];

  protected get directionsUrl(): string {
    const { lat, lng } = this.pharmacy.coordinates;
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }
}
