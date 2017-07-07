// order.ts
import { Component } from '@angular/core';


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
	this.calc = calc() => {this.stop_time == null ? ((Date.parse(Date()) - Date.parse(this.start_time)) / 1000.0 / 60.0 / 60.0) * this.checks * 0.0825 :
	((Date.parse(this.stop_time) - Date.parse(this.start_time)) /1000.0 / 60.0 / 60.0) * this.checks * 0.0825};
	};
};



