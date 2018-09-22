import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user-service';
import {TimetableModel} from '../model/timetable-model';
import {TimetableService} from '../../../core/services/timetable.service';
import {StationModel} from '../model/station.model';
import {LabelStoreService} from '../../../core/services/label-store.service';

@Component({
  selector: 'ga-timetable-search',
  template: `
    <div class="ui-g" *ngIf="!showResult">
      <h3 class="ui-g-12 center">Search transportation</h3>
      <div class="ui-g-6 ui-sm-12">
        <h3>From</h3>
        <p-autoComplete required [(ngModel)]="selectedFromStation" [suggestions]="resultsFrom" field="name"
                        (completeMethod)="searchFrom($event)"></p-autoComplete>
      </div>
      <div class="ui-g-6 ui-sm-12">
        <h3>To</h3>
        <p-autoComplete required="true" [(ngModel)]="selectedToStation" [suggestions]="resultsTo" field="name"
                        (completeMethod)="searchTo($event)"></p-autoComplete>
      </div>
      <div class="ui-g-6 ui-sm-12">
        <h3>Time</h3>
        <p-calendar [(ngModel)]="dateTime" [showTime]="true"></p-calendar>
      </div>
      <div class="ui-g-6 ui-sm-12">
        <h3 class="first">#Results: {{limit}}</h3>
        <p-slider [(ngModel)]="limit" [style]="{'width':'14em'}" [max]="20"></p-slider>
      </div>
      <div class="ui-g-12 btn">
        <p-button (onClick)="showResult = true" [disabled]="!(selectedFromStation && selectedToStation && dateTime)"
                  label="Search"></p-button>
      </div>
    </div>
    <div class="ui-g ui-fluid" *ngIf="showResult">
      <ga-timetable
        [from]="selectedFromStation"
        [to]="selectedToStation"
        [dateTime]="dateTime"
        [(display)]="showResult"
        [limit]="limit"
      ></ga-timetable>
    </div>
  `,
  styles: ['.btn {text-align: center; padding: 2em}',
    '.center {text-align: center; padding: 0}']
})
export class TimetableSearchComponent implements OnInit {

  resultsFrom: StationModel[];
  resultsTo: StationModel[];
  selectedFromStation: StationModel;
  selectedToStation: StationModel;

  dateTime: any;
  limit: number;

  showResult = false;

  constructor(private userService: UserService,
              private labelStoreService: LabelStoreService,
              private timetableService: TimetableService) {
  }

  ngOnInit() {
    this.limit = 4;
    this.labelStoreService.label = 'Search for green Transports';
  }

  searchFrom(event): void {
    this.userService.getStations().subscribe(t => {
      this.resultsFrom = t.filter(s => s.name.toLowerCase().indexOf(event.query.toLowerCase()) > -1);
    });
  }

  searchTo(event): void {
    this.userService.getStations().subscribe(t => {
      this.resultsTo = t.filter(s => s.name.toLowerCase().indexOf(event.query.toLowerCase()) > -1);
    });
  }

}
