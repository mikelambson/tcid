// root.component.ts
import {Component} from 'angular/core';
import {RouteConfig} from 'angular/router';

import {Home} from './home/home.component.ts';
import {Login} from './login/login.component.ts';
import {Schedule} from './shedule/schedule.component.ts';


@Component({
  selector: 'my-app',
  template: `
    <div class="app">
      Hello world! 
      <p>Root Component Here</p>
      <nav>
        <ul>
          <li>
            <a [routerLink]=" ['Home'] ">Home</a>
          </li>
          <li>
            <a [routerLink]=" ['Login'] ">Login</a>
          </li>
          <li>
            <a [routerLink=" ['Schedule'] ">Schedule</a>
        </ul>
      </nav>
      <main>
        <router-outlet></router-outlet>
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
