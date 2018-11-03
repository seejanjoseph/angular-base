import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BackendConnectService } from '../../core/backend-connect.service';
import { DataService } from '../../core/data.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty' 

@Injectable()
export class AdminResolve implements Resolve<any> {
  constructor(
    private backendConnectService: BackendConnectService,
    private dataService:DataService
    ) { }

  resolve() : Observable<any> {
    const staticUrl: string = 'users';
    return this.backendConnectService.get(staticUrl)
      .catch(err => {                
        return Observable.empty();
      });
  }
}