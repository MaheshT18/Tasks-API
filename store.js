// In-memory store — swap with a DB later without touching controllers
const tasks = new Map();
let nextId = 1;

module.exports = {
  getAll: () => Array.from(tasks.values()),

  getById: (id) => tasks.get(id) ?? null,

  create: ({ title, description = "" }) => {
    const task = {
      id: nextId++,
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    tasks.set(task.id, task);
    return task;
  },

  delete: (id) => {
    if (!tasks.has(id)) return false;
    tasks.delete(id);
    return true;
  },
};
