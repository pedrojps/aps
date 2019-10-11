import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdiminPalavraModule } from './adimin-palavra/adimin-palavra.module';


@NgModule({
  imports: [
    CommonModule,
    AdiminPalavraModule
  ],
  declarations:[],
  exports:[
  	AdiminPalavraModule
  ]
})
export class AdminstradoModule { }
