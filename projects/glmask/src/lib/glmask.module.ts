import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MascaraPipe } from './pipes/mascara.pipe';
import { GlCPFDirective } from './directives/cpf.directive';
import { GlCNPJDirective } from './directives/cnpj.directive';
import { GlMASKDirective } from './directives/gl-mask.directive';

@NgModule({
  declarations: [MascaraPipe, GlCPFDirective, GlCNPJDirective, GlMASKDirective],
  imports: [
    CommonModule
  ],
  exports: [MascaraPipe, GlCPFDirective, GlCNPJDirective, GlMASKDirective],
  providers: [
    GlCPFDirective, GlCNPJDirective, GlMASKDirective
  ]
})
export class GlmaskModule { }
