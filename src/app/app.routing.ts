
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
import { LoginAdiminComponent } from './adminstrado/login-adimin/login-adimin.component';

import { LoginUserComponent } from './usuario/login-user/login-user.component';
import { HomeComponent } from './usuario/home/home.component';
import { CadastraUsuarioComponent } from './usuario/cadastra-usuario/cadastra-usuario.component';
import { EditaUsuarioComponent } from './usuario/edita-usuario/edita-usuario.component';
import { BuscarUserEventoComponent } from './usuario/buscar-evento/buscar-evento.component';
import { SubmeterArtigoComponent } from './usuario/submeter-artigo/submeter-artigo.component';


import { AuthAdiminGuard } from './guards/auth-admin.guard';
import { AuthUsuarioGuard } from './guards/auth-usuario.guard';


const APP_ROUTES: Routes = [
	{ path : 'palavaadd' , component : AddPalavraComponent, canActivate: [AuthAdiminGuard]
	},{ path : 'eventoadd' , component : AddEventoComponent, canActivate: [AuthAdiminGuard]
	},{ path : 'areaadd' , component : AddAreaComponent, canActivate: [AuthAdiminGuard]
	},{ path : 'palavrabusca' , component : BuscarPalavraComponent, canActivate: [AuthAdiminGuard]
	},{ path : 'eventobusca' , component : BuscarEventoComponent, canActivate: [AuthAdiminGuard]
	},{ path : 'areabusca' , component : BuscarAreaComponent, canActivate: [AuthAdiminGuard]
	},{ path : 'detalhesbusca/:id' , component : DetalheEventoComponent, canActivate: [AuthAdiminGuard]
	},{ path : 'editaevento/:id' , component : EditEventoComponent, canActivate: [AuthAdiminGuard]
	},{ path : 'loginadimin' , component : LoginAdiminComponent
	},{ path : 'login' , component : LoginUserComponent
	},{ path : 'cadastrausuario' , component : CadastraUsuarioComponent
	},{ path : 'editausuario' , component : EditaUsuarioComponent ,canActivate:[AuthUsuarioGuard]
	},{ path : '' , component : HomeComponent , canActivate:[AuthUsuarioGuard]
	},{ path : 'userbuscar' , component : BuscarUserEventoComponent , canActivate:[AuthUsuarioGuard]
	},{ path : 'submeterartigo/:id' , component : SubmeterArtigoComponent 
	}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);