import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { InnerComponent } from './components/inner/inner.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ParallaxModule } from 'ngx-parallax';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InnerComponent,
    HomePageComponent,
    NotFoundComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
