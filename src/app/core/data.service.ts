import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private usersList = new BehaviorSubject<any>([]);

  constructor() { }

  getUsers(): Observable<any> {
    return this.usersList.asObservable();
  }
  updateUsers(users: Array<any>) {
    this.usersList.next(users);
  }
}
