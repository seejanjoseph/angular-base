import { TestBed, inject } from '@angular/core/testing';

import { AdminResolve } from './admin-resolve.service';
import { BackendConnectService } from '../../core/backend-connect.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DataService } from '../../core/data.service';

describe('AdminResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminResolve, BackendConnectService, HttpClient, HttpHandler, DataService]
    });
  });

  it('should be created', inject([AdminResolve], (service: AdminResolve) => {
    expect(service).toBeTruthy();
  }));
});
