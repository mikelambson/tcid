import { Component } from '@angular/core';

@Component({
  moduleId: module.id, export class AppComponent {
  selector: 'my-app', title = 'Tour of Heroes ~ Done by Mike';
  template: `}
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes ~ Mike did it!';
}
