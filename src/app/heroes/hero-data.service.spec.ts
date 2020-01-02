import { TestBed } from '@angular/core/testing';

import { HeroDataService } from './hero-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from 'selenium-webdriver/http';

describe('HeroDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
      providers: [
        HeroDataService,
        { provide: HttpClient, useValue: {} }
      ],
  }));

  it('should create a Hero Data Service', () => {
    const service: HeroDataService = TestBed.get(HeroDataService);
    expect(service).toBeTruthy();
  });
});
