/*import {Component, Input, OnInit} from '@angular/core';
import {PremierComposantModel} from "../models/premierModel";
import {ActivatedRoute} from "@angular/router";
import {InfoEquipeServices} from "../services/infoEquipeServices";

@Component({
  selector: 'app-equipe-seul',
  templateUrl: './equipe-seul.component.html',
  styleUrls: ['./equipe-seul.component.scss']
})
export class EquipeSeulComponent implements OnInit {
  infoTeam!: PremierComposantModel[];

constructor(private route:ActivatedRoute,
            private infoEquipeServices : InfoEquipeServices) {
}

  buttonLikeText! : string;
  buttonDislikeText! : string;
  btnDis! : HTMLInputElement;
  btnLike! : HTMLInputElement;


  ngOnInit() {
    const teamID = this.route.snapshot.params['id'];
//    this.infoTeam = this.infoEquipeServices.get

    this.buttonLikeText = "J'aime👍"
    this.buttonDislikeText = "Je n'aime pas👎";
    this.btnDis = <HTMLInputElement> document.getElementById('dislike');
    this.btnLike = <HTMLInputElement> document.getElementById('like');


  }


}
*/
