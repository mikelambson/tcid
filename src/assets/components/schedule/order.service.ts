// order.service.ts
import { Injectable } from '@angular/core';

import { Order } from './order';
import { ORDERS } from './mock-orders'; //this will eventually need to be the http connect for the database

@Injectable()
export class OrderService {
  getOrders(): Promise<Order[]> {
    return Promise.resolve(ORDERS);
  }
}
