
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPalavraComponent } from './adminstrado/add-palavra/add-palavra.component';


const APP_ROUTES: Routes = [
	{ path : 'palavaadd' , component : AddPalavraComponent
	}	
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);