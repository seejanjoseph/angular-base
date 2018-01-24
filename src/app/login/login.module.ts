import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { BackendConnectService } from '../core/backend-connect.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    LoginHomeComponent,
    LoginComponent,
    LoginRegisterComponent
  ],
  providers: [
    BackendConnectService
  ]
})
export class LoginModule { }
