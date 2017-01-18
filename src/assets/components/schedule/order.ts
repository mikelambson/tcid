// order.ts



export class Order {
	order_no: string;
	scheduled: string;
	lateral: string;
	start_time: any;
	checks: any;
	stop_time: any;
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
	this.calc = number;
	};
}

function number(){
	 let number = stop_time == null ? (DATEDIFF(minute, start_time, Date()) / 60.0) * checks * 0.0825 : (DATEDIFF(minute, start_time, stop_time) / 60.0) * checks * 0.0825;
}	

