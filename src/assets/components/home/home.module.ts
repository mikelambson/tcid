import {NgModule} from '@angular/core';
import {HomeIndexComponent} from './home.component';
import {ROUTING, routingProviders} from './routes';

@NgModule({
	imports: [ROUTING], 
	declarations: [HomeIndexComponent], 
	providers: [routingProviders]
})
export class HomeModule {
	private name: string = 'Master'; 
}