import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

//import { MatInputModule } from '@angular/material/input';
//import { MatFormFieldModule } from '@angular/material/form-field';

// Se crea el modulo se exportan las librerias necesarias para en este caso material
// y luego se exporta al modulo principal para no sobrecargar el modulo principal
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    //MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule
    //MatFormFieldModule

  ]
})
export class MaterialModule { }
