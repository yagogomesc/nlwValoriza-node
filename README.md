<h1 align="center">Valoriza</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

  <img src="https://img.shields.io/static/v1?label=NLW&message=Together&color=8257E5&labelColor=000000" alt="NLW Together" />
</p>

<p align="center">
  <img alt="Preview" src="./.github/preview.png">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## 💻 Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## 📘 Regras

- Cadastro de usuário

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [ x ] Não é permitido cadastrar tag sem nome

  [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ x ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ x ] Não é permitido um usuário cadastrar um elogio para si

  [ x ] Não é permitido cadastrar elogios para usuários inválidos

  [ x ] O usuário precisa estar autenticado na aplicação

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`

## 🎯 Milhas Extra

[ ] Criar um serviço de email para informar ao usuario q ele recebeu um elogio

[ ] Colocar em produção

[ ] Criar front-end

[ ] Aplicar S.O.L.I.D.

[ ] Criar handler para mensagens de erro

[ ] Utilizar banco de dados diferente do Sqlite

[ ] Criar a função de busca das informações

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💜 &nbsp;by Rocketseat 👋🏻 &nbsp;[Participe da nossa comunidade!](https://discord.gg/gKUVrzrPrU)
