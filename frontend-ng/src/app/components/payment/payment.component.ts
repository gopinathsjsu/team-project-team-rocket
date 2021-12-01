import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookingService } from 'src/app/services/booking.service';
import { RocketService } from 'src/app/services/rocket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  subscription: Subscription;
  flight: any;
  seat: any;
  hasMiles: boolean;
  miles: number;
  milesMessage: any;
  useMiles: boolean;

  constructor(private route: ActivatedRoute, private router: Router,
    private user: UserService, private rocket: RocketService, private book: BookingService,
    private date: DatePipe) {
    this.subscription = this.rocket.flight.subscribe((data) => {
      this.flight = data;
    });
    this.subscription = this.rocket.seat.subscribe((data) => {
      this.seat = data;
    });
    this.useMiles = false;
  }

  ngOnInit(): void {
    this.user.getUserMiles(localStorage.getItem('token')).subscribe((data: any) => {
      this.hasMiles = data['success'];
      this.milesMessage = data['message'];
      if (data['success'])
        this.miles = data['miles'];
    });
  }

  getTotal() {
    if (this.useMiles)
      return this.flight.price - this.miles;
    return this.flight.price;
  }

  getDate(departure_date: any, departure_time: any) {
    let year = departure_date.substring(0, 4);
    let month = departure_date.substring(4, 6);
    let day = departure_date.substring(6, 8);
    let hour = departure_time.substring(0, 2);
    let minute = departure_time.substring(2, 4);
    let newDate = new Date(year, month - 1, day, hour, minute);
    return this.date.transform(newDate, 'E, dd LLL yyyy - HH:mm');
  }

  bookRocket() {
    let bookingObject = {
      user_id: localStorage.getItem('token'),
      flight_id: this.flight._id,
      seat: this.seat,
      use_miles: this.useMiles,
      price: this.getTotal()
    }
    this.book.bookRocket(bookingObject).subscribe((data) => {
      console.log(data);
    });
  }

}
