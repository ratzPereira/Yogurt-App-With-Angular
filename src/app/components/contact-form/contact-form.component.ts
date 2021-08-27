import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { ContactBody } from '../../services/models/contacts';

@Component({
  selector: 'ygr-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

form;

  constructor(fb: FormBuilder, private _sendMessageService: ContactFormService) {
    this.form = fb.group({
        email: ['',[Validators.email, Validators.required]],
        subject: ['',[Validators.required, Validators.minLength(5)]],
        message: ['',[Validators.required, Validators.minLength(20)]]
     
    });
   }

  ngOnInit(): void {
  }

  submit(){
    const formValue = this.form.value
    this._sendMessageService.sendMessage(formValue).subscribe((message) => {
      console.log(message)
    })
    this.form.reset()
    console.log(this.form)
  }
}
