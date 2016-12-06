// root.component.ts
import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {Home} from './home/home.component.ts';
import {Login} from './login/login.component.ts';
import {Schedule} from './shedule/schedule.component.ts';


@Component({
  selector: 'my-app',
  template: `
    <div class="app">
      Hello world! 
      <p>Root Component Here</p>
      <main>
        <!-- stuff -->
      </main>
    </div>
  `
})

@RouteConfig([
  { path: '/', name: 'Home', component: Home, useAsDefault: true },
  { path: '/login', name: 'Login', component: Login },
  { path: '/schedule', name: 'Schedule', component: Schedule },
])

export class AppComponent {

}
