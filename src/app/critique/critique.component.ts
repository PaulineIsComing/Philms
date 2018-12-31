import { Component, OnInit } from '@angular/core';
import { Critique } from '../models/critique.model';
import { CritiqueService } from '../services/critique.service';

@Component({
  selector: 'app-critique',
  templateUrl: './critique.component.html'
})
export class CritiqueComponent implements OnInit {

  critiquesList:Critique[];
  critique: Critique;
  pseudo:string;
  title:string;
  body:string;

  constructor(private critiqueService:CritiqueService) {
    this.critiquesList = this.critiqueService.critiquesList;
  }

  ngOnInit() {
  }

  addCritique(){
    this.critique = {
      pseudo: this.pseudo,
      title: this.title,
      body: this.body
    }

    this.critiqueService.addNews(this.critique);

    this.pseudo = "";
    this.title = "";
    this.body = "";
  }

}
