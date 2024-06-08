import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHistoryHeaderComponent } from './weather-history-header.component';

describe('WeatherHistoryHeaderComponent', () => {
  let component: WeatherHistoryHeaderComponent;
  let fixture: ComponentFixture<WeatherHistoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherHistoryHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherHistoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
