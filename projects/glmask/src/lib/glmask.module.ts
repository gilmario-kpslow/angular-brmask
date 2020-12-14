import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MascaraPipe } from './pipes/mascara.pipe';
import { GlMASKDirective } from './directives/gl-mask.directive';
import { GlFoneDirective } from './directives/gl-mask-fone.directive';
import { MascaraFonePipe } from './pipes/mascara-fone.pipe';

@NgModule({
  declarations: [MascaraPipe, GlMASKDirective, GlFoneDirective, MascaraFonePipe],
  imports: [
    CommonModule
  ],
  exports: [MascaraPipe, GlMASKDirective, MascaraFonePipe, GlFoneDirective],
  providers: [
    GlMASKDirective, GlFoneDirective
  ]
})
export class GlmaskModule { }
