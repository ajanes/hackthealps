import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AmexioChartsModule, AmexioWidgetModule} from "amexio-ng-extensions";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AmexioWidgetModule,
    AmexioChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
