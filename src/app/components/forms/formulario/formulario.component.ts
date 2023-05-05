import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


// ejemplo basico de componente reactivo
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements  OnInit {

  //Define form
  miFormulario :FormGroup = new FormGroup({})

  // inyectamos form builder
  constructor(private formBuilder:FormBuilder){
  }

  ngOnInit(): void {
    console.log("-------------------OnInit-----------------")
    this.miFormulario = this.formBuilder.group(
      {
        nombre:"",
        apellidos:"",
        email:"",
        telefono:"",
        direccion:""
      }
    )
    //nos suscribimos a los cambios
    this.miFormulario.valueChanges.subscribe((valor)=>
      console.log(valor)
    )

  }

}
