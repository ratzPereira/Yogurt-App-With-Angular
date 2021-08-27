import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slideshow } from './models/slideshow';

@Injectable({
  providedIn: 'root'
})
export class CarouselService  {

  private _ROOT = 'http://localhost:3000/api'


  constructor(private _http: HttpClient) { }

 
  public getCarouselImages(): Observable<Slideshow> {
    return this._http.get<Slideshow>(this._ROOT + '/slideshow')
  }
}
