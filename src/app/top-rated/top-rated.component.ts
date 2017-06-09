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
        News.sortByRating(this.ratedNews);
      });
  }
}
