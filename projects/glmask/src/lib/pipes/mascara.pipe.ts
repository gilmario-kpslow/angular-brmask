import { Pipe, PipeTransform } from '@angular/core';
import { formatar, selecionarFormato } from './mask-functions';
import { Formato } from './formato';
import { formatosPadrao } from './formato.consts';

@Pipe({
  name: 'glmask'
})
export class MascaraPipe implements PipeTransform {

  formatos: Formato[] = formatosPadrao;
  transform(value: any, ...args: any[]): any {
    return formatar(selecionarFormato(args[0]).mascara, value);
  }



}
