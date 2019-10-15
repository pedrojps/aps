import { TestBed } from '@angular/core/testing';

import { AuthGuaurdService } from './auth-guaurd.service';

describe('AuthGuaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAdiminGuard = TestBed.get(AuthGuaurdService);
    expect(service).toBeTruthy();
  });
});
