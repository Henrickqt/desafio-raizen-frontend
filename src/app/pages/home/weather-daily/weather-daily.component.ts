import { Component, Input } from '@angular/core';
import { WeatherDailyModel } from './models/weather-daily.model';

@Component({
  selector: 'app-weather-daily',
  templateUrl: './weather-daily.component.html',
  styleUrl: './weather-daily.component.scss'
})
export class WeatherDailyComponent {
  @Input() weatherDailyList: WeatherDailyModel[] = [];
  @Input() isLoading: boolean = false;
}
