const express = require("express");

const server = express();

//localhost:3000/curso
server.get("/curso", () => {
  console.log("Acessou rota");
});

server.listen(3000);
