import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {

  active : boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  changerStatut(){
    this.active = !this.active
  }

  EventOk(){
    console.log("boutton Click ici est actif !")
  }
}
