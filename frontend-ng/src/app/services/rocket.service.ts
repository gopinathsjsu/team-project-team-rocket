import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  private api: string = environment.api + '/flights';

  private flightListSource = new BehaviorSubject([]);
  flightList = this.flightListSource.asObservable();

  private flightSource = new BehaviorSubject({});
  flight = this.flightSource.asObservable();

  private seatSource = new BehaviorSubject({});
  seat = this.seatSource.asObservable();

  constructor(private http: HttpClient) { }

  searchRockets(searchObject: any) {
    return this.http.get(this.api, { params: searchObject });
  }

  getSeatMap(flight_id: string) {
    return this.http.get(this.api + '/seats', { params: { flight_id: flight_id } });
  }

  changeList(flightList: any) {
    this.flightListSource.next(flightList);
  }

  changeFlight(flight: any) {
    this.flightSource.next(flight);
  }

  changeSeat(seat: any) {
    this.seatSource.next(seat);
  }

}
