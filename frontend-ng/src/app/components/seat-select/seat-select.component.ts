import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {

  flight: any;
  seatMap: any;
  selectedSeat: any;

  constructor(private route: ActivatedRoute, private rocket: RocketService) {
    this.route.params.subscribe(params => {
      this.flight = params;
      this.rocket.getSeatMap(params._id).subscribe((data) => {
        this.seatMap = data;
      });
    });
    this.selectedSeat = null;
  }

  ngOnInit(): void {
  }

  selectSeat(seat: any) {
    this.selectedSeat = seat;
  }

  confirm() {
    if (this.selectedSeat == null)
      alert('Select your seat to proceed');
    
  }

}
