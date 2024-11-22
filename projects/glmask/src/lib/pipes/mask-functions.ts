import { Formato } from './formato.consts';
export const formatar = (formato: string, valor: string): string => {
  let retorno = '';
  let j = 0;
  for (let i = 0; i < formato.length && j < valor.length; i++) {
    let tipo = formato.substring(i, i + 1);
    if (tipo === '9') {
      retorno += valor.substring(j, j + 1).split(/\D+/).join('');
      console.log(retorno, valor);
      j++;
    } else if (tipo === 'S') {
      retorno += valor.substring(j, j + 1).split(/[^A-Z0-9]+/).join('');
      j++;
    } else if (tipo === 's') {
      retorno += valor.substring(j, j + 1).split(/[^a-z0-9]+/).join('');
      j++;
    } else if (tipo === 'A') {
      retorno += valor.substring(j, j + 1).split(/[^A-Z]+/).join('');
      j++;
    } else if (tipo === 'a') {
      retorno += valor.substring(j, j + 1).split(/[^a-z]+/).join('');
      j++;
    }
    else {
      retorno += formato.substring(i, i + 1);
    }
  }
  return retorno;
};

export const aplicarFormatacao = (valor: string, formato: string) => {
  if (!valor) {
    return valor;
  }
  if (Formato[formato]) {
    return formatar(Formato[formato], valor);
  }
  return formatar(formato, valor);
}

export const foneFormat = (valor: string) => {
  if (!valor) {
    return valor;
  }

  if (valor.length <= 8) {
    return formatar('9999-9999', valor);
  } else if (valor.length <= 9) {
    return formatar('9 9999-9999', valor);
  } else if (valor.length <= 10) {
    return formatar('(99) 9999-9999', valor);
  } else if (valor.length <= 11) {
    return formatar('(99) 9 9999-9999', valor);
  } else {
    return formatar('(99) 99 9999-9999', valor);
  }
}
