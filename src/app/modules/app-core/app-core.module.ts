import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutofocusDirective } from './directives/autofocus.directive';
import { PaypalDonateComponent } from './components/paypal-donate/paypal-donate.component';

@NgModule({
  declarations: [
    AutofocusDirective,
    PaypalDonateComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutofocusDirective,
    PaypalDonateComponent
  ]
})
export class AppCoreModule { }
