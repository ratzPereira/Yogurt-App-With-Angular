import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flavours,Yogurt } from './models/yogurt';


@Injectable({
  providedIn: 'root'
})
export class FlavoursService {

  constructor(private _http: HttpClient) { }

  private _flavourUrl = 'http://localhost:3000/api/yogurts/flavours/'


  public getFlavour(flavour: string):Observable<Yogurt> {
    return this._http.get<Yogurt>(this._flavourUrl + flavour)
  }

  public getFlavourList():Observable<Flavours> {
    return this._http.get<Flavours>(this._flavourUrl)
  }
}
