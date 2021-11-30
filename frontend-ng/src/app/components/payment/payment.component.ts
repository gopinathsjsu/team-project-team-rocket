import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  subscription: Subscription;
  flight: any;
  seat: any;

  constructor(private route: ActivatedRoute, private router: Router, private rocket: RocketService) {
    this.subscription = this.rocket.flight.subscribe((data) => {
      this.flight = data;
    });
    this.subscription = this.rocket.seat.subscribe((data) => {
      this.seat = data;
    });
  }

  ngOnInit(): void {
  }

  clicker() {
    console.log(this.flight);
    console.log(this.seat);
  }

}
