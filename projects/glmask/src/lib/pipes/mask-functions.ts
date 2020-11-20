import { Formato } from './formato.consts';
export const formatar = (formato: string, valor: string): string => {
  let retorno = '';
  let j = 0;
  for (let i = 0; i < formato.length && j < valor.length; i++) {
    if (formato.substring(i, i + 1) === '9') {
      retorno += valor.substring(j, j + 1);
      j++;
    } else {
      retorno += formato.substring(i, i + 1);
    }
  }
  return retorno;
};

export const aplicarFormatacao = (formato: string, outroFormato: string, alternar: Function, valor: string) => {
  if(!valor) {
    return valor;
  }
  if(outroFormato && alternar && alternar(valor)) {
    return formatar(Formato[outroFormato], valor);
  }
  return formatar(Formato[formato], valor);
} 