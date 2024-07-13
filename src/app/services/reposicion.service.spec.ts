import { TestBed } from '@angular/core/testing';

import { ReposicionService } from './reposicion.service';

describe('ReposicionService', () => {
  let service: ReposicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
