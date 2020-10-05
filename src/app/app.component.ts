import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pipeCPFCodigo = `{{ cpf | glmask: 'CPF' }}`;
  mascaraCPFCodigo = `{{ <input glmaskCPF type="text" > }}`;
  title = 'glmask-lib-demo';
  cpf = '67096050353';
}
