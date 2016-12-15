import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleIndexComponent} from './schedule.component';
import {ROUTING, routingProviders} from './routes';


@NgModule({
	imports: [CommonModule, ROUTING], 
	declarations: [ScheduleIndexComponent], 
	providers: [routingProviders]
})
export class ScheduleModule {
	private name: string = 'Master'; 
}