import { Component, Input } from '@angular/core';
import { WeatherCurrentModel } from './models/weather-current.model';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrl: './weather-current.component.scss'
})
export class WeatherCurrentComponent {
  @Input() weatherCurrent: WeatherCurrentModel = new WeatherCurrentModel();
}
