import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserOverviewPageComponent} from './containers/user-overview-page.component';
import {UserWeeklyViewComponent} from './components/user-weekly-view.component';
import {UserDailyViewComponent} from './components/user-daily-view.component';
import {UserService} from './services/user-service';
import {ChartModule} from 'primeng/chart';
import {ButtonModule, CardModule, GMapModule, TabViewModule} from 'primeng/primeng';
import {ScoreViewComponent} from './components/score-view.component';
import {UserProfilePageComponent} from './containers/user-profile-page.component';
import {TimetableComponent} from './components/timetable.component';
import {UserAccomodationPageComponent} from './containers/user-accomodation-page.component';
import {UserChallengesPageComponent} from './containers/user-challenges-page.component';
import {UserProfileComponent} from './components/user-profile.component';
import {AccomodationProfileComponent} from './components/accomodation-profile.component';
import { CompetitorViewComponent } from './components/competitor-view.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,

    ChartModule,
    CardModule,
    TabViewModule,
    ButtonModule,
    GMapModule
  ],
  declarations: [
    UserProfilePageComponent,
    UserOverviewPageComponent,
    UserWeeklyViewComponent,
    UserDailyViewComponent,
    ScoreViewComponent,
    TimetableComponent,
    UserAccomodationPageComponent,
    UserChallengesPageComponent,
    UserProfileComponent,
    AccomodationProfileComponent,
    CompetitorViewComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule {
}
