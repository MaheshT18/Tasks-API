require("dotenv").config();

const express = require("express");
const tasksRouter = require("./tasks.routes");
const healthRouter = require("./health.routes");
const { notFound, errorHandler } = require("./error.middleware");

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple request logger
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use("/health", healthRouter);
app.use("/tasks", tasksRouter);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start
app.listen(PORT, () => {
  console.log(
    `✅ Tasks API running on port ${PORT} (${process.env.NODE_ENV || "development"})`
  );
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received — shutting down gracefully.");
  process.exit(0);
});

module.exports = app;