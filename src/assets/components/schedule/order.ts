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
	transform(calc: string) {
		let a = new Date().amDifference(start_time);
		let b = new stop_time().amDifference(start_time);
		calc = !stop_time ? a * checks * 0.0825 : b * checks * 0.0825;
		return calc;
		};
	
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
	//this.calc = af();
	//Calculate the order's acre footage from the stop time, or to current time if order is still running.
	console.log(this.calc);
	
	};

};
