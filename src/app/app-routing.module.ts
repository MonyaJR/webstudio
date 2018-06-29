import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./components/home-page/home-page.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ServicesComponent } from "./components/services/services.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
