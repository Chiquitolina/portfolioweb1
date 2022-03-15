import { TestBed } from '@angular/core/testing';

import { SkillserviceService } from './skill.service';

describe('SkillserviceService', () => {
  let service: SkillserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
