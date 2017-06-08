import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../services/api.service';

@Component({
  selector: 'app-top-rated',
  providers: [ApiService],
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  ratedVods = {};
  top: number = 8;

  constructor(private apiService: ApiService) {
    this.apiService.getVodRatedHigherThan(this.top).subscribe(data => this.ratedVods= data);
  }

  hack(val) {
    return Array.from(val).sort();
  }

  ngOnInit() {
  }

}
