//schedule.module.ts
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleIndexComponent} from './schedule.component';
import {ROUTING, routingProviders} from './routes';
import {OrderComponent} from './order.component'
//import {ScheduleMenuComponent} from './schedulemenu.component';

@NgModule({
	imports: [CommonModule, ROUTING], 
	declarations: [ScheduleIndexComponent, OrderComponent], 
	providers: [routingProviders]
})
export class ScheduleModule {
	private name: string = 'Master'; 
}
