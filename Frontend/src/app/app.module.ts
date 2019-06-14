import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CrearticketComponent } from './crearticket/crearticket.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TicketsService } from './servicio/tickets.service';
import { HttpClientModule } from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';

import { AuthService } from './servicio/auth.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  // Todo componente del proyecto debe estar incluido aquí.
  declarations: [
    AppComponent,
    RegistroComponent,
    DashboardComponent,
    HeaderComponent,
    CrearticketComponent,
    LoginComponent,
    PaginaErrorComponent
  ],
  // Importación de otros modulos.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // Se definen todos los servicios a la que pueda acceder la aplicación.
  providers: [
    TicketsService,
    AuthService,
    AuthGuard,
  ],
  // Componente principal de la aplicación.
  bootstrap: [AppComponent]
})
export class AppModule { }
