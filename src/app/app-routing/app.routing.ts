import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from '../core/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    loadChildren: '../login/login.module#LoginModule',
    data: {preload: true}
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: '../user/user.module#UserModule'
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: '../admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }