import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api: string = environment.api + '/user';
  public loggedIn: boolean;
  public redirectUrl: string;

  constructor(private http: HttpClient) {
    this.redirectUrl = '';
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    console.log(token);
    return !(token == null || undefined);
  }

  login(loginObject: any) {
    return this.http.post(this.api + '/login', loginObject);
  }

  logout() {
    this.loggedIn = false;
  }

  signup(signupObject: any) {
    return this.http.post(this.api + '/signup', signupObject);
  }

}
