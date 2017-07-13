//admin.module.ts
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminIndexComponent} from './admin.component';
import {ROUTING, routingProviders} from './routes';


@NgModule({
	imports: [CommonModule, ROUTING], 
	declarations: [AdminIndexComponent], 
	providers: [routingProviders]
})
export class AdminModule {
	private name: string = 'Master'; 
}
