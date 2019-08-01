import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EditIniciativaComponent } from './edit-iniciativa/edit-iniciativa.component';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'usuarios', component: ListaUsuariosComponent }, 
  { path: 'dashboard', component: DashboardComponent},
  { path: 'edit/:identificador', component: EditIniciativaComponent}

  // { path: '**', redirectTo: 'principal' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
