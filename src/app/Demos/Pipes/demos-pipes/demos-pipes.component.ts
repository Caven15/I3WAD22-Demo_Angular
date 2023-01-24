import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demos-pipes',
  templateUrl: './demos-pipes.component.html',
  styleUrls: ['./demos-pipes.component.scss']
})
export class DemosPipesComponent implements OnInit {

  nom : string = "Jean"

  somme : number = 345

  dateNaissance : Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
