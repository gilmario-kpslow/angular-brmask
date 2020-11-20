import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlmaskModule } from '../../projects/glmask/src/lib/glmask.module';
import { TesteDirective } from './teste.directive';
import { FormsModule } from '@angular/forms';
import { MaskExemploComponent } from './mask-exemplo/mask-exemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteDirective,
    MaskExemploComponent
  ],
  imports: [
    BrowserModule,
    GlmaskModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
