<h1 align="center">Node API</h1>
<p align="center">Projeto desenvolvido no curso Starter de Node.js da Rocketseat.</p>

## Sobre o projeto

A ideia do projeto é construir uma API simples para a criação de produtos.

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## Dependências

- [cors](https://yarnpkg.com/en/package/cors)
- [dotenv](https://yarnpkg.com/en/package/dotenv)
- [express](https://yarnpkg.com/en/package/express)
- [mongoose](https://yarnpkg.com/en/package/mongoose)
- [mongoose-paginate-v2](https://yarnpkg.com/en/package/mongoose-paginate-v2)

## Como iniciar

Faça um clone desse repositório e acesse a pasta do projeto:

    git clone https://github.com/DouglasVarollo/node-api.git
    cd node-api

Agora nós precisamos instalar as dependências, podemos usar o yarn:

    yarn
    // ou npm install

Antes de executar a aplicação nós precisamos configurar a URL de conexão do banco de dados MongoDB, copie o conteúdo do arquivo **.env.example** e crie um arquivo **.env** com a sua URL de conexão:

    MONGO_URI=mongodb://username:password@host:port/database

Para executar o servidor em modo de desenvolvimento nós usamos o comando:

    yarn dev
    // ou npm run dev

## Como Testar

Baixe e instale o [Insomnia](https://insomnia.rest/download/), para importar os dados e testar clique no botão:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Node%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDouglasVarollo%2Fnode-api%2Fmaster%2FInsomnia_2020-02-03.json)

<p align="center">
  <img src="./.github/backend.png" />
</p>
