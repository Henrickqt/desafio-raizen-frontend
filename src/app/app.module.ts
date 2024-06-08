import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './shared/map/map.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './shared/card/card.component';
import { WeatherCurrentComponent } from './pages/home/weather-current/weather-current.component';
import { WeatherHistoryComponent } from './pages/home/weather-history/weather-history.component';
import { WeatherDailyComponent } from './pages/home/weather-daily/weather-daily.component';
import { WeatherHourlyComponent } from './pages/home/weather-hourly/weather-hourly.component';
import { WeatherDailyItemComponent } from './pages/home/weather-daily/weather-daily-item/weather-daily-item.component';
import { WeatherHourlyItemComponent } from './pages/home/weather-hourly/weather-hourly-item/weather-hourly-item.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    WeatherCurrentComponent,
    WeatherHistoryComponent,
    WeatherDailyComponent,
    WeatherHourlyComponent,
    WeatherDailyItemComponent,
    WeatherHourlyItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
