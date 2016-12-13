import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleIndexComponent} from './schedule.component';
import {ROUTING, routingProviders} from './routes';
import {LoaderComponent} from '../loader/loader.component';

@NgModule({
	imports: [CommonModule, ROUTING], 
	declarations: [ScheduleIndexComponent, LoaderComponent], 
	providers: [routingProviders]
})
export class ScheduleModule {
	private name: string = 'Master'; 
}