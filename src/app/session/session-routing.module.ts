import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherResolver } from '../core/resolvers/current-weather/current-weather.resolver';
import { DailyWeatherResolver } from '../core/resolvers/daily-weather/daily-weather.resolver';
import { HourlyWeatherResolver } from '../core/resolvers/hourly-weather/hourly-weather.resolver';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';

const routes: Routes = [
  {
    path: 'current',
    data: {
      resolve: {
        currentWeather: CurrentWeatherResolver
      }
    },
    component: CurrentWeatherComponent
  },

  {
    path: 'daily',
    data: {
      resolve: {
        currentWeather: DailyWeatherResolver
      }
    },
    component: DailyWeatherComponent
  },

  {
    path: 'hourly',
    data: {
      resolve: {
        currentWeather: HourlyWeatherResolver
      }
    },
    component: HourlyWeatherComponent
  },
  { path: '**', redirectTo: 'current'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
