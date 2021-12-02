import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { FlightSelectComponent } from './components/flight-select/flight-select.component';
import { FlightUpdateSeatComponent } from './components/flight-update-seat/flight-update-seat.component';
import { FlightUpdateComponent } from './components/flight-update/flight-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SeatSelectComponent } from './components/seat-select/seat-select.component';
import { SeatUpdateComponent } from './components/seat-update/seat-update.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/auth.guard';

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
    path: 'flights/results/update',
    component: FlightUpdateComponent
  },
  {
    path: 'flights/results/update/seats',
    component: FlightUpdateSeatComponent
  },
  {
    path: 'flights/seats',
    component: SeatSelectComponent
  },
  {
    path: 'flights/seats/update',
    component: SeatUpdateComponent
  },
  {
    path: 'flights/payment',
    component: PaymentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
