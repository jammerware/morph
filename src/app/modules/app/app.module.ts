import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { AppMaterialModule } from 'src/app/modules/app-material/app-material.module';
import { AppRoutingModule } from 'src/app/modules/app-routing/app-routing.module';
import { AppCoreModule } from 'src/app/modules/app-core/app-core.module';
import { ExploreModule } from 'src/app/modules/explore/explore.module';
import { ErrorService } from 'src/app/services/error.service';

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
