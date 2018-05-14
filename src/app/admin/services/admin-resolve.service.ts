import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BackendConnectService } from '../../core/backend-connect.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminResolve implements Resolve<any> {
  constructor(private backendConnectService: BackendConnectService) { }

  resolve(): Observable<any> {
    return this.backendConnectService.get('users')
      .catch(err => {
        console.error(err); // deal with API error (eg not found)                
        return Observable.empty<any>();
      });
  }
}