import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddEventoComponent } from './add-evento/add-evento.component';
import { AddPalavraComponent } from './add-palavra/add-palavra.component';
import { AddAreaComponent } from './add-area/add-area.component';

import { BuscarAreaComponent } from './buscar-area/buscar-area.component';
import { BuscarEventoComponent } from './buscar-evento/buscar-evento.component';
import { BuscarPalavraComponent } from './buscar-palavra/buscar-palavra.component';
import { DetalheEventoComponent } from './detalhe-evento/detalhe-evento.component';

import { routing } from '../app.routing';
import { EditEventoComponent } from './edit-evento/edit-evento.component';
import { LoginAdiminComponent } from './login-adimin/login-adimin.component';
import { IndicarRevisorComponent } from './indicar-revisor/indicar-revisor.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations:[
  AddAreaComponent,
  AddEventoComponent,
  AddPalavraComponent,
   BuscarAreaComponent, 
   BuscarEventoComponent, 
   BuscarPalavraComponent,
   DetalheEventoComponent,
   EditEventoComponent,
    LoginAdiminComponent,
    IndicarRevisorComponent

   ],
  exports:[
  	
  ]
})
export class AdminstradoModule { }
