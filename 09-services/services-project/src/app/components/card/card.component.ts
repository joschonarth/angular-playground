import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  name:string = "Charmander"
  attributeType:string[] = ['Fire', 'Rock']

  constructor() {}

  ngOnInit(): void {

  }

}
