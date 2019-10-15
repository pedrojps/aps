import { TestBed } from '@angular/core/testing';

import { AuthUsuarioGuaurdService } from './auth-usuario-guaurd.service';

describe('AuthUsuarioGuaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthUsuarioGuard = TestBed.get(AuthUsuarioGuaurdService);
    expect(service).toBeTruthy();
  });
});
