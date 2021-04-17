import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherResolver } from './resolvers/current-weather/current-weather.resolver';
import { DailyWeatherResolver } from './resolvers/daily-weather/daily-weather.resolver';
import { HourlyWeatherResolver } from './resolvers/hourly-weather/hourly-weather.resolver';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CurrentWeatherResolver,
    DailyWeatherResolver,
    HourlyWeatherResolver
  ]
})
export class CoreModule { }
