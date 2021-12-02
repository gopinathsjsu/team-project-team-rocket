import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RocketService } from 'src/app/services/rocket.service';
import { DataService } from 'src/app/services/data.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-seat-update',
  templateUrl: './seat-update.component.html',
  styleUrls: ['./seat-update.component.css']
})
export class SeatUpdateComponent implements OnInit {

  subscription: Subscription;
  booking: any;
  seats: any;
  selectedSeat: any;
  seatMap: any;

  constructor(private router: Router, private data: DataService,
    private rocket: RocketService, private book: BookingService) {
    this.selectedSeat = null;
  }

  ngOnInit(): void {
    this.subscription = this.data.booking.subscribe((data) => {
      this.booking = data;
      this.rocket.getSeatMap(this.booking.flight._id).subscribe((data: any) => {
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
      let bookingObject = {
        booking_id: this.booking._id,
        old_seat: this.booking.seat,
        new_seat: this.selectedSeat
      }
      this.book.updateSeat(bookingObject).subscribe((data: any) => {
        alert(data['message']);
        if (data['success'])
          this.router.navigate(['/account']);
      });
    }
  }

}
