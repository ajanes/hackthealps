import {Component, OnInit} from '@angular/core';
import {TourismService} from '../../../core/services/tourism.service';
import {SuggestionSetting} from '../model/suggestion-setting';
import {UserProfileService} from '../../../core/services/user-profile.service';
import {Accomodation} from '../../../core/model/accomodation';
import {Observable} from 'rxjs';
import {TsActivity} from '../model/ts-activity';

@Component({
  selector: 'ga-suggestions-page',
  template: `
    <ga-suggestions-setup [setting]="setting" (search)="search($event)"></ga-suggestions-setup>
    <ga-suggestions-list [activities]="activities$ | async"></ga-suggestions-list>
  `,
  styles: []
})
export class SuggestionsPageComponent implements OnInit {

  private doSetup: boolean;

  setting: SuggestionSetting;

  accomodation: Accomodation;

  activities$: Observable<TsActivity[]>

  constructor(private tourismService: TourismService,
              private userService: UserProfileService) {
  }

  ngOnInit() {
    this.doSetup = true;
    this.setting = {
      activityType: 1,
      difficulty: 1,
      maxDistance: 10
    };
    this.tourismService.readHotel$(this.userService.getUserProfile().accomodationId)
      .subscribe(acc => this.accomodation = acc);

  }

  search(setting: SuggestionSetting) {
    this.setting = setting;
    this.activities$ = this.tourismService.findActivities(setting, this.accomodation.LocationInfo.RegionInfo.Id);
  }


}
