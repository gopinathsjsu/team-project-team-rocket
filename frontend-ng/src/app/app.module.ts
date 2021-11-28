import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { DatePipe } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { FlightSelectComponent } from './components/flight-select/flight-select.component';
import { SeatSelectComponent } from './components/seat-select/seat-select.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FlightSearchComponent,
    FlightSelectComponent,
    SeatSelectComponent,
    PaymentComponent,
    AccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule, MatExpansionModule,
    MatAutocompleteModule, MatIconModule, MatCardModule, MatButtonModule, MatTabsModule, MatRadioModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule,
    NgbModule, NgbCollapseModule
  ],
  providers: [MatDatepickerModule, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }