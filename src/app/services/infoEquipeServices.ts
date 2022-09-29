import {Injectable} from "@angular/core";
import {PremierComposantModel} from "../models/premierModel";
import {PremierComposantComponent} from "../premier-composant/premier-composant.component";

@Injectable({
  providedIn : "root"
})
export class InfoEquipeServices {
  infoEquipe: PremierComposantModel[] = [
    {
      id : 1,
      team : "Oracle Red Bull Racing",
      engine :"Honda",
      nbVictory : 81,
      dateJours: new Date(),
      image : "https://www.oracle.com/oce/press/assets/CONT627DB01268AB4125A078BA8CD375ADEF/native/og-social-redbull.gif",
      comptLike : 0,
      comptDislike : 0,
      seasonPoint : 545
    },
    {
      id : 2,
      team : "Mercedes AMG Petronas Formula One Team",
      engine : "Mercedes",
      nbVictory : 124,
      dateJours : new Date(),
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5I1yaMBjQxnc62DTvuAf-3SQ4PY2fv__0aOKTQFoce0c0CaEwawnTOLWh58fwSBNUyGs&usqp=CAU",
      comptLike : 0,
      comptDislike : 0
    },
    {
      id : 3,
      team : "Scuderia Ferrari",
      engine : "Ferrari",
      nbVictory : 242,
      dateJours : new Date(),
      image : "http://www.eldoradojewels.com/img/cms/Brand/Scuderia_Ferrari_Logo.png",
      comptLike : 0,
      comptDislike : 0,
      seasonPoint : 406
    }


  ];

  getAllInfoTeams(): PremierComposantModel[] {
    return this.infoEquipe;
  }
}
