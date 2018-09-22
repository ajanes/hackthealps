import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserOverviewPageComponent} from './containers/user-overview-page.component';
import {UserWeeklyViewComponent} from './components/user-weekly-view.component';
import {UserDailyViewComponent} from './components/user-daily-view.component';
import {UserService} from './services/user-service';
import {ChartModule} from 'primeng/chart';
import {AutoCompleteModule, ButtonModule, CalendarModule, CardModule, TabViewModule} from "primeng/primeng";
import { ScoreViewComponent } from './components/score-view.component';
import { UserProfilePageComponent } from './containers/user-profile-page.component';
import {TimetableComponent} from './components/timetable.component';
import { UserAccomodationPageComponent } from './containers/user-accomodation-page.component';
import { UserChallengesPageComponent } from './containers/user-challenges-page.component';
import {TimetableService} from "../../core/services/timetable.service";
import {TimetableSearchComponent} from "./components/timetable.search.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,

    ChartModule,
    CardModule,
    TabViewModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule,
    CalendarModule
  ],
  declarations: [UserProfilePageComponent, UserOverviewPageComponent, UserWeeklyViewComponent, UserDailyViewComponent, ScoreViewComponent,
    TimetableComponent, UserAccomodationPageComponent, UserChallengesPageComponent, TimetableSearchComponent],
  providers: [
    UserService, TimetableService
  ]
})
export class UserModule { }
