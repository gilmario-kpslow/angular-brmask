import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlmaskComponent } from './glmask.component';
import { MascaraPipe } from './pipes/mascara.pipe';
import { GlCPFDirective } from './directives/cpf.directive';

@NgModule({
  declarations: [MascaraPipe, GlCPFDirective],
  imports: [
    CommonModule
  ],
  exports: [MascaraPipe, GlCPFDirective]
})
export class GlmaskModule { }
