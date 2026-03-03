# Tasks API

A production-ready REST API built with Node.js + Express for managing tasks.

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

```
src/
├── app.js                        # Entry point
├── store.js                      # In-memory data store
├── controllers/
│   └── tasks.controller.js       # Business logic
├── middleware/
│   └── error.middleware.js       # 404 + global error handler
└── routes/
    ├── health.routes.js
    └── tasks.routes.js
```

## Deployment (Linux)

```bash
# With PM2 (recommended)
npm install -g pm2
pm2 start src/app.js --name tasks-api
pm2 save && pm2 startup
```
