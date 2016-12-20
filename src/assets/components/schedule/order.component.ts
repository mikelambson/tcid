import { Component } from '@angular/core';

@Component({
  selector: 'olist',
  templateUrl: './components/order.html',
  styleUrls: [ './assets/css/order.component.css' ],
  })



export class OrderComponent  { 
	scheduled: string = "08/16/16 13:42";
	lateral: string = "L1-8-1-T7, L1-8-1-T6";
  	start_time: string = "08/16/16 15:45";
  	checks: string = "23.25 CFS Average";
  	stop_time: string = "08/17/16 15:30";
  	status: string = "Delivered";
  	order_no: string = "12345";
  	approx_cfs: string = "25.00";
  	approx_hrs: string = "22";
  	approx_af: string = "45.38";
  	calc: string = "45.56";
	
  	constructor(){ 
  	}
} 
