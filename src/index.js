const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Task Management API is running!");
});

const tasks = [
  {
    id: 1,
    title: "Wake up",
    completed: true,
    priority: "high",
    createdAt: new Date("November 1, 2025 00:00:00"),
  },
  {
    id: 2,
    title: "Have breakfast",
    completed: false,
    priority: "medium",
    createdAt: new Date("2025-11-01T08:00:00"),
  },
  {
    id: 3,
    title: "Study cybersecurity",
    completed: false,
    priority: "high",
    createdAt: new Date("2025-11-01T08:00:00Z"),
  },
  {
    id: 4,
    title: "Take a break",
    completed: false,
    priority: "low",
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Go to bed",
    completed: false,
    priority: "medium",
    createdAt: new Date(),
  },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
