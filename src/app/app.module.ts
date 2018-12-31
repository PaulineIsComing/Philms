import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
import { MovieComponent } from './movie/movie.component';
import { ContactComponent } from './contact/contact.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { GenresDetailComponent } from './genres-detail/genres-detail.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenreComponent,
    HomeComponent,
    MovieComponent,
    ContactComponent,
    MoviesDetailComponent,
    GenresDetailComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
