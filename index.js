const express = require("express");
const app = express();
const port = 5008;
const todoRouter = require("./Routers/todoRouter");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("welcome to the backend part of todo");
});

app.listen(port, (req, res) => {
  console.log("server connected");
});
