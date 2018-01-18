import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
//import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [ 
  { 
    path: '', 
    component: AdminHomeComponent/*, 
    children : [
      { path: 'user-register', component: UserRegisterComponent }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }