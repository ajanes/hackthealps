import {Component, OnInit} from '@angular/core';
import {ViewType} from '../model/view-type';
import {UserService} from '../services/user-service';
import {Observable} from 'rxjs';
import {WeeklyView} from '../model/weekly-view';

@Component({
  selector: 'ga-user-overview-page',
  template: `
    <p-tabView>
      <p-tabPanel header="Daily"  [selected]="true">
        <ga-user-daily-view [model]="dailyView$ | async"></ga-user-daily-view>
      </p-tabPanel>
      <p-tabPanel header="Weekly">
        <ga-user-weekly-view [model]="weeklyView$ | async"></ga-user-weekly-view>
      </p-tabPanel>
      <p-tabPanel header="Monthly">
        Not yet implemented
      </p-tabPanel>
    </p-tabView>


  `,
  styles: []
})
export class UserOverviewPageComponent implements OnInit {

  viewType: ViewType;
  weeklyView$: Observable<WeeklyView>;
  dailyView$: Observable<any>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.viewType = ViewType.DAILY;
    this.weeklyView$ = this.userService.getWeeklyView$();
    this.dailyView$ = this.userService.getDailyView$();
  }

}
