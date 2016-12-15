import { ModuleWithProviders } from "@angular/core";
import {RouterModule} from '@angular/router';
import {HomeIndexComponent} from './home.component';

export const routingProviders: any[] = [
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild([
    { path: 'home', component: HomeIndexComponent},
]);