import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPalavraComponent } from './add-palavra/add-palavra.component';



@NgModule({
  declarations: [AddPalavraComponent],
  imports: [
    CommonModule
  ],
  exports:[AddPalavraComponent]
})
export class AdiminPalavraModule { }
