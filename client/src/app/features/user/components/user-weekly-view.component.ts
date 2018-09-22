import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WeeklyView} from '../model/weekly-view';

@Component({
  selector: 'ga-user-weekly-view',
  template: `
    <div class="ui-g">
      <div class="ui-g-12">
        <p-chart type="bar" [data]="chartData" [responsive]="true"></p-chart>
      </div>
      <div class="ui-g-12">
        <ga-score-view [avg]="this.avarage" [currentValue]="currentValue"></ga-score-view>
      </div>
      <div class="ui-g-12">
        <ul>
          <li>
            <div>Your daily Avarage is </div>
            <div [class]="currentValue > avarage ? 'bad' : 'good'">{{(currentValue - avarage) | number : '1.1-1'}} g/km </div>
            <div *ngIf="currentValue > avarage">above</div>
            <div *ngIf="currentValue < avarage">below</div>
            <div>the avarage of Bruneck</div>
          </li>
          <li>
            <div>With reducing you daily car usage by </div>
            <div [class]="'good'">15 km</div> 
            <div>you can gain 10 position in the weekly Bruneck ranking</div>
          </li>
        </ul>
      </div>
      <div class="ui-g-12 center">
        <button pButton label="Suggestions for Tomorrow" routerLink="../suggestions"></button>
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
            label: 'Your Performance',
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

      this.avarage = 32;
      this.currentValue = this.model.co2.reduce((a, b) => a + b, 0) / 7;
    }
  }

  ngOnInit(): void {
  }

}
