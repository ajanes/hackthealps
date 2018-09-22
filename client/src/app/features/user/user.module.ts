import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserOverviewPageComponent} from './containers/user-overview-page.component';
import {UserWeeklyViewComponent} from './components/user-weekly-view.component';
import {UserDailyViewComponent} from './components/user-daily-view.component';
import {UserService} from './services/user-service';
import {ChartModule} from 'primeng/chart';
import {ButtonModule, TabViewModule} from 'primeng/primeng';
import { ScoreViewComponent } from './components/score-view.component';
import {TimetableComponent} from "./components/timetable.component";
import {CardModule} from "primeng/card";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,

    ChartModule,
    CardModule,
    TabViewModule,
    ButtonModule
  ],
  declarations: [UserOverviewPageComponent, UserWeeklyViewComponent, UserDailyViewComponent, ScoreViewComponent, TimetableComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
