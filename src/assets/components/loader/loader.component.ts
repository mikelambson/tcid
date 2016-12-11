import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';

@Component({
  selector: 'loader',
  templateUrl: './components/loader.html',
  styleUrls: [ './assets/css/loader.component.css' ],
  })

export class LoaderComponent implements OnInit { 
    private done: boolean = false;
    private subscription: Subscription;

    constructor() {
    }

    public ngOnInit(): void {
      this.subscription = Observable.timer(1000).subscribe((): void => {}, 
        (error): void => console.log("An unexpected error occurred on delay."), 
        (): boolean => this.done = true);
    }

    public ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
