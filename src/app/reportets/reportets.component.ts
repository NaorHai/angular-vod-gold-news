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
  isErrOccurred : boolean = false;
  isInvalidQuery: boolean = false;
  reporters : Reporter[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllReporters()
      .then((reporters : Reporter[]) => {
        this.reporters = reporters;
        if (!(this.reporters instanceof Reporter)) {
          this.reporters = null;
          this.isErrOccurred = true;
        }
        else {this.reporters = reporters;}
      });
  }

  getReporter(vodId: number) {
    this.apiService.getReporterByVodId(vodId)
      .then((reporters : Reporter[]) => {
        this.news = vodId;
        if (!(this.reporters instanceof Reporter)) {
          this.reporters = null;
          this.isInvalidQuery = true;
        }
        else {this.reporters = reporters;}
      });
  }

}
