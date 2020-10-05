import { Formato } from './formato';

export const formatosPadrao: Formato[] = [
  {identificador: 'CPF', mascara: '999.999.999-99'},
  {identificador: 'CNPJ', mascara: '99.999.999/9999-99'},
  {identificador: 'CEL', mascara: '(99) 9 9999-9999'},
  {identificador: 'FIXO', mascara: '(99) 9999-9999'},
  {identificador: 'CEP', mascara: '99.999-999'},
  {identificador: 'IE', mascara: '09.99999-9'}
];
