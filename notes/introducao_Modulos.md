## Criação de Componente com Angular CLI

Através do comando `ng g c hello-world/curso-detalhe`, foi criado um componente dentro do diretório `hello-world`. Aqui está a explicação detalhada do comando:

### Comando
```sh
ng g c hello-world/curso-detalhe


ng: Comando do Angular CLI, que é a interface de linha de comando do Angular.
g: Abreviação de generate, usada para gerar novos artefatos no projeto.
c: Abreviação de component, especifica que queremos gerar um novo componente.
hello-world/curso-detalhe: Caminho e nome do componente a ser criado. Neste caso, o componente curso-detalhe será criado dentro do diretório hello-world.
```

### Detalhes Adicionais

Ao executar este comando, o Angular CLI realiza várias ações automaticamente:

1. Cria uma nova pasta chamada `curso-detalhe` dentro do diretório `hello-world`.
2. Dentro desta nova pasta, são gerados os seguintes arquivos:
   - **`curso-detalhe.component.ts`**: O arquivo TypeScript do componente.
   - **`curso-detalhe.component.html`**: O template HTML do componente.
   - **`curso-detalhe.component.css`** ou **`curso-detalhe.component.scss`**: O arquivo de estilos CSS (ou SCSS) do componente.
   - **`curso-detalhe.component.spec.ts`**: O arquivo de testes unitários para o componente.

3. Atualiza o módulo correspondente (normalmente `app.module.ts` ou um módulo específico) para incluir o novo componente nas declarações (**`declarations`**).

Este comando facilita a criação e a configuração inicial de um novo componente, seguindo as melhores práticas e a estrutura recomendada pelo Angular.



