import { TestBed, inject } from '@angular/core/testing';

import { BookSerService } from './book-ser.service';

describe('BookSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookSerService]
    });
  });

  it('should be created', inject([BookSerService], (service: BookSerService) => {
    expect(service).toBeTruthy();
  }));
});
