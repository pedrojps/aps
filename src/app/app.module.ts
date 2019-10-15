import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminstradoModule } from './adminstrado/adminstrado.module';
import { UsuarioModule } from './usuario/usuario.module';
import { routing } from './app.routing';

import { PalavraService } from './servisos/palavra.service';
import { EventoService } from './servisos/evento.service';
import { AreaService } from './servisos/area.service';
import { ArtigoService } from './servisos/artigo.service';
import { AuthService } from './servisos/auth.service';
import { UsuarioService } from './servisos/usuario.service';

import { AuthAdiminGuard } from './guards/auth-admin.guard';
import { AuthUsuarioGuard } from './guards/auth-usuario.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminstradoModule,UsuarioModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  PalavraService,
  EventoService,
  AreaService,
  ArtigoService,
  AuthService,
  AuthAdiminGuard,
  AuthUsuarioGuard,
  UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
