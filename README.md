# Pokédex - Synapse

Este projeto é uma Pokédex desenvolvida como parte da disciplina de Front-end do Synapse, oferecido pelo CIAg e ministrada pelo professor Finoti.

A aplicação permite aos usuários visualizar uma lista de Pokémon, com a capacidade de navegar por páginas para descobrir mais criaturas.

## ✨ Funcionalidades

*   **Listagem de Pokémon:** Exibe os Pokémon em cards, mostrando seu nome, ID, imagem e tipos.
*   **Paginação:** Navegue pela Pokédex com os botões de "Próxima Página" e "Página Anterior".
*   **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, de celulares a desktops.
*   **Estilização Dinâmica:** Os cards dos Pokémon mudam de cor com base no seu tipo principal.

## 🛠️ Tecnologias Utilizadas

*   **[Angular](https://angular.io/):** Framework principal para a construção da interface.
*   **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática.
*   **[PokeAPI](https://pokeapi.co/):** API utilizada para obter os dados dos Pokémon.
*   **HTML5 & CSS3:** Para a estruturação e estilização das páginas.

## 🚀 Como Executar o Projeto

### Pré-requisitos

*   [Node.js](https://nodejs.org/en/) (que inclui o npm)
*   [Angular CLI](https://github.com/angular/angular-cli)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd Pokedex
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

Abra seu navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

### Build

Para compilar o projeto para produção, execute:

```bash
ng build
```

Os artefatos da compilação serão armazenados no diretório `dist/`.

### Executando Testes Unitários

Para executar os testes unitários com o [Karma](https://karma-runner.github.io), use o comando:

```bash
ng test
```

## 👨‍💻 Autor

*   **Marcio Gabriel** - [Schinor](https://github.com/Schinor)
