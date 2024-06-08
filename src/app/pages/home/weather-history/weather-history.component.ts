import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherHistoryModel } from './models/weather-history.model';

@Component({
  selector: 'app-weather-history',
  templateUrl: './weather-history.component.html',
  styleUrl: './weather-history.component.scss'
})
export class WeatherHistoryComponent {
  @Input() weatherHistoryList: WeatherHistoryModel[] = [];
  @Input() isLoading: boolean = false;
  @Output() historyClick: EventEmitter<number> = new EventEmitter<number>();

  getWeatherForecastHistoryById(weatherForecastId: number) {
    this.historyClick.emit(weatherForecastId);
  }
}
