import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightUpdateSeatComponent } from './flight-update-seat.component';

describe('FlightUpdateSeatComponent', () => {
  let component: FlightUpdateSeatComponent;
  let fixture: ComponentFixture<FlightUpdateSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightUpdateSeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightUpdateSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
