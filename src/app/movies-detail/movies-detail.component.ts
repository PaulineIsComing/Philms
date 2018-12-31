import { Component, OnInit } from '@angular/core';
import {MovieById} from '../models/movieById.model';
//import {MovieComponent} from './movie/movie.component';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
})
export class MoviesDetailComponent implements OnInit {

  movie: MovieById;
  id: number;  
  private sub: any;

  private APIUrl1 = 'https://api.themoviedb.org/3/movie/';
  private APIUrl2 = '?api_key=a11c8337b79630d0217518e8f78dc5ad&language=FR';


  constructor(private route: ActivatedRoute, private httpClient:HttpClient) {
  
  }

  //récupère la valeur de l'id passée en argument dans l'URL et charge les détails concernant le film ayant cet id. 
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.getInfo(this.id);
  }

  //récupère les informations présentes sur l'API concernant le film ayant cet id.
  getInfo(id){
    const url = `${this.APIUrl1}${id}${this.APIUrl2}`;
    this.httpClient.get<MovieById>(url)
    .subscribe(
      (result:MovieById)=>{
        this.movie = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
