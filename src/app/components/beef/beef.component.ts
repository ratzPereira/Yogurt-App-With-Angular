import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlavoursService } from '../../services/flavours.service';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ygr-beef',
  templateUrl: './beef.component.html',
  styleUrls: ['./beef.component.scss'],
})
export class BeefComponent implements OnInit, OnDestroy {
  flavourData: any = [];
  id: any;

  subscription: Subscription;

  constructor(
    private _flavourService: FlavoursService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.subscription = this.getFlavour();
  }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getFlavour();

    this._router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
     //   this.getFlavour();
       // console.log(this.id + " inside")
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getFlavour() {
    return this._flavourService
      .getFlavour(this.id)
      .subscribe((response: any) => {
        this.flavourData = response.data;
        console.log(this.flavourData);
      });
  }
}
