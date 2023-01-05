import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DirectivasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DirectivasComponent
  ]
})
export class Pagina1Module { }
