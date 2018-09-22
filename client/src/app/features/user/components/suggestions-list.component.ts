import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TsActivity} from '../model/ts-activity';

@Component({
  selector: 'ga-suggestions-list',
  template: `
    <div class="ui-g">
      <p-accordion>
        <p-accordionTab *ngFor="let act of activities" [header]="act.Shortname">
          <div>
            <div class="getthere" [innerHtml]="act.Detail.de.GetThereText">
            </div>
            <div class="additional" [innerHtml]="act.Detail.de.AdditionalText">
            </div>
          </div>
          <div>
            <img [src]="act.ImageGallery[0].ImageUrl" class="img">
          </div>
        </p-accordionTab>
      </p-accordion>

    </div>
  `,
  styles: [
    '.getthere {text-wrap: normal; max-width: 300px}',
    '.additional {text-wrap: normal; max-width: 300px}',
    '.img {width: 300px}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuggestionsListComponent implements OnInit {

  @Input()
  activities: TsActivity[];

  constructor() {
  }

  ngOnInit() {
  }

}
