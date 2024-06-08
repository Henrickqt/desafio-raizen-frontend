import { WeatherModel } from "./weather.model";

export class HourlyModel {
  time: number = 0;
  temperature: number = 0;
  humidity: number = 0;
  windSpeed: number = 0;
  precipitation: number = 0;
  weather: WeatherModel[] = [];
}
