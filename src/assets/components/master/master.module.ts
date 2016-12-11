import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MasterComponent }  from './master.component';
import { ROUTING, routingProviders }  from './routes';
import { HeaderComponent }	from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [ BrowserModule, ROUTING, HomeModule ],
  declarations: [
    MasterComponent, 
    HeaderComponent,
    FooterComponent 
  ],
  bootstrap: [ MasterComponent, routingProviders ],
})
export class MasterModule { }
