import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//IMPORTAMOS DE REACTIVE FORMS PARA CREAR UN FORMULARIO ANIDADO
@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit{

  miFomularioAnidado :FormGroup = new FormGroup({})

  constructor(
    private formBuilder :FormBuilder
  ){

  }
  ngOnInit(): void {
    console.log("---------------OnInit------------------")

    // seccopn1
    const telefonoFijo = this.formBuilder.group(
      {
        prefijo:"",
        numero:""
      }
    )
    // seccion2
    const telefonoMovil = this.formBuilder.group(
      {
        prefijo:"",
        numero:""
      }
    )

    //Agrupacion de formulario

    this.miFomularioAnidado =this.formBuilder.group({
        nombre:'',
        telefonoFijo:telefonoFijo,
        telefonoMovil:telefonoMovil,
      }
    )



  }

  registrarDatos(){
    console.log("-----------------registrarDatos----------------------------")
    console.log(this.miFomularioAnidado.value)

  }

}
