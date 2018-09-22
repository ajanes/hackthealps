import { Component, OnInit } from '@angular/core';
import {LabelStoreService} from '../../../core/services/label-store.service';

@Component({
  selector: 'ga-user-chalanges-page',
  template: `
    <p>
      Not yet implemented
    </p>
      `,
  styles: []
})
export class UserChallengesPageComponent implements OnInit {

  constructor(private labelStoreService: LabelStoreService) { }

  ngOnInit() {
    this.labelStoreService.label = 'Join open Challenges';
  }

}
