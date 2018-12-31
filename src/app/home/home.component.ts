import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  isMessageVisible:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  //boolean qui permet d'afficher ou non les détails concernant l'API grâce au bouton présent sur le code html.
  showMessage(){
    this.isMessageVisible = true;
  }

}
