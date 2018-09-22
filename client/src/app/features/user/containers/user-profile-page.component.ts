import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../../../core/services/user-profile.service';
import {TourismService} from '../../../core/services/tourism.service';
import {UserProfile} from '../../../core/model/user-profile';
import {Accomodation} from '../../../core/model/accomodation';
import {Observable} from 'rxjs';
import {LabelStoreService} from '../../../core/services/label-store.service';

@Component({
  selector: 'ga-user-profile-page',
  template: `
    <h1>User</h1>
    <ga-user-profile [userProfile]="userProfile"></ga-user-profile>
    <h1>Accomodation</h1>
    <ga-accomodation-profile [accomodation]="accomodation$ | async"></ga-accomodation-profile>
  `,
  styles: []
})
export class UserProfilePageComponent implements OnInit {

  userProfile: UserProfile;
  accomodation$: Observable<Accomodation>;

  constructor(private userProfileService: UserProfileService,
              private labelStoreService: LabelStoreService,
              private tourismService: TourismService) { }

  ngOnInit() {
    this.labelStoreService.label = 'Profile';
    this.userProfile = this.userProfileService.getUserProfile();
    this.accomodation$ = this.tourismService.readHotel$(this.userProfile.accomodationId);
  }

}
