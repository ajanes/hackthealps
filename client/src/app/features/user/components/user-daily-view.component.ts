import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ga-user-daily-view',
  template: `
    <div class="ui-g daily-view">
      <div class="ui-g-12">
        <p-chart type="doughnut" height="40vh" [data]="model?.data" [options]="model?.options" [responsive]="true"></p-chart>
      </div>
      <div class="ui-g-12">
        <p-card title="Ranking" class="gray">
          <div>
            You are on the 34th place in you city!
          </div>
          <p-footer>
            Rankings are calculated based on CO² consumption.
          </p-footer>
        </p-card>
      </div>
      <div class="ui-g-12">
        <p-card>
          Find out how to save more CO² and €
        </p-card>
      </div>
    </div>
  `,
  styles: []
})
export class UserDailyViewComponent implements OnInit, OnChanges {


  @Input()
  model: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
