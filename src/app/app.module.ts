import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
/*
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
*/
import { MaterialModule } from './modules/material/material.module';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { KabanTasksComponent } from './components/kaban-tasks/kaban-tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EjemploAnimacionComponent } from './components/ejemplo-animacion/ejemplo-animacion.component';

/*Los componentes , pipes se declaran aqui*/
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    ContactsPageComponent,
    ContactDetailComponent,
    ContactDetailPageComponent,
    NotFoundPageComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemplosPipesComponent,
    EjemploPipesComponent,
    RandomUserComponent,
    RandomContactPageComponent,
    NombreCompletoPipe,
    NavComponent,
    DashboardComponent,
    MultiplicaPipe,
    TasksPageComponent,
    KabanTasksComponent,
    EjemploAnimacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Importante // NGMODEL REQUIERE ESTE TIPO
    HttpClientModule, // Importante
    //Importamos reactive forms module
    ReactiveFormsModule, //REACTIVE FORMS MODULE
    BrowserAnimationsModule, //REACTIVE FORMS MODULE
    MatFormFieldModule, //REACTIVE FORMS MODULE // SE PASAN A MODULO MATERIAL
    MatInputModule, //REACTIVE FORMS MODULE // SE PASAN A MODULO MATERIAL
    MaterialModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, DragDropModule
    /*
    MatCardModule,
    MatProgressSpinnerModule
    */
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
