import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { ExerciseThreeComponent } from './exercise-three/exercise-three.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise2Component,
    ExerciseThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
