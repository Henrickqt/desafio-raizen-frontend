import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHistoryItemComponent } from './weather-history-item.component';

describe('WeatherHistoryItemComponent', () => {
  let component: WeatherHistoryItemComponent;
  let fixture: ComponentFixture<WeatherHistoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherHistoryItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
