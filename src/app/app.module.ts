import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; /* Prepara a execução para ser rodada em um navegador */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { HelloWorldModule } from './hello-world/hello-world.module';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent /* Primeira maneira de renderizar um componente no app: adicionando-o às declarações. Isso é recomendado apenas para componentes, diretivas e pipes que pertencem ao módulo específico. No caos, esse component não deveria estar declarado aqui, mas apenas o AppComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloWorldModule, /* Segunda maneira de utilizar um componente no app: importando o módulo que o exporta. O módulo deve exportar o componente para que ele possa ser usado aqui. */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
