import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tcid',
  templateUrl: './components/master.html',
  styleUrls: [ './assets/css/master.component.css' ],
  })

export class MasterComponent implements OnInit { 
    public base: HTMLBaseElement;

    constructor() {
    }

    public ngOnInit(): void {
        this.base = document.head.getElementsByTagName("base")[0];
        this.base.href = document.location.pathname;
    }
}
