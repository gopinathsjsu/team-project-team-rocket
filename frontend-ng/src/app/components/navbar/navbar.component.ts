import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name = 'Angular';
  public isCollapsed = true;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

}
