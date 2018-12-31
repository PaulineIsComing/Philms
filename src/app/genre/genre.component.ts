import { Component } from '@angular/core';
import {Genre} from '../models/genres.model'

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
})
export class GenreComponent  {

  tableau:Genre[];

//récupère sur l'API la liste des différents genres existants
  constructor(private httpClient:HttpClient){
    this.httpClient.get<Genre[]>('https://api.themoviedb.org/3/genre/movie/list?api_key=a11c8337b79630d0217518e8f78dc5ad&language=FR').subscribe(
      (result:Genre[])=>{
        this.tableau = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }


}

