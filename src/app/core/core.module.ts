import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './auth.service';
import {BackendConnectService} from './backend-connect.service';

@NgModule({
  imports: [
   HttpClientModule
   
  ],
  declarations: [
  ],

  providers: [
      BackendConnectService
  ],

  exports:[
  ]
  
})
export class CoreModule { }
