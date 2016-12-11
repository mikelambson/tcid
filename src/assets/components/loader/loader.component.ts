import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'loader',
  templateUrl: './components/loader-component.html',
  styleUrls: [ './assets/css/loader.component.css' ],
  })

export class LoaderComponent  { 
    private done: boolean = false;

    constructor() {
    }

    public ngOnInit(): void {
      Observable.timer(1000).subscribe((): void => {}, 
        (error): void => console.log("An unexpected error occurred on delay."), 
        (): boolean => this.done = true);
    }
}
