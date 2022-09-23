import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-premier-composant',
  templateUrl: './premier-composant.component.html',
  styleUrls: ['./premier-composant.component.scss']
})
export class PremierComposantComponent implements OnInit{
  team!:string;
  engine!: string;
  nbVictory!: number;
  dateJours! : Date;
  image! : string;
  comptLike! : number;
  comptDislike! : number;
  buttonLikeText! : string;
  buttonDislikeText! : string;
  btnDis! : HTMLInputElement;
  btnLike! : HTMLInputElement;


  ngOnInit() {
    this.team = "Oracle Red Bull Racing";
    this.engine = "Honda";
    this.nbVictory = 81;
    this.dateJours = new Date();
    this.image =  "https://upload.wikimedia.org/wikipedia/fr/3/36/Red_Bull_Racing_2022.png"
    this.comptLike = 0;
    this.comptDislike = 0;
    this.buttonLikeText = "J'aime👍"
    this.buttonDislikeText = "Je n'aime pas👎";
    this.btnDis = <HTMLInputElement> document.getElementById('dislike');
    this.btnLike = <HTMLInputElement> document.getElementById('like');


  }
  onComteurLike() {
    this.comptLike++;
  }

  onComteurDislike() {
    this.comptDislike++;
  }

  onButtonLike()
  {
    if(this.buttonLikeText === "J'aime👍")
    {
      this.comptLike++;
      this.buttonLikeText = "J'aime déjà👍";

        this.btnDis.disabled = true;
    }
    else
    {
      this.comptLike--;
      this.buttonLikeText = "J'aime👍"
      this.btnDis.disabled = false;
    }
  }

  onButtonDisLike()
  {
    if(this.buttonDislikeText === "Je n'aime pas👎")
    {
      this.comptDislike++;
      this.buttonDislikeText = "Je n'aime pas du tout👎";
      this.btnLike.disabled = true;
    }
    else
    {
      this.comptDislike--;
      this.buttonDislikeText = "Je n'aime pas👎"
      this.btnLike.disabled = false;
    }
  }

}
