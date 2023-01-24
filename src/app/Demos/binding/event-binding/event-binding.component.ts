import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  private compteur : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  ActiverEvent(){
    console.log("Nombre d'activation Event" + this.compteur)
    this.compteur ++
  }
}
