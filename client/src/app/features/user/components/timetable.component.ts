import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UserService} from '../services/user-service';
import {TimetableModel} from '../model/timetable-model';
import {TimetableService} from '../../../core/services/timetable.service';
import {StationModel} from '../model/station.model';
import {ConnectionsModel} from '../model/connections.model';

@Component({
  selector: 'ga-timetable',
  template: `
    <p-card class="gray">
      <div class="head-timetable">
        <div>From: {{timetable?.from}}</div>
        <div>To: {{timetable?.to}}</div>
        <div>Date: {{timetable?.date}}</div>
      </div>
    </p-card>
    <p-card title="{{con.start}} > {{con.end}}" *ngFor="let con of timetable?.connections" [ngClass]="con.color">
      <div class="ui-g">
        <div class="ui-lg-2 ui-sm-6">Duration: {{con.duration}}</div>
        <div class="ui-lg-2 ui-lg-offset-8 ui-sm-6 right">{{con.money_saved}}
          <span class="material-icons">euro_symbol</span>
        </div>
        <div class="ui-lg-2 ui-sm-6">Transfers: {{con.transfers}}</div>
        <div class="ui-lg-2 ui-lg-offset-8 ui-sm-6 right">{{con.co2_saved}} kg CO²
          <span class="material-icons">nature_people</span>
        </div>
        <div class="ui-lg-2 ui-lg-offset-10 ui-sm-offset-6 ui-sm-6 right">
          <span class="material-icons" *ngFor="let t of con.transportation_means">{{t}}</span>
        </div>
        <div class="ui-lg-2 ui-sm-6">Delay: {{con.delay_min}}</div>
      </div>
    </p-card>
    <div class="ui-g ui-fluid">
      <div class="ui-g-12 ui-md-4 btn">
        <p-button (onClick)="displayChange.emit(false)" label="Back"></p-button>
      </div>
    </div>
  `,
  styles: ['.btn {text-align: center; padding: 2em}']
})
export class TimetableComponent implements OnInit, OnChanges {

  @Input()
  private from: StationModel;

  @Input()
  private to: StationModel;

  @Input()
  private dateTime: any;

  @Input() display: boolean;

  @Input() limit: number;

  @Output() displayChange: EventEmitter<boolean> = new EventEmitter();

  timetable: TimetableModel;

  constructor(private userService: UserService,
              private timetableService: TimetableService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.from && this.to && this.dateTime) {
      const url = 'http://stationboard.opensasa.info/?type=json&LINES=999&ORT_NR=' + this.from.key;
      this.timetableService.getTimetable(url).subscribe(tableResponse => {
        if (tableResponse.rides.length > 0) {
          this.timetable = {
            from: this.from.name + ' ' + tableResponse.stationname,
            to: this.to.name + ' ' + tableResponse.rides[0].last_station,
            date: this.dateTime.toDateString(),
            connections: this.getConnections(tableResponse)
          };
        }
      });
    }
  }

  private getConnections(tableResponse): ConnectionsModel[] {
    const userTime = Number(this.dateTime.getHours()) * 100 + Number(this.dateTime.getMinutes());
    return tableResponse.rides
      .filter(r => {
        const split = r.arrival.split(':');
        const uRrideTime = Number(split[0]) * 100 + Number(split[1]);
        return userTime < uRrideTime;
      })
      .slice(0, this.limit)
      .map((r, i) => {
        const money = Math.floor(Math.random() * (10)) - 5;
        const co2 = Math.floor(Math.random() * (15 - 5 + 1)) - 5;
        const duration = Math.floor(Math.random() * 45) + 1;
        const endSpl = r.departure.split(':');
        let endHour = Number(endSpl[0]);
        const endMins = Number(endSpl[1]) + duration;
        let endMinsStr = endMins.toString();
        if (endMins > 60) {
          endMinsStr = (endMins < 70 ? '0' : '') + (endMins % 60);
          endHour++;
        }
        const ride: ConnectionsModel = {
          start: r.departure,
          end: endHour + ':' + endMinsStr,
          duration: duration.toString(),
          transfers: 0,
          money_saved: money,
          co2_saved: co2,
          delay_min: (r.delay_min > 0 ? r.delay_min : '0') + ' min',
          transportation_means: [(money > 0 ? 'directions_car' : (money > -2 && money <= 0) ? 'directions_bus' : 'train')],
          color: (money > 0 ? 'red' : (money > -4 && money <= 0) ? 'yellow' : 'green'),
        };
        return ride;
      });
  }

  ngOnInit() {
    // this.userService.getTimetable().subscribe(t => this.timetable = t);
  }


}
