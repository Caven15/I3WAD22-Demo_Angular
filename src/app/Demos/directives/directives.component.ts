import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  ouvert : boolean = false
  listeDonnee : string[] = ["pomme","poire","banane","orange"]
  listeUtilisateur : {nom : string, role : string}[] =[
    {nom : "Alex", role : "Admin"},
    {nom : "elève1", role : "student"},
    {nom : "elève2", role : "student"},
    {nom : "elève3", role : "student"},
    {nom : "elève4", role : "student"},
  ]


  constructor() { }

  ngOnInit(): void {
  }

  inversion(){
    this.ouvert = !this.ouvert
  }
}
