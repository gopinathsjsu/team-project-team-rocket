import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: string = environment.api + '/user';

  constructor(private http: HttpClient, private date: DatePipe) { }

  getUserInfo() {

  }

  getUserBookings(user_id: any) {
    return this.http.get(this.api + '/booking', { params: { user_id: user_id } });
  }

  getUserMiles(user_id: any) {
    return this.http.get(this.api + '/miles', { params: { user_id: user_id } });
  }

  getFullDate(departure_date: any, departure_time: any) {
    let year = departure_date.substring(0, 4);
    let month = departure_date.substring(4, 6);
    let day = departure_date.substring(6, 8);
    let hour = departure_time.substring(0, 2);
    let minute = departure_time.substring(2, 4);
    let newDate = new Date(year, month - 1, day, hour, minute);
    return this.date.transform(newDate, 'E, dd LLL yyyy - HH:mm');
  }

}
