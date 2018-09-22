import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ga-side-bar',
  template: `
    <p-sidebar [(visible)]="visible" [baseZIndex]="10000">
      <div class="ui-g-12">
        <ul>
          <li>
            <a routerLink="/user/123/dashboard" (click)="close()">Dashboard</a>
          </li>
          <li>
            <a routerLink="/user/123/challenges" (click)="close()">Challenges</a>
          </li>
          <li>
            <a routerLink="/user/123/accomodation" (click)="close()">Accomodation</a>
          </li>
          <li>
            <a routerLink="/user/123/timetable" (click)="close()">Timetable</a>
          </li>
          <li>
            <a routerLink="/user/123/profile" (click)="close()">Profile</a>
          </li>
        </ul>
        
      </div>
    </p-sidebar>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit {

  @Input()
  visible: boolean;

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
