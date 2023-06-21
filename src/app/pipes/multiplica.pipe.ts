import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplica'
})
export class MultiplicaPipe implements PipeTransform {

  /*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  */

  transform(value: number, args: any): number {
    let x: number = parseFloat(args);
    return value * x;
  }


}
