import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin.routing';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminResolve } from './services/admin-resolve.service';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    UserListComponent
  ],
  providers: [
    AdminResolve
  ],
  exports: []
})
export class AdminModule { }