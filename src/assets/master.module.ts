//master.module.ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MasterComponent }  from './master.component';
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ MasterComponent ],
  bootstrap: [ MasterComponent ]
})
export class MasterModule { }