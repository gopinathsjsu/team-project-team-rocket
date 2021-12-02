import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketStatusComponent } from './rocket-status.component';

describe('RocketStatusComponent', () => {
  let component: RocketStatusComponent;
  let fixture: ComponentFixture<RocketStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
