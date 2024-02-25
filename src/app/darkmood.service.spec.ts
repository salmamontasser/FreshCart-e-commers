import { TestBed } from '@angular/core/testing';

import { DarkmoodService } from './darkmood.service';

describe('DarkmoodService', () => {
  let service: DarkmoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
