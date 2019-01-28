import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes :Routes = [{
    path: '',
    component: MainPageComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);