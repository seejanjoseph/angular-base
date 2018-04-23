import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from '../core/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    //component: LoginHomeComponent,  
    loadChildren: '../login/login.module#LoginModule'
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: '../user/user.module#UserModule'
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: '../admin/admin.module#AdminModule';
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }