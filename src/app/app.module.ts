import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdiminPalavraModule } from './adminstrado/adimin-palavra/adimin-palavra.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdiminPalavraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
