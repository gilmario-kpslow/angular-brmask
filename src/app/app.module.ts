import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlmaskModule } from '../../projects/glmask/src/lib/glmask.module';
import { TesteDirective } from './teste.directive';

@NgModule({
  declarations: [
    AppComponent,
    TesteDirective
  ],
  imports: [
    BrowserModule,
    GlmaskModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
