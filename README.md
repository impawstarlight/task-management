# Task Management API

A minimal Express.js API for basic task management operations.

## Setup

```bash
git clone https://github.com/impawstarlight/task-management.git
cd task-management
npm install
npm start
```

Then visit `http://localhost:3000/`.

## API Endpoints

| Method | Endpoint    | Description        |
| ------ | ----------- | ------------------ |
| GET    | `/`         | API status message |
| GET    | `/tasks`    | List all tasks     |
| GET    | `/task/:id` | Get a task by ID   |
| GET    | `/health`   | Health check       |
