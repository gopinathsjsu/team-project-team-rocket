import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RocketService } from 'src/app/services/rocket.service';
import { DataService } from 'src/app/services/data.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-flight-update-seat',
  templateUrl: './flight-update-seat.component.html',
  styleUrls: ['./flight-update-seat.component.css']
})
export class FlightUpdateSeatComponent implements OnInit {

  subscription: Subscription;
  booking: any;
  flight: any;
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
    });
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
      let bookingObject = {
        user_id: localStorage.getItem('token'),
        booking_id: this.booking._id,
        old_flight_id: this.booking.flight_id,
        new_flight_id: this.flight._id,
        old_seat: this.booking.seat,
        new_seat: this.selectedSeat
      }
      console.log(bookingObject);
      this.book.updateBooking(bookingObject).subscribe((data: any) => {
        alert(data['message']);
        if (data['success'])
          this.router.navigate(['/account']);
      });
    }
  }

}
