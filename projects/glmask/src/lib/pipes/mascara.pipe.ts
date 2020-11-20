import { Pipe, PipeTransform } from '@angular/core';
import { Formato } from './formato.consts';
import { formatar } from './mask-functions';

@Pipe({
  name: 'glmask'
})
export class MascaraPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args)
    if(args[1] && args[2]) {
      if(!args[2](value)) {
        return formatar(Formato[args[1]], value);    
      }
    }
    return formatar(Formato[args[0]], value);    
  }



}
