import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDailyComponent } from './weather-daily.component';

describe('WeatherDailyComponent', () => {
  let component: WeatherDailyComponent;
  let fixture: ComponentFixture<WeatherDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDailyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
