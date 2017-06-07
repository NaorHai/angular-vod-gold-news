/**
 * Created by Haimov on 07/06/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor (private http: Http) {}
  baseUrl: string = 'https://ws17ex1goldnews.herokuapp.com';

  getAllReporters() {
    return this.http.get(`${this.baseUrl}/getAllReporters`)
      .map((res:Response) => res.json());
  }

  getAllVOD() {
    return this.http.get(`${this.baseUrl}/getAllVOD`)
      .map((res:Response) => res.json());
  }

  //min:300 max:310
  getVodByReporterId(reporterId) {
    return this.http.post(`${this.baseUrl}/getVodByReporterID`,{reporterId})
      .map((res:Response) => res.json());
  }

  //min:501 max:505
  getReporterByVodId(vodId) {
    return this.http.post(`${this.baseUrl}/getReporterByVodID`,{vodId})
      .map((res:Response) => res.json());
  }

  //min:1 max:10
  getVodRatedHigherThan(rating) {
    return this.http.post(`${this.baseUrl}/getVodRatedHigherThan`,{rating})
      .map((res:Response) => res.json());
  }
}
