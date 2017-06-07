import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../services/api.service';

@Component({
  selector: 'app-news',
  providers: [ApiService],
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css']
})
export class NewsComponent implements OnInit {
  reporter: number;
  vods = {};

  constructor(private apiService: ApiService) { }

  getVod(reporterId: number){
    this.apiService.getVodByReporterId(reporterId).subscribe(data => this.vods = data);
    this.reporter = reporterId;
  }


  hack(val) {
    return Array.from(val);
  }

  ngOnInit() {
  }

}
