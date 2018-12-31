import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})

export class MovieComponent{

  tableau:Movie[];
  
  // charge depuis l'API les 20 films les plus populaires de l'année 1998
  constructor(private httpClient:HttpClient){
    this.httpClient.get<Movie[]>('https://api.themoviedb.org/3/discover/movie?api_key=a11c8337b79630d0217518e8f78dc5ad&language=FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=1998').subscribe(
      (result:Movie[])=>{
        this.tableau = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
