import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{subtitle}}</h2><hr />'
})
export class AppComponent {
  title = 'Truckee-Carson Irrigation District';
  subtitle = 'Scheduling System';
}
