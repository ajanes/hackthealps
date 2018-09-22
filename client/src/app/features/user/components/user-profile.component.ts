import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UserProfile} from '../../../core/model/user-profile';

@Component({
  selector: 'ga-user-profile',
  template: `
    <div class="ui-g">
      <div class="ui-g-4 label">Name</div>
      <div class="ui-g-8 value">{{userProfile.name}}</div>

      <div class="ui-g-4 label">Login</div>
      <div class="ui-g-8 value">{{userProfile.login}}</div>

      <div class="ui-g-4 label">Email</div>
      <div class="ui-g-8 value">{{userProfile.email}}</div>

      <div class="ui-g-4 label">Arrival</div>
      <div class="ui-g-8 value">{{userProfile.arrival}}</div>

      <div class="ui-g-4 label">Departure</div>
      <div class="ui-g-8 value">{{userProfile.departure}}</div>

    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {

  @Input()
  userProfile: UserProfile;

  constructor() { }

  ngOnInit() {
  }

}
