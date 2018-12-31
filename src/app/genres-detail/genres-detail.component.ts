import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie.model';

import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres-detail',
  templateUrl: './genres-detail.component.html',
})
export class GenresDetailComponent implements OnInit {

  tableau:Movie[];
  id: number;  
  private sub: any;

  private APIUrl1 = 'https://api.themoviedb.org/3/discover/movie?api_key=a11c8337b79630d0217518e8f78dc5ad&language=FR&year=1998&with_genres=';



  constructor(private route: ActivatedRoute, private httpClient:HttpClient) {
  
  }

  //récupère la valeur de l'id passée en argument dans l'URL et
  //charge les 20 films ayant pour genre le genre correpondant à cet id.
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.getInfo(this.id);
  }

  //récupère les informations présentes sur l'API concernant le film ayant cet id.
  getInfo(id){
    const url = `${this.APIUrl1}${id}`;
    this.httpClient.get<Movie[]>(url)
    .subscribe(
      (result:Movie[])=>{
        this.tableau = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
