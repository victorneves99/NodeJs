const express = require("express");

const server = express();

server.use(express.json());

//query params = ?nome=NodeJs

//Route params = /curso/2

//request Body = {nomew:"NodeJS',tipo:'Back-end'"}

const cursos = ["Node JS", "Java", "React Native", "JAVAEE"];

//middleware Global
server.use((req, res, next) => {
  console.log(`REQUISICAO CHAMADA: ${req.url}`);
  return next();
});

function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Nome do curso é obrigatorio " });
  }

  return next();
}
function checkIndex(req, res, next) {
  const curso = cursos[req.params.index];
  if (!curso) {
    return res
      .status(400)
      .json({ error: `O curso ${req.params.index} não existe` });
  }
  return next();
}

//localhost:3000/curso
server.get("/curso/:id", (req, res) => {
  const id = req.params.id;

  return res.send({ curso: `ID : ${id}` });
});
server.get("/curso/", (req, res) => {
  const nome = req.query.nome;

  return res.send({ curso: `Query  : ${nome}` });
});
server.get("/cursos/:index", checkIndex, (req, res) => {
  const { index } = req.params;

  return res.send(cursos[index]);
});
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});
server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body;

  cursos.push(name);

  return res.json(cursos);
});
server.put("/cursos/:index", checkIndex, checkCurso, (req, res) => {
  const { index } = req.params;

  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});
server.delete("/cursos/:index", checkIndex, (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json({ message: "Curso deletado com sucesso" });
});

server.listen(3000);
