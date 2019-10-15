import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginUserComponent } from './login-user/login-user.component';
import { routing } from '../app.routing';
import { HomeComponent } from './home/home.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { EditaUsuarioComponent } from './edita-usuario/edita-usuario.component';

@NgModule({
  declarations: [
  LoginUserComponent,
  HomeComponent,
  CadastraUsuarioComponent,
  EditaUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ]
})
export class UsuarioModule { }
