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
  reporter : number;
  isErrOccurred : boolean = false;
  vods: News[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllVOD()
      .then((news : News[]) => {
        this.vods = news;
        if (!(this.vods instanceof News)) {
          this.vods = null;
          this.isErrOccurred = true;
        }
        else {this.vods = news;}
      });
  }

  getNewsByReporterId(reporterId: number) {
    this.apiService.getVodByReporterId(reporterId)
      .then((vods : News[]) => {
        this.reporter = reporterId;
        if (!(this.vods instanceof News)) {
          this.vods = null;
          this.isErrOccurred = true;
        }
        else {this.vods = vods;}
      });
  }
}
