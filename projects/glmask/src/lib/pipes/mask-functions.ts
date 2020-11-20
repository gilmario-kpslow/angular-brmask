export const formatar = (formato: string, valor: string): string => {
  console.log(formato);
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
