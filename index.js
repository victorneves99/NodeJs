const express = require("express");

const server = express();

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

server.listen(3000);
