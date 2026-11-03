import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-site-footer",
  imports: [RouterLink],
  templateUrl: "./site-footer.component.html",
  styleUrl: "./site-footer.component.css",
})
export class SiteFooterComponent {}
