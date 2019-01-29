import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService, AuthService, Router],
      imports: [
        RouterTestingModule
      ]
    });
  });

  /*it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));*/
  it('checks if a user is valid',

    // inject your guard service AND Router
    async(inject([AuthGuardService, Router], (auth, router) => {

      // add a spy
      spyOn(router, 'navigate');

      expect(auth.canActivate()).toBeFalsy();
      expect(router.navigate).toHaveBeenCalled();
    })
  ));
});
