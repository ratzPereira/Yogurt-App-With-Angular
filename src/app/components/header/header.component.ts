import { Component, OnInit } from '@angular/core';
import { FlavoursService } from '../../services/flavours.service';

@Component({
  selector: 'ygr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  flavourList:any

  constructor(private _flavoursService: FlavoursService) { }

  ngOnInit(): void {
    this.getFlavoursList()
  }

  getFlavoursList() {
    this._flavoursService.getFlavourList().subscribe((response:any)=> {
      this.flavourList = response.data
      console.log(this.flavourList)
    })
  }

}
