import { Component, Input } from '@angular/core';
import { WeatherHourlyModel } from './models/weather-hourly.model';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrl: './weather-hourly.component.scss'
})
export class WeatherHourlyComponent {
  @Input() weatherHourlyList: WeatherHourlyModel[] = [];
}
