import { Component , OnInit} from '@angular/core';

export type Producto = {
  nombre:string,
  precio: number,
  descripcion:string,
}


@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})

export class ListaBasicaComponent implements OnInit{
  //listaElementos: string[] = ["Leche","Carne","Verdura","Huevos"]
  listaElementos: Producto[] = [
    {
      nombre:"Leche",
      precio:10,
      descripcion:"Leche entera"
    },
    {
      nombre:"Carne",
      precio:20,
      descripcion:"Leche entera"
    },
    {
      nombre:"Leche",
      precio:30,
      descripcion:"Carne de cerdo"
    }
    ]
  cargando:boolean =false;

  opcion:number =0;

  mostrarMensaje:boolean=false;

  constructor(){

  }

  ngOnInit(): void {
    console.log("");
    this.mostrarMensaje=true;
  }

  cambiarCargando(){
    this.cargando=!this.cargando
  }

  escogerOpcion(opcionEscogida:number){
    this.opcion=opcionEscogida;
  }
}
