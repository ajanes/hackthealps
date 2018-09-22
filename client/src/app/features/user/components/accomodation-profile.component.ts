import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Accomodation} from '../../../core/model/accomodation';

@Component({
  selector: 'ga-accomodation-profile',
  template: `
    <div class="ui-g">
      <div class="ui-g-4 label">Name</div>
      <div class="ui-g-8 value">{{accomodation?.Shortname}}</div>
      <div class="ui-g-12">
        <img [src]="accomodation?.ImageGallery[0].ImageUrl" class="img">
      </div>
    </div>
  `,
  styles: [
    '.img {width: 100%}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccomodationProfileComponent implements OnInit {

  @Input()
  accomodation: Accomodation;

  constructor() { }

  ngOnInit() {
  }

}
