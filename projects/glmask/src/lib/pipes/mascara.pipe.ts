import { Pipe, PipeTransform } from '@angular/core';
import { aplicarFormatacao } from './mask-functions';

@Pipe({
  name: 'glmask'
})
export class MascaraPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return aplicarFormatacao(args[0], args[1], args[2], value);
  }



}
