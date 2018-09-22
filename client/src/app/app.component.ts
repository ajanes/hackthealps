import { Component } from '@angular/core';

@Component({
  selector: 'ga-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <p-toolbar class="top-toolbar">Green South-Tirol</p-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    '.top-toolbar {font-size: 2em; background-color: darkblue !important; margin-bottom: 10px}'
  ]
})
export class AppComponent {
  title = 'ga';
}
