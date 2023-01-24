import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-one-way',
  templateUrl: './binding-one-way.component.html',
  styleUrls: ['./binding-one-way.component.scss']
})
export class BindingOneWayComponent implements OnInit {

  nomProf : string = "Alexandre"

  constructor() { }

  ngOnInit(): void {
  }

}
