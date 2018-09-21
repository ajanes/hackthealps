import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WeeklyView} from '../model/weekly-view';

@Component({
  selector: 'ga-user-weekly-view',
  template: `
    <p-chart type="bar" [data]="chartData"></p-chart>

  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserWeeklyViewComponent implements OnChanges, OnInit {

  @Input()
  model: WeeklyView;

  chartData: any;

  constructor() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.model) {
      this.chartData = {
        labels: ['Mo', 'Th', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: this.model.money_saved
          }
        ]
      };
    }
  }

  ngOnInit(): void {
  }

}
