import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './modules/common/nav/nav.component';
import { SharedModule } from './modules/common/shared/shared.module';
import { HomeComponent } from './modules/common/home/home.component';
import { ContactComponent } from './modules/common/contact/contact.component';
import { AboutComponent } from './modules/common/about/about.component';
import { PageNotFoundComponent } from './modules/common/pagenotfound/pagenotfound.component';
import { HomeCardComponent } from './modules/common/home/home-card/home-card.component';
import { CovidCountriesComponent } from './modules/application/covid-countries/covid-countries.component';
import { PipesModule } from './pipes/pipes.module';
import { CovidNewsComponent } from './modules/application/covid-news/covid-news.component';
import { NewsDetailComponent } from './modules/application/covid-news/news-detail/news-detail.component';
import { ChartsComponent } from './modules/application/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeCardComponent,
    CovidCountriesComponent,
    CovidNewsComponent,
    NewsDetailComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    Ng2GoogleChartsModule,
    SharedModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
