import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { DatetimeService } from 'src/app/services/datetime.service';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-flight-update',
  templateUrl: './flight-update.component.html',
  styleUrls: ['./flight-update.component.css']
})
export class FlightUpdateComponent implements OnInit {

  subscription: Subscription;
  origin: string;
  destination: string;
  flightList: any;
  searchForm: FormGroup;
  minDate: Date;

  constructor(private formBuilder: FormBuilder, private datetime: DatetimeService,
    private router: Router, private rocket: RocketService, private data: DataService) {
    this.subscription = this.data.flight.subscribe((data: any) => {
      this.origin = data.origin;
      this.destination = data.destination;
    });
    this.minDate = new Date();
    this.searchForm = this.formBuilder.group({
      origin: [this.origin, Validators.required],
      destination: [this.destination, Validators.required],
      departure_date: ['', Validators.required],
    });
  }

  ngOnInit(): void {

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
    this.data.changeFlight(flight);
    this.router.navigate(['/flights/results/update/seats']);
  }

}
