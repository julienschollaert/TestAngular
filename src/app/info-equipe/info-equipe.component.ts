import { Component, OnInit } from '@angular/core';
import {PremierComposantModel} from "../models/premierModel";
import {InfoEquipeServices} from "../services/infoEquipeServices";

@Component({
  selector: 'app-info-equipe',
  templateUrl: './info-equipe.component.html',
  styleUrls: ['./info-equipe.component.scss']
})
export class InfoEquipeComponent implements OnInit {

  infoTeam!: PremierComposantModel[];
  constructor(private infoEquipeServices : InfoEquipeServices) { }

  ngOnInit(): void {
    this.infoTeam = this.infoEquipeServices.getAllInfoTeams();
  }

}
