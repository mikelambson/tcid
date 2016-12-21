import { Component, OnInit } from '@angular/core';

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
  constructor(private orderService: OrderService) { }
  getOrders(): void {
    this.orderService.getOrders().then(orders => this.orders = orders);
  }
  ngOnInit(): void {
    this.getOrders();
  }
  onSelect(order: Order): void {
    this.selectedOrder = order;
  }
}
 