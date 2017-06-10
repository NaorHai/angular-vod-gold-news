import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../services/api.service';
import  { Reporter } from './reporter';

@Component({
  selector: 'app-reporter',
  providers: [ApiService],
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.css']
})
export class ReporterComponent implements OnInit {
  news: number;
  isErrOccurred : boolean = false;
  isInvalidQuery: boolean = false;
  reporters : Reporter[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllReporters()
      .then((reporters : Reporter[]) => {
        this.reporters = reporters;
        if (reporters.constructor.name == "Array") {
          this.reporters = reporters;
          this.isErrOccurred = false;
        }
        else {
          this.reporters = null;
          this.isErrOccurred = true;
        }
      });
  }

  getReporter(vodId: number) {
    this.apiService.getReporterByVodId(vodId)
      .then((reporters : Reporter[]) => {
        if (reporters.constructor.name == "Array") {
          console.log(reporters);
          this.reporters = reporters;
          this.isInvalidQuery = false;
          this.news = vodId;
        }
        else {
          this.reporters = null;
          this.isInvalidQuery = true;
        }
      });
  }

}
