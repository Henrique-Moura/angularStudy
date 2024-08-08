import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [HelloWorldComponent, CursoDetalheComponent],
  imports: [
    CommonModule
  ],
  exports: [HelloWorldComponent] /* Exporta o component para ser utilizado em outras modules */
})
export class HelloWorldModule { }
