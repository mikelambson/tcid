import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})
export class AppComponent {
  title = 'Truckee-Carson Irrigation District';
  hero = 'Scheduling System';
}
