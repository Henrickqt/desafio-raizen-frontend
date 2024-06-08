import { TemperatureModel } from "./temperature.model";
import { WeatherModel } from "./weather.model";

export class DailyModel {
  time: number = 0;
  humidity: number = 0;
  windSpeed: number = 0;
  precipitation: number = 0;
  temperature: TemperatureModel = new TemperatureModel();
  weather: WeatherModel[] = [];
}
