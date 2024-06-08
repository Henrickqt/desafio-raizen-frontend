import { Component, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { WeatherForecastRequestModel } from '../../services/models/request/weather-forecast-request.model';
import { WeatherCurrentModel } from './weather-current/models/weather-current.model';
import { WeatherDailyModel } from './weather-daily/models/weather-daily.model';
import { capitalizeFirstLetter } from '../../utils/string.extension';
import { getDayFromTimestamp, getHourFromTimestamp } from '../../utils/date.extension';
import { WeatherHourlyModel } from './weather-hourly/models/weather-hourly.model';
import { WeatherHistoryModel } from './weather-history/models/weather-history.model';
import { WeatherForecastResponseModel } from '../../services/models/response/weather-forecast-response.model';
import { DailyModel } from '../../services/models/response/daily.model';
import { HourlyModel } from '../../services/models/response/hourly.model';
import { MapComponent } from '../../shared/map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public weatherCurrent: WeatherCurrentModel = new WeatherCurrentModel();
  public weatherDailyList: WeatherDailyModel[] = [];
  public weatherHourlyList: WeatherHourlyModel[] = [];
  public weatherHistoryList: WeatherHistoryModel[] = [];
  public address: string = 'Nenhum endereço selecionado'
  public isLoading: boolean = true;

  @ViewChild('map') map?: MapComponent;

  constructor(private weatherForecastService: WeatherForecastService) {}

  ngOnInit() {
    this.weatherForecastService.getWeatherForecastHistory().pipe(
      finalize(() => this.isLoading = false),
    ).subscribe({
      next: (response) => {
        this.weatherHistoryList = response.map((x) => ({
          weatherForecastId: x.weatherForecastId,
          date: x.date,
          latitude: x.latitude,
          longitude: x.longitude,
        }));
      },
    });
  }

  getWeatherForecastHistoryById(weatherForecastId: number) {
    if (this.isLoading) return;

    this.isLoading = true;
    this.weatherForecastService.getWeatherForecastHistoryById(weatherForecastId).pipe(
      finalize(() => this.isLoading = false),
    ).subscribe({
      next: (response) => {
        this.weatherCurrentMap(response);
        this.weatherHourlyMap(response.hourly);
        this.weatherDailyMap(response.daily);

        if (this.map) {
          this.map.setMarker(response.latitude, response.longitude);
          this.map.getMarkerLocation((address) => this.getMarkerLocationCallback(address));
        }
      },
    });
  }

  getWeatherForecast(event: google.maps.LatLngLiteral) {
    if (this.isLoading) return;

    const request: WeatherForecastRequestModel = {
      latitude: event.lat,
      longitude: event.lng,
    }

    this.isLoading = true;
    this.weatherForecastService.getWeatherForecast(request).pipe(
      finalize(() => this.isLoading = false),
    ).subscribe({
      next: (response) => {
        this.weatherHistoryMap(response);
        this.weatherCurrentMap(response);
        this.weatherHourlyMap(response.hourly);
        this.weatherDailyMap(response.daily);

        if (this.map) {
          this.map.getMarkerLocation((address) => this.getMarkerLocationCallback(address));
        }
      },
    });
  }

  getMarkerLocationCallback(address: string) {
    this.address = address;
  }

  weatherHistoryMap(response: WeatherForecastResponseModel) {
    this.weatherHistoryList = [
      {
        weatherForecastId: response.weatherForecastId,
        date: response.date,
        latitude: response.latitude,
        longitude: response.longitude,
      },
      ...this.weatherHistoryList,
    ];
  }

  weatherCurrentMap(response: WeatherForecastResponseModel) {
    this.weatherCurrent = {
      temperature: Math.round(response.hourly[0].temperature),
      humidity: response.hourly[0].humidity,
      windSpeed: response.hourly[0].windSpeed,
      precipitation: response.hourly[0].precipitation,
      description: capitalizeFirstLetter(response.hourly[0].weather[0].description),
      icon: response.hourly[0].weather[0].icon,
    };
  }

  weatherHourlyMap(hourly: HourlyModel[]) {
    this.weatherHourlyList = hourly.map((x) => ({
      hour: getHourFromTimestamp(x.time),
      dayOfWeek: getDayFromTimestamp(x.time),
      temperature: Math.round(x.temperature),
      humidity: x.humidity,
      windSpeed: x.windSpeed,
      precipitation: x.precipitation,
      icon: x.weather[0].icon,
    } as WeatherHourlyModel));
  }

  weatherDailyMap(daily: DailyModel[]) {
    this.weatherDailyList = daily.map((x) => ({
      dayOfWeek: getDayFromTimestamp(x.time),
      temperatureMin: Math.round(x.temperature.min),
      temperatureMax: Math.round(x.temperature.max),
      icon: x.weather[0].icon,
    } as WeatherDailyModel));
  }
}
