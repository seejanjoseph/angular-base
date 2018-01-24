import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

const routes: Routes = [ 
  { 
    path: '', 
    component: LoginHomeComponent, 
    children : [
      { path: 'login-register', component: LoginRegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }