import { TestBed } from '@angular/core/testing';

import { FreqRankService } from './freq-rank.service';

describe('FreqRankService', () => {
  let service: FreqRankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreqRankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should resolve 12 as th', () => {
    expect(service.getFreqRankSuffix(12)).toBe("th");
  }); 

  it('should resolve 22 as nd', () => {
    expect(service.getFreqRankSuffix(22)).toBe("nd");
  })
});
