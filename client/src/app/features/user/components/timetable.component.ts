import {Component, OnInit} from "@angular/core";
import {UserService} from "../services/user-service";
import {TimetableModel} from "../model/timetable-model";

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
  `,
  styles: []
})
export class TimetableComponent implements OnInit {

  timetable: TimetableModel;

  constructor(private userService: UserService) {
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
  }
    this.userService.getTimetable().subscribe(t => this.timetable = t);
  }

}
