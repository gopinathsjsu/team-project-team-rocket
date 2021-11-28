import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  private api: string = environment.api + '/flights';

  private messageSource = new BehaviorSubject([]);
  flightList = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  searchRockets(searchObject: any) {
    return this.http.get(this.api, { params: searchObject });
  }

  changeList(flightList: any) {
    this.messageSource.next(flightList);
  }
}
