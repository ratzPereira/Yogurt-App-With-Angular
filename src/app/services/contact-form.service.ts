import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactBody } from './models/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  constructor(private _http: HttpClient) {}

  private _sendMessageUrl = 'http://localhost:3000/api/contract';

  public sendMessage(message: any): Observable<ContactBody> {
    let body = {
      subject: message.subject,
      message: message.message,
      email: message.email,
    };
   return  this._http.post<ContactBody>(this._sendMessageUrl, body);
  }
}
