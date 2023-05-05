import { Pipe, PipeTransform } from '@angular/core';
import { IContacto } from '../models/contact.interface';
import { IRandomContact } from '../models/randomuser.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: IRandomContact, ...args: unknown[]): unknown {
    return contacto.name!.title+" "+contacto.name!.first+""+contacto.name!.last;
  }

}
