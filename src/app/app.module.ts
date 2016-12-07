import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import { FormsModule }    from '@angular/forms';

import { AppComponent }          from './app.component';
import { HomeComponent }          from './home.component';
import { LoginComponent }         from './login.component';
import { ScheduleComponent }      from './schedule.component';

//import { HeaderComponent}         from './header.component';
//import { MainComponent }          from './main.component';
//import { FooterComponent }        from './footer.component';
//import { DataService }            from './data.service';

import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ScheduleComponent
    //HeaderComponent,
    //MainComponent,
    //FooterComponent
  ],
  //providers: [ DataService ],
  bootstrap: [ AppComponent,
             ROUTER_PROVIDERS
]})

export class AppModule { }


