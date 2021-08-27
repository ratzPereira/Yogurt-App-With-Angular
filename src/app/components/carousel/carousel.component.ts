import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';
import { Slideshow } from '../../services/models/slideshow';


@Component({
  selector: 'ygr-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images: Slideshow = []

  constructor(private _carouselService: CarouselService) {}

  ngOnInit(): void {
    this.getCarouselImages()
  }

  getCarouselImages() {
      this._carouselService.getCarouselImages().subscribe((response: Slideshow) => {
      this.images = response;
    });
  }

  getImageName(image: string) {
    let imagesplit = image.split('');
    return imagesplit[imagesplit.length - 1];
  }
}
