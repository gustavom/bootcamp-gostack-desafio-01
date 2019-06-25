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

server.listen(3000);
