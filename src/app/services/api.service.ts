/**
 * Created by Haimov on 07/06/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Reporter } from '../reportets/reporter';
import { News } from '../news/news';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {
  constructor (private http: Http) {}
  baseUrl: string = 'https://ws17ex1goldnews.herokuapp.com';

  getAllReporters(): Promise<Reporter[]> {
    return this.http.get(`${this.baseUrl}/getAllReporters`)
      .toPromise()
      .then(response => response.json() as Reporter[])
      .catch(response => response.json(null));
  }

  getAllVOD(): Promise<News[]> {
    return this.http.get(`${this.baseUrl}/getAllVOD`)
      .toPromise()
      .then(response => response.json() as News[])
      .catch(response => response.json({error:"Server is yoo busy, please try later"}));
  }

  //min:300 max:310
  getVodByReporterId(reporterId: number): Promise<News[]> {
    return this.http.post(`${this.baseUrl}/getVodByReporterID`,{id:reporterId})
      .toPromise()
      .then(response => response.json() as News[])
      .catch(response => response.json({error:"error"}));
  }

  //min:501 max:505
  getReporterByVodId(vodId: number): Promise<Reporter[]> {
    return this.http.post(`${this.baseUrl}/getReporterByVodID`,{id:vodId})
      .toPromise()
      .then(response => response.json() as Reporter[])
      .catch(response => response.json({error:"Server is yoo busy, please try later"}));
  }

  //min:1 max:10
  getVodRatedHigherThan(rating: number): Promise<News[]> {
    return this.http.post(`${this.baseUrl}/getVodRatedHigherThan`,{rate:rating})
      .toPromise()
      .then(response => response.json() as News[])
      .catch(response => response.json({error:"Server is yoo busy, please try later"}));
  }
}
