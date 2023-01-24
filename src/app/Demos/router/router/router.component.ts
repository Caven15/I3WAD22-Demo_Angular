import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {

    idUtilisateur : number = 5

  constructor(private _route : Router) { }

  ngOnInit(): void {
  }

  redirectToFormulaire(){
    // dans le cas d'un chargement d'un module + composant
    // this._route.navigate(['nomModule','formulaire'])
    this._route.navigate(['formulaire'])
  }

  redirectToSnpapshot(){
    this._route.navigate(['snapshot/'+ this.idUtilisateur])
  }

}
