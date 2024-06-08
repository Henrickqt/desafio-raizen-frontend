import { DailyModel } from "./daily.model";
import { HourlyModel } from "./hourly.model";

export class WeatherForecastResponseModel {
  latitude: number = 0;
  longitude: number = 0;
  timezone: string = '';
  timezoneOffset: number = 0;
  hourly: HourlyModel[] = [];
  daily: DailyModel[] = [];
}
