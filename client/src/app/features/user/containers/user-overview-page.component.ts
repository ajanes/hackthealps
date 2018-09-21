import {Component, OnInit} from '@angular/core';
import {ViewType} from '../model/view-type';
import {UserService} from '../services/user-service';
import {Observable} from 'rxjs';
import {WeeklyView} from '../model/weekly-view';

@Component({
  selector: 'ga-user-overview-page',
  template: `
    <p-tabView>
      <p-tabPanel header="Daily">
        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
      </p-tabPanel>
      <p-tabPanel header="Weekly">
        <ga-user-weekly-view [model]="weeklyView$ | async"></ga-user-weekly-view>
      </p-tabPanel>
      <p-tabPanel header="Monthly">
        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
      </p-tabPanel>
    </p-tabView>
    
    
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
