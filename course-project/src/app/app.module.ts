import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { WarnMessageComponent } from './messages/warn/warn-message.component';
import { SuccMessageComponent } from './messages/succ/succ-message.component';
import { DataBindingsComponent } from './DataBindidngs/databindings.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    WarnMessageComponent,
    SuccMessageComponent,
    DataBindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {






















}
