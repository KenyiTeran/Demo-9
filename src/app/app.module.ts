import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivasComponent } from './pagina1/directivas/directivas.component';
import { Pagina1Module } from './pagina1/pagina1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Pagina1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
