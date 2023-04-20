import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit,OnDestroy{

  listaContactos: IContacto[] =[];
  //listaContactos: Promise<IContacto[]>;
  contactoSeleccionado: IContacto | undefined ;
  subscription: Subscription | undefined ;


  constructor(
    // Se inyecta por constructor el servicio
    private contactoService:ContactoService
  ){

  }
  ngOnDestroy(): void {
    console.log("---------ngOnDestroy--------")
    this.subscription?.unsubscribe();

  }
  ngOnInit(): void {
    console.log("-----onInit------")
    //this.listaContactos = this.contactoService.obtenerContactos();
    console.table('lista inicial '+this.listaContactos)

    this.contactoService.obtenerContactos()
    .then( (lista: IContacto[]) => this.listaContactos = lista)
    .catch( (error) => console.error("Ha ocurrido un error al recuperar la lista de contactos $(error)"))
    .finally(()=>console.log("Peticion de lista de contactos teminada"))

    console.table('lista final '+this.listaContactos)
  }
  /*
  obtenerContacto(id:number){
    //this.contactoSeleccionado = this.contactoService.obtenerContactoPorId(id)
    this.contactoService.obtenerContactoPorId(id)
    ?.then( ( contacto:IContacto )=> this.contactoSeleccionado = contacto)
    .catch((error)=>console.log("Peticion"+error))
    .finally(()=>console.error("Ha habido un error al recuperar un contacto"))
  }
  */

  obtenerContacto(id:number){
    //this.contactoSeleccionado = this.contactoService.obtenerContactoPorId(id)
    this.subscription = this.contactoService.obtenerContactoPorId(id)
    ?.subscribe( (contacto:IContacto)=> this.contactoSeleccionado = contacto)
    //.(error) => console.error("Ha habido un error al recuperar un contacto"+error)
  }


}
