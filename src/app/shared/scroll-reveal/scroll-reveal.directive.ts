import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
} from "@angular/core";
import { ScrollRevealService } from "./scroll-reveal.service";

@Directive({
  selector: "[appScrollReveal]",
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>).nativeElement;
  private readonly scrollReveal = inject(ScrollRevealService);
  private stopObserving = () => {};

  ngAfterViewInit(): void {
    this.stopObserving = this.scrollReveal.observe(this.element);
  }

  ngOnDestroy(): void {
    this.stopObserving();
  }
}
