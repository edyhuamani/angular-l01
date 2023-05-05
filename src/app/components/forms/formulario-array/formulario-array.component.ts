import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit{

  miFormularioArray:FormGroup =new FormGroup({}) // FORMULARIO PRINCIPAL

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    console.log("------ngOnInit-----")
    // telefonos es el campo array de formulario
    this.miFormularioArray = this.formBuilder.group(
      {
        nombre:'',
        apellidos:'',
        telefonos: this.formBuilder.array([]) // CAMPO FORMULARIO ARRAY
      }
    )


  }
  // Metodo Getter para obtener rl form array // como si fuera un
  get telefonosFomulario():FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray
  }

  anadirTelefonos(){
    console.log("----------------anadirTelefonos-----------------")
    const telefonoNuevo = this.formBuilder.group({
        prefijo:'',
        numero:''
    })
    console.log(" telefono nuevo "+telefonoNuevo)
    this.telefonosFomulario.push(telefonoNuevo)
  }

  eliminarTelefonos(index:number){
    console.log("----------------eliminarTelefonos-----------------")
    /*
    const telefono = this.formBuilder.group({
      prefijo:'',
      numero:''
    })
    */

    this.telefonosFomulario.removeAt(index)

  }

}
