import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherForecastRequestModel } from './models/request/weather-forecast-request.model';
import { WeatherForecastResponseModel } from './models/response/weather-forecast-response.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  private readonly baseUrl: string = `${environment.openWeatherBaseUrl}WeatherForecast`;

  constructor(private http: HttpClient) { }

  getWeatherForecast(request: WeatherForecastRequestModel) {
    return this.http.get<WeatherForecastResponseModel>(this.baseUrl, { params: { ...request }})
  }
}
