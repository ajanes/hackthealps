import {Component, OnInit} from '@angular/core';
import {ViewType} from '../model/view-type';
import {UserService} from '../services/user-service';
import {Observable} from 'rxjs';
import {WeeklyView} from '../model/weekly-view';

@Component({
  selector: 'ga-user-overview-page',
  template: `
    <div *ngIf="viewType === 'WEEKLY'">
      <ga-user-weekly-view [model]="weeklyView$ | async"></ga-user-weekly-view>
    </div>
  `,
  styles: []
})
export class UserOverviewPageComponent implements OnInit {

  viewType: ViewType;
  weeklyView$: Observable<WeeklyView>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.viewType = ViewType.WEEKLY;
    this.weeklyView$ = this.userService.getWeeklyView$();
  }

}
