
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPalavraComponent } from './adminstrado/add-palavra/add-palavra.component';
import { AddEventoComponent } from './adminstrado/add-evento/add-evento.component';
import { AddAreaComponent } from './adminstrado/add-area/add-area.component';

import { BuscarPalavraComponent } from './adminstrado/buscar-palavra/buscar-palavra.component';
import { BuscarEventoComponent } from './adminstrado/buscar-evento/buscar-evento.component';
import { BuscarAreaComponent } from './adminstrado/buscar-area/buscar-area.component';

import { DetalheEventoComponent } from './adminstrado/detalhe-evento/detalhe-evento.component';
import { EditEventoComponent } from './adminstrado/edit-evento/edit-evento.component';


const APP_ROUTES: Routes = [
	{ path : 'palavaadd' , component : AddPalavraComponent
	},{ path : 'eventoadd' , component : AddEventoComponent
	},{ path : 'areaadd' , component : AddAreaComponent
	},{ path : 'palavrabusca' , component : BuscarPalavraComponent
	},{ path : 'eventobusca' , component : BuscarEventoComponent
	},{ path : 'areabusca' , component : BuscarAreaComponent
	},{ path : 'detalhesbusca/:id' , component : DetalheEventoComponent
	},{ path : 'editaevento/:id' , component : EditEventoComponent
	}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);