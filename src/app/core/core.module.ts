import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BackendConnectService } from './backend-connect.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpRequestInterceptor } from './http-request-interceptor.service';
const interceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpRequestInterceptor,
  multi: true
};
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
    interceptor
  ],

  exports: [
  ]

})
export class CoreModule { }
