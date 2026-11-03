import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class GeolocationService {
  getCurrentPosition(): Promise<GeolocationPosition> {
    if (!navigator.geolocation) {
      return Promise.reject(
        new Error(
          "La géolocalisation n’est pas disponible dans ce navigateur.",
        ),
      );
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        (error) => {
          const message =
            error.code === error.PERMISSION_DENIED
              ? "Autorisez la géolocalisation dans votre navigateur pour rechercher autour de vous."
              : error.code === error.POSITION_UNAVAILABLE
                ? "Votre position est momentanément indisponible."
                : "La recherche de votre position a expiré. Réessayez.";
          reject(new Error(message));
        },
        { enableHighAccuracy: false, maximumAge: 60_000, timeout: 10_000 },
      );
    });
  }
}
