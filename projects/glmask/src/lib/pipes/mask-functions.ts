import { Formato } from './formato';
import { formatosPadrao } from './formato.consts';
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

export const selecionarFormato = (identificador: string): Formato  => {
  const formato = formatosPadrao.find(f => f.identificador === identificador);
  if (formato) {
    return formato;
  }
  Error('Formato Não definido, od formatos valisof são: ' + formatosPadrao.map);
};
