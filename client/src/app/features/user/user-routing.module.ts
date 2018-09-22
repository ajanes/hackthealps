import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserOverviewPageComponent} from './containers/user-overview-page.component';
import {UserProfilePageComponent} from './containers/user-profile-page.component';

const routes: Routes = [
  {
    path: '123/dashboard',
    component: UserOverviewPageComponent
  },
  {
    path: '123/profile',
    component: UserProfilePageComponent
  },
  {
    path: '**',
    redirectTo: '123/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
