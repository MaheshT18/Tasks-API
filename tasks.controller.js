const store = require("./store");

// GET /tasks
const getAllTasks = (req, res) => {
  const tasks = store.getAll();
  res.json({ success: true, count: tasks.length, data: tasks });
};

// POST /tasks
const createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || typeof title !== "string" || !title.trim()) {
    return res
      .status(400)
      .json({ success: false, error: "Field 'title' is required and must be a non-empty string." });
  }

  const task = store.create({ title: title.trim(), description });
  res.status(201).json({ success: true, data: task });
};

// DELETE /tasks/:id
const deleteTask = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ success: false, error: "Task ID must be a number." });
  }

  const deleted = store.delete(id);

  if (!deleted) {
    return res.status(404).json({ success: false, error: `Task with id ${id} not found.` });
  }

  res.json({ success: true, message: `Task ${id} deleted.` });
};

module.exports = { getAllTasks, createTask, deleteTask };
