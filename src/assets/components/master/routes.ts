import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import {Error404Component} from '../error/404';

export const routingProviders: any[] = [
];

const MasterRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'schedule', redirectTo: '/schedule', pathMatch: 'full' },
    { path: 'manage', redirectTo: '/manage', pathMatch: 'full' },
    { path: 'admin', redirectTo: '/admin', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(MasterRoutes);
