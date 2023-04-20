import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contacto.mocks';
import { IContacto } from '../models/contacto.interface';
import { Observable } from 'rxjs';
// importando Observable

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }
  /*
  obtenerContactos():IContacto[]{
    console.log("------obtenercontactos-----");
    return CONTACTOS;
  }
  */

  obtenerContactos():Promise<IContacto[]>{
    return Promise.resolve(CONTACTOS);
  }

  //obtenerContactoPorId(id:number):Promise<IContacto> | undefined{
    obtenerContactoPorId(id:number):Observable<IContacto> | undefined{
    const contacto = CONTACTOS.find((contacto :IContacto) => contacto.id === id);
    //Adicion de observable ini
    let observable:Observable<IContacto> = new Observable(observer => {
      observer.next(contacto) //Emitir un valor a todo componente suscrito
      observer.complete(); // No emitimos mas valores
    })
    //Adicion de observable fin

    if(contacto) {
      //return Promise.resolve(contacto);
      return observable;
    } else {
      return;
    }
  }

}
