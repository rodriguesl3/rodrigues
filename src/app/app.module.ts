import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule, MatCheckboxModule,
  MatCardModule, MatIconModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatStepperModule
} from '@angular/material';

import { CountUpModule } from 'countup.js-angular2';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HistoryComponent } from './history/history.component';
import { MainServiceService } from './main/service/main-service.service';
import { IntroductionComponent } from './introduction/introduction.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HistoryComponent,
    IntroductionComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatStepperModule,
    CountUpModule
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
