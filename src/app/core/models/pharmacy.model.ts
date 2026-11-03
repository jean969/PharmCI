export type PharmacyStatus = "open" | "closed" | "garde";

export interface Pharmacy {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  isGarde: boolean;
  services: string[];
  hours: Record<string, string>;
  description: string;
  rating: number;
  specialties: string[];
  director: string;
}

export type PharmacyFilterStatus = PharmacyStatus | "all";
