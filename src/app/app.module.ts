/** Root module **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment.component';
import { NotificationBadgeComponent } from './notification-badge.component';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:8186', options: {} };

/**
 * NgModule is a contains components and services
 * 
 * declarations - an array of view classes that belong to this module
 * imports - an array of other modules that have exported certain parts of their functionality for us to use
 * bootstrap - root component that hosts all other app views
 */
@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    NotificationBadgeComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent, NotificationBadgeComponent]
})
export class AppModule { }
