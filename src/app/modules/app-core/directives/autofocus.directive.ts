import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[appAutofocus]' })
export class AutofocusDirective implements AfterContentInit {

  constructor(private host: ElementRef) { }
  ngAfterContentInit(): void {
    this.host.nativeElement.focus();
  }
}
