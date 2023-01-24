import { Component, OnInit } from '@angular/core';
import { ObservablesService } from 'src/app/other/services/observables.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor(private _observables : ObservablesService) { }

  ngOnInit(): void {
    this._observables.myObservables.subscribe({
        next : (datas) => {
            console.log("mon resultat est passer :" + datas)
        },
        error : (error) => {
            console.log(error)
        },
        complete : () => {
            console.log("code terminé")
            
        }
    })
  }

  onClick(){
    this._observables.onclick()
  }
}
