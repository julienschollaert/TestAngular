import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremierComposantComponent } from './premier-composant/premier-composant.component';
import { MenuComponent } from './menu/menu.component';
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import { InfoEquipeComponent } from './info-equipe/info-equipe.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import { DriverComponent } from './driver/driver.component';
import { AboutPageComponent } from './about-page/about-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PremierComposantComponent,
    MenuComponent,
    InfoEquipeComponent,
    HomePageComponent,
    DriverComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    registerLocaleData(fr.default);
  }
}
