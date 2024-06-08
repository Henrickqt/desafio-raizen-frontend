import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDailyItemComponent } from './weather-daily-item.component';

describe('WeatherDailyItemComponent', () => {
  let component: WeatherDailyItemComponent;
  let fixture: ComponentFixture<WeatherDailyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDailyItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDailyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
