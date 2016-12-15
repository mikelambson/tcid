import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LoaderComponent} from '../loader/loader.component';
import { MasterComponent }  from './master.component';
import { Error404Component }  from '../error/404';
import { ROUTING, routingProviders }  from './routes';

import { HeaderComponent }	from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeModule } from '../home/home.module';

import { ScheduleModule } from '../schedule/schedule.module';

@NgModule({
  imports: [ BrowserModule, ROUTING, HomeModule, ScheduleModule, ],
  declarations: [
    LoaderComponent,
    MasterComponent, 
    HeaderComponent,
    FooterComponent, 
    Error404Component
  ],
  bootstrap: [ MasterComponent, routingProviders ],
})
export class MasterModule { }
