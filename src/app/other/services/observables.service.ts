import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

    myObservables : Subject<string> = new Subject<string>()

  constructor() { }


  onclick(){
    this.myObservables.error("pomme")
  }
}
