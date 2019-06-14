import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearticketComponent } from './crearticket/crearticket.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'usuario/login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'nuevo-ticket', component: CrearticketComponent },
  { path: '', redirectTo: '/usuario/login', pathMatch: 'full'},
  { path : '**', component: PaginaErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
