import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-two-way',
  templateUrl: './binding-two-way.component.html',
  styleUrls: ['./binding-two-way.component.scss']
})
export class BindingTwoWayComponent implements OnInit {

  nomProf : string = "Alexandre"

  constructor() { }

  ngOnInit(): void {
  }

}
