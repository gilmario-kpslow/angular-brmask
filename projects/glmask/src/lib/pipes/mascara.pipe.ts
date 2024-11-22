import { Pipe, PipeTransform } from '@angular/core';
import { aplicarFormatacao } from './mask-functions';

@Pipe({
  name: 'glmask'
})
export class MascaraPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return aplicarFormatacao(value, args[0]);
  }
}
