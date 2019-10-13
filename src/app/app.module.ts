import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminstradoModule } from './adminstrado/adminstrado.module';
import { routing } from './app.routing';

import { PalavraService } from './servisos/palavra.service';
import { EventoService } from './servisos/evento.service';
import { AreaService } from './servisos/area.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminstradoModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  PalavraService,EventoService,AreaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
