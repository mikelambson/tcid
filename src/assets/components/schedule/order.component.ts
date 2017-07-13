//order.component.ts
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

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
    .map((response: Response): {}[] => response.json())
    .flatMap((data: {}[]): Observable<{}> => Observable.from(data))
    .map((data: {}): Order => new Order(data))
    .subscribe((order: Order): number => this.orders.push(order),  
      (error: string): void => console.log('An unexpected error has occurred: '+error), 
      (): void => console.log('Get request completed.'));
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
 
