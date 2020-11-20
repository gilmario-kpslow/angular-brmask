import { Pipe, PipeTransform } from '@angular/core';
import { Formato } from './formato.consts';
import { formatar, aplicarFormatacao } from './mask-functions';

@Pipe({
  name: 'glmask'
})
export class MascaraPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // if(!value) {
    //   return value;
    // }
    // if(args[1] && args[2]) {
    //   if(!args[2](value)) {
    //     return formatar(Formato[args[1]], value);    
    //   }
    // }
    // return formatar(Formato[args[0]], value);    
    return aplicarFormatacao(args[0], args[1], args[2], value);
  }



}
