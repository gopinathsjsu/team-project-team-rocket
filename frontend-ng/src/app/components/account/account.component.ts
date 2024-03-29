import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { DataService } from 'src/app/services/data.service';
import { DatetimeService } from 'src/app/services/datetime.service';
import { RocketService } from 'src/app/services/rocket.service';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  profile: any;
  bookings: any;
  constructor(private user: UserService, private rocket: RocketService, private booking: BookingService,
    private datetime: DatetimeService, private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.user.getUserProfile(localStorage.getItem('token')).subscribe((data: any) => {
      this.profile = data;
    })
    this.user.getUserBookings(localStorage.getItem('token')).subscribe((data) => {
      this.bookings = data;
      for (let booking of this.bookings) {
        this.rocket.getRocketById(booking['flight_id']).subscribe((data) => {
          booking['flight'] = data;
        });
      }
    });
  }

  checkDate(flight: any) {
    const now = new Date();
    const currentDate: any = moment(now).format('YYYYMMDD');
    if (flight.departure_date >= currentDate) {
      return true
    }
    return false;
  }

  getFullDate(flight: any) {
    return this.datetime.getDateTime(flight.departure_date, flight.departure_time);
  }

  getStatus(status: boolean) {
    if (status)
      return 'CONFIRMED';
    return 'CANCELED';
  }

  changeSeat(booking: any) {
    this.data.changeBooking(booking);
    this.router.navigate(['/flights/seats/update']);
  }

  reschedule(booking: any) {
    this.data.changeBooking(booking);
    this.data.changeFlight(booking.flight);
    this.router.navigate(['/flights/results/update']);
  }

  cancelBooking(booking_id: string) {
    this.booking.cancelBooking(booking_id).subscribe((data) => {
      this.ngOnInit();
    });
  }

}
