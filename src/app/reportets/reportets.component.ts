import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reportets',
  providers: [ApiService],
  templateUrl: './reportets.component.html',
  styleUrls: ['./reportets.component.css']
})
export class ReportetsComponent implements OnInit {
  vod: number;
  reporters = {};

  constructor(private apiService: ApiService) { }

  getReporter(vodId: number){
    this.apiService.getReporterByVodId(vodId).subscribe(data => this.reporters = data);
    this.vod = vodId;
  }


  hack(val) {
    return Array.from(val);
  }

  ngOnInit() {
  }

}
