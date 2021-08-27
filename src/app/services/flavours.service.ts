import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlavoursService {

  constructor(private _http: HttpClient) { }

  flavourUrl = 'http://localhost:3000/api/yogurts/flavours/'


  public getFlavour(flavour: string) {
    return this._http.get(this.flavourUrl + flavour)
  }

  public getFlavourList() {
    return this._http.get(this.flavourUrl)
  }
}
