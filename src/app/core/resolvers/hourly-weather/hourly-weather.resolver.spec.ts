import { TestBed } from '@angular/core/testing';

import { HourlyWeatherResolver } from './hourly-weather.resolver';

describe('HourlyWeatherResolver', () => {
  let resolver: HourlyWeatherResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HourlyWeatherResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
