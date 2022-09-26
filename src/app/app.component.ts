import { Component,OnInit } from '@angular/core';
import {PremierComposantModel} from "./models/premierModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  firstModel!: PremierComposantModel;
  secondModel!: PremierComposantModel;
  threeModel!: PremierComposantModel;


  ngOnInit() {
    this.firstModel = new PremierComposantModel(
      "Oracle Red Bull Racing",
      "Honda",
      81,
      new Date(),
      "https://www.oracle.com/oce/press/assets/CONT627DB01268AB4125A078BA8CD375ADEF/native/og-social-redbull.gif",
      0,
      0,
      545
    );
    this.secondModel = new PremierComposantModel(
      "Mercedes AMG Petronas Formula One Team",
      "Mercedes",
      124,
      new Date(),
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5I1yaMBjQxnc62DTvuAf-3SQ4PY2fv__0aOKTQFoce0c0CaEwawnTOLWh58fwSBNUyGs&usqp=CAU",
      0,
      0
    );
    this.threeModel = new PremierComposantModel(
      "Scuderia Ferrari",
      "Ferrari",
      242,
      new Date(),
      "http://www.eldoradojewels.com/img/cms/Brand/Scuderia_Ferrari_Logo.png",
      0,
      0,
      406
    );
  }
}
