import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookingService } from 'src/app/services/booking.service';
import { DataService } from 'src/app/services/data.service';
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

  paymentForm: FormGroup;
  months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years: string[] = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2028', '2030']

  constructor(private router: Router,
    private user: UserService, private rocket: RocketService, private book: BookingService,
    private date: DatePipe, private data: DataService, private formBuilder: FormBuilder) {
    this.subscription = this.data.flight.subscribe((data) => {
      this.flight = data;
    });
    this.subscription = this.data.seat.subscribe((data) => {
      this.seat = data;
    });
    this.useMiles = false;
    this.paymentForm = this.formBuilder.group({
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      mm: new FormControl('', [Validators.required]),
      yy: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      name: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.user.getUserMiles(localStorage.getItem('token')).subscribe((data: any) => {
      this.hasMiles = data['success'];
      this.milesMessage = data['message'];
      if (data['success'])
        this.miles = data['miles'];
    });
  }

  getFare() {
    if (this.seat['class'] == 'First') {
      return this.flight.price * 1.5;
    }
    return this.flight.price;
  }

  getTotal() {
    if (this.useMiles)
      return this.getFare() - this.miles;
    return this.getFare();
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
    if (!this.paymentForm.valid)
      return;
      
    let bookingObject = {
      user_id: localStorage.getItem('token'),
      flight_id: this.flight._id,
      seat: JSON.stringify(this.seat),
      use_miles: this.useMiles,
      price: this.getTotal()
    }
    console.log(bookingObject);
    this.book.bookRocket(bookingObject).subscribe((data: any) => {
      alert(data['message']);
      if (data['success'])
        this.router.navigate(['/account']);
    });
  }

}
