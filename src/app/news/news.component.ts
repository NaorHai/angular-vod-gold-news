import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../services/api.service';
import  {News} from  './news';
import {logWarnings} from "protractor/built/driverProviders";

@Component({
  selector: 'app-news',
  providers: [ApiService],
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css']
})
export class NewsComponent implements OnInit {
  reporterId : number;
  isErrOccurred : boolean = false;
  isInvalidQuery : boolean = false;
  vods: News[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllVOD()
      .then((news : News[]) => {
        if (news.constructor.name == "Array") {
          this.vods = news;
          this.isErrOccurred = false;
        }
        else {
          this.vods = null;
          this.isErrOccurred = true;
        }
      });
  }

  getNewsByReporterId(reporterId: number) {
    this.apiService.getVodByReporterId(reporterId)
      .then((vods : News[]) => {
        if (vods.constructor.name == "Array") {
          this.vods = vods;
          this.reporterId = reporterId;
          this.isInvalidQuery = false;
        }
        else {
          this.vods = null;
          this.isInvalidQuery = true;
        }
      });
  }
}
