import { Component, OnInit } from '@angular/core';
import { FlavoursService } from '../../services/flavours.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Flavours } from '../../services/models/yogurt';

@Component({
  selector: 'ygr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  flavourList:Flavours=[]
  id:any

  constructor(private _flavoursService: FlavoursService, private _route: ActivatedRoute) {}

  ngOnInit(): void {

   this._route.params.subscribe(params => {
      this.id = params
    });

    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);

    this._route.params.subscribe(routeParams => {
      this.id = routeParams.name;
      })

    this.getFlavoursList()
  }

  getFlavoursList() {
    this._flavoursService.getFlavourList().subscribe((response:any)=> {
      this.flavourList = response.data
      console.log(this.flavourList)
    })
  }
}
