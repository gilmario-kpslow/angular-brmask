import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  importacao = `import { GlmaskModule }  from "glmask";`;
  uso = ` imports: [ GlmaskModule ];`;
  title = 'glmask-lib-demo';
  cpfCnpj = '';
  constructor() {


  }

  isCnpj(value) {
    return value.length > 11;
  }

  isCel(value) {
    return value.length > 10;
  }

  getDesc() {
    return '<input [(ngModel)]="cpfCnpj" type="text" glCpfCnpj>';
  }

  getPipe() {
    return '<b>PIPE: </b> {{cpfCnpj | glCpfCnpj }}';
  }
}
