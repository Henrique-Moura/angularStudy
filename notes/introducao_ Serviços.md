# Introdução a Serviços

Os serviços no Angular são onde devemos alocar nossa lógica. Eles são utilizados para tarefas como manipulação de dados, comunicação com APIs e qualquer lógica que precise ser compartilhada entre diferentes componentes.

Eles são criados através do comando:
```sh
ng g s [nome do serviço]
```

## Fornecimento de Serviços

### Método Tradicional (Antes do Angular 6)
Durante a aula, foi mostrado como passar o serviço em providers para o módulo. Antes do Angular 6, isso era necessário para tornar o serviço disponível para injeção:
```sh
@NgModule({
  providers: [HelloWorldService]
})
export class AppModule { }
```

### Método Atual (A partir do Angular 6)
A partir do Angular 6, foi introduzida a opção de fornecer serviços usando a propriedade providedIn dentro do próprio serviço. Isso simplifica a configuração e garante que o serviço seja uma única instância disponível em toda a aplicação.

Exemplo de Serviço com providedIn: 'root'
import { Injectable } from '@angular/core';
```sh
@Injectable({
  providedIn: 'root',
})
export class HelloWorldService {
  constructor() {}

  getCursos() {
    return ['Java', 'Angular', 'Node'];
  }
}
```
