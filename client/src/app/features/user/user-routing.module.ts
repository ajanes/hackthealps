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
    path: '123/dashboard',
    component: UserOverviewPageComponent
  },
  {
    path: '123/profile',
    component: UserProfilePageComponent
  },
  {
    path: '123/accomodation',
    component: UserAccomodationPageComponent
  },
  {
    path: '123/challenges',
    component: UserChallengesPageComponent
  },
  {
    path: '123/timetable',
    component: TimetableSearchComponent
  },
  {
    path: '**',
    redirectTo: '123/dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
