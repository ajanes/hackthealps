import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {UserService} from "../services/user-service";
import {TimetableModel} from "../model/timetable-model";
import {TimetableService} from "../../../core/services/timetable.service";
import {StationModel} from "../model/station.model";

@Component({
  selector: "ga-timetable",
  template: `
    <p-card class="gray">
      <div class="head-timetable">
        <div>From: {{timetable.from}}</div>
        <div>To: {{timetable.to}}</div>
        <div>Date: {{timetable.date}}</div>
      </div>
    </p-card>
    <p-card title="{{con.start}} > {{con.end}}" *ngFor="let con of timetable.connections" [ngClass]="con.color">
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
      </div>
    </p-card>
    <div class="ui-g ui-fluid" >
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

  @Output() displayChange: EventEmitter<boolean> = new EventEmitter();

  timetable: TimetableModel;


  constructor(private userService: UserService,
              private timetableService: TimetableService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.from && this.to && this.dateTime) {
      let url = "http://stationboard.opensasa.info/?type=json&LINES=20";
      url += "&ORT_NR=" + this.from.key;
      this.timetableService.getTimetable(url).subscribe(t => this.timetable.from = t.stationname);
    }

  }

  ngOnInit() {
    this.timetable = {
      from: undefined,
      to: undefined,
      date: undefined,
      connections: [
        {
          start: undefined,
          end: undefined,
          duration: undefined,
          transfers: 0,
          money_saved: 0,
          co2_saved: 0,
          transportation_means: [],
          color: undefined,
        }]
    };
    this.userService.getTimetable().subscribe(t => this.timetable = t);
  }




}
