import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHourlyItemComponent } from './weather-hourly-item.component';

describe('WeatherHourlyItemComponent', () => {
  let component: WeatherHourlyItemComponent;
  let fixture: ComponentFixture<WeatherHourlyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherHourlyItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherHourlyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
