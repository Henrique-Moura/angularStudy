import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '../hello-world.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.less']
})
export class CursoDetalheComponent implements OnInit {

  nomePortal: string; /* Criação de variáveis para utilização no template HTML */
  cursos: string[]

  constructor(private cursosService: HelloWorldService) {
    this.nomePortal = 'loiane.training' /* para se ter acesso a essa variavel no template é necessario acessa-las atraves do seu nome e {{}} Ex: {{ nomePortal }} */

    // Obtém a lista de cursos do serviço
    this.cursos = this.cursosService.getCursos(); /* Para momentos de recebimento e envio de informações, é recomendado utilizar um serviço. Este é um pequeno exemplo de como instanciar o serviço através dos parâmetros do construtor. Antes, o array estava sendo recebido diretamente no componente. Agora, é o serviço HelloWorldService que realiza essa tarefa. */
   }

  ngOnInit(): void {
  }

}
