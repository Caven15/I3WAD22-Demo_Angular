import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { client } from 'src/app/models/client.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  public registerClient : FormGroup
  public newClient : client = new client()
  public formOk : boolean = false

  constructor(
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerClient = this._formBuilder.group({
        nom : ["inserer votre nom", Validators.required],
        prenom : ["inserer votre prénom", Validators.required],
        age : [null, [Validators.required, Validators.min(18)]],
        dateNaissance : [null, Validators.required],
        email : ["Demo@gmail.com", [Validators.required, Validators.email]]
    })

  }


  onSubmit(){
    this.newClient.nom = this.registerClient.value['nom'],
    this.newClient.prenom = this.registerClient.value['prenom'],
    this.newClient.age = this.registerClient.value['age'],
    this.newClient.dateNaissance = this.registerClient.value['dateNaissance'],
    this.newClient.email = this.registerClient.value['email']
    if (this.registerClient.valid) {
        this.registerClient.reset()
        this.formOk = !this.formOk
    }


  }
}
