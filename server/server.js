const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());

server.use((req, res) => {
  console.log(req.body.msg);
  res.status(200).send("<h1>Hello from Express</h1>");
});

server.listen(8081, () => {
  console.log("Server is running...");
});
