import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { AppMaterialModule } from './modules/app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppCoreModule } from './modules/app-core/app-core.module';
import { ExploreModule } from './modules/explore/explore.module';
import { AppComponent } from './app.component';

@NgModule({
  providers: [
    CookieService
  ],
  declarations: [
    AppComponent
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
