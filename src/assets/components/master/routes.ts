import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

export const routingProviders: any[] = [
];

const MasterRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' } 
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(MasterRoutes);