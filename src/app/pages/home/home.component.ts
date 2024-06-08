import { Component } from '@angular/core';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { WeatherForecastRequestModel } from '../../services/models/request/weather-forecast-request.model';
import { WeatherForecastResponseModel } from '../../services/models/response/weather-forecast-response.model';
import { WeatherCurrentModel } from './weather-current/models/weather-current.model';
import { finalize } from 'rxjs';
import { WeatherDailyModel } from './weather-daily/models/weather-daily.model';
import { capitalizeFirstLetter } from '../../utils/string.extension';
import { getDayFromTimestamp, getHourFromTimestamp } from '../../utils/date.extension';
import { WeatherHourlyModel } from './weather-hourly/models/weather-hourly.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public weatherForecast: WeatherForecastResponseModel = new WeatherForecastResponseModel();
  public weatherCurrent: WeatherCurrentModel = new WeatherCurrentModel();
  public weatherDailyList: WeatherDailyModel[] = [];
  public weatherHourlyList: WeatherHourlyModel[] = [];

  public isLoading: boolean = false;

  constructor(private weatherForecastService: WeatherForecastService) {}

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
        this.weatherForecast = response;

        this.weatherCurrent = {
          temperature: Math.round(this.weatherForecast.hourly[0].temperature),
          humidity: this.weatherForecast.hourly[0].humidity,
          windSpeed: this.weatherForecast.hourly[0].windSpeed,
          precipitation: this.weatherForecast.hourly[0].precipitation,
          description: capitalizeFirstLetter(this.weatherForecast.hourly[0].weather[0].description),
          icon: this.weatherForecast.hourly[0].weather[0].icon,
        };

        this.weatherDailyList = this.weatherForecast.daily.map((x) => ({
          dayOfWeek: getDayFromTimestamp(x.time),
          temperatureMin: Math.round(x.temperature.min),
          temperatureMax: Math.round(x.temperature.max),
          icon: x.weather[0].icon,
        } as WeatherDailyModel));

        this.weatherHourlyList = this.weatherForecast.hourly.map((x) => ({
          hour: getHourFromTimestamp(x.time),
          dayOfWeek: getDayFromTimestamp(x.time),
          temperature: Math.round(x.temperature),
          humidity: x.humidity,
          windSpeed: x.windSpeed,
          precipitation: x.precipitation,
          icon: x.weather[0].icon,
        } as WeatherHourlyModel));
      },
    });
  }
}
