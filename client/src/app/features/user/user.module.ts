import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserOverviewPageComponent } from './containers/user-overview-page.component';
import { UserWeeklyViewComponent } from './components/user-weekly-view.component';
import { UserDailyViewComponent } from './components/user-daily-view.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserOverviewPageComponent, UserWeeklyViewComponent, UserDailyViewComponent]
})
export class UserModule { }
