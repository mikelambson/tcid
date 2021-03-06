// mock-orders.ts
import { Order } from './order'

export const ORDERS: Order[] = [ 
    {order_no: "12345",
	scheduled: "07/06/17 15:00",
	lateral: "L1-8-1-T7, L1-8-1-T6",
	start_time: "07/06/17 15:15",
	checks: 23.25,
	stop_time: "07/06/17 17:30", 
	status: "Delivered",
	approx_cfs: "25.00",
	approx_hrs: "22",
	approx_af: "45.38",
	},

    {order_no: "12346",
	scheduled: "07/6/17 11:45",
	lateral: "L1-8-1-T7, L1-8-1-T6",
	start_time: "07/06/17 17:30",
	checks: 20.25,
	stop_time:"", 
	status: "Running",
	approx_cfs: "25.00",
	approx_hrs: "10",
	approx_af: "20.63",
	},

	{order_no: "12346",
	scheduled: "08/17/17 11:45",
	lateral: "L1-8-1-T7, L1-8-1-T6",
	start_time: "",
	checks: 20.25,
	stop_time:"", 
	status: "Running",
	approx_cfs: "25.00",
	approx_hrs: "10",
	approx_af: "20.63",
	},

	{order_no: "12346",
	scheduled: "08/17/17 11:45",
	lateral: "L1-8-1-T7, L1-8-1-T6",
	start_time: "",
	checks: 20.25,
	stop_time:"", 
	status: "Running",
	approx_cfs: "25.00",
	approx_hrs: "10",
	approx_af: "20.63",
	}
];
