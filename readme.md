# Desafio 01

## Bootcamp GoStack - Rocketseat

---

Desafio proposto para o módulo de introdução ao nodejs.

Neste desafio criei uma api para listagem, criação, edição e remoção.

Instalação

> `npm install`

Rodando o projeto

> `npm run dev`

O projeto vai rodar em

> `http://localhost:3000`

---

## Rotas

Listagem

> usar o método "GET"
>
> `http://localhost:3000/projects`

Criação de projetos:

> usar o método "POST"
>
> `http://localhost:3000/projects`
>
> Objeto de exemplo:
>
> `{"id": "8","title": "Projeto 8"}`

Atualização de um projeto:

> usar o método "PUT"
>
> `http://localhost:3000/projects/:id`
>
> Objeto de exemplo:
>
> `{"title": "Novo title"}`

Editando as tasks de um projeto:

> usar o método "POST"
>
> `http://localhost:3000/projects/:id/tasks`
>
> Objeto de exemplo:
>
> `{"title": "task name"}`

Remoção de um projeto:

> usar o método "DELETE"
>
> `http://localhost:3000/projects/:id`
