import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { AppMaterialModule } from '../app-material/app-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { AppCoreModule } from '../app-core/app-core.module';
import { ExploreModule } from '../explore/explore.module';
import { ErrorService } from '../../services/error.service';

import { AppComponent } from './components/app/app.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  providers: [
    CookieService,
    { provide: ErrorHandler, useClass: ErrorService }
  ],
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppCoreModule,
    AppRoutingModule,
    AppMaterialModule,
    ExploreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
