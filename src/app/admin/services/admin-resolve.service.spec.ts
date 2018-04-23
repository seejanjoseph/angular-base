import { TestBed, inject } from '@angular/core/testing';

import { AdminResolve } from './admin-resolve.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminResolve]
    });
  });

  it('should be created', inject([AdminResolve], (service: AdminResolve) => {
    expect(service).toBeTruthy();
  }));
});
