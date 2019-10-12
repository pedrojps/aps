import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEventoComponent } from './add-evento/add-evento.component';
import { AddPalavraComponent } from './add-palavra/add-palavra.component';
import { AddAreaComponent } from './add-area/add-area.component';
import { BuscarAreaComponent } from './buscar-area/buscar-area.component';
import { BuscarEventoComponent } from './buscar-evento/buscar-evento.component';
import { BuscarPalavraComponent } from './buscar-palavra/buscar-palavra.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
  AddAreaComponent,
  AddEventoComponent,
  AddPalavraComponent,
   BuscarAreaComponent, 
   BuscarEventoComponent, 
   BuscarPalavraComponent

   ],
  exports:[
  	
  ]
})
export class AdminstradoModule { }
