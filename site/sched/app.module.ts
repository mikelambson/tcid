import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { RootComponent }         from './root.component';
import { HeaderComponent}        from './header.component';
//import { MainComponent }       from './main.component';
//import { FooterComponent }     from './footer.component';
//import { DataService }         from './data.service';

//import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    RootComponent,
    HeaderComponent//,
    //MainComponent,
    //FooterComponent
  ],
  //providers: [ DataService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }


