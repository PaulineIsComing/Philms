import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {GenreComponent} from './genre/genre.component';
import {MovieComponent} from './movie/movie.component';
import {CritiqueComponent} from './critique/critique.component';
import {MoviesDetailComponent} from './movies-detail/movies-detail.component';
import {GenresDetailComponent} from './genres-detail/genres-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genre', component: GenreComponent},
  {path: 'genres-detail/:id', component: GenresDetailComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'movies-detail/:id', component: MoviesDetailComponent},
  {path: 'critique', component: CritiqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
