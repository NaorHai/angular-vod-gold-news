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
  isErrOccurred : boolean = false;
  top: number = 8; // show only 8+ rated news

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getVodRatedHigherThan(this.top)
      .then((vods : News[]) => {
        if (vods.constructor.name == "Array") {
          this.ratedNews = vods;
          News.sortByRating(this.ratedNews);
          this.isErrOccurred = false;
        }
        else {
          this.ratedNews = null;
          this.isErrOccurred = true;
        }
    });
  }
}
