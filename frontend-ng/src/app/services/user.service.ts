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

  getUserProfile(user_id: any) {
    return this.http.get(this.api + '/profile', { params: { user_id: user_id } });
  }

  getUserBookings(user_id: any) {
    return this.http.get(this.api + '/booking', { params: { user_id: user_id } });
  }

  getUserMiles(user_id: any) {
    return this.http.get(this.api + '/miles', { params: { user_id: user_id } });
  }

}
