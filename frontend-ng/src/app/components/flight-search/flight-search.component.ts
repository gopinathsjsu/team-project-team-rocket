import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RocketService } from 'src/app/services/rocket.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { DatetimeService } from 'src/app/services/datetime.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  planets: string[];
  filteredOrigin: Observable<string[]>;
  filteredDestination: Observable<string[]>;
  searchForm: FormGroup;
  minDate: Date;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private data: DataService, private rocket: RocketService, private datetime: DatetimeService) {
    this.searchForm = this.formBuilder.group({
      trip_type: ['ow', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departure_date: ['', Validators.required],
      arrival_date: new FormControl({ value: '', disabled: true }, Validators.required),
      class: ['ec']
    });
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.rocket.getPlanets().subscribe((data: any) => {
      this.planets = data;
      this.filteredOrigin = this.searchForm.controls.origin.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
      this.filteredDestination = this.searchForm.controls.destination.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.planets.filter(planet => planet.toLowerCase().includes(filterValue));
  }

  isOneWay() {
    return this.searchForm.value['trip_type'] == 'ow';
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }
    this.searchForm.value.departure_date = this.datetime.convertToYYYYMMDD(this.searchForm.value.departure_date);
    this.rocket.searchRockets(this.searchForm.value).subscribe((data) => {
      this.data.changeList(data);
    });
    this.router.navigate(['/flights/results', this.searchForm.value]);
    this.searchForm.reset();
  }

}
