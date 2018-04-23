import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class AdminResolve implements Resolve<any> {
  constructor() {}

  resolve() {
    console.log("tet");
    return new Promise((resolve, reject) => resolve('string'));
  }
}