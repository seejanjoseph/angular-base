import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BackendConnectService } from './backend-connect.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpRequestInterceptor } from './http-request-interceptor.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
  ],
  providers: [
    BackendConnectService,
    AuthGuardService,
    AuthService,
    HttpRequestInterceptor
  ],

  exports: [
  ]

})
export class CoreModule { }
