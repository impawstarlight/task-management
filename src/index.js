const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Task Management API is running!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const tasks = [
  { id: 1, title: "Wake up", completed: true },
  { id: 2, title: "Go to bed", completed: false },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});
