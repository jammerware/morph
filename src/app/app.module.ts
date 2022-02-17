import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './modules/app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppCoreModule } from './modules/app-core/app-core.module';
import { ExploreModule } from './modules/explore/explore.module';
import { AppComponent } from './app.component';

@NgModule({
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
