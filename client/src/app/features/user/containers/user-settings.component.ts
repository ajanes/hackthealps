import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../../../core/services/user-profile.service';
import {UserSetting} from '../../../core/model/user-setting';

@Component({
  selector: 'ga-user-settings',
  template: `
    <div class="ui-g container">
      <div class="ui-g-12 label">
        Inform me when I saved {{setting.savingsThreshold}}€
      </div>
      <div class="ui-g-12 value">
        <p-slider [(ngModel)]="setting.savingsThreshold" [style]="{'width':'20em'}"></p-slider>
      </div>
      <div class="ui-g-12 label">
        Inform me when I saved {{setting.co2Threshold}} [m^2] CO2
      </div>
      <div class="ui-g-12 value">
        <p-slider [(ngModel)]="setting.co2Threshold" [style]="{'width':'20em'}"></p-slider>
      </div>
      <div class="ui-g-12 value">
        Consider time for look for parking <p-checkbox [(ngModel)]="setting.useTimeForParking" [binary]="true"></p-checkbox>
      </div>
      <div class="ui-g-12 value">
        Share my achievements <p-checkbox [(ngModel)]="setting.shareAchievements" [binary]="true"></p-checkbox>
      </div>
      <div class="ui-g-12 button-tab">
        <button pButton label="Save" icon="pi pi-save" routerLink="dashboard"></button>
      </div>
    </div>
  `,
  styles: [
    '.container {padding: 0px;}',
    '.value {padding-left: 1em; padding-bottom: 1em; border-bottom: darkgrey solid 1px}',
    '.label {padding-left: 1em;}',
    '.button-tab {text-align: center}'
  ]
})
export class UserSettingsComponent implements OnInit {

  setting: UserSetting;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.setting = this.userProfileService.getUserSetting();
  }

}
