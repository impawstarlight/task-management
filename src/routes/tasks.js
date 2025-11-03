const express = require("express");
const router = express.Router();

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

router.get("/tasks", (req, res) => {
  res.json(tasks);
});

router.get("/task/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({ error: "Invalid ID format" });
  }
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

module.exports = router;
