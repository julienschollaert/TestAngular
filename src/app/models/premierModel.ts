export class PremierComposantModel {
  team! :string;
  engine! : string;
  nbVictory! : number;
  dateJours! : Date;
  image! : string;
  comptLike! : number;
  comptDislike! : number;
  seasonPoint? : number;
// ? = element optionnelle

  constructor(team: string, engine: string, nbVictory: number, dateJours: Date, image: string, comptLike: number, comptDislike: number ,seasonPoint?: number) {
    this.team = team;
    this.engine = engine;
    this.nbVictory = nbVictory;
    this.dateJours = dateJours;
    this.image = image;
    this.comptLike = comptLike;
    this.comptDislike = comptDislike;
    this.seasonPoint = seasonPoint;
  }


}
