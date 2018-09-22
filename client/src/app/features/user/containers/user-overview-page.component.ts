import {Component, OnInit} from '@angular/core';
import {ViewType} from '../model/view-type';
import {UserService} from '../services/user-service';
import {Observable} from 'rxjs';
import {WeeklyView} from '../model/weekly-view';
import {LabelStoreService} from '../../../core/services/label-store.service';

@Component({
  selector: 'ga-user-overview-page',
  template: `
    <p-tabView>
      <p-tabPanel header="Daily">
        Not yet implemented
      </p-tabPanel>
      <p-tabPanel header="Weekly" [selected]="true">
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

  constructor(private userService: UserService,
              private labelStoreService: LabelStoreService) { }

  ngOnInit() {
    this.labelStoreService.label = 'Your personal CO2 performance';
    this.viewType = ViewType.WEEKLY;
    this.weeklyView$ = this.userService.getWeeklyView$();
  }

}
