import { TestBed, inject } from '@angular/core/testing';

import { PhoneBookEntryService } from './phone-book-entry.service';

describe('PhoneBookEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneBookEntryService]
    });
  });

  it('should be created', inject([PhoneBookEntryService], (service: PhoneBookEntryService) => {
    expect(service).toBeTruthy();
  }));
});
