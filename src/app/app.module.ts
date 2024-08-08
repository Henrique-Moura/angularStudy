import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; /* Prepara a execução pra ser rodada em um Browser */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    XyzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
