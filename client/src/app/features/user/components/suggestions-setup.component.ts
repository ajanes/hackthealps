import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SuggestionSetting} from '../model/suggestion-setting';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'ga-suggestions-setup',
  template: `
    <div class="ui-g">
      <div class="ui-g-6 label">Type</div>
      <div class="ui-g-6">
        <p-dropdown
          [options]="activityTypes"
          [(ngModel)]="setting.activityType"
          [style]="{'width':'150px'}"
          placeholder="Select Type">
        </p-dropdown>
      </div>
      <div class="ui-g-6 label">Difficulty</div>
      <div class="ui-g-6">
        <p-dropdown
          [options]="difficulties"
          [(ngModel)]="setting.difficulty"
          [style]="{'width':'150px'}"
          placeholder="Select Difficulty">
        </p-dropdown>
      </div>
      <div class="ui-g-6 label">Max Distance</div>
      <div class="ui-g-6">
        <p-slider [(ngModel)]="setting.maxDistance" [style]="{'width':'150px'}"></p-slider>
        {{setting.maxDistance}} km
      </div>
      <div class="ui-g-12 button-tab">
        <div class="ui-g-4 ui-g-offset-2">
          <button pButton label="Back" icon="pi pi-chevron-left" routerLink="../dashboard"></button>
        </div>
        <div class="ui-g-4">
          <button pButton label="Search" icon="pi pi-search" (click)="doSearch()"></button>
        </div>
      </div>
    </div>
  `,
  styles: [
    '.label {padding-top: 1em}',
    '.button-tab {text-align: center}',
    '.spacer {width: 0.2em;}'
  ]
})
export class SuggestionsSetupComponent implements OnInit {

  activityTypes: SelectItem[] = [
    {value: 1, label: 'Berg'},
    {value: 2, label: 'Radfahren'},
    {value: 16, label: 'Wandern'}
  ];

  difficulties: SelectItem[] = [
    {value: 1, label: 'easy'},
    {value: 2, label: 'medium'},
    {value: 3, label: 'difficult'},
  ];

  @Input()
  setting: SuggestionSetting;

  @Output()
  search = new EventEmitter<SuggestionSetting>();


  constructor() {
  }

  ngOnInit() {
  }

  doSearch() {
    this.search.emit(this.setting);
  }

}
