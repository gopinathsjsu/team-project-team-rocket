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

  subscription: Subscription;
  flightList: any;
  searchForm: FormGroup;
  params: any;
  minDate: Date;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private rocket: RocketService, private date: DatePipe) {
    this.route.params.subscribe(params => this.params = params);
    this.searchForm = this.formBuilder.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departure_date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscription = this.rocket.flightList.subscribe((data) => {
      this.flightList = data;
    });
    this.minDate = new Date();
  }

  onSubmit(): void {
    this.searchForm.value.departure_date = this.date.transform(this.searchForm.value.departure_date, 'yyyyMMdd')
    this.rocket.searchRockets(this.searchForm.value).subscribe((data) => {
      this.flightList = data;
    });
  }

  getDate(departure_date: any, departure_time: any) {
    let year = departure_date.substring(0, 4);
    let month = departure_date.substring(4, 6);
    let day = departure_date.substring(6, 8);
    let hour = departure_time.substring(0, 2);
    let minute = departure_time.substring(2, 4);
    let newDate = new Date(year, month - 1, day, hour, minute);
    return this.date.transform(newDate, 'HH:mm');
  }

  selectFlight(flight: any) {
    this.rocket.changeFlight(flight);
    this.router.navigate(['/flights/seats']);
  }

}
