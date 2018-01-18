import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicRoutingModule } from './admin.routing';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  imports: [    
    PublicRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    LoginComponent
  ],
  exports: []
})
export class AdminModule { }