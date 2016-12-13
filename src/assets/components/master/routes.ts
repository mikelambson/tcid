import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import {Error404Component} from '../error/404';

export const routingProviders: any[] = [
];

const MasterRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: '', redirectTo: '/schedule', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(MasterRoutes);
