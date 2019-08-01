import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditIniciativaComponent } from './edit-iniciativa/edit-iniciativa.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListaUsuariosComponent,
    FormularioComponent,
    NavbarComponent,
    EditIniciativaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FormularioComponent
 ]
})
export class AppModule { }
