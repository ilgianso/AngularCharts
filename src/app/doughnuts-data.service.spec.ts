import { TestBed } from '@angular/core/testing';

import { DoughnutsDataService } from './doughnuts-data.service';

describe('DoughnutsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoughnutsDataService = TestBed.get(DoughnutsDataService);
    expect(service).toBeTruthy();
  });
});
