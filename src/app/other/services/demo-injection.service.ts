import { Injectable } from '@angular/core';
import { datas } from 'src/app/Demos/inputOuput/datas';
import { user } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DemoInjectionService {

  private listePersonnne : user[] = datas

  constructor() { }

    getAll(){
      return this.listePersonnne
    }

    getNumberOfUser(){
      return this.listePersonnne.length
    }

    // permet de supprimer un élément de la liste
    deleteChildById(idPerson : number){
      console.log(idPerson)
      let indexToDelete = this.listePersonnne.findIndex((person) => person.id == idPerson)
      this.listePersonnne.splice(indexToDelete,1)
    }

    // permet d'update un élément de la liste
    updateChildPrenom(updatePerson : {id : number , prenom : string}){
      let indexToUpdate = this.listePersonnne.findIndex((person) => person.id == updatePerson.id)
      this.listePersonnne[indexToUpdate].prenom = updatePerson.prenom
    }
}
