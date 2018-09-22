import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule, SidebarModule, ToolbarModule} from 'primeng/primeng';
import { SideBarComponent } from './components/side-bar.component';
import {BootstrapService} from './core/services/bootstrap-service';
import {onAppInit} from './app.init';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    SidebarModule,
    ButtonModule

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true,
      deps: [BootstrapService]
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
