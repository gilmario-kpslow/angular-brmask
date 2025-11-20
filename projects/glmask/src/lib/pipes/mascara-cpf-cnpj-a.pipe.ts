import { Pipe, PipeTransform } from '@angular/core';
import { aplicarFormatacao } from './mask-functions';
import { Formato } from './formato.consts';

@Pipe({
  name: 'glCpfCnpja',
})
export class GlCpfCnpjPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value && value.length <= 11) {
      return aplicarFormatacao(value, Formato.CPF);
    }
    return aplicarFormatacao(value, Formato.CNPJA);
  }
}
