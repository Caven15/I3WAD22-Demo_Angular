import { Component, OnInit } from '@angular/core';
import { DemoInjectionService } from 'src/app/other/services/demo-injection.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.scss']
})
export class DemoServiceComponent implements OnInit {
  maValeur : number

  constructor(
    private _demoInjection : DemoInjectionService
  ) { }

  ngOnInit(): void {

  }

  onDelete(){
    this._demoInjection.deleteChildById(this.maValeur)
    console.log(this._demoInjection.getNumberOfUser())
  }
}
