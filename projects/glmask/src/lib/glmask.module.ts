import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MascaraPipe } from './pipes/mascara.pipe';
import { GlMASKDirective } from './directives/gl-mask.directive';
import { GlFoneDirective } from './directives/gl-mask-fone.directive';
import { MascaraFonePipe } from './pipes/mascara-fone.pipe';
import { GlCpfCnpjDirective } from './directives/gl-mask-cpf-cnpj.directive';
import { GlCpfCnpjPipe } from './pipes/mascara-cpf-cnpj.pipe';

@NgModule({
  declarations: [MascaraPipe, GlMASKDirective, GlFoneDirective, MascaraFonePipe, GlCpfCnpjDirective, GlCpfCnpjPipe],
  imports: [
    CommonModule
  ],
  exports: [MascaraPipe, GlMASKDirective, MascaraFonePipe, GlFoneDirective, GlCpfCnpjDirective, GlCpfCnpjPipe],
  providers: [
    GlMASKDirective, GlFoneDirective, GlCpfCnpjDirective
  ]
})
export class GlmaskModule { }
