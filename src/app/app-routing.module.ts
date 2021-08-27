import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NewsFullListComponent } from './components/news-full-list/news-full-list.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { BrandComponent } from './components/brand/brand.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BeefComponent } from './components/beef/beef.component';
import { MiniGameComponent } from './components/mini-game/mini-game.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: 'news', component: NewsFullListComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'contacts', component: ContactFormComponent},
  { path: 'flavour/:id', component: BeefComponent},
  { path: 'game', component: MiniGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
