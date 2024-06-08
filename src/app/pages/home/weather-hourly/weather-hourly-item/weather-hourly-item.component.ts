import { Component, Input } from '@angular/core';
import { WeatherHourlyModel } from '../models/weather-hourly.model';

@Component({
  selector: 'app-weather-hourly-item',
  templateUrl: './weather-hourly-item.component.html',
  styleUrl: './weather-hourly-item.component.scss'
})
export class WeatherHourlyItemComponent {
  @Input() weatherHourly: WeatherHourlyModel = new WeatherHourlyModel();
}
