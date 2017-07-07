// mock-orders.ts
import { Order } from ./order

export const ORDERS: Order[] = [ 
    {order_no: 12345,
	scheduled: 08/16/16 13:45,
	lateral: 'L1-8-1-T7, L1-8-1-T6',
	start_time: 08/16/16 15:45,
	checks: 23.25,
	stop_time: 08/17/16 15:30, 
	status: Delivered,
	approx_cfs: 25.00,
	approx_hrs: 22,
	approx_af: 45.38,
	},

    {order_no: 12346,
	scheduled: 08/17/16 11:45,
	lateral: 'L1-8-1-T7, L1-8-1-T6',
	start_time: 08/17/16 15:30,
	checks: 20,
	stop_time: , 
	status: Running,
	approx_cfs: 25.00,
	approx_hrs: 10,
	approx_af: 20.63,
	},

	{order_no: 12346,
	scheduled: 08/17/16 11:45,
	lateral: 'L1-8-1-T7, L1-8-1-T6',
	start_time: 08/17/16 15:30,
	checks: 20,
	stop_time: , 
	status: Running,
	approx_cfs: 25.00,
	approx_hrs: 10,
	approx_af: 20.63,
	},

	{order_no: 12346,
	scheduled: 08/17/16 11:45,
	lateral: 'L1-8-1-T7, L1-8-1-T6',
	start_time: 08/17/16 15:30,
	checks: 20,
	stop_time: , 
	status: Running,
	approx_cfs: 25.00,
	approx_hrs: 10,
	approx_af: 20.63,
	}
];
