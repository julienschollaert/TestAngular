import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfoEquipeComponent} from "./info-equipe/info-equipe.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {DriverComponent} from "./driver/driver.component";
import {AboutPageComponent} from "./about-page/about-page.component";


const routes: Routes = [
  { path: 'teams', component: InfoEquipeComponent },
  { path:'', component: HomePageComponent},
  { path: 'drivers', component: DriverComponent},
  { path: 'about', component:AboutPageComponent}

];
@NgModule(
  {
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class AppRoutingModule {}
