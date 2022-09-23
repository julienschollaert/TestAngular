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


  ngOnInit() {
    this.firstModel = new PremierComposantModel(
      "Oracle Red Bull Racing",
      "Honda",
      81,
      new Date(),
      "https://upload.wikimedia.org/wikipedia/fr/3/36/Red_Bull_Racing_2022.png",
      0,
      0
    );
    this.secondModel = new PremierComposantModel(
      "Mercedes AMG Petronas Formula One Team",
      "Mercedes",
      124,
      new Date(),
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg",
      0,
      0
    );
  }
}
