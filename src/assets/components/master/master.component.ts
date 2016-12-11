//master.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'tcid',
  templateUrl: './components/master-component.html',
  styleUrls: [ './assets/css/master.component.css' ],
  })

export class MasterComponent  { 
	private name: string = 'Master'; 
	private clientHeight: number;
	
    constructor() {
    	this.clientHeight = window.innerHeight;
    }
}
