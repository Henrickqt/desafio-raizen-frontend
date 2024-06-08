# Open Weather Frontend

Frontend desenvolvido utilizando [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3 e Google Maps API. Este projeto é uma aplicação web que fornece dashboards interativos, além de uma integração com o Google Maps para a visualização e interação com mapas. A aplicação consome uma API externa para obter dados que são exibidos no mapa e nos dashboards.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://cli.angular.io/). 

## Como executar

1. Clone o repositório:
```bash
$ git clone https://github.com/Henrickqt/desafio-raizen-frontend.git
```

2. Navegue até o diretório do projeto:
```bash
$ cd desafio-raizen-frontend
```

3. Instale as dependências:
```bash
$ npm install
```

4. Para iniciar a aplicação, execute o comando:
```bash
$ ng serve
```

A aplicação estará disponível no endereço `http://localhost:4200/`.

## API

A aplicação consome a API do [Open Weather API](https://github.com/Henrickqt/desafio-raizen-api) na porta `5001`. Esta API é quem fornece os dados para popular os dashboards. Além disso, um histórico de consultas é exibido em tela, ao qual são passíveis de serem recarregados através de um clique.
