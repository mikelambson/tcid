import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavigationComponent }  from './navigation.component';
import { HeaderComponent }		from './header.component';
import {ROUTING, routingProviders} from '../master/routes';

@NgModule({
	imports: [CommonModule, ROUTING], 
	declarations: [HeaderComponent, NavigationComponent], 
	providers: [routingProviders]
})
export class HeaderModule {
	private name: string = 'Master'; 
}