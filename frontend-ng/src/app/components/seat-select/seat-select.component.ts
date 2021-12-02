import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RocketService } from 'src/app/services/rocket.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {

  subscription: Subscription;
  flight: any;
  seats: any;
  selectedSeat: any;
  seatMap: any;

  constructor(private router: Router, private rocket: RocketService, private data: DataService) {
    this.selectedSeat = null;
  }

  ngOnInit(): void {
    this.subscription = this.data.flight.subscribe((data) => {
      this.flight = data;
      this.rocket.getSeatMap(this.flight._id).subscribe((data: any) => {
        this.seatMap = data['seats'];
      });
    });
  }

  getSeatDetails(seat: any) {
    return seat['row'] + seat['column'] + '\n' + seat['class'];
  }

  selectSeat(seat: any) {
    this.selectedSeat = seat;
  }

  confirm() {
    if (this.selectedSeat == null)
      alert('Select your seat to proceed');
    else {
      this.data.changeSeat(this.selectedSeat);
      this.router.navigate(['/flights/payment']);
    }
  }

}
