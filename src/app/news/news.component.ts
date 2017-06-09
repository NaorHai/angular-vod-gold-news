import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../services/api.service';
import  {News} from  './news';

@Component({
  selector: 'app-news',
  providers: [ApiService],
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css']
})
export class NewsComponent implements OnInit {
  reporter: number;
  vods: News[];

  constructor(private apiService: ApiService) { }

  getNewsByReporterId(reporterId: number) {
    this.apiService.getVodByReporterId(reporterId)
      .then((vods : News[]) => {
        this.reporter = reporterId;
        this.vods = vods;
      });
  }

  ngOnInit() {
    this.apiService.getAllVOD()
      .then((news : News[]) => {
        this.vods = news;
      });
  }
}
