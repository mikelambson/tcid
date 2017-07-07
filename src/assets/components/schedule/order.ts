// order.ts
import { Component, OnInit } from '@angular/core';

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
	calc: number;

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
	this.calc = (!this.stop_time ? ((new Date().getTime() - new Date(this.start_time).getTime()) / 1000.0 / 60.0 / 60.0) * this.checks * 0.0825 : ((new Date(this.stop_time).getTime() - new Date(this.start_time).getTime()) /1000.0 / 60.0 / 60.0) * this.checks * 0.0825); 
	};

};


	




