const express = require("express");

const server = express();

server.use(express.json());

const projects = [
  { id: 1, title: "Projeto 01", tasks: [] },
  { id: 12, title: "Projeto 12", tasks: [] },
  { id: 3, title: "Projeto 03", tasks: [] }
];

server.get("/projects", (req, res) => {
  res.json(projects);
});

server.post("/projects", (req, res) => {
  const tasks = [];
  const { id, title } = req.body;

  projects.push({ id, title, tasks });

  return res.json(projects);
});

server.put("/projects/:id", (req, res) => {
  const passedId = req.params.id;
  const { title } = req.body;
  // console.log(passedId);
  // console.log(title);
  // console.log(projects[0].id);
  const getIndex = projects.map((elm, index) => {
    if (projects[index].id == passedId) {
      return index;
    }
    return "";
    //return res.status(400).send({ error: "Id não encontrado" });
  });
  console.log(getIndex);
  projects.id = projects.name;

  return res.json(projects);
});

server.listen(3000);
