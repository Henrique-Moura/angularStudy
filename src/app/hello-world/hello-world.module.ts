import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';
import { CursoDetalheModule } from './curso-detalhe/curso-detalhe.module';



@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    CommonModule,
    CursoDetalheModule,
  ],
  exports: [HelloWorldComponent] /* Exporta o component para ser utilizado em outras modules */
})
export class HelloWorldModule { }
