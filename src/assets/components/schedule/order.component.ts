import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'olist',
  templateUrl: './components/order.html',
  styleUrls: [ './assets/css/order.component.css' ],
  providers: [ OrderService],
  })



export class OrderComponent implements OnInit { 
	orders: Order[];
  selectedOrder: Order;
  constructor(private orderService: OrderService, private http: Http) { }
  getOrders(): void {
    this.http.get('/schedule')
      .map((response: Response): Order[] => response.json())
      .subscribe((orders: Response): void => this.orders = orders, 
        (error: string): void => console.log('An unexpected error has occurred: '+error), 
        (): void => console.log('Get request completed. Remind me to teach you about Observables Mike.'));
    //what's above will replace what's below
    this.orderService.getOrders().then(orders => this.orders = orders);
  }
  ngOnInit(): void {
    this.getOrders();
  }
  onSelect(order: Order): void {
    this.selectedOrder = order;
  }
}
 