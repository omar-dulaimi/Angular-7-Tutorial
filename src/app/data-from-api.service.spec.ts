import { TestBed } from '@angular/core/testing';

import { DataFromAPIService } from './data-from-api.service';

describe('DataFromAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFromAPIService = TestBed.get(DataFromAPIService);
    expect(service).toBeTruthy();
  });
});
