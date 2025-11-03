const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Task Management API is running!");
});

const taskRoutes = require("./routes/tasks.js");
app.use(taskRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
