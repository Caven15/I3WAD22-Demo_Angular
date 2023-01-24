import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-snapshot-params',
  templateUrl: './snapshot-params.component.html',
  styleUrls: ['./snapshot-params.component.scss']
})
export class SnapshotParamsComponent implements OnInit {

    dataSnapshot : number

  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
      this.dataSnapshot = this._activatedRoute.snapshot.params['idUtilisateur']
      console.log(this.dataSnapshot)
}

}
