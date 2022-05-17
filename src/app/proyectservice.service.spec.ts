import { TestBed } from '@angular/core/testing';

import { ProyectserviceService } from './proyectservice.service';

describe('ProyectserviceService', () => {
  let service: ProyectserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
