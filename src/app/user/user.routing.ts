import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
//import { LoginComponent } from './components/login/login.component';

const routes: Routes = [ 
  { 
    path: '', 
    component: UserHomeComponent, 
    children : [
      { path: 'user-register', component: UserRegisterComponent }//,
     // { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }