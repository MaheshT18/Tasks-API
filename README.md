# Tasks API

A production-ready REST API built with Node.js + Express for managing tasks.
specially built to learn about how to deploy backend project on ec2

## Setup

```bash
npm install
cp .env.example .env   # edit as needed
npm start
```

## Environment Variables

| Variable   | Default       | Description              |
|------------|---------------|--------------------------|
| PORT       | 3000          | Port the server listens on |
| NODE_ENV   | development   | Environment name         |

## Endpoints

### Health Check
| Method | Path      | Description        |
|--------|-----------|--------------------|
| GET    | /health   | Server health info |

### Tasks
| Method | Path         | Description        |
|--------|--------------|--------------------|
| GET    | /tasks       | List all tasks     |
| POST   | /tasks       | Create a task      |
| DELETE | /tasks/:id   | Delete a task      |

### POST /tasks — Request body
```json
{
  "title": "Buy groceries",
  "description": "Optional description"
}
```

## Project Structure
## Project Structure

```
.
├── app.js                  # Entry point
├── store.js                # In-memory data store
├── tasks.controller.js     # Business logic
├── tasks.routes.js
├── health.routes.js
├── error.middleware.js     # 404 + global error handler
├── package.json
└── .env.example
```

