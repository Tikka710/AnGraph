import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <ac-chat></ac-chat>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';


  constructor(){}


  ngOnInit(): any{
    
  }
}
