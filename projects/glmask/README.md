# Glmask
    Mascaras simples

### Mascaras diversas

  - CPF = '999.999.999-99'
  - CNPJ = '99.999.999/9999-99'
  - CEL = '(99) 9 9999-9999'
  - FIXO = '(99) 9999-9999'
  - CEP = '99.999-999'
  - CGF = '99.999999-9'



## Configurar

    import { GlmaskModule } from "glmask";

    imports: [
        GlmaskModule
    ]


## Usar

> <input glMascara formato="CPF" type="text"

> {{ value | glmask: 'CPF' }}

> <input glMascara formato="CPF" type="text" outroFormato="CNPJ" alternar="isCnpj"

> {{ value | glmask: 'CPF': CNPJ : isCnpj }}

> isCnpj(value) { return value.length > 11; }