import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private flightListSource = new BehaviorSubject([]);
  flightList = this.flightListSource.asObservable();

  private flightSource = new BehaviorSubject({});
  flight = this.flightSource.asObservable();

  private seatSource = new BehaviorSubject({});
  seat = this.seatSource.asObservable();

  private bookingSource = new BehaviorSubject({});
  booking = this.bookingSource.asObservable();

  constructor() { }

  changeList(flightList: any) {
    this.flightListSource.next(flightList);
  }

  changeFlight(flight: any) {
    this.flightSource.next(flight);
  }

  changeSeat(seat: any) {
    this.seatSource.next(seat);
  }

  changeBooking(booking: any) {
    this.bookingSource.next(booking);
  }
}
