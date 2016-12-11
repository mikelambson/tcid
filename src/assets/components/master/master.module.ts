//master.module.ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MasterComponent }  from './master.component';
import { HeaderComponent }	from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    MasterComponent, 
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [ MasterComponent ],
})
export class MasterModule { }
