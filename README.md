# glmask

Mascaras simples e flaxiveis para projetos Brasileiros que trabalhan com angular2+.

## Development server

Execute `ng serve` para iniciar o projeto. Acesse `http://localhost:4200/`.

## Como usar

INPUT
  <input glMascara formato="CPF" type="text" >
  
 PIPE
 {{ value | glmask: 'CPF' }}
 
 
 ## Formatos disponíveis
 
  CPF = '999.999.999-99'
  CNPJ = '99.999.999/9999-99'
  CEL = '(99) 9 9999-9999'
  FIXO = '(99) 9999-9999'
  CEP = '99.999-999'
  CGF = '99.99999-9'
 
 ## Como usar duas mascaras em um input
   
 <input glMascara formato="FIXO" type="text" outroFormato="CEL" alternar="isCel">