import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-user-daily-view',
  template: `
    
  `,
  styles: []
})
export class UserDailyViewComponent implements OnInit {

  areaChartData: any[];

  constructor() { }

  ngOnInit() {
    this.areaChartData = [
      ['Year', 'Sales', 'Expenses'],
      ['2013',  1000,      400],
      ['2014',  1170,      460],
      ['2015',  660,       1120],
      ['2016',  1030,      540]
    ];
  }

}
