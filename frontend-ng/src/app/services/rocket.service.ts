import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  private api: string = environment.api + '/flights';

  constructor(private http: HttpClient) { }

  getPlanets() {
    return this.http.get(this.api + '/planets');
  }

  searchRockets(searchObject: any) {
    return this.http.get(this.api, { params: searchObject });
  }

  getRocketById(flight_id: string) {
    return this.http.get(this.api + '/id', { params: { flight_id: flight_id } });
  }

  getSeatMap(flight_id: string) {
    return this.http.get(this.api + '/seats', { params: { flight_id: flight_id } });
  }

}
