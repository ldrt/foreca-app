import { TestBed } from '@angular/core/testing';

import { CurrentWeatherResolver } from './current-weather.resolver';

describe('CurrentWeatherResolver', () => {
  let resolver: CurrentWeatherResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CurrentWeatherResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
