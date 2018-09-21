import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserOverviewPageComponent } from './containers/user-overview-page.component';
import { UserWeeklyViewComponent } from './components/user-weekly-view.component';
import { UserDailyViewComponent } from './components/user-daily-view.component';
import {UserService} from './services/user-service';
import {AmexioChartD3Module, AmexioD3BarChartComponent} from 'amexio-chart-d3';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,

    AmexioChartD3Module
  ],
  declarations: [UserOverviewPageComponent, UserWeeklyViewComponent, UserDailyViewComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
