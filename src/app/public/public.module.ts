import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public.routing';
import { PublicHomeComponent } from './components/public-home/public-home.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { LoginComponent } from './components/login/login.component';
import { BackendConnectService } from '../core/backend-connect.service';


@NgModule({
  imports: [  
    CommonModule,  
    FormsModule, 
    ReactiveFormsModule,
    PublicRoutingModule
  ],
  declarations: [   
    PublicHomeComponent,
    UserRegisterComponent,
    LoginComponent
  ],
  providers: [
   // AuthService,
      BackendConnectService
  ],
  exports: [
   // LoginComponent
  ]
})
export class PublicModule { }