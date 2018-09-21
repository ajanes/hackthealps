import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WeeklyView} from '../model/weekly-view';

@Component({
  selector: 'ga-user-weekly-view',
  template: `
    <amexio-d3-chart-bar
      [data]="chartData"
      [title]="'Company Performance Details'">
    </amexio-d3-chart-bar>
    
    {{model | json}}
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserWeeklyViewComponent implements OnChanges, OnInit {

  @Input()
  model: WeeklyView;

  userDefineColors: string[];

  chartData: any[];

  constructor() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.model) {
      this.chartData = [
        {
          label: 'Monday',
          value: this.model.money_saved[0]
        },
        {
          label: 'Thusday',
          value: this.model.money_saved[2]
        },
        {
          label: 'Wednesday',
          value: this.model.money_saved[3]
        },
        {
          label: 'Thursday',
          value: this.model.money_saved[4]
        },
        {
          label: 'Friday',
          value: this.model.money_saved[5]
        },
        {
          label: 'Saturday',
          value: this.model.money_saved[6]
        },
        {
          label: 'Sunday',
          value: this.model.money_saved[7]
        }
      ]
    }
  }

  ngOnInit(): void {
    this.chartData = [];
    this.userDefineColors =
      [
        '#4040a1',
        '#e06377',
        ' #7e4a35',
        '#6b5b95',
        '#feb236',
        '#d64161',
        '#ff7b25'
      ];
  }

}
