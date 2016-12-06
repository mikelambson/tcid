// root.component.ts
import {Component} from 'angular2/core';
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
export class AppComponent {

}
