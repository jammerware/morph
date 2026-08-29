import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutofocusDirective } from './directives/autofocus.directive';
import { PaypalDonateComponent } from './components/paypal-donate/paypal-donate.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [
    AutofocusDirective,
    PaypalDonateComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    AutofocusDirective,
    PaypalDonateComponent,
  ]
})
export class AppCoreModule { }
