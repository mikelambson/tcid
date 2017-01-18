// order.ts


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
	//this.calc = let result: number = stop_time == null ? (DATEDIFF(minute, start_time, Date()) / 60.0) * cfs * 0.0825 : (DATEDIFF(minute, start_time, stop_time) / 60.0) * cfs * 0.0825;
	};
	
}
