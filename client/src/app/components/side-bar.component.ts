import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ga-side-bar',
  template: `
    <p-sidebar [(visible)]="visible" [baseZIndex]="10000">
      <div>
        <ul class="menu">
          <li>
            <a [routerLink]="'/user/' +userId + '/dashboard'" (click)="close()">Dashboard</a>
          </li>
          <li>
            <a [routerLink]="'/user/' +userId + '/challenges'" (click)="close()">Challenges</a>
          </li>
          <li>
            <a [routerLink]="'/user/' +userId + '/accomodation'" (click)="close()">Accomodation</a>
          </li>
          <li>
            <a [routerLink]="'/user/' +userId + '/timetable'" (click)="close()">Timetable</a>
          </li>
          <li>
            <a [routerLink]="'/user/' +userId + '/profile'" (click)="close()">Profile</a>
          </li>
          <li>
            <a [routerLink]="'/user/' +userId + '/settings'" (click)="close()">Settings</a>
          </li>
        </ul>
        
      </div>
    </p-sidebar>
  `,
  styles: [
    'ul {padding: 0px}',
    '.ui-sidbar .ui-g-12 {padding: 0px}',
    '.menu li {background-color: #ededed; border-bottom: #dedede solid 1px; width: 100%; height: 2em; font-size: 1.5em; vertical-align: middle; padding-top: 0.4em; padding-left: 1em}',
    'li a {color: #7c7c7c; text-decoration: none}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit {

  @Input()
  visible: boolean;

  @Input()
  userId: string;

  @Output()
  visibleChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

}
