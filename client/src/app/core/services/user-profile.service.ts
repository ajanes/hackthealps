import {Injectable} from '@angular/core';
import {UserProfile} from '../model/user-profile';
import {UserSetting} from '../model/user-setting';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserProfileService {

  private profile: UserProfile;
  private settings: UserSetting;

  constructor() {
    this.profile = {
      name: 'Gigi Buffon',
      login: 'gbuffon',
      email: 'gigi.buffon@idm.bz.it',
      arrival: '01.09.2018',
      departure: '09.09.2018',
      accomodationId: 'A2E20883C4B211D19C5D006097AF193B'
    };
    this.settings = {
      co2Threshold: 50,
      savingsThreshold: 50,
      shareAchievements: true,
      useTimeForParking: true
    };
  }


  getUserProfile() {
    return this.profile;
  }

  getUserSetting() {
    return this.settings;
  }

}
