export class PremierComposantModel {
  team:string;
  engine: string;
  nbVictory: number;
  dateJours : Date;
  image : string;
  comptLike : number;
  comptDislike : number;

  constructor(team: string, engine: string, nbVictory: number, dateJours: Date, image: string, comptLike: number, comptDislike: number) {
    this.team = team;
    this.engine = engine;
    this.nbVictory = nbVictory;
    this.dateJours = dateJours;
    this.image = image;
    this.comptLike = comptLike;
    this.comptDislike = comptDislike;
  }
}
