import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RocketService } from 'src/app/services/rocket.service';
import { DatetimeService } from 'src/app/services/datetime.service';

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

  constructor(private formBuilder: FormBuilder, private datetime: DatetimeService,
    private route: ActivatedRoute, private router: Router, private rocket: RocketService) {
    this.route.params.subscribe(params => this.params = params);
    console.log(this.params);
    this.searchForm = this.formBuilder.group({
      origin: [this.params.origin, Validators.required],
      destination: [this.params.destination, Validators.required],
      departure_date: [this.datetime.getDate(this.params.departure_date), Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscription = this.rocket.flightList.subscribe((data) => {
      this.flightList = data;
    });
    this.minDate = new Date();
  }

  getTime(time: any) {
    return this.datetime.getTime(time);
  }

  onSubmit(): void {
    this.searchForm.value.departure_date = this.datetime.convertToYYYYMMDD(this.searchForm.value.departure_date);
    this.rocket.searchRockets(this.searchForm.value).subscribe((data) => {
      this.flightList = data;
    });
  }

  selectFlight(flight: any) {
    this.rocket.changeFlight(flight);
    this.router.navigate(['/flights/seats']);
  }

}
