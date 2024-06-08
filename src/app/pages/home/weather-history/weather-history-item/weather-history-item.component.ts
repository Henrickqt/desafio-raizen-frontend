import { Component, Input } from '@angular/core';
import { WeatherHistoryModel } from '../models/weather-history.model';

@Component({
  selector: 'app-weather-history-item',
  templateUrl: './weather-history-item.component.html',
  styleUrl: './weather-history-item.component.scss'
})
export class WeatherHistoryItemComponent {
  @Input() weatherHistory: WeatherHistoryModel = new WeatherHistoryModel();
}
