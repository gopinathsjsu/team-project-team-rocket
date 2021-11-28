import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.css']
})
export class FlightSelectComponent implements OnInit {

  flightList: any;
  subscription: Subscription;
  searchForm: any;
  minDate: Date;

  constructor(private route: ActivatedRoute, private router: Router, private rocket: RocketService, private datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.searchForm = params);
    this.subscription = this.rocket.flightList.subscribe((data) => {
      console.log(data);
      this.flightList = data;
    });
    this.minDate = new Date();
  }

  onSubmit(): void {
    console.log(this.searchForm);
    console.log(this.flightList);
  }

  getDate(departure_date: any, departure_time: any) {
    let year = departure_date.substring(0, 4);
    let month = departure_date.substring(4, 6);
    let day = departure_date.substring(6, 8);
    let hour = departure_time.substring(0, 2);
    let minute = departure_time.substring(2, 4);
    let date = new Date(year, month - 1, day, hour, minute);
    return this.datepipe.transform(date, 'HH:mm');
  }

}
