import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeIndexComponent} from './home.component';
import {ROUTING, routingProviders} from './routes';


@NgModule({
	imports: [CommonModule, ROUTING], 
	declarations: [HomeIndexComponent], 
	providers: [routingProviders]
})
export class HomeModule {
	private name: string = 'Master'; 
}