import { TestBed } from '@angular/core/testing';

import { ReadTeamService } from './read-team.service';

describe('ReadTeamService', () => {
  let service: ReadTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
