import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() id : number = 0
  @Input() prenom : string = ""

  @Output() clickOnChildDelete : EventEmitter<number> = new EventEmitter<number>()

  @Output() clickChildUpdatePrenom : EventEmitter<{id : number, prenom : string}> = new EventEmitter<{id : number, prenom : string}>()

  triggerInputName : boolean = false
  newPrenom : string = ""


  constructor() { }

  ngOnInit(): void {
  }

  deleteMe(idPerson : number){
    this.clickOnChildDelete.emit(idPerson)
  }

  showInput(prenom : string){
    this.newPrenom = prenom
    this.triggerInputName = !this.triggerInputName
  }

  saveOnParent(idPerson : number){
    this.clickChildUpdatePrenom.emit({id : idPerson, prenom : this.newPrenom})
  }
}
