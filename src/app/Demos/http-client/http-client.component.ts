import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon.model';
import { PokeApiService } from 'src/app/other/services/poke-api.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

    listePokemon : {name : string, url : string}[] = []
    pokemon : pokemon
    currentPokemon  : boolean = false

  constructor(private _pokeApi : PokeApiService) { }

  ngOnInit(): void {
    this._pokeApi.getList("5").subscribe({
        next : (datas) => {
            this.listePokemon = datas.results
        },
        error : (error) => {
            console.log(error)
        },
        complete : () => {
            console.log("Ma requette a été executé avec succès !")
        }
    })
  }

  getOne(lienPokemon : string){
    this._pokeApi.getByUrl(lienPokemon).subscribe({
        next : (datas) => {
            this.pokemon = new pokemon(datas.id,datas.name,datas.weight,datas.height)
        },
        error : (error) => {console.log("Get One Nok !")
            console.log(error)
        },
        complete : () => {
            this.currentPokemon = true
            console.log("Get One ok !")
        }
    })
  }
}
