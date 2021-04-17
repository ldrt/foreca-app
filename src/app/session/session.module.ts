import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';


@NgModule({
  declarations: [
    CurrentWeatherComponent,
    DailyWeatherComponent,
    HourlyWeatherComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule
  ]
})
export class SessionModule { }
