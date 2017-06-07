import { Component, OnInit } from '@angular/core';
import  { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vods = {};

  constructor(private apiService: ApiService) {
    this.apiService.getAllVOD().subscribe(data => this.vods = data);
  }

  hack(val) {
    return Array.from(val);
  }

  ngOnInit() {
  }

}
