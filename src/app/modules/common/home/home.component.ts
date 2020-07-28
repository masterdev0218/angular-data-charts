import { Component, OnInit } from '@angular/core';

import { CovidDataService } from '../../../services/covid-data.service';
import { GlobalCount, NewsItems, newsItem } from '../../../models/covid';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // data: Observable<GlobalCount>;
  // results = [];
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  totalNewCases = 0;
  totalNewDeaths = 0;
  totalActiveCases = 0;
  totalCasesPerMillionPop = 0;
  date = '';
  newsTotalItems = 0;
  newsItems: newsItem[];
  // newsItemTitle = '';
  // newsItemDescription = '';
  // newsItemContent = '';
  // newsItemAuthor = '';
  // newsItemUrl?:         string;
  // newsItemUrlToImage?:  string;
  // newsItemPublishedAt?: Date;
  // newsItemAddedOn?:     Date;
  // newsItemSiteName?:    string;
  // newsItemLanguage?:    string;
  // newsItemCountryCode?: number;
  // newsItemStatus?:      number;

  constructor(private covidDataService: CovidDataService) {}

  ngOnInit(): void {
    this.getCovidData();
    this.getCovidNews();
  }

  getCovidData(): void {
    this.covidDataService.getGlobalData().subscribe((data: GlobalCount) => {
      this.totalConfirmed = data.totalConfirmed;
      this.totalDeaths = data.totalDeaths;
      this.totalRecovered = data.totalRecovered;
      this.totalNewCases = data.totalNewCases;
      this.totalNewDeaths = data.totalNewDeaths;
      this.totalActiveCases = data.totalActiveCases;
      this.totalCasesPerMillionPop = data.totalCasesPerMillionPop;
      this.date = data.created;
    });
  }

  getCovidNews(): void {
    this.covidDataService.getCovidNews().subscribe((data: NewsItems) => {
      this.newsTotalItems = data.total;
      this.newsItems = data.items;
      console.log('news data: ', data);
    })
  }
}
