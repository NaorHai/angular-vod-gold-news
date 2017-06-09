import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../services/api.service';
import  { News } from '../news/news';

@Component({
  selector: 'app-top-rated',
  providers: [ApiService],
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})

export class TopRatedComponent implements OnInit {
  ratedNews : News[];
  top: number = 8; //top rated

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getVodRatedHigherThan(this.top)
      .then((news : News[]) => {
        this.ratedNews = news;
        this.sort(this.ratedNews);
      });
  }

  private sort (unsortedNews: News[]) {
    return unsortedNews.sort((un1,un2) => {
      if (un1.rate < un2.rate) {
        return 1;
      }
      if (un1.rate > un2.rate) {
        return -1;
      }
      return 0;
    });
  }
}
