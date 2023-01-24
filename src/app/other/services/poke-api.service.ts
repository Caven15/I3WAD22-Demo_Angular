import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

    urlPokeApi : string = "https://pokeapi.co/api/v2"


  constructor(private _httpClient : HttpClient) { }

    getList(startIndex : string){
        return this._httpClient.get<any>(`${this.urlPokeApi}/pokemon?offset=${startIndex}&limit=5`)
    }

    getByUrl(url : string){
        return this._httpClient.get<any>(url)
    }
}
