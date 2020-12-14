import { Pipe, PipeTransform } from '@angular/core';
import { foneFormat } from './mask-functions';

@Pipe({
  name: 'glFone'
})
export class MascaraFonePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return foneFormat(value);
  }

}
