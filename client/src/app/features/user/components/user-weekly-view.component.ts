import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {WeeklyView} from '../model/weekly-view';

@Component({
  selector: 'ga-user-weekly-view',
  template: `
    <p>
      user-weekly-view works!
    </p>

    {{model | json}}
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserWeeklyViewComponent implements OnInit {

  @Input()
  model: WeeklyView;

  constructor() {
  }

  ngOnInit() {
  }

}
