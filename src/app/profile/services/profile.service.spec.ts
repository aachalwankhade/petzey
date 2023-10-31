import { TestBed } from '@angular/core/testing';

import { profileService } from './profile.service';

describe('ServicesService', () => {
  let service: profileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(profileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
