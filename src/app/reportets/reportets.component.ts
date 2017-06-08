import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../services/api.service';
import  { Reporter } from './reporter';

@Component({
  selector: 'app-reportets',
  providers: [ApiService],
  templateUrl: './reportets.component.html',
  styleUrls: ['./reportets.component.css']
})
export class ReportetsComponent implements OnInit {
  news = {};
  reporters : Reporter[];

  constructor(private apiService: ApiService) { }

  getReporter(vodId: number){
    this.apiService.getReporterByVodId(vodId)
      .then((reporters : Reporter[]) => {
        this.news = vodId;
        this.reporters = reporters;
      });
  }

  ngOnInit() {
  }

}
