import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pipeCPFCodigo = `{{ cpf | glmask: 'CPF' }}`;
  mascaraCPFCodigo = `{{ <input glmaskCPF type="text" > }}`;
  pipeCNPJCodigo = `{{ cnpj | glmask: 'CNPJ' }}`;
  mascaraCNPJCodigo = `{{ <input glmaskCNPJ type="text" > }}`;
  cpfModel = "";
  title = 'glmask-lib-demo';
  cpf = '67096050353';
  cnpj = '10123456000199';

  
  
  campo = "nome";
  
  objeto = {
    nome: "TESTE",
    valor: 10,
    outro: {
      desc: "Descrição",
      valor: 100,
      dois: {
        desc: "Terceito nivel",
        valor: 1000,
      }
    }
    
  }
  constructor(){
    
  }
  
  isCnpj(value) {
    return value.length > 11;
  }

  isCel(value) {
    return value.length > 10;
  }

  desc(){
    return this.getDescricao(this.objeto,this.campo);
  }
  
  getDescricao(objeto, campo) {
    if (campo.indexOf('.') !== -1) {
      let valor = objeto;
      const partes = campo.split('.');
      for (const p of partes) {
        if (valor[p] !== undefined) {
          valor = valor[p];
        }
      }
      return valor;
    } else {
      return this.objeto[this.campo];
    }
  }

}
