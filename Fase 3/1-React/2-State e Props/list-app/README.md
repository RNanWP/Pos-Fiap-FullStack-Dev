# 📝 TaskList App

<!-- ![Screenshot da Aplicação TaskList](https://i.imgur.com/1jidIfC.png) -->

<table>
  <tr>
    <td><img src="https://i.imgur.com/1jidIfC.png" alt="Descrição da Imagem 1" width="460"></td>
    <td><img src="https://i.imgur.com/fJM2z7H.png" alt="Descrição da Imagem 2" width="460"></td>
    <td><img src="https://i.imgur.com/6Bx8Zww.png" alt="Descrição da Imagem 3" width="460"></td>
  </tr>
</table>

Um aplicativo de gerenciamento de tarefas simples e elegante, construído com as tecnologias mais modernas do ecossistema React. A interface é limpa, intuitiva e focada na produtividade, permitindo ao usuário adicionar, gerenciar e filtrar suas pendências de forma eficiente.

## ✨ Funcionalidades

* **Adicionar Tarefas:** Crie novas tarefas rapidamente através de um campo de texto simples.
* **Marcar como Concluída:** Alterne o status de uma tarefa entre pendente e concluída com um único clique.
* **Remover Tarefas:** Exclua tarefas que não são mais necessárias.
* **Filtragem de Tarefas:** Navegue facilmente entre as visualizações de tarefas "Pendentes" e "Concluídas".
* **Design Responsivo:** A interface se adapta para uma boa experiência tanto no desktop quanto em dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando um conjunto de ferramentas modernas para garantir uma ótima experiência de desenvolvimento e performance.

* **[React](https://react.dev/)**: Biblioteca principal para a construção da interface.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida para o desenvolvimento front-end.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código.
* **[Styled Components](https://styled-components.com/)**: Para estilização dos componentes de forma isolada e dinâmica.
* **[React Router](https://reactrouter.com/)**: Para gerenciamento das rotas da aplicação (`Home`, `Tarefas Concluídas`, `Tarefas Pendentes`).
* **[Axios](https://axios-http.com/)**: Para realizar as requisições HTTP ao back-end.

## 🚀 Como Executar o Projeto

Para rodar esta aplicação localmente, você precisará de duas partes: o **Back-end** (um servidor de API simples) e o **Front-end** (este projeto).

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### 1. Configurando o Back-end (com `json-server`)

A maneira mais fácil de simular o back-end que este projeto espera é usando o `json-server`.

1.  **Instale o `json-server` globalmente:**
    ```bash
    npm install -g json-server
    ```

2.  **Crie o arquivo do banco de dados:** Na raiz da pasta do seu projeto, crie um arquivo chamado `db.json` com o seguinte conteúdo:
    ```json
    {
      "tasks": []
    }
    ```

3.  **Inicie o servidor de API:** Em um terminal, dentro da pasta do projeto, execute o comando abaixo. O back-end estará rodando na porta `3001`, que é a porta que o front-end espera encontrar.
    ```bash
    json-server --watch db.json --port 3001
    ```
    > **Importante:** Deixe este terminal rodando.

### 2. Configurando o Front-end

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Navegue até a pasta do projeto e instale as dependências:**
    ```bash
    cd <NOME_DA_PASTA_DO_PROJETO>
    npm install
    ```

3.  **Inicie a aplicação:** Em um **novo terminal**, execute o comando:
    ```bash
    npm run dev
    ```

4.  **Abra no navegador:** A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

## 📜 Scripts Disponíveis

* `npm run dev`: Inicia o servidor de desenvolvimento com Vite.
* `npm run build`: Compila e otimiza a aplicação para produção na pasta `dist`.
* `npm run preview`: Inicia um servidor local para visualizar a versão de produção.

---

<p align="center">
  Feito com ❤️ por [Seu Nome]
</p>