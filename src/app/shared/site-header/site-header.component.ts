import { Component, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-site-header",
  imports: [MatButtonModule, MatToolbarModule, RouterLink, RouterLinkActive],
  templateUrl: "./site-header.component.html",
  styleUrl: "./site-header.component.css",
})
export class SiteHeaderComponent {
  protected readonly menuOpen = signal(false);

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
