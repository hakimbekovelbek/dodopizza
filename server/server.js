const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT || 8081;

server.use((req, res) => {
  console.log(req.body.msg);
  res.status(200).send("<h1>Hello from Expresss</h1>");
});

server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
