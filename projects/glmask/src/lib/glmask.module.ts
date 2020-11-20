import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MascaraPipe } from './pipes/mascara.pipe';
import { GlMASKDirective } from './directives/gl-mask.directive';

@NgModule({
  declarations: [MascaraPipe, GlMASKDirective],
  imports: [
    CommonModule
  ],
  exports: [MascaraPipe, GlMASKDirective],
  providers: [
    GlMASKDirective
  ]
})
export class GlmaskModule { }
