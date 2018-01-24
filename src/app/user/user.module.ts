import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRoutingModule } from './user.routing';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { BackendConnectService } from '../core/backend-connect.service';


@NgModule({
  imports: [  
    CommonModule,
    UserRoutingModule
  ],
  declarations: [   
    UserHomeComponent,
    UserRegisterComponent
  ],
  providers: [
   // AuthService,
      BackendConnectService
  ],
  exports: [
   // LoginComponent
  ]
})
export class UserModule { }