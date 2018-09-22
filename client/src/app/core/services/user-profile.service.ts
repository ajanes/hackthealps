import {Injectable} from '@angular/core';
import {UserProfile} from '../model/user-profile';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserProfileService {

  private profile: UserProfile;

  constructor() {
    this.profile = {
      name: 'Gigi Buffon',
      login: 'gbuffon',
      email: 'gigi.buffon@idm.bz.it',
      arrival: '01.09.2018',
      departure: '09.09.2018',
      accomodationId: 'A2E20883C4B211D19C5D006097AF193B'
    };
  }


  getUserProfile() {
    return this.profile;
  }

}
