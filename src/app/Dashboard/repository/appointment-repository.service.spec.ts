import { TestBed } from '@angular/core/testing';

import { AppointmentReopsitoryService } from './appointment-repository.service';

describe('AppointmentReopsitoryService', () => {
  let service: AppointmentReopsitoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentReopsitoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
