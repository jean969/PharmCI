import { pharmaciesData } from "../data/pharmacies.data";
import { PharmacyService } from "./pharmacy.service";

describe("PharmacyService", () => {
  const service = new PharmacyService();

  it("keeps pharmacy identifiers unique", () => {
    const identifiers = pharmaciesData.map((pharmacy) => pharmacy.id);

    expect(identifiers).toHaveLength(42);
    expect(new Set(identifiers).size).toBe(identifiers.length);
  });

  it("filters by city and case-insensitive query", () => {
    const results = service.search("CENTRALE", "Abidjan", "all");

    expect(results.length).toBeGreaterThan(0);
    expect(results.every((pharmacy) => pharmacy.city === "Abidjan")).toBe(true);
    expect(
      results.every((pharmacy) =>
        pharmacy.name.toLowerCase().includes("centrale"),
      ),
    ).toBe(true);
  });

  it("filters by service", () => {
    const results = service.search("", "", "all", "analyses");

    expect(results.length).toBeGreaterThan(0);
    expect(
      results.every((pharmacy) => pharmacy.services.includes("analyses")),
    ).toBe(true);
  });

  it("calculates opening status from the selected day hours", () => {
    const pharmacy = pharmaciesData[0];
    const beforeClosing = new Date("2026-11-02T17:59:00Z");
    const afterClosing = new Date("2026-11-02T18:00:00Z");

    expect(service.getStatus(pharmacy, beforeClosing)).toBe("open");
    expect(service.getStatus(pharmacy, afterClosing)).toBe("closed");
  });

  it("prioritizes the on-duty flag", () => {
    const pharmacy = { ...pharmaciesData[0], isGarde: true };

    expect(service.getStatus(pharmacy, new Date("2026-11-02T03:00:00Z"))).toBe(
      "garde",
    );
  });

  it("calculates zero distance for the pharmacy coordinates", () => {
    const pharmacy = pharmaciesData[0];
    const position = {
      latitude: pharmacy.coordinates.lat,
      longitude: pharmacy.coordinates.lng,
    };

    expect(service.getDistance(pharmacy, position)).toBeCloseTo(0, 5);
  });
});
