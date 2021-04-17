import { TestBed } from '@angular/core/testing';

import { DailyWeatherResolver } from './daily-weather.resolver';

describe('DailyWeatherResolver', () => {
  let resolver: DailyWeatherResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DailyWeatherResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
