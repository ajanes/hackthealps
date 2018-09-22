import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserOverviewPageComponent} from './containers/user-overview-page.component';
import {TimetableComponent} from "./components/timetable.component";

const routes: Routes = [
  {
    path: '123',
    component: UserOverviewPageComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
  },
  {
    path: '**',
    redirectTo: 'timetable'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
