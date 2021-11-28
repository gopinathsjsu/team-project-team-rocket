import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  searchForm: FormGroup;
  minDate: Date;

  constructor(private formBuilder: FormBuilder, private router: Router, private date: DatePipe, private rocket: RocketService) {
    this.searchForm = this.formBuilder.group({
      trip_type: ['ow', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departure_date: ['', Validators.required],
      class: ['ec']
    });
    this.minDate = new Date();
  }

  ngOnInit(): void {

  }

  isOneWay() {
    return this.searchForm.value['trip_type'] == 'ow';
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }
    this.searchForm.value.departure_date = this.date.transform(this.searchForm.value.departure_date, 'yyyyMMdd')
    this.rocket.searchRockets(this.searchForm.value).subscribe((data) => {
      this.rocket.changeList(data);
    });
    this.router.navigate(['/flights/results', this.searchForm.value]);
    this.searchForm.reset();
  }

}
