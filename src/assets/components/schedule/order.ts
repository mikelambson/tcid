// order.ts
//This contains the fields of data to display for each order shown.
import { Pipe, PipeTransform } from '@angular/core';
import { MomentModule } from 'angular2-moment';


export class Order {
	order_no: string;
	scheduled: string;
	lateral: string;
	start_time: string;
	checks: number;
	stop_time: string;
	status: string;
	approx_cfs: string;
	approx_hrs: string;
	approx_af: string;
	calc: any;

	
	constructor(data: {} = {}) {
		this.order_no = data["order_no"] || "";
		this.scheduled = data["scheduled"] || "";
		this.lateral = data["lateral"] || "";
		this.start_time = data["start_time"] || "";
		this.checks = data["checks"] || "";
		this.stop_time = data["stop_time"] || "";
		this.status = data["status"] || "";
		this.approx_cfs = data["approx_cfs"] || "";
		this.approx_hrs = data["approx_hrs"] || "";
		this.approx_af = data["approx_af"] || "";
		//Calculate the order's acre footage from the stop time, or to current time if order is still running.
		console.log(this.calc);
	};
	
	scope.getDate = function() {
	return (new Date).toLocaleFormat("%A, %B %e, %Y");
	};
	
	transform(calc: string) {
	var calc = calc();	
	var a = this.getDate().amDifference(this.start_time).hours(true);
	var b = this.stop_time().amDifference(this.start_time).hours(true);
		calc() {
			if (this.stop_time = 0) { calc = a() * this.checks() * 0.0825; };
			else if (this.start_time = 0) { calc = "--"; };
			else { calc = b() * this.checks() * 0.0825;	};
			return calc;
		};
	};
	
};