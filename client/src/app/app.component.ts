import {Component, OnInit} from '@angular/core';
import {UserProfile} from './core/model/user-profile';
import {UserProfileService} from './core/services/user-profile.service';
import {ActivatedRoute} from '@angular/router';
import {LabelStoreService} from './core/services/label-store.service';
import {Label} from './core/model/label';

@Component({
  selector: 'ga-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="top-container">
      <p-toolbar>
        <div class="top-toolbar">
          <div class="ui-g-2 left">
            <button pButton (click)="toggleSidebar()" icon="pi pi-bars"></button>
          </div>
          <div class="ui-g-10 title">{{label?.text}}</div>
        </div>
      </p-toolbar>
    </div>
    <ga-side-bar [(visible)]="sidebarVisible" [userId]="userProfile.login"></ga-side-bar>
    <div class="ui-g">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    '.top-container {position: -webkit-sticky; position: sticky; top: 0; z-index: 5000}',
    '.top-toolbar {font-size: 1.5em; background-color: darkblue !important; margin-bottom: 10px; padding: 0px !important; }',
    '.top-toolbar button {font-size: 0.5em}',
    '.toolbar .title {text-align: center}'
  ]
})
export class AppComponent implements OnInit {

  sidebarVisible: boolean;

  userProfile: UserProfile;

  label: Label;

  constructor(private userProfileService: UserProfileService,
              private labelStoreService: LabelStoreService) {

  }

  ngOnInit(): void {
    this.sidebarVisible = false;
    this.userProfile = this.userProfileService.getUserProfile();
    this.label = this.labelStoreService.getLabel();
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
