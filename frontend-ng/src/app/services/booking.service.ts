import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private api: string = environment.api + '/booking';
  constructor(private http: HttpClient) { }

  bookRocket(bookingObject: any) {
    return this.http.post(this.api, bookingObject);
  }

  cancelBooking(booking_id: string) {
    return this.http.delete(this.api, { params: { booking_id: booking_id } });
  }

  updateSeat(bookingObject: any) {
    return this.http.put(this.api + '/update/seat', bookingObject);
  }

}
