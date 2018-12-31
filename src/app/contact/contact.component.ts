import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.email = '';
    this.message = '';
    alert('email sent');
  }

}
