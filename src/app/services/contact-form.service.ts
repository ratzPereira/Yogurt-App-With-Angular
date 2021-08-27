import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactBody } from './models/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  constructor(private _http: HttpClient) {}

  sendMessageUrl = 'http://localhost:3000/api/contract';

  sendMessage(message: any) {
    let body = {
      subject: message.subject,
      message: message.message,
      email: message.email,
    };
   return  this._http.post(this.sendMessageUrl, body);
  }
}
