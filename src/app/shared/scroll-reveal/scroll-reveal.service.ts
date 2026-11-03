import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ScrollRevealService {
  private readonly observer =
    typeof window !== "undefined" &&
    typeof window.IntersectionObserver !== "undefined" &&
    (typeof window.matchMedia !== "function" ||
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      ? new IntersectionObserver(
          (entries, observer) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            }
          },
          { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
        )
      : null;

  observe(element: HTMLElement): () => void {
    if (!this.observer) {
      element.classList.add("is-visible");
      return () => {};
    }

    element.classList.add("scroll-reveal");
    this.observer.observe(element);
    return () => this.observer?.unobserve(element);
  }
}
