import { Component, OnInit } from '@angular/core';
import { datas } from '../datas';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  listPersonne : {id : number, prenom : string}[] = datas

  constructor() { }

  ngOnInit(): void {
  }

  // permet de supprimer un élément de la liste
  deleteChildById(idPerson : number){
    console.log(idPerson)
    let indexToDelete = this.listPersonne.findIndex((person) => person.id == idPerson)
    this.listPersonne.splice(indexToDelete,1)
  }

  // permet d'update un élément de la liste
  updateChildPrenom(updatePerson : {id : number , prenom : string}){
    let indexToUpdate = this.listPersonne.findIndex((person) => person.id == updatePerson.id)
    this.listPersonne[indexToUpdate].prenom = updatePerson.prenom
  }

}
