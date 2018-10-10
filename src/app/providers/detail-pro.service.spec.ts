import { TestBed, inject } from '@angular/core/testing';

import { DetailProService } from './detail-pro.service';

describe('DetailProService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailProService]
    });
  });

  it('should be created', inject([DetailProService], (service: DetailProService) => {
    expect(service).toBeTruthy();
  }));
});
