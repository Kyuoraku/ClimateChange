import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhatisComponent } from './whatis/whatis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CausasComponent } from './causas/causas.component';
import { ConsecuenciasComponent } from './consecuencias/consecuencias.component';
import { AyudarComponent } from './ayudar/ayudar.component';
import { InfoComponent } from './info/info.component';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatisComponent,
    NavbarComponent,
    CausasComponent,
    ConsecuenciasComponent,
    AyudarComponent,
    InfoComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
