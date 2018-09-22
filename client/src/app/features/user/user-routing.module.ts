import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserOverviewPageComponent} from './containers/user-overview-page.component';
import {UserProfilePageComponent} from './containers/user-profile-page.component';
import {TimetableComponent} from "./components/timetable.component";
import {UserAccomodationPageComponent} from './containers/user-accomodation-page.component';
import {UserChallengesPageComponent} from './containers/user-challenges-page.component';
import {TimetableSearchComponent} from "./components/timetable.search.component";

const routes: Routes = [
  {
    path: ':id/dashboard',
    component: UserOverviewPageComponent
  },
  {
    path: ':id/profile',
    component: UserProfilePageComponent
  },
  {
    path: ':id/accomodation',
    component: UserAccomodationPageComponent
  },
  {
    path: ':id/challenges',
    component: UserChallengesPageComponent
  },
  {
    path: ':id/timetable',
    component: TimetableComponent
  },
  {
    path: '**',
    redirectTo: 'gbuffon/dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
