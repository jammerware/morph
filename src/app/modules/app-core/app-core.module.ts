import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutofocusDirective } from './directives/autofocus.directive';
import { PaypalDonateComponent } from './components/paypal-donate/paypal-donate.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { WelcomeDialogComponent } from './components/welcome-dialog/welcome-dialog.component';

@NgModule({
  declarations: [
    AutofocusDirective,
    PaypalDonateComponent,
    WelcomeComponent,
    WelcomeDialogComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    AutofocusDirective,
    PaypalDonateComponent,
    WelcomeComponent
  ]
})
export class AppCoreModule { }
