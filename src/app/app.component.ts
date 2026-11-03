import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SiteFooterComponent } from "./shared/site-footer/site-footer.component";
import { SiteHeaderComponent } from "./shared/site-header/site-header.component";

@Component({
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  selector: "app-root",
  styleUrl: "./app.component.css",
  templateUrl: "./app.component.html",
})
export class App {}
