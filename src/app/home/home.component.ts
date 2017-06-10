import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../services/api.service';
import  { News } from '../news/news';

@Component({
  selector: 'app-home',
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vods: News[];
  isErrOccurred : boolean = false;


  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllVOD()
      .then((vods : News[]) => {
        if (vods instanceof News) {
          this.isErrOccurred = false;
          this.vods = vods;
        }
        else {
          this.isErrOccurred = true;
          this.vods = null;
        }
      });
  }
}
