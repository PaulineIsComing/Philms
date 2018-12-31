import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Critique } from '../models/critique.model';


/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CritiqueService {

  critiquesList:Critique[];

  constructor(public http: HttpClient) {
    this.critiquesList = [
      {
        pseudo: "JCV",
        title: "Grand d'écart POWER",
        body: "Jean Claude Van Johnson m'a surpris ! Je ne pensais pas qu'il ferait encore plus fort que la fois avec les deux camions...",
      }
    ]
  }

  addNews(critique:Critique){
    this.critiquesList.push(critique);
  }

}
