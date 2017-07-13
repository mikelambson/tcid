import { ModuleWithProviders } from "@angular/core";
import {RouterModule} from '@angular/router';
import {AdminIndexComponent} from './admin.component';

export const routingProviders: any[] = [
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild([
    { path: 'admin', component: AdminIndexComponent},
]);
