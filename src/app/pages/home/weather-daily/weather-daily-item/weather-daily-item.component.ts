import { Component, Input } from '@angular/core';
import { WeatherDailyModel } from '../models/weather-daily.model';

@Component({
  selector: 'app-weather-daily-item',
  templateUrl: './weather-daily-item.component.html',
  styleUrl: './weather-daily-item.component.scss'
})
export class WeatherDailyItemComponent {
  @Input() weatherDaily: WeatherDailyModel = new WeatherDailyModel();
}
