import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminResolve } from './services/admin-resolve.service';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    resolve: {
      data: AdminResolve
    },
    children: [
      { path: '', redirectTo: 'userlist', pathMatch: 'full' },
      {
        path: 'userlist',
        component: UserListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }