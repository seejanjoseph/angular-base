import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { 
    //https://ryanchenkie.com/angular-authentication-using-route-guards
  }

  public isAuthenticated(): boolean {

    const token = sessionStorage.getItem('app-token');
    if (token) {
      return true;
    } else {
      return false;
    }    
  }

}
