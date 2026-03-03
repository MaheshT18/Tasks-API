const { Router } = require("express");
const { getAllTasks, createTask, deleteTask } = require("./tasks.controller")

const router = Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);

module.exports = router;
