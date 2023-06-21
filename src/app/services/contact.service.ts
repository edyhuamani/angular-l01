import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContacto } from '../models/contact.interface';
import { LISTACONTACTOS } from '../mocks/contacts.mock';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  listaContactos : IContacto[] =LISTACONTACTOS;

  constructor() { }
  // Permite lanzar un request a travez de promise
  obtenerContactos (sexo:string):Promise<IContacto[]> {
    console.log("--------------obtenerContactos--------------")

    console.log("lista contactos "+JSON.stringify(this.listaContactos))
    sexo='todos'
    console.log("sexo  select"+sexo)
    if (sexo=='hombre'|| sexo=='mujer'){
      console.log("select -> "+sexo)
       let listadoFiltrado = this.listaContactos.filter((contacto)=>{
          contacto.sexo == sexo
       })
      return Promise.resolve(listadoFiltrado);
    } else if(sexo=='todos'){
      console.log("select -> todos ")
      return Promise.resolve(this.listaContactos);
    } else {
      return Promise.reject("filtro no valido");
    }
  }
}
