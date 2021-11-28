import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { FlightSelectComponent } from './components/flight-select/flight-select.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SeatSelectComponent } from './components/seat-select/seat-select.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'flights/results',
    component: FlightSelectComponent
  },
  {
    path: 'flights/seats',
    component: SeatSelectComponent
  },
  {
    path: 'flights/payment',
    component: PaymentComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
