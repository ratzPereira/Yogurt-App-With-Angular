import { Component, OnInit } from '@angular/core';
import { FlavoursService } from '../../services/flavours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ygr-beef',
  templateUrl: './beef.component.html',
  styleUrls: ['./beef.component.scss']
})
export class BeefComponent implements OnInit {

  private flavor = "beef"

  flavourData: any = []
id:any;
  constructor(private _flavourService: FlavoursService, private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
   }

  ngOnInit(): void {
    this.getFlavour()
  }

  getFlavour() {
    this._flavourService.getFlavour(this.flavor).subscribe((response: any)=> {
      this.flavourData = response.data
      console.log(this.flavourData)
    })
  }

}
