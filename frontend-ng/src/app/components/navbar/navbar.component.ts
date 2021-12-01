import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name = 'Angular';
  public isCollapsed = true;

  constructor(private auth: AuthService) {
  }

  loggedIn() {
    return this.auth.isAuthenticated();
  }

  ngOnInit() {
  }

}
