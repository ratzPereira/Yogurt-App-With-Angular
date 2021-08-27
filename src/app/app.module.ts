import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from './services/carousel.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { PostsService } from './services/posts.service';
import { NewsFullListComponent } from './components/news-full-list/news-full-list.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { BrandComponent } from './components/brand/brand.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactFormService } from './services/contact-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeefComponent } from './components/beef/beef.component';
import { ChickenComponent } from './components/chicken/chicken.component';
import { PorkComponent } from './components/pork/pork.component';
import { FlavoursService } from './services/flavours.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CarouselComponent,
    HeaderComponent,
    JumbotronComponent,
    NewsListComponent,
    NewsFullListComponent,
    NewsDetailsComponent,
    BrandComponent,
    ContactFormComponent,
    BeefComponent,
    ChickenComponent,
    PorkComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [CarouselService,PostsService, ContactFormService, FlavoursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
