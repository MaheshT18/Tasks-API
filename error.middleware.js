// 404 — no route matched
const notFound = (req, res, next) => {
  res.status(404).json({ success: false, error: `Route ${req.method} ${req.originalUrl} not found.` });
};

// Global error handler (must have 4 args for Express to treat it as error middleware)
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ERROR:`, err.stack || err.message);

  const status = err.status || err.statusCode || 500;
  const message =
    process.env.NODE_ENV === "production" && status === 500
      ? "Internal server error."
      : err.message || "Internal server error.";

  res.status(status).json({ success: false, error: message });
};

module.exports = { notFound, errorHandler };
