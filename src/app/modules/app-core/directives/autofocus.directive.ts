import { AfterContentInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
    selector: '[appAutofocus]',
    standalone: true
})
export class AutofocusDirective implements AfterContentInit {
  private host = inject(ElementRef);

  ngAfterContentInit(): void {
    this.host.nativeElement.focus();
  }
}
