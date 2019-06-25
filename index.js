const express = require("express");

const server = express();

// indica para o servidor usar json
server.use(express.json());

// nossa base de dados
const projects = [
  { id: 1, title: "Projeto 01", tasks: [] },
  { id: 12, title: "Projeto 12", tasks: [] },
  { id: 3, title: "Projeto 03", tasks: [] }
];

// rota de listagem de projetos
server.get("/projects", (req, res) => {
  res.json(projects);
});

// rota de criação de projetos
server.post("/projects", (req, res) => {
  const tasks = [];
  const { id, title } = req.body;

  projects.push({ id, title, tasks });

  return res.json(projects);
});

// rota de atualização do title de projetos
server.put("/projects/:id", (req, res) => {
  const passedId = req.params.id;
  const { title } = req.body;

  const getIndex = projects
    .map((elm, index) => {
      if (projects[index].id == passedId) {
        return index;
      }
      return "";
    })
    .join("");

  projects[getIndex].title = title;

  return res.json(projects);
});
// rota de criação das tasks de projetos
server.post("/projects/:id/tasks", (req, res) => {
  const passedId = req.params.id;
  const { title } = req.body;

  const getIndex = projects
    .map((elm, index) => {
      if (projects[index].id == passedId) {
        return index;
      }
      return "";
    })
    .join("");

  projects[getIndex].tasks.push(title);

  return res.json(projects);
});

// rota de remoção de projetos
server.delete("/projects/:id", (req, res) => {
  const passedId = req.params.id;
  const { title } = req.body;

  const getIndex = projects
    .map((elm, index) => {
      if (projects[index].id == passedId) {
        return index;
      }
      return "";
    })
    .join("");

  projects.splice(getIndex, 1);

  return res.json(projects);
});

// servidor deve rodar na porta 3000
server.listen(3000);
