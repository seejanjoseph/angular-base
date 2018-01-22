import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BackendConnectService } from './backend-connect.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
   HttpClientModule
   
  ],
  declarations: [
  ],

  providers: [
      BackendConnectService,
      AuthGuardService,
      AuthService
  ],

  exports:[
  ]
  
})
export class CoreModule { }
