import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fake-auth',
  templateUrl: './fake-auth.component.html',
  styleUrls: ['./fake-auth.component.scss']
})
export class FakeAuthComponent implements OnInit {

  constructor() { }

  isConnected : boolean = false

  ngOnInit(): void {
  }

  connexion(){
    console.log("Online")
    this.isConnected = true
    sessionStorage.setItem("isConnected", "1")
  }

  logout(){
    console.log("Offline")
    this.isConnected = false
    sessionStorage.clear()
  }
}
