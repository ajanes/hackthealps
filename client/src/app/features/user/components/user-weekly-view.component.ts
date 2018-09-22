import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WeeklyView} from '../model/weekly-view';

@Component({
  selector: 'ga-user-weekly-view',
  template: `
    <div class="ui-g">
      <div class="ui-g-12">
      <p-chart type="bar" [data]="chartData"></p-chart>
      </div>
      <div class="ui-g-12">
        <ga-score-view [avg]="this.avarage" [currentValue]="currentValue"></ga-score-view>
      </div>
      <ul>
        <li>
        Your daily Avarage is <span [class]="'bad'">{{(currentValue - avarage) | number : '1.1-1'}} g/km </span>
        <span *ngIf="currentValue > avarage">above</span> the avarage of Bruneck 
        </li>
        <li>
          With reducing you dail car use by <span [class]="'good'">15 km</span> you can gain 10 position in the weekly Bruneck ranking
        </li>
      </ul>
      <div class="ui-g-12 center">
        <button pButton label="Suggestions for Tomorrow"></button>
      </div>
      
    </div>
  `,
  styles: [
    '.bad {font-size: larger; color: #bf0000}',
    '.good {font-size: larger; color: #46bd31}',
    '.center {text-align: center}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserWeeklyViewComponent implements OnChanges, OnInit {

  @Input()
  model: WeeklyView;

  chartData: any;

  avarage: number;
  currentValue: number;

  constructor() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.model) {
      this.chartData = {
        labels: ['Mo', 'Th', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [
          {
            label: 'My Footprint',
            backgroundColor: '#6bf54d',
            borderColor: '#55f535',
            data: this.model.co2
          },
          {
            label: 'The next best',
            backgroundColor: '#46bd31',
            borderColor: '#39bd26',
            data: this.model.competitors[0].co2
          }

        ]
      };

      this.avarage = 25;
      this.currentValue = this.model.co2.reduce((a, b) => a + b, 0) / 7;
    }
  }

  ngOnInit(): void {
  }

}
