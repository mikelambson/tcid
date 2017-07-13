//routes.ts
import { ModuleWithProviders } from "@angular/core";
import {RouterModule} from '@angular/router';
import {ScheduleIndexComponent} from './schedule.component';

export const routingProviders: any[] = [
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild([
    { path: 'schedule', component: ScheduleIndexComponent },

]);
