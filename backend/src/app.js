const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("LABORATORIO 4");
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.use("/", routes);

module.exports = app;