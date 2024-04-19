import { TestBed } from '@angular/core/testing';

import { MargemService } from './margem.service';

describe('MargemService', () => {
  let service: MargemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MargemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
