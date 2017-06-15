import { Component } from '@angular/core';
import  { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ApiService],
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
