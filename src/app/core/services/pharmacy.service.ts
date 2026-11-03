import { Injectable } from "@angular/core";
import { pharmaciesData } from "../data/pharmacies.data";
import type {
  Pharmacy,
  PharmacyFilterStatus,
  PharmacyStatus,
} from "../models/pharmacy.model";

function getAbidjanTime(now: Date): { weekday: string; minutes: number } {
  const parts = new Map(
    new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      hourCycle: "h23",
      minute: "2-digit",
      timeZone: "Africa/Abidjan",
      weekday: "long",
    })
      .formatToParts(now)
      .map(({ type, value }) => [type, value]),
  );
  const weekday = parts.get("weekday");
  const hour = parts.get("hour");
  const minute = parts.get("minute");

  if (!weekday || !hour || !minute) {
    throw new Error("Impossible de déterminer l’heure locale d’Abidjan.");
  }

  return {
    weekday: weekday.toLocaleLowerCase("fr"),
    minutes: Number(hour) * 60 + Number(minute),
  };
}

@Injectable({ providedIn: "root" })
export class PharmacyService {
  readonly pharmacies = pharmaciesData;
  readonly cities = [
    ...new Set(pharmaciesData.map((pharmacy) => pharmacy.city)),
  ].sort((first, second) => first.localeCompare(second, "fr"));

  search(
    query: string,
    city: string,
    status: PharmacyFilterStatus,
    service = "",
  ): Pharmacy[] {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr");

    return this.pharmacies.filter((pharmacy) => {
      const matchesQuery =
        !normalizedQuery ||
        [pharmacy.name, pharmacy.address, pharmacy.city].some((value) =>
          value.toLocaleLowerCase("fr").includes(normalizedQuery),
        );
      const matchesCity = !city || pharmacy.city === city;
      const matchesStatus =
        status === "all" || this.getStatus(pharmacy) === status;
      const matchesService = !service || pharmacy.services.includes(service);

      return matchesQuery && matchesCity && matchesStatus && matchesService;
    });
  }

  getStatus(pharmacy: Pharmacy, now = new Date()): PharmacyStatus {
    if (pharmacy.isGarde) {
      return "garde";
    }

    const abidjanTime = getAbidjanTime(now);
    const hours = pharmacy.hours[abidjanTime.weekday];
    if (!hours || hours.toLocaleLowerCase("fr") === "fermé") {
      return "closed";
    }

    const match = /^(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})$/.exec(hours);
    if (!match) {
      return "closed";
    }

    const [, openHour, openMinute, closeHour, closeMinute] = match;
    const opening = Number(openHour) * 60 + Number(openMinute);
    const closing = Number(closeHour) * 60 + Number(closeMinute);
    const current = abidjanTime.minutes;
    const isOpen =
      opening <= closing
        ? current >= opening && current < closing
        : current >= opening || current < closing;

    return isOpen ? "open" : "closed";
  }

  getTodayHours(pharmacy: Pharmacy, now = new Date()): string {
    return pharmacy.hours[getAbidjanTime(now).weekday] || "Non spécifié";
  }

  getDistance(
    pharmacy: Pharmacy,
    position: Pick<GeolocationCoordinates, "latitude" | "longitude">,
  ): number {
    const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
    const latitudeDelta = toRadians(
      pharmacy.coordinates.lat - position.latitude,
    );
    const longitudeDelta = toRadians(
      pharmacy.coordinates.lng - position.longitude,
    );
    const latitude = toRadians(position.latitude);
    const pharmacyLatitude = toRadians(pharmacy.coordinates.lat);
    const haversine =
      Math.sin(latitudeDelta / 2) ** 2 +
      Math.cos(latitude) *
        Math.cos(pharmacyLatitude) *
        Math.sin(longitudeDelta / 2) ** 2;

    return (
      6371 * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine))
    );
  }
}
