const express = require("express");

const server = express();

server.use(express.json());

//query params = ?nome=NodeJs

//Route params = /curso/2

//request Body = {nomew:"NodeJS',tipo:'Back-end'"}

const cursos = ["Node JS", "Java", "React Native", "JAVAEE"];

//localhost:3000/curso
server.get("/curso/:id", (req, res) => {
  const id = req.params.id;

  return res.send({ curso: `ID : ${id}` });
});
server.get("/curso/", (req, res) => {
  const nome = req.query.nome;

  return res.send({ curso: `Query  : ${nome}` });
});
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.send(cursos[index]);
});
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});
server.post("/cursos", (req, res) => {
  const { name } = req.body;

  cursos.push(name);

  return res.json(cursos);
});
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;

  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json({ message: "Curso deletado com sucesso" });
});

server.listen(3000);
