import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserOverviewPageComponent} from './containers/user-overview-page.component';

const routes: Routes = [
  {
    path: '123',
    component: UserOverviewPageComponent
  },
  {
    path: '**',
    redirectTo: '123'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
