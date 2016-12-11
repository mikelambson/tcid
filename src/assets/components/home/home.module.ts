import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeIndexComponent} from './home.component';
import {ROUTING, routingProviders} from './routes';
import {LoaderComponent} from '../loader/loader.component';

@NgModule({
	imports: [CommonModule, ROUTING], 
	declarations: [HomeIndexComponent, LoaderComponent], 
	providers: [routingProviders]
})
export class HomeModule {
	private name: string = 'Master'; 
}