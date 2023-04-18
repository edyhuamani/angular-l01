import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListsModule } from './modules/lists/lists.module';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   // para trabajar con ngmodel en los inpouts
    // Importando Modulo de listas
    ListsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
