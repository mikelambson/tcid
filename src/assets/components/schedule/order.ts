// order.ts
//This contains the fields of data to display for each order shown.
import { Pipe, PipeTransform } from '@angular/core';
import { MomentModule } from 'angular2-moment';


export class Order {
	order_no: string;
	scheduled: string;
	lateral: string;
	start_time: string;
	checks: string;
	stop_time: string;
	status: string;
	approx_cfs: string;
	approx_hrs: string;
	approx_af: string;
	calc: string;

	
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
		
	function calc() {
		let date = new Date();
		let time = date.toUTCString();
		let a = this.time().amDifference(this.start_time).hours(true);
		let b = this.stop_time().amDifference(this.start_time).hours(true);
		function calculate() {
			if (this.stop_time = undefined) { a() * this.checks() * 0.0825; return calculate; };
			else if (this.start_time = undefined) { "--"; return calculate; };
			else { b() * this.checks() * 0.0825; return calculate; };
		};
		let calc = calculate();
		return calc;
	};
	
	console.log(this.calc);
	};
};